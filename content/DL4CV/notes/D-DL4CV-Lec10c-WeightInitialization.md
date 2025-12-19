---
type: digest
aliases: Weight Initialization
source_link: "[[D-DL4CV-Lec10-TrainingNeuralNetworksI]]"
tags: []
---
# Why We Need to Discuss Weight Initialization?

To answer this question, we can see what if we set all the weights ($W$) and biases ($b$) to 0

## Symmetry Breaking

Symmetry breaking refers to the process of ensuring that neurons in the same layer learn different features during training

When we set weights and biases to 0:
### Forward Pass

Every neurons in the same layer receives the same input and produces identical outputs. When $W=0$ and $b=0$, then the outputs are also 0

### Backward Pass 

- The loss gradient with respect of each hidden neuron's output is identical
- Each hidden neuron receives the same gradient
- Therefore, all weights updates are identical

> [!info] We'll still encounter this problem if we set all weights to the same values

---
# Initialize with Small Random Numbers
## What do we do?

We initialize the weights with small random numbers in Gaussian distribution with zero mean, i.e., `W = 0.01 * np.random.randn(Din, Dout)`

## What might go wrong?

Shallow networks work fine, but deeper networks face initialization problems.

### Weight too small (W = 0.01)
![[D-DL4CV-Lec10c-WeightInitialization-random-toosmall.png]]

**Problem chain:**
Weight small → Layer output small → Activations cluster near 0 → Next layer input small → Repeat...

**Why no learning:**
Local gradient = $\partial(\text{output}) / \partial x$ (the input)
Since x → 0, gradients → 0, so weight updates → 0

### Weight too big (W = 0.05)  
![[D-DL4CV-Lec10c-WeightInitialization-random-toobig.png]]

**Problem chain:**
Weight large → Layer output large → Activations saturate at ±1 → Next layer input large → Repeat...

**Why no learning:**
When tanh input is large, $\partial \tanh / \partial x \to 0$ (saturated region)
Local gradients → 0, so weight updates → 0

**Key insight:** Both extremes kill gradients - either through vanishing activations or saturated derivatives.

---
# Xavier Initialization
## Core Concept

The core concept of Xavier Initialization is making "variance of output = variance of input"

> [!info] This concept only works for zero-centered activation

## Method

We initialize weights with `W = np.random.randn(Din, Dout) / np.sqrt(Din)`. This way of initialization will make activations work just fine

## Derivation
$$
y=Wx\hspace{0.5cm}\text{and}\hspace{0.5cm}y_{i}=\sum_{j=1}^{D_{in}}x_{j}w_{j}
$$
Now, we can derive variance of $y_{i}$
$$
\begin{align*} \\
\text{Var}(y_i) &= D_{in} \cdot \text{Var}(x_i w_i)  &\text{[Assume x, w are iid]} \\
&= D_{in} \cdot (E[x_i^2]E[w_i^2] - E[x_i]^2 E[w_i]^2) &\text{[Assume x, w independent]} \\
&= D_{in} \cdot \text{Var}(x_{i}) \cdot \text{Var}(w_{i}) &\text{[Assume x, w are zero-mean]}
\end{align*}
$$
By the above equations we can tell **if $\text{Var}(w_{i})=1 / D_{in}$ then $\text{Var}(y_{i})=\text{Var}(x_{i})$

---
# ReLU Weight Initialization (Kaiming / MSRA Initialization)

Xavier initialization makes ReLU activations collapse to 0 because ReLU isn't zero-centered

We can use Kaiming / MSRA initialization to correct it. This initialization adjust $\sigma=\sqrt{ 1 / D_{in} }$ to $\sigma = \sqrt{ 2 / D_{in} }$

---
# Residual Networks Weight Initialization

**Problem**:
If we initialize residual network with MSRA: then $\text{Var(F(x))}=\text{Var}(x)$. However, this makes $\text{Var}(F(x)+x) > \text{Var}(x)$, meaning variance grow with each residual block. This might cause variance explosion in deeper network

**Solution**:
We initialize the first conv with MSRA, and the second conv to zero. Then $\text{Var}(x+F(x))=\text{Var}(x)$
