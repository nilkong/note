---
type: digest
title: Multiclass Support Vector Machine (SVM) Loss
source_link: "[[D-DL4CV-Lec03b-Loss_Function]]"
tags:
---
# Introduction
![[D-DL4CV-Lec03bb-SVM_Loss.png]]
## Core Concept

The score of the correct class should be higher than all the other incorrect classes

## Explanation
Let $s$ be the score
$$
s=f(x_{i},W,b)
$$
then the loss is defined by
$$
L_{i} = \sum_{j\neq y_{i}} \max(0,s_{j}-s_{y_{i}}+1)
$$
note: $s_{j}$ mean the score of training sample $i$ for label $j$ 

---
# Problems & Answers to SVM

**Q1**: What happen when the scores for an image change a bit?
**A1**: If the score of the correct label is already much larger than incorrect labels' scores, then the loss will stay 0

**Q2**: If all the scores were random, what do we expect?
**A2**: $s_{j}-s_{y_{i}}=0$ thus $L_{i}=1$ and $L=K$ where $K$ is number of labels

**Q3**: What if we make $L_{i}=\sum_{j}\max(0, s_{j}-s_{y_{i}}+1)$ 
**A3**: $L_{i}$ will add a constant $1$

**Q4**: What if we use mean instead of sum when calculating the loss
**A4**: The loss will be lower and the update to hyperparameters in linear classifier will be slighter