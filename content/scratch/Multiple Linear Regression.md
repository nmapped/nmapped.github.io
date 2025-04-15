---
created: 2025-04-14
confidence level: low
review count: 0
---
## Intro
With regular linear regression there is a single input, $x$ used to predict a single output, $y$. With _multiple linear regression_, multiple inputs, $\vec x$ are used to predict $y$. Here are some additional notations:
+ $x_j$: $j^{th}$ feature
+ $n$: number of features
+ $\vec x^{(i)}$: features of $i^{th}$ training example
+ $x_j^{(i)}$: value of feature $j$ in $i^{th}$ training example

Model definition for multiple linear regression:

$$f_{w,b}(x) = w_1 \cdot x_1 + w_2 \cdot x_2 + \cdots + w_n \cdot x_n + b$$
$$or$$
$$f_{w,b}(\vec x)=\vec w \cdot \vec x + b$$
## Vectorization
Writing vectorized code allows you to take advantage of modern hardware to perform operations in parallel. It makes use of SIMD (Simple Instruction Multiple Data) which is a parallel processing technique that allows you to perform a single instruction on multiple data points simultaneously. Vectorized code is faster and more efficient.

## Further Reading
+ [[Vectorized Dot Product in C]]