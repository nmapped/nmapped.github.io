---
created: 2025-03-16
confidence level: 
review count: 0
---
## Intro
It's an optimization algorithm used to minimize functions. It's used in deep learning, linear regression, and a lot of other machine learning models, even functions unrelated to machine learning.

## More Context
Gradient descent generally consists of the following steps:
- Start with random parameter values
- Evaluate the gradient of function  (loss function in ML) w.r.t. each parameter.
- Scale gradient by a small positive number (learning rate in ML).
- Subtract resulting value from original parameter value and reassign to parameter
- Repeat until subsequent parameter changes are minimal, function is below a certain threshold or maximum number of iterations is reached.

 Example Loss Function. $X_i$ represents the $i^{th}$ input feature, and $\theta$ represents the parameters of the model.
 $$
 J(\theta) = \frac{1}{2m}\sum_{i=1}^{m}(f(X_i, \theta) - y_i)^2
 $$
 
Gradient Descent Update Function.
 $$
 \theta_{new} = \theta_{old} - \alpha \frac{\partial J(\theta_{old})}{\partial \theta_{old}}
 $$

## Further  Reading
- [[neural-networks]]
- [[Partial Derivatives in Gradient Descent]]