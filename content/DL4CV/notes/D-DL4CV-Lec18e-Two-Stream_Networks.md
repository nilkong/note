---
type: digest
aliases: Two-Stream Networks
source_link: "[[D-DL4CV-Lec18-Videos]]"
tags:
---
# Idea
## Intuition

Think about how we recognize if someone is playing basketball. We uses two clues:
1. We see a person and a basketball
2. We observe bouncing, throwing and running motions

## Idea

The two clues we mentioned in the above section utilize
1. **Spatial Information**
2. **Temporal Information**

We want to use neural network to mimic this intuition, so we create two independent stream in the network. The first one captures the **spatial information**, while the second one captures the **temporal information**

## How it works?
### Spatial Stream

Input a single frame, and run image classification

### Temporal Stream

The network doesn't see the RGB image. Instead, we input **optical flow data** into 3D CNN and output the class scores

### Combine the Outputs

We combine the class scores from the two streams and give the final predictions

![[D-DL4CV-Lec18e-Two-Stream_Networks.png]]