---
type: digest
aliases:
  - SGD + Momentum
source_link: "[[D-DL4CV-Lec04b-Gradient_Descent]]"
tags: []
---
# SGD + Momentum
## Strategy

Add momentum to original SGD which "memorize" the past steps the algorithm get
Use "velocity" term to record past gradients
Use "friction" $\rho$ term to reduce influence of ancient gradient to the current step

## Mathematical Expression
$$
\begin{align*}
v_{t+1} &= \rho v_{t} + \nabla f(x_{t}) \\
x_{t+1} &= x_{t} - \alpha v_{t+1}
\end{align*}
$$
## Implementation

```python
# SGD + Momentum
v = 0
for t in range(num_steps):
	dw = compute_gradient(w)
	v = rho * v + dw
	w -= learning_rate * v
```

> [!info] There are different way to implement SGD+Momentum, but they'll give the same sequence of $x_{t}$

## Resolved Problem

1. When reach shallow dimensions, the "velocity" makes it remain reasonable speed
2. When enter steep landscape, overshooting create negative momentum to the speed, making next step smaller, which resolve oscillating problem
3. When reaching saddle point or local minimum, remaining "velocity" allow us to escape it

## New Problem

SGD+Momentum determine the direction to go ($v_{t+1}=\rho v_{t}+\nabla f(x_{t})$) by
1. The past steps $v_{t}$
2. The place you currently are $x_{t}$
However, in our intuition, we should consider $x_{t+1}$ instead of $x_{t}$ when computing $v_{t+1}$
[[D-DL4CV-Lec04bc-Nesterov_Momentum|Nesterov Momentum]] we'll introduce later will solve this problem