---
type: digest
aliases: Intersection over Union (IoU)
source_link: "[[D-DL4CV-Lec15c-R-CNN]]"
tags:
---
# Intersection over Union (IoU)
## Introduction

IoU provides a way to compare how good is the box we predicted compare with the ground-truth box
## Method
$$
\text{IoU} = \frac{\text{Area of Intersection}}{\text{Area of Union}}
$$
- $\text{IoU>0.5}$ is "decent"
- $\text{IoU}>0.7$ is "pretty good"
- $\text{IoU>0.9}$ is "almost perfect"