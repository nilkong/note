---
type: digest
aliases: GoogLeNet Introduction
source_link: "[[D-DL4CV-Lec08-CNNArchitectures]]"
tags:
---
# Importance

GoogLeNet introduces many innovations to improve efficiency: reduce parameter count, memory usage, and computation.

Its innovations includes
1. Stem Network
2. Inception Module
3. Global Average Pooling

---

# Innovations
## Stem Network
![[D-DL4CV-Lec08c-GoogLeNet-stem-network.png]]
### Problem

Recall in [[D-DL4CV-Lec08b-VGG#Computation Resource Usage|VGG-16]], most of the compute was at the start (the Conv layer). GoogLeNet introduces the concept of "stem network" to deal with this problem

### Solution

At the start of the network, GoogLeNet aggressively downsamples the input before going into the resource-consuming part of the network

This dramatically decrease the compute resource usage

## Inception Module
![[D-DL4CV-Lec08c-GoogLeNet-inception-module.png]]
### Problem

It is hard for us to know what is the best layer number and filter size for each stage in neural network. GoogLeNet introduces "inception module" to let the training process itself decide what is the best filter size

### Solution

GoogLeNet makes several kinds local units train in parallel, then combine the result after computing. The learnable parameter will decide which set of layers is best in the task

## Global Averaging Pooling
![[D-DL4CV-Lec08c-GoogLeNet-global-average-pooling.png]]
### Problem

Recall in AlexNet and VGG, the number of parameters skyrockets in FC layers after flattening the data

### Solution

GoogLeNet change the way we flatten the data. Originally, we'll flatten the data naively without doing changes to the data.

In contrast, GoogLeNet only reserve the channel dimension, and diminish the height and weight dimension by making the only value in each channel the average of each feature map

## Auxiliary Classifiers

Before batch normalization comes out, researchers struggle making the model deeper since gradients won't propagate cleanly, thus in this model, the researchers introduce "auxiliary classifiers" to deal with it