---
type: digest
aliases: Value Function
source_link: "[[D-DL4CV-Lec21-Reinforcement_Learning]]"
tags:
---
# Value Function

The value function at state $s$ computes the expected reward by following policy $\pi$
$$
V^{\pi}(s) = \mathbb{E}\left[ \sum_{t\geq 0}\gamma^{t}r_{t}\,|\,s_{0}=s,\pi \right] 
$$