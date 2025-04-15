---
created: 2025-03-16
confidence level: low
review count: 0
---
## Definition
Vector addition as the name suggests, is the addition of vectors. Formally:

$$
\mathbf v = \mathbf u + \mathbf w \; where \; \mathbf v, \mathbf u, \mathbf w \in \mathbb R^n
$$

## More Context
It is commutative and associative:

$$
\begin{align*}
\mathbf u + \mathbf v &= \mathbf v + \mathbf u \\
(\mathbf v + \mathbf u) + \mathbf w &= \mathbf u + (\mathbf v + \mathbf w)
\end{align*}
$$

It can also be represented graphically or using matrices.
### Graphical Vector Addition
```tikz
\begin{document}
\begin{tikzpicture}[x=4mm,y=4mm]
  \draw[thin,gray!40] (-4,-4) grid[step=4mm] (4,4);
  \draw[<->] (-4, 0)--(4,0) node[right]{$x$};
  \draw[<->] (0, -4)--(0,4) node[above]{$y$};
  \draw[line width=1pt,-stealth](0,0)--(2,1) node[anchor=west]{$\mathbf u$};
  \draw[line width=1pt,-stealth](0,0)--(1,3) node[anchor=east]{$\mathbf w$};
  \draw[line width=1pt,-stealth](0,0)--(3,4) node[anchor=east]{$\mathbf v$};
  \draw[line width=1pt,opacity=0.2](2,1)--(3,4);
  \draw[line width=1pt,opacity=0.2](1,3)--(3,4);
\end{tikzpicture}
\end{document}
```

```tikz
\begin{document}
\begin{tikzpicture}[x=4mm,y=4mm]
  \draw[thin,gray!40] (-4,-4) grid[step=4mm] (4,4);
  \draw[<->] (-4, 0)--(4,0) node[right]{$x$};
  \draw[<->] (0, -4)--(0,4) node[above]{$y$};
  \draw[line width=1pt,-stealth](0,0)--(2,1) node[near start,anchor=west]{$\mathbf u$};
  \draw[line width=1pt,-stealth](2,1)--(3,4) node[midway,below,anchor=west]{$\mathbf w$};
  \draw[line width=1pt,-stealth](0,0)--(3,4) node[midway,below,anchor=east]{$\mathbf v$};
\end{tikzpicture}
\end{document}
```

$\mathbf v$ is the sum of $\mathbf u$ and $\mathbf w$. The general idea is that $\mathbf v$ should move the straight line distance of $\mathbf u$ and $\mathbf w$ as well as their net direction.
### Matrix Representation

$$
\mathbf v  = \begin{bmatrix} 2 \\ 1 \end{bmatrix} + \begin{bmatrix} 1 \\ 3 \end{bmatrix} = \begin{bmatrix} 2 + 1 \\ 1 + 3 \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}
$$

## Further Reading
- [[vectors]]
- [[scalar-multiplication]]