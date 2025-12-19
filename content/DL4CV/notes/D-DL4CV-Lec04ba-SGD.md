---
type: digest
aliases:
  - Stochastic Gradient Descent (SGD)
source_link: "[[D-DL4CV-Lec04b-Gradient_Descent]]"
tags: []
---
# Stochastic Gradient Descent (SGD)
## Strategy

In contrast to the batch gradient descent, stochastic gradient descent use a **"minibatch"** of samples to compute the gradients

Common choose of minibatch sample number is 32 / 64 / 128

> [!info] We use the name "Batch Gradient Descent" to express the gradient descent process using the entire training dataset to calculate gradient
> Batch gradient descent is too expensive when having large training set, thus we mostly use SGD

## Mathematical Expression
$$
x_{t+1} = x_{t} - \alpha \nabla f(x_{t})
$$
## Implementation

**Implementation**:
```python
# SGD
w = initialize_weights()
for t in range(num_steps):
	minibatch = sample_data(data, batch_size)
	dw = compute_gradient(loss_fn, minibatch, w)
	w -= learning_rate * dw
```

**Hyperparameters**:
1. Weight Initialization
2. Number of Steps
3. Learning Rate
4. Batch Size
5. Data Sampling

## Problem

1. Progress slow along shallow dimension, oscillate back and forth in steep direction
2. Stop when reaching local minimum and saddle point because of zero gradient (extremely easy to encountered when having many dimensions)
3. Since gradient come from minibatch, it can be noisy