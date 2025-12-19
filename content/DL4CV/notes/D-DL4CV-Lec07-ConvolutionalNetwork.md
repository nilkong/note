---
type: digest
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: []
---
# Motivation

So far, our classifiers don't utilize the spatial structure of images. To address this limitation, we decided to define new computational nodes in neural networks that can effectively process spatial information in images without flattening the pixels

We call this type of neural network a **"Convolutional Neural Network"** (CNN).

# Components of a Convolutional Network

- Fully-Connected Layers
- Activation Function
- Convolutional Layers
- Pooling Layers
- Normalization

## Convolutional Layers

> Convolutional layer, or filters, convolve the image, i.e., "slide over the images spatially and compute the dot products"

[[D-DL4CV-Lec07a-ConvolutionalLayers]]

## Pooling Layers

> Pooling layer provides another way of downsampling

[[D-DL4CV-Lec07b-PoolingLayers]]

## Normalization

> In linear classification, normalizing the input can make the contour map from oval to circle, make it easier and faster to optimize, we can also apply this method to neural network

[[D-DL4CV-Lec07c-Normalization]]