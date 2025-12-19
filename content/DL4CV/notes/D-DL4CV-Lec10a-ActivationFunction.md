---
type: digest
aliases: Choice of Activation Function
source_link: "[[D-DL4CV-Lec10-TrainingNeuralNetworksI]]"
tags: []
---
# Sigmoid Function
## Introduction
![[D-DL4CV-Lec10a-ActivationFunction-sigmoid.png]]
$$
\sigma(x) = \frac{1}{1+e^{-x}}
$$
- Squash numbers to range $[0, 1]$
- Historically popular since they have nice interpretation as "firing rate" of a neuron

## 3 Problems
### 1. Saturated neurons "kill" the gradients

**The Problem**:

When inputs to sigmoid have large magnitude (very positive or very negative), the sigmoid function becomes nearly flat, causing its derivative to approach zero.

**The Consequence**:

During backpropagation, gradients flowing through saturated neurons become extremely small (near zero), effectively blocking gradient flow to earlier layers.

**Why This Breaks Training**:

Layers before the saturated neuron receive virtually no gradient signal, so their weights barely update. This "kills" learning in the downstream layers, leaving parts of the network unable to improve regardless of how many training iterations you run.

### 2. Sigmoid outputs are not zero-centered

**The Problem**:

1. In a neural network layer:
$$
h_{i}^{(\ell)} = \sum_{j}w_{i,j}^{(\ell)}\sigma \left( h_{j}^{(\ell-1)} \right) + b_{i}^{(\ell)}
$$
2. When we compute gradients: $\partial h_{i}^{(\ell)} / \partial w_{i,j}^{(\ell)} = \sigma \left( h_{j}^{(\ell-1)} \right)$ Since sigmoid always outputs positive values: $\sigma(x)>0$ for all $x$

**The Consequence**:

During backpropagation, all weight gradients ​$\partial L / \partial w_{i,j}^{(\ell)}$ will have the same sign:

- If the loss is positive → ALL weight gradients are positive
- If the loss is negative → ALL weight gradients are negative

**Why This Limits Optimization**:

In the weight space, we can only move in directions where all weights change in the same direction (all increase or all decrease together). We cannot move diagonally where some weights increase while others decrease.

This is like being forced only northeast and southwest but not other directions

### 3. exp() is a bit compute expensive

 In contrast with other activation function like ReLU, it is relatively expensive

---

# Tanh
## Introduction
![[D-DL4CV-Lec10a-ActivationFunction-tanh.png]]
$$
\tanh(x)
$$
## Pros and Cons

1. Output can be negative, zero, and positive (zero-centered)
2. still kills gradient when saturated

---

# ReLU
## Introduction
![[D-DL4CV-Lec10a-ActivationFunction-relu.png]]
$$
\text{ReLU}(x) = \max(0,x)
$$

## Problems
### 1. Not zero-centered output

Same as sigmoid

### 2. When input $x<0$, the downstream neuron died
![[D-DL4CV-Lec10a-ActivationFunction-dead-region.png]]

**Problem**: When ReLU input $y < 0$:

- ReLU outputs 0
- Gradient $d,\text{ReLU} / dy = 0$

**Consequence**: Zero gradient blocks backpropagation:

- Upstream weights get no gradient signal
- No weight updates occur
- Weights remain unchanged

**Result**: Dead neuron cycle:

- Same weights → same negative input → same zero gradient
- Neuron permanently "dies" and never recovers
- Lost computational capacity

> [!info] A way to prevent
> We can initialize biases with slightly positive value instead of 0, which gives neuron opportunity moving out of "dead region"

---

# Leaky ReLU
## Introduction
![[D-DL4CV-Lec10a-ActivationFunction-leaky-relu.png]]
$$
f(x) = \max(\alpha x,x)
$$
where $\alpha$ is a hyperparameter which often set to $\alpha=0.1$

## Pros and Cons

**Pros**:
1. Does not saturate
2. Computationally efficient
3. Converge much faster than sigmoid/tanh
4. will not "die" (because no derivative equals 0)

**Cons**:
1. $x=0$ not differentiable

---

# Exponential Linear Unit (ELU)
![[D-DL4CV-Lec10a-ActivationFunction-elu.png]]
$$
f(x) = \begin{cases}
x & \text{if } x >0 \\
\alpha(e^{x}-1) & \text{if }x\leq 0
\end{cases}
$$
$\alpha$ is a hyperparameter and is usually set to $1$

## Pros and Cons

**Pros**:
1. All benefits of Leaky ReLU
2. Differentiable at $x=0$

**Cons**:
1. Require exp() computation

# Summary
![[D-DL4CV-Lec10a-ActivationFunction-accuracy.png]]
1. Don't think too hard, just use **ReLU**
2. Try **Leaky ReLU / ELU / SELU / GELU** if we need squeeze last $0.1$%
3. Never use **sigmoid or tanh**