---
type: digest
aliases: Gradient Ascent
source_link: "[[D-DL4CV-Lec14-Visualizaing_and_Understanding]]"
tags: 
---
# Gradient Ascent
## Motivation

We want to generate a synthetic image that maximally activates a neuron. That is, make a neuron output maximum value.

## Mathematical Expression

We can conclude what we are doing in a math equation:
$$
I^{*} = \text{arg max}_{I}\,f(I) + R(I)
$$
**Explanation**:
1. $I^{*}$ : The image we are generating
2. $f(I)$ : Current neuron value
3. $R(I)$ : Natural image regularizer

- Initialize image pixel values to zeros

Repeat:
1. Forward pass to computer current neuron value
2. Backprop to get gradient of the neuron value with respect to image pixels
3. Update the image based on the gradients

> [!info] If we choose neuron in last layer, then the neuron value is the classification score

## Recommendation
### Regularizer

Use [[D-DL4CV-Lec10d-Regularization#L2 Regularization|L2 regularizer]] to penalize the synthetic image pixel values

> [!info] To make the synthetic image look more natural, we penalize the pixel values to avoid them having large RGB values

### Optimization

To make the synthetic image more natural, we can:
1. Gaussian blur the image
2. Clip pixels with small values to 0
3. Clip small gradients with respect to pixel value to 0

> [!info] You can even add more complicated regularizer and optimization to make the synthetic image even more natural. However, this betrays our original goal of understanding the neuron, since we are putting too much effort in regularizing