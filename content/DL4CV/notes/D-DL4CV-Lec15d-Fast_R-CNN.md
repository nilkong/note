---
type: digest
aliases: Fast R-CNN
source_link: "[[D-DL4CV-Lec15c-R-CNN]]"
tags:
---
# Introduction
## Why fast R-CNN faster than R-CNN?

Fast R-CNN resolves the problem of requiring CNN forward pass for every detection

## How does fast R-CNN achieve it?

Traditionally we first crop the image then pass them to CNN one by one

However, in fast R-CNN, we first run the whole image through CNN, crop the feature map, then pass it into a shallow network that flatten the input and give the scores and the bounded box

---
# Steps
## Step 1: Run the input image through CNN

We call this CNN the "backbone" network, which outputs a feature map

## Step 2: Crop Regions of Interest (Rol) from a proposal method

Region of interest is the region in the original image that we think enclose an object

We can map RoI to feature map by:
1. [[D-DL4CV-Lec15da-RoI_Pooling]]
2. [[D-DL4CV-Lec15db-RoI_Align]]

## Step 3: Resize Rols and pass them into per-region network

Per-region network is a shallow network that flattens the input then output the class scores and bounded box

note 1: Per-region network can have Conv layer
note 2: Since the network is shallow, it runs pretty fast

> [!important] Most of the time spent processing an image in fast R-CNN is finding proposal regions, which by now we are using selection search. We'll replace it with a network in faster R-CNN
