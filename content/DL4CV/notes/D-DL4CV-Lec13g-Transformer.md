---
type: digest
aliases: Transformer
source_link: "[[D-DL4CV-Lec13-Transformers]]"
tags:
---
# Transformers
## Introduction

In the well-known paper "Attention is all you need". The author points out that the only layer we need is the transformers. By stacking transformer, we don't need RNNs and 1D Convs

## Structure
![[D-DL4CV-Lec13g-Transformer-structure.png]]
1. MLP is multi-layer perceptron, also known as fully-connected layer
2. Residual connection let the layer better simulating other kinds of layers with simpler structure ([[D-DL4CV-Lec08d-ResidualNetwork|ResNet]])
3. [[D-DL4CV-Lec07c-Normalization#Layer Normalization|Layer Normalization]]

## Importance

We say transformer is the "ImageNet moment for NLP"

That is, after ImageNet come out, we can first train our new model on ImageNet, then conduct [[D-DL4CV-Lec11e-TransferLearning|transfer learning]] on the model

The general transformers trained by big companies using large dataset can also be finetuned easily for our own NLP tasks