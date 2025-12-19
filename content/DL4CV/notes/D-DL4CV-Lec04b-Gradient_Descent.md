---
type: digest
aliases:
  - Gradient Descent
source_link: "[[D-DL4CV-Lec04-Optimization]]"
tags: []
---
# Overview
## Introduction

Now, we need to start walking down the hill (change $w$) based on the gradient we calculated earlier. Gradient descent is an algorithm which iteratively step in the direction of the negative gradient (direction of steepest local descent)

## Hyperparameters

**Weight Initialization**:
Most of time random is enough, but some machine learning problem require strategy in initialization to get better result

**Number of Steps**:
Number of iterations (steps) we want
Theoretically, the larger it is, the better the result will be. However, you'll need to wait more time training

**Learning Rate** ($\alpha$):
How big you want a step to be

Large Learning Rate = Possible of overshoot
Small Learning Rate = Longer training time

**Batch Size**:
How big you want the minibatch to be

**Data Sampling**:
How do you choose which subset of data you want from the training dataset

---

# Gradient Descent Methods
## Stochastic Gradient Descent (SGD)

[[D-DL4CV-Lec04ba-SGD]]

## SGD + Momentum

[[D-DL4CV-Lec04bb-SGD_Momentum]]

## Nesterov Momentum

[[D-DL4CV-Lec04bc-Nesterov_Momentum]]

## AdaGrad
### Implementation

```python
grad_squared = 0
for t in range(num_steps):
	dw = compute_gradient(w)
	grad_squared += dw * dw
	w -= learning_rate * dw / (grad_squared.sqrt() + 1e-7)
```

### Problem

`grad_squared` always get larger and larger, it may becomes too large which makes future steps too small

## RMSProp: "Leaky AdaGrad"
### Strategy

Improved version of AdaGrad which makes `grad_squared` decays over time

### Implementation

```python
grad_squared = 0
for t in range(num_steps):
	dw = compute_gradient(w)
	grad_squared = decay_rate * grad_squared + (1 - decay_rate) * dw * dw
	w -= learning_rate * dw / (grad_squared.sqrt() + 1e-7)
```

## Adam: RMSProp + Momentum
### Strategy

RMSProp + Momentum

###  Implementation

```python
moment1 = 0
moment2 = 0
for t in range(num_steps):
	dw = compute_gradient(w)
	moment1 = beta1 * moment1 + (1 - beta1) * dw
	moment2 = beta2 * moment2 + (1 - beta2) * dw * dw
	w -= learning_rate * moment1 / (moment2.sqrt() + 1e-7)
```

---

# Optimization Algorithm Comparison

| Algorithm    | Track first moments (Momentum) | Tracks second moments (Adaptive learning rate) | Leaky second moments | Bias correction for moment estimates |
| ------------ | ------------------------------ | ---------------------------------------------- | -------------------- | ------------------------------------ |
| SGD          | ❌                              | ❌                                              | ❌                    | ❌                                    |
| SGD+Momentum | ✅                              | ❌                                              | ❌                    | ❌                                    |
| Nesterov     | ✅                              | ❌                                              | ❌                    | ❌                                    |
| AdaGrad      | ❌                              | ✅                                              | ❌                    | ❌                                    |
| RMSProp      | ❌                              | ✅                                              | ✅                    | ❌                                    |
| Adam         | ✅                              | ✅                                              | ✅                    | ✅                                    |
