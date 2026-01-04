---
type: digest
aliases: Region-Based CNN (R-CNN)
source_link: "[[D-DL4CV-Lec15-Object_Detection]]"
tags:
---
# R-CNN
## Introduction

R-CNN is a kind of multiple objects detection method that leverage the concept of "region proposals"
## Steps
### Step 1: Region Proposals

Run region proposal method to compute ~2000 candidates
### Step 2: Make Predictions

Resize each region to size of CNN's input, then pass them through CNN to predict class scores and bounded box transform
### Step 3: Select Output

In this step we select a subset of region proposals to output based on the predict scores and our choice of choosing method
### Step 4: Compare boxes

We use [[D-DL4CV-Lec15ca-IoU|Intersection over Union (IoU)]] to compare our prediction with the ground-truth box which is drawn manually

![[D-DL4CV-Lec15c-R-CNN-steps.png]]

## Bounded Box Transform Prediction
### Explanation

This part of the output predicts the "transform" to the box in order to correct the box size and position

### A Common Practice

We predict the "Transform"

**Region Proposal**: $(p_{x},p_{y},p_{h},p_{w})$
**Transform**: $(t_{x}, t_{y}, t_{h}, t_{w})$
**Output Box**: $(b_{x}, b_{y}, b_{h}, b_{w})$

Translate relative to the box:
$$
b_{x} = p_{x} + p_{w}t_{x} \hspace{1cm} b_{y}=p_{y}+p_{h}t_{y}
$$

Log-space scale transform:
$$
b_{w} = p_{w}\exp(t_{w}) \hspace{1cm} b_{h}=p_{h}\exp(t_{h})
$$

## Overlapping Boxes
### Problem

Object detectors often output many bounding boxes that detect the same object multiple time

### Solution: Non-Max Suppression (NMS)

[[D-DL4CV-Lec15cb-NMS]]

## Evaluating Object Detectors
### Problem

Object detection is very different from image classification, thus we need to come up with a new way evaluating how good our object detector is

### Solution: Mean Average Precision (mAP)

[[D-DL4CV-Lec15cc-mAP]]

## Problem of R-CNN

It is **very slow** since we need to forward pass for each image