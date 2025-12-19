---
type: digest
title: Regularization
source_link: "[[D-DL4CV-Lec03-Linear_Classifier]]"
tags:
---
# The Motivation of Regularization: Overfitting
## Intuition

Overfitting happens when the model performs too well on the training data, and has poor performance for unseen data

## Algebraic Perspective

Think of our model as solving a linear system
- Equations (constraints): The training data points
- Unknowns (parameters): The weights of the model

When **Number of Unknowns > Number of Equations**, then the linear system has infinite solutions

Concretely, when we have more parameters than training data points, then the model can fit the training data in many ways. The way the model finally choose might perform bad in unseen data, and we call this phenomenon "overfitting"

---
# Regularization
## Introduction

Regularization adds a penalty term to the loss function that depends only on the weights $W$. It guides how we want our model to behave:

$$L(W) = \frac{1}{N}\sum_{i=1}^{N}L_{i}(f(x_{i}, W), y_{i}) + \lambda R(W)$$
## Different Regularization Methods
### L1 Regularization

$$R(W)= \sum_{k,l}\left|W_{k,l} \right|$$

**Key Effect: Creates Sparse Models**

- **Feature Selection**: Drives many weights to exactly zero, automatically selecting the most important features
- **Interpretability**: Results in simpler models that are easier to understand since irrelevant features are eliminated

### L2 Regularization

$$R(W) = \sum_{k,l}W_{k,l}^{2}$$

**Key Effect: Shrinks All Weights Smoothly**

- **Proportional Shrinkage**: Reduces all weights gradually rather than eliminating them completely
- **Distributed Influence**: Prefers using many features with small weights rather than few features with large weights
    - Example: L2 favors $(0.25, 0.25, 0.25, 0.25)$ over $(1, 0, 0, 0)$

### Quick Summary

- **L1**: "Pick the best features" (sparse, interpretable)
- **L2**: "Use all features, but gently" (smooth, distributed)