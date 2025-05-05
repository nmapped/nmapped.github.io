# Introduction
The term _machine learning algorithm_ can refer to two different concepts. It could refer to a system that makes predictions based on input data. This is called a _predictor_. It could also refer to a system that optimizes some internal parameters of the predictor to improve it's performance on future unseen input data. This adaptation is called _training_ a system.

Not all data is numerical but it useful to think about data as numbers. In machine learning, data is usually represented as vectors. Vectors can be understood in three ways:
- As an array of numbers (a computer science view).
- As an arrow with a direction and a magnitude (a physics view).
- As an object that obeys addition and scaling (a mathematics view).

A _model_ can be thought of as a system for generating data that is similar to the real-world dataset. The goal is to mimic the relevant aspects of the real-world process for generating the data (even though this process is unknown) and extract hidden patterns in order to make predictions about the real world without performing experiments.

_Training_ in the context of machine learning involves using the available data to optimize some parameters of a model with respect to a utility function that evaluates how well the model predicts the training data. _Learning_ is the model undergoing this process. In reality, a model doing well on training data doesn't necessarily mean that it would do well on data that it has not seen. It could just be the case that we have found a good way to memorize the data.

**Four Pillars of Machine Learning**:
- Regression (Vector Calculus, Linear Algebra)
- Dimensionality Reduction (Probability & Distributions, Analytic Geometry)
- Density Estimation (Probability & Distributions, Analytic Geometry)
- Classification (Optimization, Matrix Decomposition)

## Linear Algebra
As mentioned earlier, the mathematical view of a vector allows it to be anything so long as it obeys the addition and scaling rules. Polynomials, audio signals, geometric vectors, and elements of $\mathbb R^n$ can be vectors. Linear Algebra focuses on the similarities between these vector concepts.