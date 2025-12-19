---
type: digest
aliases:
  - Nesterov Momentum
source_link: "[[D-DL4CV-Lec04b-Gradient_Descent]]"
tags: []
---
# Nesterov Momentum
## Strategy

Instead of deciding where to go only based on current situation (`compute_gradient(w)`), this approach choose to "look ahead" first then decide what momentum I want to impose on the current momentum, i.e., $\nabla f(x_{t}+\rho v_{t})$

## Mathematical Expression
$$
\begin{align*}
v_{t+1} &= \rho v_{t} - \alpha \nabla f(x_{t}+\rho v_{t}) \\
x_{t+1} &= x_{t} + v_{t+1}
\end{align*}
$$
However, we want to update in terms of $x_{t}$ and $\nabla f(x_{t})$, thus by change of variable ($\tilde{x}_{t}=x_{t}+\rho v_{t}$) and some rearrangement, we have
$$
\begin{align*}
v_{t+1} &= \rho v_{t} - \alpha \nabla f(\tilde{x}_{t}) \\
x_{t+1} &= \tilde{x}_{t} - \rho v_{t} + (1+\rho)v_{t+1} \\
&= \tilde{x}_{t} + v_{t+1} + \rho(v_{t+1}-v_{t})
\end{align*}
$$

## Implementation

```python
v = 0
for t in range(num_steps):
	dw = compute_gradient(w)
	old_v = v
	v = rho * v - learning_rate * dw
	w -= rho * old_v - (1 + rho) * v
```
