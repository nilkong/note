---
type: digest
aliases: Vanilla RNNs and its Problems
source_link: "[[D-DL4CV-Lec12-RecurrentNeuralNetwork]]"
tags:
---
# What is Vanilla RNNs?
$$
\begin{align}
h_{t} &= \tanh(W_{hh}h_{t-1}+W_{xh}x_{t}+b_{h}) \\
y_{t} &= W_{hy}h_{t} + b_{y}
\end{align}
$$

---
# Vanilla RNNs Gradient Flow
![[D-DL4CV-Lec12c-VanillaRNNs-gradient-flow.png]]
For computation efficiency, we simplify $h_{t}$ calculation with:
$$
\begin{align}
h_{t} &= \tanh(W_{hh}h_{t-1} + W_{xh}x_{t}+b_{h}) \\
&= \tanh \left( \begin{pmatrix}
W_{hh} & W_{hx}
\end{pmatrix} \begin{pmatrix}
h_{t-1} \\
x_{t}
\end{pmatrix} + b_{h}\right) \\
&= \tanh \left( W \begin{pmatrix}
h_{t-1} \\
x_{t}
\end{pmatrix} + b_{h}\right) 
\end{align}
$$

---
# Problem with Vanilla RNNs Gradient Flow
## Repeated $\tanh$ and $W$ in backpropagation

When doing backpropagation, we can observe from the computational graph that we'll need to repeatedly multiply the gradient by $d\tanh(x) / dx$ and $dy / dW$

### Problem with $d\tanh(x) / dx$

- [[D-DL4CV-Lec10a-ActivationFunction#1. Saturated neurons "kill" the gradients|Saturated neurons "kill" the gradients]]

### Problem with $dy / dW$

Largest singular value > 1 -> Exploding Gradients
Largest singular value < 1 -> Vanishing Gradients

## Solution

We give up Vanilla RNNs and use LSTM instead