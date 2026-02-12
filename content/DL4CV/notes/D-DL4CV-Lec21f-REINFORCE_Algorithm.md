---
type: digest
aliases: REINFORCE Algorithm
source_link: "[[D-DL4CV-Lec21-Reinforcement_Learning]]"
tags:
---
# Simple Conclusion
## Statement

Let $x=(s_{0},a_{0},s_{1},a_{1},\dots)$ be the sequence of states and actions we get when following policy $\pi_{\theta}$ which is sampled from $x\sim p_{\theta}(x)$

Then
$$
J(\theta) = \mathbb{E}_{x\sim p_{\theta}}[f(x)]
$$
and we can calculate the gradient by
$$
\frac{\partial J}{\partial\theta} = \frac{\partial}{\partial\theta}\mathbb{E}_{x\sim p_{\theta}}\left[f(x)\right] = \mathbb{E}_{x\sim p_{\theta}}\left[ f(x)\sum_{t\geq 0} \frac{\partial}{\partial\theta}\log \pi_{\theta}(a_{t}|s_{t}) \right] 
$$

## Intuition

When $f(x)$ is high, increase the probability of the action we took, and vice versa

## Steps

- Initial random weights $\theta$
- Repeat:
	- Collect trajectories $x$ and reward $f(x)$ using policy $\pi_{\theta}$
	- Compute $\partial J / \partial\theta$
	- Gradient ascent on $\theta$

---
# Derivation
## Objective

We want to find expression for $\partial J /\partial\theta$ which is able to be computed effectively

## Derivation
### Revise Original Expression
$$
\begin{align}
\frac{\partial J}{\partial\theta} &= \frac{\partial}{\partial\theta}\mathbb{E}_{x\sim p_{\theta}}[f(x)] = \frac{\partial}{\partial\theta}\int_{X}p_{\theta}(x)f(x)dx=\int_{X}f(x) \frac{\partial}{\partial\theta}p_{\theta}(x)dx \\
&= \int_{X}f(x)p_{\theta}(x) \frac{\partial}{\partial\theta}\log p_{\theta}(x)dx \\
&= \mathbb{E}_{x\sim p_{\theta}}\left[ f(x) \frac{\partial}{\partial\theta}\log p_{\theta}(x) \right]
\end{align}
$$
The second to last "=" comes from:
$$
\frac{\partial}{\partial\theta}\log p_{\theta}(x)= \frac{1}{p_\theta(x)} \implies \frac{\partial}{\partial\theta}p_{\theta}(x) = p_{\theta}(x) \frac{\partial}{\partial\theta}\log p_{\theta}(x)
$$

### Compute $\frac{\partial}{\partial\theta}\log p_{\theta}(x)$
$$
\begin{align}
&p_{\theta}(x) = \prod_{t\geq 0}P(s_{t+1}|s_{t},a_{t})\pi_{\theta}(a_{t}|s_{t}) \\
\implies &\log p_{\theta}(x) = \sum_{t\geq 0}\left( \log P(s_{t+1}|s_{t},a_{t}) + \log \pi_{\theta}(a_{t}|s_{t}) \right) 
\end{align}
$$
$P(s_{t+1}|s_{t},a_{t})$ is impossible to compute because transition is decided by the environment, which we can't backpropagate

However, surprisingly, we'll eliminate this term when computing gradient
$$
\frac{\partial}{\partial\theta}\log p_{\theta}(x) = \sum_{t\geq 0} \frac{\partial}{\partial\theta}\log \pi_{\theta}(a_{t}|s_{t})
$$

## Conclusion

Putting the two derivations together we have:
$$
\frac{\partial J}{\partial\theta} = \frac{\partial}{\partial\theta}\mathbb{E}_{x\sim p_{\theta}}\left[f(x)\right] = \mathbb{E}_{x\sim p_{\theta}}\left[ f(x)\sum_{t\geq 0} \frac{\partial}{\partial\theta}\log \pi_{\theta}(a_{t}|s_{t}) \right] 
$$