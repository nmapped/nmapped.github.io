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
#include <pmmintrin.h>
#include <stdio.h>
#include <immintrin.h>
#include <xmmintrin.h>

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