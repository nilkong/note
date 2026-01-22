---
type: digest
aliases: Surface Normals
source_link: "[[D-DL4CV-Lec17-3D_Vision]]"
tags:
---
# What is Surface Normals?

For each pixel in the image, surface normals give a vector giving the normal vector to the object

---
# Predicting Surface Normals
## Method

We use an RGB image as input, then predict the surface normal using [[D-DL4CV-Lec16a-Semantic_Segmentation_Fully_Convolutional_Network|fully convolutional network]]

## Loss

Let $x$ be the predicted vector for a pixel, and $y$ be that of the ground truth, then the loss for this pixel is
$$
L = \frac{x\cdot y}{|x||y|}
$$
