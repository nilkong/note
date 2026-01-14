---
type: digest
aliases: Mask R-CNN
source_link: "[[D-DL4CV-Lec16-Image_Segmentation]]"
tags:
---
# Mask R-CNN
## Introduction

Mask R-CNN is an algorithm that aims to resolve instance segmentation

## Recall: Faster R-CNN

[[D-DL4CV-Lec15e-Faster_R-CNN]]

## Implementation

In original faster R-CNN, for every region proposal, we have
- **Classification branch**: predict object class
- **Bounding box regression branch**: Revise the bounded box coordinates

Now, we add a new **Mask Branch**, which is a [[D-DL4CV-Lec16a-Semantic_Segmentation_Fully_Convolutional_Network|fully convolutional network]] that can classify each pixel of region proposal to object and background