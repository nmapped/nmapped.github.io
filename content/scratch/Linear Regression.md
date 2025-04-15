## Intro
A _linear regression_ model can be described using this function:

$$
f_{w,b}(x) = w \cdot x + b
$$
$w$ and $b$ are model parameters.

$w$ is a coefficient assigned to each input feature; it determines the influence of each feature on the predicted output. $b$ is a constant term added to the model's output. It allows the model to better fit the data by moving the regression line up or down.

Linear regression with one input variable is called _univariate_ or simple linear regression (single feature $x$). For example, when trying to predict house prices based on size, it's still univariate linear regression because even though there is a list of sizes and prices i.e $(x^{(1)},y^{(1)}), (x^{(2)},y^{(2)},...,(x^{(n)},y^{(n)})$, only one feature (size) is being used to determine the price. Each observation consists of a single size value and its corresponding price, and the model learns the relationship between these two. If each observation consisted of a size value _and_  something like distance to city center, then the regression would be multiple linear regression.

Some helpful notations include:
+ $x$: input feature
+ $y$: target output
+ $(x^{(i)}, y^{(i)})$: $i^{th}$ training example
+ $m$: number of training examples
+ $\hat y$: output prediction

## Cost Function
This function tells us how well the model is doing. There are different functions used for this purpose but for linear regression the most common is the _Mean Squared Error_ (MSE) function. This cost function can be expressed as:
$$
J(w,b) = \frac{1}{2m}\sum_{i=1}^m(f_{w,b}(x^{(i)}) - y^{(i)})^2
$$
For simplicity's sake:
$$
J(w,b) = \frac{1}{2m}\sum_{i=1}^m(\hat y^{(i)} - y^{(i)} )^2
$$
This function represents how much the prediction deviates from the correct value. The goal is to minimize it:
$$
\underset{w,b}{minimize} \; J(w,b)
$$
An algorithm that allows us to automatically locate the minimum value of $J(w,b)$ is called _gradient descent_.

## Gradient Descent
Gradient descent is a method used to minimize functions in general, not just MSE.
Outline:
- Start with some $w,b$
- Keep changing $w,b$ to reduce $J(w,b)$
- Until we settle at or near a minimum

Mathematically:
$$ w = w - \alpha \frac{\partial}{\partial w}J(w,b) $$
$$ b = b - \alpha \frac{\partial}{\partial b}J(w,b) $$
for each iteration of gradient descent.
- $\alpha$ is the learning rate. it determines how big a step gradient descent takes in each iteration.
- $w$ and $b$ are updated simultaneously.

Using just one parameter $w$ (for the sake of simplicity), gradient descent would look like this:

If the slope of the tangent to $J(w)$ at the current value of $w$ i.e the partial derivative is positive, then it means 
$$w = w - \alpha \cdot (positive \; number)$$
which would lead to a decrease in the value of $w$. And if the slope at the value of $w$ is negative, then it means
$$w = w - \alpha \cdot (negative \; number)$$
which would lead to an increase in the value of $w$. When a minimum is reached, the slope of the tangent to that point is 0 which means:
$$w = w - \alpha \cdot 0$$
This explains why gradient descent can reach a local minimum even with a fixed learning rate. With each iteration, the derivative becomes smaller in magnitude which means each step gets smaller and smaller. Doing gradient descent this way where each step of gradient descent uses all the training examples, is called "Batch" gradient descent.