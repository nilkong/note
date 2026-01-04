---
type: digest
aliases: Non-Max Suppression (NMS)
source_link: "[[D-DL4CV-Lec15c-R-CNN]]"
tags:
---
# Non-Max Suppression (NMS)
## Introduction

NMS is a method aims to resolve the problem of **multiple overlapping detections for the same object**

What it does is comparing [[D-DL4CV-Lec15ca-IoU|IoU]] between every two boxes and delete those with high IoU, which suggest they overlaps too much

## Steps

1. Sort all detection boxes by confidence score (highest to lowest)
2. *Select the next highest-scoring box* from the remaining unprocessed boxes
3. *Add selected box to final output*
4. *Remove all remaining boxes* with $\text{IoU} > \text{threshold}$ (e.g. 0.7) with the selected box
5. If any boxes remain unprocessed, GOTO 2

![[D-DL4CV-Lec15cb-NMS.png]]

## Problem

When objects are highly overlapping, like swarms of people at MRT in peak hours, we may delete good boxes