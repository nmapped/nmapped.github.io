---
created: 2025-03-16
confidence level: low
review count: 0
---
## Definition
Scalar multiplication is simply the multiplication of a vector by a scalar (number). Formally:

$$
\mathbf v = c \cdot \mathbf u \; where \; \mathbf u \in \mathbb R^n \; and \; c \in \mathbb R
$$

## More Context
It satisfies the distributive property:

$$
c(\mathbf u + \mathbf v) = c \mathbf u + c \mathbf v
$$

It satisfies the associative property:

$$
(cd) \mathbf v = c (d \mathbf v)\; where\; c,d \in R
$$

It satisfies the Identity property:

$$
\begin{align*}
1 \mathbf v &= \mathbf v\\
0 \mathbf v &= 0
\end{align*}
$$

It can also be represented graphically and using matrices.
### Graphical Representation

```tikz
\begin{document}
\begin{tikzpicture}[x=4mm,y=4mm]
  \draw[thin,gray!40] (-4,-4) grid[step=4mm] (4,4);
  \draw[<->] (-4,0)--(4,0) node[right]{$x$};
  \draw[<->] (0,-4)--(0,4) node[above]{$y$};
  \draw[line width=1pt,-stealth](0,0)--(1,1) node[anchor=south east]{$\mathbf{u}$};
  \draw[line width=1pt,-stealth](0,0)--(3,3) node[anchor=east]{$\mathbf{v}$};
\end{tikzpicture}
\end{document}
```

$$\mathbf v = 3\mathbf u$$

### Matrix Representation

$$
\mathbf v = 3 \cdot \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \cdot 1 \\ 3 \cdot 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 3 \end{bmatrix}
$$

## Further  Reading
- [[vectors]]
- [[vector-addition]]