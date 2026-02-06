---
type: digest
aliases: Discriminative Models and Generative Models
source_link: "[[D-DL4CV-Lec19-Generative_Model_I]]"
tags:
---
# Discriminative Model
### Introduction

**Definition**: Learn a probability distribution $p(y|x)$

**Example**: Given a cat image ($x$), we want to know the probability of this image maps to certain label $y$

> [!info] $p(y|x)$ is the probability density function (pdf)

## Functions

1. Assign labels to data
2. Feature Learning: create feature vector (with labels)

## Problem: Can't reject unreasonable input

For any input image, the model must give a pdf. However, when we put in unreasonable input such as a monkey image into a model without monkey label, the model still need to give an output

---
# (Unconditional) Generative Model
## Introduction

**Definition**: Learn a probability distribution $p(x)$

**Example**: We input a cat image, the model will tell us for all the images it is trained on, how likely this pixel pattern appears

## Functions

1. Detect Outlier: In manufacturing, we don't know what cause the defectives, thus we train generative model to find outliers
2. Feature Learning (without labels)
3. Generate New Data: give random noise image to create realistic output

## Generative model can reject unreasonable input

When the user input photos that is random or never appear in its training data, the model can simply assign a very low probability telling us that it never seen this kind of pixel pattern before

---
# Conditional Generative Model
## Introduction

**Definition**: Learn a probability distribution $p(x|y)$

**Example**: Given we want to generate "cat" ($y$), what's the probability of producing a specific pixel configuration $x$ during the generation process

## Functions

1. Assign labels while rejecting outliers: 
	- For input $x$, find all $p(x|y)$
	- If every $p(x|y)$ is too small, reject the input
	- else, assign $y$ with highest prob
2. Generate New Data: Given random noise and wanted label, create realistic output

## Also can reject unreasonable pixel pattern

We can assign low probability to unreasonable pixel pattern for each label

---
# Relation

By **Bayes' Rule**
$$
P(x|y) = \frac{P(y|x)P(x)}{P(y)}
$$
- $P(x|y)$: Conditional Generative Model
- $P(y|x)$: Discriminative Model
- $P(x)$: (Unconditional) Generative Model
- $P(y)$: The probability each label is in our dataset