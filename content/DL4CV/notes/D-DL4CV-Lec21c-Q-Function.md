---
type: digest
aliases: Q-Function
source_link: "[[D-DL4CV-Lec21-Reinforcement_Learning]]"
tags:
---
# Q-Function

The Q-function at state $s$ doing action $a$ computes the expected reward from following policy $\pi$
$$
Q^{\pi}(s,a) = \mathbb{E}\left[ \sum_{t \geq 0}\gamma^{t}r_{t}\,|\,s_{0}=s,a_{0}=a,\pi \right]
$$