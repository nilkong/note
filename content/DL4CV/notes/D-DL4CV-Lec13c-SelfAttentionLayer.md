---
type: digest
aliases: Self-Attention Layer
source_link: "[[D-DL4CV-Lec13-Transformers]]"
tags:
---
# Self-Attention Layer
## Introduction

We use the input matrix $X$ to produce query vector $Q$ by query matrix $W_{Q}$
$$
Q=XW_{Q}
$$
Others are the same as [[D-DL4CV-Lec13b-AttentionLayer#Standard Attention Layer|Standard Attention Layer]]

## Intuition

The query matrix is computed with input matrix, it wants to find other words in the input sequence that are relevant to the input matrix by scanning through every word value matrixs

For example, $X_{1}$ is the word "cat", then $Q_{1}$ will want to search for words in the sentence that are describing "cat", such as "sleeping", "it", ...

## Permutation Equivalent

No matter how we change the order of the input vectors, we'll result in the same $Y$. That is, **permuting input vectors in self-attention layer don't change the output**

However, there's a downside that the layer doesn't know the order of the vectors it is processing

For example, we change $X_{1}$, $X_{2}$, $X_{3}$ to $X_{2}$, $X_{3}$, $X_{1}$, the output will be still the same but in the order of $Y_{2}$, $Y_{3}$, $Y_{1}$

More specifically, the sentences below would produce identical attention pattern
- The cat sat on the mat
- The mat sat on the cat


## Positional Encoding

The self-attention layer is permutation equivalent, so it treats the input sequence as unordered set. However, this isn't what we want, hence we introduce the concept of positional encoding

In order to make processing position-aware, we concatenate the input vector with positional encoding, which gives a distinct vector for every position

This way, the model will be aware of the order of input vector it is dealing with

![[D-DL4CV-Lec13c-SelfAttentionLayer.png]]