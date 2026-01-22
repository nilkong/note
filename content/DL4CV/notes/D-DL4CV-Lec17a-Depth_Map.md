---
type: digest
aliases: Depth Map
source_link: "[[D-DL4CV-Lec17-3D_Vision]]"
tags:
---
# What is Depth Map?

For every pixel, depth map gives the distance from the camera to the object

---
# Predicting Depth Maps
## Method

We input an RGB image and want to predict the depth map. We achieve this by using a [[D-DL4CV-Lec16a-Semantic_Segmentation_Fully_Convolutional_Network|fully convolutional network]] to process RGB input image

## Problem: Scale / Depth Ambiguity

If we put a cat $L$ away from me, it is the same as putting a cat twice as large as the original cat at $2L$

## Scale Invariant Loss

The feature of scale invariant loss is that we only care if the ratio between pixels are the same.

Intuitively, if pixel A is twice as far as pixel B in the ground truth, the loss is zero if this 2:1 ratio is maintained in the prediction

Its mathematical expression is as follows:
$$
\begin{align}
D(y,y^{\star}) &= \frac{1}{2n^{2}}\sum_{i,j}\left( \left( \log y_{i} - \log y_{j} \right) - \left( \log y_{i}^{\star} - \log y_{j}^{\star} \right)   \right)^{2} \\
&= \frac{1}{n}\sum_{i}d_{i}^{2} - \frac{1}{n^{2}}\sum_{i,j}d_{i}d_{j} \\
&= \frac{1}{n}\sum_{i}d_{i}^{2} - \frac{1}{n^{2}}\left( \sum_{i}d_{i} \right) ^{2}
\end{align}
$$
where $d_{i} = \log y_{i}-\log y_{j}$