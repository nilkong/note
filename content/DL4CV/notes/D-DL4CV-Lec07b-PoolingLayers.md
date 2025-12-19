---
type: digest
source_link: "[[D-DL4CV-Lec07-ConvolutionalNetwork]]"
tags: []
---
# Introduction

It works like convolutional layer. However, it doesn't have a filter, instead, it has a pooling function which will be perform on the input

Most importantly, it doesn't have learnable parameters

Its intention is **reducing the spatial dimensions while preserving the most important information given in the image**

# Common Pooling Function
## Max Pooling

Only preserve the maximum value in each kernel

## Average Pooling

Averaging all the values in the input to give output

## What is it?
A pooling layer downsamples feature maps by applying a simple mathematical operation (like finding the maximum or average) across small regions of the input. Unlike convolutional layers, pooling layers have **no learnable parameters** - they use fixed operations that never change during training.

**Main purpose:** Reduce image size while keeping the most important information.

## How it works
Think of it as sliding a small window across your image and summarizing what's inside each window with a single number. This makes the image smaller but preserves key features.

## Common Types

### Max Pooling
Takes the highest value from each window region. This preserves the strongest features - like keeping the brightest part of an edge or the most activated pixel in a pattern.
### Average Pooling  
Takes the mean of all values in each window. This gives a smoother representation that captures overall texture and patterns rather than just the strongest signals.

## Key Benefits
- **Smaller data:** Reduces computational load for later layers
- **Translation invariance:** Makes the network less sensitive to small shifts in object position
- **Prevents overfitting:** Reduces the model's ability to memorize specific pixel arrangements