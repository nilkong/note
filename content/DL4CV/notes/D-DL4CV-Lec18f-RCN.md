---
type: digest
aliases: Modeling Long-Term Temporal Structure with RCN
source_link: "[[D-DL4CV-Lec18-Videos]]"
tags:
---
# Recurrent Convolutional Networks (RCN)

## Problem

We want to process long videos, but temporal dimension will make it computational expensive if we use models we introduce before

## Two Approaches

### CNN + RNN Pipeline

```
Video → Short Clips → CNN Features → RNN → Output
```

- Separate spatial and temporal processing
- CNN compresses spatial info into 1D vectors
- RNN processes temporal sequence
- 
![[D-DL4CV-Lec18f-RNN-signle-layer-RNN.png]]
### Multi-Layer RCN

- **Key Idea**: Integrate convolutions directly into RNN structure
- Maintains 2D feature maps throughout processing

## Multi-Layer RCN Architecture

### Two Recurrent Connections

Each layer $h^{i}_{j}$ depends on:

1. **Temporal**: $h^{i}_{j-1}$ (same layer, previous time)
2. **Hierarchical**: $h^{i-1}_{j}$ (previous layer, same time)

![[D-DL4CV-Lec18f-RCN-RCN.png]]

### Key Difference

- **RNN**: Uses weight matrices on 1D vectors
- **RCN**: Uses convolutions on 2D feature maps

## Comparison

|     |CNN + RNN  |    Multi-Layer RCN            |
| ------------ | --------------- | -------------- |
| Processing   | Sequential      | Integrated     |
| Spatial Info | 1D compressed   | 2D preserved   |
| Architecture | Two networks    | Single network |

**Result**: RCN treats video as unified spatial-temporal data rather than "images + time"