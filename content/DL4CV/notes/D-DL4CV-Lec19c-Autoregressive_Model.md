---
type: digest
aliases: Autoregressive Model
source_link: "[[D-DL4CV-Lec19-Generative_Model_I]]"
tags:
---
# Autoregressive Model
## Concept

[[D-DL4CV-Lec19b-Explicit_Density_Estimation]]

We want to optimize learnable parameters in the network so that it has highest probability generating pixel patterns similar to that we feed in as training data

## PixelRNN

[[D-DL4CV-Lec19ca-PixelRNN]]

## PixelCNN

[[D-DL4CV-Lec19cb-PixelCNN]]

> [!important] PixelCNN trains faster than PixelRNN
> 1. PixelCNN depends on neighbor's pixel value
> 2. PixelRNN depends on neighbor's hidden state
>
> Hence, we need to wait for the previous hidden state be computed before computing current hidden state

## Pros and Cons of PixelRNN & PixelCNN

**Pros**:
- Can explicitly compute likelihood $p(x)$
- Explicit likelihood is easy to do evaluation on the model

**Cons**:
- In test process, generate pixel is sequential process => slow