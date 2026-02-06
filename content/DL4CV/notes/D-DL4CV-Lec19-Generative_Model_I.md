---
type: digest
aliases: Generative Model Introduction, Autoregressive Model, and Variational Autoencoder
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: 
---
# Introduction to Generative Model
## Supervised vs. Unsupervised Learning

|                       | Data    | Goal                                                     |
| --------------------- | ------- | -------------------------------------------------------- |
| Superivsed Learning   | $(x,y)$ | Learn a function which maps $x$ to $y$                   |
| Unsupervised Learning | $x$     | Learn some underlying hidden structure of the input data |

## Discriminative vs. Generative Models

[[D-DL4CV-Lec19a-Discrimitive_and_Generative_Models]]

## Taxonomy of Generative Models

![[D-DL4CV-Lec19-Generative_Model_I-taxonomy.png]]

---
# Autoregressive Models
## Explicit Density Estimation
> A model that can do "explicit density estimation" means that given a sequence (e.g., text, images). It can directly tell you the exact probability it appears in the model

[[D-DL4CV-Lec19b-Explicit_Density_Estimation]]

## Autoregressive Model

[[D-DL4CV-Lec19c-Autoregressive_Model]]

---
# Variational Autoencoders
## (Regular, Non-Variational) Autoencoders

[[D-DL4CV-Lec19d-Autoencoders]]

## Variational Autoencoders

[[D-DL4CV-Lec19e-Variational_Autoencoders]]

