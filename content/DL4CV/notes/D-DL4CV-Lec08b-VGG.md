---
type: digest
aliases: VGG Introduction
source_link: "[[D-DL4CV-Lec08-CNNArchitectures]]"
tags:
---
# Introduction
![[D-DL4CV-Lec08b-VGG.png]]

## Introduction

VGG network consists of 5 stages, each of them is made up of several Conv layer with $3\times 3$ filters and a max pooling layer

## Importance

**Before VGG, designing CNN architectures was largely guesswork.** Researchers experimented with different layer combinations without clear guidelines, making it difficult to understand why certain designs worked better.

**VGG changed this by introducing systematic design principles.** Instead of random experimentation, VGG demonstrated that CNN architecture could follow logical, predictable rules.

---
# Design Principles in VGG
## 1. All Convolutional Layers are $3\times 3$ Stride 1 Pad 1
### Statement

Every convolutional layer in CNN should only use layers with $3\times 3$ filter with stride 1 and pad 1

### Reason

| Layer                                   | Parameters | FLOP        |
| --------------------------------------- | ---------- | ----------- |
| Conv(5x5, C-> C)                        | $25C^{2}$  | $25C^{2}HW$ |
| Conv(3x3, C -> C)+Conv(3x3, C -> C)<br> | $18C^{2}$  | $18C^{2}HW$ |

If we stack $n$ $3\times 3$ conv together, then the [[D-DL4CV-Lec07a-ConvolutionalLayers#Receptive Field|receptive field]] of them are $(2n+1)\times(2n+1)$. From the above comparison we can observe that stacking multiple $3\times 3$ conv is better than using a $(2n+1)\times(2n+1)$ in many ways:
1. Use less parameters
2. Require less FLOPs
3. We can insert ReLU between each $3\times 3$ conv, which create more nonlinearity and makes the network deeper, and we've proved deeper is better in neural network

## 2. All Max Pooling are $2\times 2$ Stride 2 and double "channels" after poolings

### Statement

The max pooling will cut the size of $H$ and $W$ by half, then the subsequent conv will make the number of output channels double

### Reason

| Input                 | Conv                       | Memory | Parameters | FLOPs       |
| --------------------- | -------------------------- | ------ | ---------- | ----------- |
| $C\times 2H\times 2W$ | Conv($3\times 3, C \to C$) | $4HWC$ | $9C^{2}$   | $36HWC^{2}$ |
| $2C\times H\times W$  | Conv($3\times 3,2C\to 2C$) | $2HWC$ | $36C^{2}$  | $36HWC^{2}$ |

The goal of doing the pooling operation is to extract important information from the image, so that slightly changing the image won't cause much influence to the prediction. 

We want every convolutional layer in CNN to have the same FLOPs, thus as we see on the above table, doubling the channel after max pooling can maintain FLOPs

---

# Computation Resource Usage
![[D-DL4CV-Lec08b-VGG-resource-usage.png]]