---
type: digest
aliases: Late Fusion
source_link: "[[D-DL4CV-Lec18-Videos]]"
tags:
---
# Late Fusion (with pooling)
## Idea

We try to first get high-level features of each frame of the video, then combine them

## Steps

1. We pass each frame of the video into a CNN, which will output high-level feature map
2. The feature map has the dimension $T\times D\times H'\times W'$, we have two choices here
	- Flatten the feature map to one dimension ($TDH'W'$), then pass into FC layers to get final class scores
	- Do average pooling over space and time, which will result in a vector with $D$ elements, then pass it into a single FC layer to get the final scores

## Problem

Hard to compare low-level motion between frames. This is because that frames only interact after processed by CNN, thus detailed information is hard to reserve

For example, a feature we might want to see when identifying a person jogging is to see if the person's leg switch between left leg and right leg. However, this information will be disposed by the CNN