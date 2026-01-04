---
type: digest
aliases: Single-Stage Object Detection
source_link: "[[D-DL4CV-Lec15-Object_Detection]]"
tags:
---
# Single-Stage Object Detection
## Introduction

We can think of it as
1. Remove final object classification stage in faster R-CNN
2. Revise classification step in RPN from classifying background or not background to classifying the exact object

## Pros and Cons

It is more efficient (obviously) but less accurate