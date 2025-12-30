---
type: digest
aliases: Masked Self-Attention Layer
source_link: "[[D-DL4CV-Lec13-Transformers]]"
tags:
---
# Introduction
## Motivation

In training process, we can see the whole output before making prediction. However, when we are in test process, the former time step cannot see latter time step. Hence, we want to create a "mask" which will hide latter words from the current word

More specifically, when we are computing $X_{2}$, we don't want the model make prediction based on words after $X_{2}$, such as $X_{3}$, $X_{4}$, ...

> [!note] Designed for training process

## Explanation

The way we create mask is just making corresponding alignment scores to **minus infinity**. This way, we'll get 0 in attention weight in these entries since we pass the scores through softmax function

![[D-DL4CV-Lec13d-MaskedSelfAttentionLayer.png]]