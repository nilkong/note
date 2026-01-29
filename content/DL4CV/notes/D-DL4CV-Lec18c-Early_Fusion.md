---
type: digest
aliases: Early Fusion
source_link: "[[D-DL4CV-Lec18-Videos]]"
tags:
---
# Early Fusion
## Idea

We squeeze the original 4D input videos into 3D, then perform 2D CNN on it

## Implementation

**Input**: $T\times 3\times H\times W$

**Steps**:
1. Collapse the input into three dimensions, i.e., $3T\times H\times W$
2. Input the feature map we get in Step 1 into normal 2D CNN, then we'll get the final class scores

## Problem

**The temporal dimension collapsed too fast.**

After we send the feature map into CNN, the first Conv layer will turn $3T\times H\times W$ into $D\times H\times W$, the temporal dimension disappear in the first layer. However, we want the temporal feature be processed in more layers before disappearing