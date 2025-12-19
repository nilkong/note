---
type: digest
title: Linear Classifier
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags:
---
# Linear Classification Network
## Overview

Linear classification is a **parametric approach** to image classification that separates the process into two key components:

### 1. Score Function

Maps pixel values to confidence scores for each class

- **Input**: Raw image pixels
- **Output**: Confidence score for each class

[[D-DL4CV-Lec03a-Linear_Classifier]]

### 2. Loss Function

Evaluates predictions by score function and guides learning

- **Input**: Score function output + correct labels
- **Output**: Error measure that drives parameter updates in score function

[[D-DL4CV-Lec03b-Loss_Function]]

> [!important] The highlight of linear classification network in contrast with kNN is that linear classifier can "learn" how to classify images by processing training data

## How They Work Together

Repeat:
1. Score function turns raw image into class scores
2. Loss function computes loss based on class scores and the correct label
3. Update weights based on the loss

## Regularization: Solution to Overfitting

[[D-DL4CV-Lec03c-Regularization]]
