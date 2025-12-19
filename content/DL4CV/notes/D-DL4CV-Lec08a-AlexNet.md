---
type: digest
aliases: AlexNet Introduction
source_link: "[[D-DL4CV-Lec08-CNNArchitectures]]"
tags:
---
# Introduction
## Importance

AlexNet was introduced in 2012 ImageNet classification challenge. It is the very first time that researchers prove "deep CNN" can perform great on large-scale image recognition tasks.

## Structure

1. The input go through 5 convolutional layers
2. The output was then flattened to destroy the spatial information
3. At last, the output pass through 3 fully-connected layer and return the result

## Resource Usage
![[D-DL4CV-Lec08a-AlexNet-resource-usage.png]]

### Memory
> Memory record the size of layer's output

- Each Conv layers use the most memory because they process high-resolution feature map
- Memory decrease as we go deeper due to pooling operation
- FC layer has low memory usage since they work with flattened, low-dimensional vectors

### Parameters
> This record the number of learnable parameters

- The FC layer contain vast majority of parameters
- This is because FC layers connect every input to every output, creating massive weight matrices
- One filter will be used in every part of feature map in Conv layers, which infer they're sharing weight, making it parameter-efficient

### FLOP
> This record number of "floating point operation"

- Most floating point operation occurs in Conv layers
- Even though FC layers have more parameters, they involve much simpler matrix multiplication 