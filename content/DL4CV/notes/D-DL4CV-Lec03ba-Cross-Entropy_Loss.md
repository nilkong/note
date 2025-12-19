---
type: digest
title: Cross-Entropy Loss
source_link: "[[D-DL4CV-Lec03b-Loss_Function]]"
tags:
---
# Introduction
## Core Concept

After we computed the scores, we transform them into probability to give us better intuition about the classifier's confidence. Next, we 

## Explanation

Let the $s$ be the output of score function, i.e., 

$$
s = f(x_{i},W,b)
$$

We convert the score into probability using **"Softmax Function"**
The conditional probability represent the score image $x_{i}$ get on label $k$ 

$$
P(Y=k|X=x_{i}) = \frac{\exp(s_{k})}{\sum_{j}\exp(s_{j})}
$$

Then, the loss of image $x_{i}$ is defined as

$$
L_{i} = -\log P(Y=y_{i}|x=x_{i})
$$

Putting it together we get the equation below:

$$
L_{i} = -\log \left( \frac{\exp(s_{y_{i}})}{\sum_{j}\exp(s_{j})} \right) 
$$

---
# Problems & Solutions for Cross-Entropy Loss

**Q1:** What is min/max possible loss $L_{i}$
**A1**: min:$0$ , max: $\infty$

**Q2**: If all scores are small random values, what is the loss for any input?
**A2**: $\log K$, where $K$ is number of labels

> [!important] At the start of the training, the scores will be small random value, we can then compare the loss value with $-\log\left( \frac{1}{K} \right)$ to check if there's bug in our code
