---
type: digest
aliases: CNN Architectures
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: []
---
# Motivation

In the previous lecture, we've introduced the components of CNN. However, we still don't know how can we combine these components to create a good CNN architecture. Hence, this lecture will go through each year's best model in ImageNet classification challenge and introduce some common rules in building CNN architecture

---
# Resource Computation
## Memory Usage

We define the memory usage of a layer to be the size of memory of the layer's output

## Parameters

We define the number of parameters of a layer to be the number of "learnable parameters" it has

## FLOPs

FLOPs stands for **Floating Point Operations**. It counts the number of mathematical operations required for the layer

> [!info] An easy way to calculate FLOP is to calculate with the following way
> $\text{Operations per Output Value}\times \text{Number of Outputs}$

# Models
## AlexNet

AlexNet demonstrates that deep CNN models could achieve great performance on large-scale image recognition tasks

[[D-DL4CV-Lec08a-AlexNet]]

## VGG

In AlexNet, researchers use trial-and-error to find model with better performance. VGG introduces some general rules in designing deep network architecture

[[D-DL4CV-Lec08b-VGG]]

## GoogLeNet

GoogLeNet introduce many innovations for boosting efficiency: reduce parameter count, memory usage, and computation

[[D-DL4CV-Lec08c-GoogLeNet]]

## Residual Networks (ResNet)

It is intuitively that deeper model can emulate shallow model, thus we believe deeper is better in neural network. However, researcher finds deeper models have both larger training and test error, which infer we have optimization problem.
Residual network resolves this optimization problem

[[D-DL4CV-Lec08d-ResidualNetwork]]

## ResNeXt

ResNeXt improve ResNet by introducing "group convolution"

[[D-DL4CV-Lec08e-ResNeXt]]