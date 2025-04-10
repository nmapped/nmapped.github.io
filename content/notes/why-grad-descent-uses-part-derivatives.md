---
created: 2025-03-16
confidence level: low
review count: 0
---
## Explanation
Let's say we have a model with parameters $w_1,\; w_2,\; ...,\; w_n$, and a cost function $J(w,b)$ that we want to minimize. For example, in linear regression:

$$
J(w,b) = \frac{1}{2m}\sum_{i=0}^{m}(h(x_i) - y_i)^2
$$
where
- $h(x) = w^Tx + b$ is the model's prediction.
- $y$ is the actual output.
- $m$ is the number of training examples.

The gradient of $J(w,b)$ is the vector of its partial derivatives:

$$
\nabla J = [\frac{\partial J}{\partial w_1}, \frac{\partial J}{\partial w_2}, \cdots, \frac{\partial J}{\partial w_n}]
$$

Each partial derivative $\frac{\partial J}{\partial w_i}$ tells us how and by how much the loss function responds to changes in $w_i$.
- If $\frac{\partial J}{\partial w_i} > 0$, increasing $w_i$ increases the cost, so $w_i$ should be reduced.
- If $\frac{\partial J}{\partial w_i} < 0$, increasing $w_i$ reduces the cost, so $w_i$ should be increased.

The partial derivatives are components of the gradient vector. The gradient $\nabla J$ points in the direction of steepest descent. The rate of change of $J$ in any direction is given by the dot product:

$$
\nabla J \cdot \hat d = |\nabla J| \cos \theta
$$
where $\theta$ is the angle between $\nabla J$ and $\hat d$. If $\hat d$ is aligned with $\nabla J$, then $\cos \theta = 1$, meaning we move in the direction of fastest descent. Moving in the opposite direction minimizes $J$.

If we have two weights $w_1$ and $w_2$ with our cost function $J$, and the bias $b$, we need to go in the opposite direction of  $\nabla J$ in order to minimize the function. We can express the function as a 4-dimensional graph with the axes being $w_1, w_2, b, J$. Each weight affects $J$ differently, which is why we need partial derivatives to measure their individual contributions.

All parameters are updated simultaneously to ensure a consistent descent direction. Also, to reiterate, the gradient shows us the direction of steepest descent so moving in the opposite direction is what we want, which is why we subtract the gradient from the current value. We can scale the movement using the learning rate $\alpha$.
## Further  Reading
- [[gradient-descent]]
- [[vectors]]
- [[neural-networks]]