---
type: digest
aliases: Attention, Attention Layer, and Transformers
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: 
---
# Problem with Sequence to Sequence (seq2seq)
## Introduction to Sequence to Sequence

[[D-DL4CV-Lec12b-seq2seq]]

## Problem

In sequence to sequence, no matter how long our input sequence is, the context vector $c$ we send to the decoder has fixed size. This situation creates a bottleneck in our model
![[D-DL4CV-Lec13-Transformers-seq2seq-bottleneck.png]]

---
# Sequence to Sequence with RNNs and Attention
> Use the concept of attention to solve the problem of bottleneck in seq2seq

[[D-DL4CV-Lec13a-Attention]]

---
# Attention Layer
> Introducing a new kind of layer, which is also a crucial part of transformer

## Attention Layer

[[D-DL4CV-Lec13b-AttentionLayer]]

## Self-Attention Layer

[[D-DL4CV-Lec13c-SelfAttentionLayer]]

## Masked Self-Attention Layer

[[D-DL4CV-Lec13d-MaskedSelfAttentionLayer]]

## Multihead Self-Attention Layer

[[D-DL4CV-Lec13e-MultiheadSelfAttentionLayer]]

---
# Attention is all you need
## Three Ways of Processing Sequences
> Compare RNN, 1D Conv, and Self-Attention

[[D-DL4CV-Lec13f-SequenceProcessingComparison]]

## The Transformer
> What should we choose? RNN, Conv, or Self-Attention. The paper "Attention is all we need" tells us that all we need is "Transformers"

[[D-DL4CV-Lec13g-Transformer]]