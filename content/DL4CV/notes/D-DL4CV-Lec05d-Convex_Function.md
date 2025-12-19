---
type: digest
aliases:
  - Convex Function
source_link: "[[D-DL4CV-Lec05-Neural_Networks]]"
tags: []
---
# Convex Function
## Introduction

**Intuition**:
A convex function is a bowl shape function. When we connect any two points on a convex function, for any point $(x,y,z)$ on the line, we can find $(x,y,z')$ on the convex function where $z'\leq z$

We can extend this intuition to higher dimensions

**Formal Definition**:
A function $f:X\in \mathbb{R}^{N}\to \mathbb{R}$ is convex if for all $x_{1},x_{2}\in X$, $t\in[0,1]$,
$$
f(tx_{1}+(1-t)x_{2}) \leq tf(x_{1}) + (1-t)f(x_{2})
$$

## Why is it important

If the loss function is convex, then we can guarantee that after optimization, the minimum we achieve must be the global minimum of the function