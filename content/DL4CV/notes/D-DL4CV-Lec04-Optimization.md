---
type: digest
aliases: Optimization
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: 
---
# Introduction
## Introduction

In the previous lecture, we've introduced loss function telling us how good is the current predict model performing.

In this lecture, we introduce **"Optimization"**, which enable us to improve the model after receiving the loss

## Goal of Optimization

The goal of optimization is to find $w^{*}$ which minimize the loss $L(w)$, i.e.,
$$
w^{*} = \arg\underset{w}{\min}L(w)
$$
## How can we find $w^{*}$?

If we imagine the loss $L(w)$ as the height of the landscape, and weight $w$ as the coordinate we are standing. In this case, to minimize $L(w)$, we can follow the path with the steepest slope until we enter a plane (slope = 0)

---

# Gradient Descent
## Gradient

[[D-DL4CV-Lec04a-Gradient]]

## Gradient Descent

[[D-DL4CV-Lec04b-Gradient_Descent]]
