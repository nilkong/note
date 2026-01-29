---
type: digest
aliases: Single Frame CNN
source_link: "[[D-DL4CV-Lec18-Videos]]"
tags:
---
# Single Frame CNN
## Idea

We treat each frame of the video as independent images. Then, we train them on 2D CNN then average the prediction to get our final answer

## Problem

This method completely ignore the temporal dimension of our input video

> [!important] It comes out that single-frame CNN works pretty well on the video classification task, thus it becomes a strong baseline for video classification