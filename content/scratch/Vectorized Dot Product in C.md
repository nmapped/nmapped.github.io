---
created: 2025-04-05
confidence level: low
review count: 0
---
Creating a microkernel (or $\mu$-kernel) to compute the dot product efficiently using SIMD (Simple Instruction, Multiple Data).

In SIMD programming, a microkernel is a small, highly optimized compute kernel that handles a core computational task (dot product, matrix multiply, or a small tile of a larger matrix operation). It's designed to run in tight loops, maximize use of CPU registers, SIMD instructions, and caches, be reused/composed into bigger kernels. In this context it's just a small function/routine that performs a specific computation on a portion of data, usually in a data-parallel way. It's often written to be run many times, one per element, or block of elements in a dataset.

**tl;dr**: A microkernel is a small, focused, performance-critical function/routine that does the same operation on a bunch of data usually in parallel.

A compute kernel is basically any function that performs a specific computation, usually parallelizable. This can be big or small e.g. a block of GEMM, or a full dot product.

A microkernel is a small tightly optimized compute kernel, typically at the innermost loop level, tuned for a specific architecture. It's a subset of compute kernels.

Another way to think of it is that a compute kernel is the general unit of computation while a microkernel is a special case; it's the core, ultra-optimized tile inside that unit.

SSE, AVX and AVX-512 are examples of SIMD instruction sets, extensions to x86 CPUs that allow multiple data elements to be processed in parallel using vector registers:
+ SSE and NEON (ARM) 128-bit width, 4 floats at a time
+ AVX has 256-bit width, 8 floats at a time
+ AVX-512 has 512-bit width, 16 floats at a time


Vectorized Addition in C using SIMD:

```c
#include <stdio.h>
#include <immintrin.c>

void __simd_add(float *a, float *b, float *result) {

	/* load 8 floats from each array into the avx registers */
	__m256 vec_a = _mm256_loadu_ps(a);
	__m256 vec_b = _mm256_loadu_ps(b);

	/* add the vectors */
	__m256 vec_c = _mm256_add_ps(vec_a, vec_b);

	/* store the result in the result array */
	_m256_storeu_ps(result, vec_c);
}
```

Vectorized Dot Product in C using SIMD:

```c
#include <stdio.h>
#include <immintrin.h>

float __simd_dot(const float *a, const float *b) {

	/* load 8 floats from the arrays */
	__m256 vec_a = _mm256_loadu_ps(a);
	__m256 vec_b = _mm256_loadu_ps(b);

	/* multiply the vectors */
	__m256 vec_mul = _mm256_mul_ps(vec_a, vec_b);

	/* get lower 128 bits (first 4 elements)*/
	__m128 low = _mm256_extractf128_ps(vec_mul, 0);
	/* get upper 128 bits (last 4 elements) */
	__m128 high = _mm256_extractf128_ps(vec_mul, 1);

	/* add low and high -> [a, b, c, d]*/
	__m128 sum = _mm_add_ps(low, high);

	/* horizontally add elements of sum -> [a+b, c+d]*/
	sum = _mm_hadd_ps(sum, sum);

	/* get the final product -> [a+b + c+d]*/
	sum = _mm_hadd_ps(sum, sum);

	/* extract first element of __m128 register which holds the result */
	return _mm_cvtss_f32(sum);
}
```

8x8 microkernel in C using SIMD:
```c
#include <stdio.h>
#include <immintrin.h>

inline float __horizontal_sum(__m256 vec) {
	/* attempt to perform horizontal sums optimally */
	__m128 low = _mm256_extractf128_ps(vec,0); // lower 128 bits
	__m128 high = _mm256_extractf128_ps(vec,1); // upper 128 bits
	__m128 sum = _mm_add_ps(low, high); // add both halves
	sum = _mm_hadd_ps(sum, sum); // horizontal add step 1: [a+b, c+d]
	sum = _mm_hadd_ps(sum, sum); // horizontal add step 2: [a+b + c+d]
	return _mm_cvtss_f32(sum);
}

/* microkernel for 8x8 GEMM: C = A * B + C 
 A, B and C are row-major 8x8 float matrices
 lda, ldb and ldc are leading dimensions for A, B and C */
void __8x8_microkernel(float* A, float* B, float* C, int lda, int ldb, int ldc) {
	__m256 A_rows[8];
	__m256 B_cols[8];

	/* load all the rows of A */
	for (int i = 0; i < 8; ++i) {
		A_rows[i] = _mm256_loadu_ps(&A[i * lda]);
		
		/* log the values of the rows of A */
		printf("loaded row %d of A: ", i);
		for (int j = 0; j < 8; ++j) {
			printf("%0.2f ", A[i * lda + j]);
		}
		printf("\n");
	}

	/* load all columns of B */
	for (int j = 0; j < 8; ++j) {
		float B_col[8];
		for (int k = 0; k < 8; ++k) {
			/* since B is row-major, column elements strided by ldb floats */
			B_col[k] = B[k * ldb + j];
		}
		/* load full column into register*/
		B_cols[j] = _mm256_loadu_ps(B_col);

		/* log the values of the columns of B */
		printf("loaded column %d of B: ", j);
		for (int k = 0; k < 8; ++k) {
			printf("%0.2f ", B_col[k]);
		}
		printf("\n");
	}

	/* compute and accumulate dot products */
	for (int i = 0; i < 8; ++i) {
		/* loop unrolling is cool */
		for (int j = 0; j < 8; j += 4) {
			/* multiply row i of A by columns j, j+1, j+2 and j+3 or B*/
			__m256 prod0 = _mm256_mul_ps(A_rows[i], B_cols[j]);
			__m256 prod1 = _mm256_mul_ps(A_rows[i], B_cols[j + 1]);
			__m256 prod2 = _mm256_mul_ps(A_rows[i], B_cols[j + 2]);
			__m256 prod3 = _mm256_mul_ps(A_rows[i], B_cols[j + 3]);

			/* compute sums for dot product using helper function */
			float dot0 = __horizontal_sum(prod0);
			float dot1 = __horizontal_sum(prod1);
			float dot2 = __horizontal_sum(prod2);
			float dot3 = __horizontal_sum(prod3);

			/* log the elements of C matrix */
			printf("C[%d][%d]: %0.2f ", i, j, dot0);
			printf("C[%d][%d]: %0.2f ", i, j+1, dot1);
			printf("C[%d][%d]: %0.2f ", i, j+2, dot2);
			printf("C[%d][%d]: %0.2f ", i, j+3, dot3);
			if ((j+4) % 8 == 0) printf("\n");
			
			/* store results back to C matrix with proper stride */
			C[i * ldc + j] += dot0;
			C[i * ldc + j + 1] += dot1;
			C[i * ldc + j + 2] += dot2;
			C[i * ldc + j + 3] += dot3;
		}
	}
}
```