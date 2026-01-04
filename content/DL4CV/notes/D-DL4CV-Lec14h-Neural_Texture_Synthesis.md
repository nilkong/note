---
type: digest
aliases: Neural Texture Synthesis
source_link: "[[D-DL4CV-Lec14-Visualizaing_and_Understanding]]"
tags: 
---
# Gram Matrix
## Introduction

Each layer of CNN gives a $C\times H\times W$ tensor, we can think of it as $H\times W$ grid of $C$-dimensional vectors

We'll compute the outer product of every $C$-dimensional vectors then averaging over these $HW$ pairs of $C\times C$ matrices. This final matrix is called a **gram matrix**
$$
G_{i,j} = \sum_{x,y}\left( F_{i}(x,y)\times F_{j}(x,y) \right) 
$$
## Intuition

In gram matrices, we want to eliminate the spatial information and only maintain the texture information.

For every entry $G_{i,j}$, it refers to "how often does feature in channel $i$ and channel $j$ appear together?" When $G_{i,j}$ has large value, it means feature in channel $i$ and channel $j$ tends to appear together in the pattern

# Neural Texture Synthesis
## Introduction

The goal of texture synthesis is generating different images with the same texture

## Steps
![[D-DL4CV-Lec14_8-Neural_Texture_Synthesis-step.png]]