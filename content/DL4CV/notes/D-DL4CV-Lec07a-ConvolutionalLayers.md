---
type: digest
source_link: "[[D-DL4CV-Lec07-ConvolutionalNetwork]]"
tags: []
---
# What is Convolutional Layers
## Definition

Convolutional layers use small learnable filters (kernels) that slide across input data to detect local patterns and features.

> [!warning] A neuron in CNN is said to contribute exactly one value to the output feature map
## How It Works

![[D-DL4CV-Lec07a-ConvolutionalLayers-working-principle.png]]

### The Process:

1. **Create Filter:** Make a 3×5×5 kernel (depth matches input image depth)
    
2. **Slide Across Image:** Move the filter left-to-right, top-to-bottom over the entire image. At each position, calculate the dot product between filter and image patch.
    
3. **Generate Output:** Each dot product becomes one value in the activation map. All values together form the final 28×28 output.

## Generalization

![[D-DL4CV-Lec07a-ConvolutionalLayers-generalization.png]]

### Parameters

| Parameter        | Explanation                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------- |
| $N$              | Number of images in a batch                                                                  |
| $C_{in}$         | The number of channels in the input image                                                    |
| $C_{out}$        | 1. The number of filters in the convolution layer<br>2. The number of channels in the output |
| $K_{w}$, $K_{h}$ | The width and height of the filters                                                          |

### Explanation

**Input**:
The input has $N$ images, each with the size $H\times W$ and $C_{in}$ channels

**Convolutional Layer**:
In a convolutional layer, we can have multiple filter. The number of filters is $C_{out}$, which also determines the number of channels in the output

> Every filter only has one bias value: [[I-20250722-Bias_in_ConvLayer]]

**Output (Activation Map)**:
We'll have $N$ outputs, each has $C_{out}$ channels, the width and height is determined by both the input image and the size of filter
$$
\begin{align}
H' &= H - K_{h} + 1 \\
W' &= W - K_{w} + 1
\end{align}
$$

## Stacking Convolutional Layers

If we stack two convolutional layers like that we do in linear classifiers. We'll then get a new convolutional layer that combines the operations we've done with two layers into one

Thus, we'll also put in an activation function after each convolutional layer

## What do Convolutional Layers Learn

![[D-DL4CV-Lec07a-ConvolutionalLayers-filter-learn-what.png]]

The filters in the front layers will often learn patterns like oriented edges, opposing colors. The latter layers will then learn larger patterns

> [!important] This kind of conv layer is called "2D convolution", there are also 1D conv, which can be used for NLP and 3D convolution, which can be used for 3D computer vision

---

# Padding
## Introduction

In previous section, we've learnt that the width and height of the convolutional layer's output can be calculated through $W'=W-K+1$.

This suggests that feature map "shrink" with each layers, which limits the number of layers we can have in neural network

The concept of "padding" aim to deal with this problem

## How Padding works

Before sending the feature map into the convolutional layers, we'll add additional width and height to the feature map, which is often set to 0

> [!info] There are also other ways filling the additional features added by paddings

Then, since we've increase the size of feature map, the activation map will then have larger width and size based on our choice of padding $P$

> [!important] A common choice of padding is $P= (K-1) / 2$, since this makes the output the same size as the input. This specific padding is called "same padding"

---
# Receptive Field

For a convolution with kernel size $K$, each element in the output depends on a $K\times K$ receptive field in the input

Each successive convolution adds $K-1$ elements to the receptive field

With $L$ layers the receptive field in the input is $1+L(K-1)$

![[D-DL4CV-Lec07a-ConvolutionalLayers-receptive-field.png]]

---

# Strided Convolution
## Motivation

For large images, i.e., images with lots of pixels, we need lots of layers for each output to see the entire images (since each layer only add $K-1$ to the receptive field)

Hence, we introduce the concept of "stride convolution"

## How does it works?

Stride convolution is a technique where the filter moves across the input with steps larger than one pixels. This not only decrease the spatial dimension of the output feature map, but also increase the increment of receptive field per layer

With the technique applied, the current output dimension can be calculated by
$$
W'=\frac{W-K+2P}{S}+1
$$

> [!info] We call the process of reducing spatial resolution of feature map while preserving important information **"Downsampling"**

---

# Common Settings of Convolutional Layers
## General Rules

1. **Square kernels**: $K_H = K_W$
2. **Padding**: $P = \frac{K-1}{2}$
3. **Channels**: $C_{in}, C_{out} \in {32, 64, 128, 256}$
## Standard Configurations

| $K$ | $P$ | $S$ | Purpose               |
| :-: | :-: | :-: | :-------------------- |
|  3  |  1  |  1  | Standard conv         |
|  5  |  2  |  1  | Large receptive field |
|  1  |  0  |  1  | Channel Mixing        |
|  3  |  1  |  2  | Downsample            |

### Channel Mixing ($1\times 1$ CONV)

**What it does**: Takes all channel values at each pixel location and combines them using learned weights.

**Think of it as**: Running a mini fully-connected network independently at every pixel position.

**Example**: 
- Input: 3 channels $(R,G,B)$ at pixel $(i,j)$ → values $[0.2, 0.8, 0.1]$
- Output: 1 channel → learned combination like $0.3R + 0.5G+0.2B=0.48$
- This happens simultaneously for all pixels in the image

> [!important] Unlike regular convolution that mixes spatial neighbors, $1\times 1$ conv only mixes channels at the same spatial location.

### $K=3,P=1,S=2$

This kind of convolutional layer reduces the spatial dimension by half