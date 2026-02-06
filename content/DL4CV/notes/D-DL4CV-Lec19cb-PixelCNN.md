---
type: digest
aliases: PixelCNN
source_link: "[[D-DL4CV-Lec19c-Autoregressive_Model]]"
tags:
---
# PixelCNN
## Steps

We repeat this process for every pixel
1. Use convolution to gather pixel value information from the neighbors
2. Use convolution output to compute hidden state and RGB value

## Parallelizable

Since we already know the pixel value of training data. We can compute hidden states and prediction of every pixels at the same time

![[D-DL4CV-Lec19cb-PixelCNN.png]]