---
type: digest
aliases: Residual Network (ResNet) Introduction
source_link: "[[D-DL4CV-Lec08-CNNArchitectures]]"
tags:
---
# Introduction
## Background

After batch normalization was invented, researcher finally can train neural network with more than 10 layers. Because it is clear that deeper network can emulate shallower network, researchers at that time thinks the deeper the network is, the more accurate will the prediction be

However, after creating 50+ layers model, they find that not only the test error, but also the training error is larger than that under 10 layers

## Problem

Since test and training error is both bad, researchers conclude that this is an "optimization" problem, deeper model are harder to optimize. In particularly, they don't learn identity functions to emulate shallow model

## Solution

Residual network introduces the **"residual block"** to solve this problem

---

# Residual Block
## Introduction

A common network takes input $x$ and applies some transformation by Conv, then output $F(x)$. However, a residual block on the other hand outputs $F(x)+x$

This is because a network can easily learn $F(x)\approx 0$ but not $F(x)\approx x$

## Basic Block and Bottleneck Block
![[D-DL4CV-Lec8d-ResidualNetwork-basic-bottleneck.png]]

These two residual blocks have similar FLOPs. These are some guideline choosing which kind to use

**Basic Blocks**:
1. Building smaller model
2. Work with small dataset where deep network may overfit
3. Computational resource is limited

**Bottleneck Block**:
1. Building deep model (50+ layers)
2. Training on large datasets

> [!important] Researchers discover that using activation function like ReLU before Conv will perform better than putting ReLU after it