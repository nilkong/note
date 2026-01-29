---
type: digest
aliases: Videos
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: 
---
# Videos
## Introduction

A video is a sequence of images, it can be expressed as 4D tensor
$$
T\times 3\times H\times W
$$
## Tasks

In image classification, we want to recognize **objects**. However, in video classification, we want to recognize **actions**

## Problem & Solution
### Problem: Videos are bigggg!!!

Size of uncompressed video are very big. For example:

SD (640 x 480): **~1.5GB per minute**
HD (1920 x 1080): **~10GB per minute**

### Solution

We train on short clips of the videos: low fps and low spatial resolution

For example: We might want to turn the video into 5 fps with size $H=W=112$

---
# Intuitive Video Classification Model
## Single Frame CNN

[[D-DL4CV-Lec18a-Single-Frame_CNN]]

## Late Fusion (with pooling)

[[D-DL4CV-Lec18b-Late_Fusion]]

## Early Fusion

[[D-DL4CV-Lec18c-Early_Fusion]]

## 3D CNN (Slow Fusion)
### Introduction

Just grow a new dimension from 2D CNN

### C3D: The VGG of 3D CNNs

[[D-DL4CV-Lec18d-C3D]]

## Comparison: 2D Conv (Early Fusion) vs. 3D Conv (3D CNN)

[[D-DL4CV-Comparison-2D_Conv-3D_Conv]]

---
# Recognizing Actions from Motion
## Idea

Human can easily recognize actions using only **motion information**, so we want a way for the computer to identify motions from the video

## Measuring Motion: Optical Flow

We create a displacement field $F(x,y)=(dx,dy)$ between two frames $I_{t}$ and $I_{t+1}$, it tells us where each pixel will move in the next frame
$$
I_{t+1}(x+dx,y+dy) = I_{t}(x,y)
$$

![[D-DL4CV-Lec18-Videos-optical-flows.png]]

> [!note] 該等式的意思是時間為 $t$ 時在 $(x,y)$  的像素在 $t+1$ 時移動到了 $(x+dx,y+dy)$

## Two-Stream Networks

[[D-DL4CV-Lec18e-Two-Stream_Networks]]

---
# Modeling Long-Term Temporal Structure
## Task Description

Before this section, we only discuss how to process short clip, which means that we only care about dealing with small temporal dimension. Now, we want to find ways to process long videos

## CNN + RNN & RCN

[[D-DL4CV-Lec18f-RCN]]

## Spatio-Temporal Self-Attention (Non-Local Block)

[[D-DL4CV-Lec18g-self-attention]]

---
# Inflating 2D Networks to 3D
## Motivation

We already have many trained network for image classification. Is there a way we can do something to image classification model so it works on video classification also

## Solution: Inflate 2D Model

Suppose each Conv/Pool in 2D CNN has the dimension $K_{h}\times K_{w}$

Then we can duplicate the layer in third dimension for $K_{t}$ times, which we'll get layers for 3D CNN with dimension $K_{t}\times K_{h}\times K_{w}$

However, if there's a video where every frame is the same image, we want the output of 3D CNN on this video same as that in 2D CNN. Hence, we divide every element in the layer with $K_{t}$