---
type: digest
aliases: Value Iteration Convergence
source_link: "[[D-DL4CV-Lec21-Reinforcement_Learning]]"
tags:
---
# Value Iteration Convergence

## The Core Insight: Growing Optimality Horizon

Each $Q_{i}$ is optimal for exactly $i$ steps, then reverts to the initial random policy $Q_{0}$

### What Each Q_i Represents

- **$Q_{0}$ :** Random actions at every step
- **$Q_{1}$ :** Optimal for 1 step, then random
- **$Q_{2}$ :** Optimal for 2 steps, then random
- **$Q_{3}$ :** Optimal for $i$ steps, then random

### The Update Mechanism

$Q_{i+1}(s,a) = \mathbb{E}_{r,s'}\left[ r+\gamma\max_{a'}Q_{i}(s',a') \right]$

The nesting creates "telescoping optimality":

- $Q_{i+1}$ = optimal for 1 step + $\gamma$ × (optimal for $i$ steps) = optimal for $i+1$ steps

### Why Convergence Happens

Since $\gamma<1$, rewards far in the future matter exponentially less. Eventually $Q_{i}$ becomes optimal for so many steps that the remaining "random tail" contributes negligibly.

**Result:** As $i\to \infty$, the optimality horizon grows without bound while the random part vanishes, so $Q_{i}\to Q^{\star}$.