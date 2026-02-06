---
type: digest
aliases: PixelRNN
source_link: "[[D-DL4CV-Lec19c-Autoregressive_Model]]"
tags:
---
# PixelRNN
## Process

We repeat the following steps for every pixel
1. Receive hidden states from neighbors
2. Compute current pixel hidden state based on neighbors' hidden states
3. Generate pixel value based on hidden state

## Not Parallelizable

We need to wait for the neighbors to compute hidden states before we can compute current hidden states

![[D-DL4CV-Lec19ca-PixelRNN.png]]