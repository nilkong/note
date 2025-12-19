---
type: digest
title: Loss Function
source_link: "[[D-DL4CV-Lec03-Linear_Classifier]]"
tags:
---
# Loss Function
## Definition

The **loss function** (or objective function, cost function) tells how good our current classifier is

Low loss = good classifier
High loss = bad classifier

## Negative Loss Function

The negative loss function (reward function) return high loss when the current classifier is good and vice versa

## Mathematical Perspective
Give a dataset of example

$$
\left\{ \left( x_{i},y_{i} \right)  \right\} ^{N}_{i=1}
$$

Loss for a single example is

$$
L_{i}\left( f\left( x_{i},W,b \right) ,y_{i} \right) 
$$

Loss for the dataset is average of per-example losses:

$$
L = \frac{1}{N}\sum_{i}L_{i}\left( f\left( x_{i},W,b \right) ,y_{i} \right) 
$$

---
# Different Loss Function
## Cross-Entropy Loss (Multinomial Logistic Regression)

[[D-DL4CV-Lec03ba-Cross-Entropy_Loss]]

## Multiclass Support Vector Machine (SVM) Loss

[[D-DL4CV-Lec03bb-SVM_Loss]]