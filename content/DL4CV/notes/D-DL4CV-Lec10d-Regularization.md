---
type: digest
aliases: Regularization
source_link: "[[D-DL4CV-Lec10-TrainingNeuralNetworksI]]"
tags: []
---
# Overview
## Introduction

This note introduces different regularization methods

## Common Pattern of Regularization
### Training

We add some kind of randomness to the network

### Testing

We average the randomness

## Quick Summary

- Consider **Dropout** for large fully-connected layers
- **Batch Normalization** and **Data Augmentation** almost always a good idea
- Try **Cutout** and **Mixup** for small classification datasets

---
# Add term to the loss
$$
L = \frac{1}{N}\sum_{i=1}^{N}\sum_{j\neq y_{i}}\max(0, f(x_{i};W)_{j} - f(x_{i};W)_{y_{i}}+1) + \lambda R(W)
$$
## L2 Regularization
$$
R(W) = \sum_{k}\sum_{l}W_{k,l}^{2}
$$
## L1 Regularization
$$
R(W) = \sum_{k}\sum_{l}\left| W_{k,l} \right| 
$$
## Elastic Net (L1 + L2)
$$
R(W) = \sum_{k}\sum_{l}\beta W_{k,l}^{2} + \left| W_{k,l} \right| 
$$

---
# Dropout
## Method

In each forward pass, we randomly disable some neurons in each layers. That is, we randomly set some neurons to 0 temporarily

The probability of disabling a neuron is a hyperparameter, $0.5$ is a common choice

## Features
### Prevent Co-Adaptation of Features

**Without Dropout**:
the "has ear" neuron might only works well when "has tail" neuron also active. This means the network learns interdependent feature combinations

**With Dropout**:
The neurons must works independently since its neighbor might be disabled randomly

### Create Sub Network

Every time we dropout some neurons, the remaining neurons form a sub network of the complete network that shares parameters

## During Test Time

During test time, we don't want to dropout any neuron since when we put in one image, we want the model output the same answer every time. Instead, we multiply the output of the layer by the dropout probability

## Where to put Dropouts in Networks

In CNN architectures, we observed number of parameters skyrockets in fully-connected layer after flattening, we conduct dropout there reducing the parameter count

However, later architectures use [[D-DL4CV-Lec08c-GoogLeNet#Global Averaging Pooling|global average pooling]] and stop using dropout at all

---
# Data Augmentation
## What is Data Augmentation?

Data augmentation is a technique that artificially increase our training dataset size by applying random transformation (rotations, crops, flips, color changes, ...) to existing images, creating new variation while preserving the original labels

## Benefits
### 1. Breaks Spurious Correlation

Without it, models might learn irrelevant patterns. For example:
- "Cats always appear centered in photos"
- "Dogs are always photographs in daylight"

Data augmentation forces model to ignore these accidental patterns

### 2. Expands Dataset

Instead of 1000 unique cat photos, we now have 10000 variations

### 3. Smooths Decision Boundaries

Augmentation creates a "cloud" around each training point. This force model to learn smoother decision boundaries

## Some Data Augmentation Methods

1. Randomly crop / rescale
2. Horizontal flips
3. Rotation
4. ...

---
# DropConnect

This is similar to "dropout". Instead of disabling the entire neuron, we just disable some connection between two layers, making the layers not fully-connected

---

# Fractional Pooling

Use randomized pooling regions

---
# Stochastic Depth

Skip some residual blocks in ResNet

---
# Cutout

Set random region in the image to 0

---
# Mixup

Train on random blends of image. For example, we blend two images with a cat and a dog, then we'll expect the prediction be something like cat: 0.4 and dog: 0.6
