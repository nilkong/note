---
type: digest
aliases: Explicit Density Estimation
source_link: "[[D-DL4CV-Lec19-Generative_Model_I]]"
tags:
---
# Explicit Density Estimation
## Goal

The goal of explicit density estimation is to write down a function $f$ such that for any given input $x$, we can give its probability $p(x)=f(x,W)$

## Explanation

For each input $x$, we split it into parts: $x^{(1)}$, $x^{(2)}$... These can be pixels in the context of images or words in context of texts

Then, we want to find parameters $W^{\star}$ such that
$$
\begin{align}
W^{\star} &= \arg\max_{W} \prod_{i=1}^{n}\prod_{j}p(x^{(j)}_{i}) \\
&=\arg\max_{W}\sum_{i=1}^{n}\ln \left( \prod_{j}f(x^{(j)}_{i},W) \right)  \\
&=\arg\max_{W}\sum_{i=1}^{n}\sum_{j}\ln \left( f(x^{(j)}_{i},W) \right) 
\end{align}
$$
> [!info] Why do we multiply $x^{(i)}$ together?
> We suppose each pixel is independent, so multiplying them together can be written as:
> $$
> p(x^{(1)}\cap x^{(2)}\cap x^{(3)}\cap \dots)
> $$
> That is, the probability of the model generating the exact image $x$ we input

> [!important] In context of neural network, $W^{*}$ refers to all the learnable parameters appear in your network. Hence, the above equation is just telling us we want to optimize our network

## Intuition

We want our learning parameters $W^{\star}$ to learn the share pattern from our training example. For example, if we input lots of cats' images, then we want our model to be excelled at predicting pixel so that the pixels form a cat image