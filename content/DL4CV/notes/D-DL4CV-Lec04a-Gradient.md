---
type: digest
aliases:
  - Gradient
source_link: "[[D-DL4CV-Lec04-Optimization]]"
tags: []
---
# Introduction
## Intuition

A gradient is a vector that points to the steepest increase of the function (here $L(w)$) at the given point

> [!info] The additive inverse of the gradient vector points to the steepest decrease of the function at the given point
## Math Definition

If $f$ is a function of two variables $x$ and $y$, then the gradient of $f$ is the vector function $\nabla f$ defined by
$$
\nabla f(x,y) = \langle f_{x}(x,y),f_{y}(x,y) \rangle = \frac{\partial f}{\partial x}\hat{i} + \frac{\partial f}{\partial y}\hat{j}
$$

---
# Numeric Gradient
## Strategy

Numeric gradient rely on the formula below
$$
\frac{\partial f}{\partial x}= \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}
$$
This strategy observes the loss change in small change of weight. Then, by dividing the small change in weight by the loss change, we can approximate $\frac{\partial f}{\partial x}$

By doing the same thing $n$ times, which is the dimension of the weight, we can get the gradient $\frac{dL}{dW}$

## Advantages & Disadvantages

**Advantages**:
1. Easy to implement

**Disadvantages**:
1. Slow: $O(n)$ ($n$ is dimension of weight)
2. This method **"approximate"** the gradient using numerical approximation rather than getting the actual value

---
# Analytic Gradient
## Strategy

We apply calculus rules to the loss function and receive $\partial L / \partial W = \nabla_{W}L(W)$. After that, we can put in the coordinates (pixel value of image) and get the accurate gradient

## Sketch of Implementation
$$
L(W) = \frac{1}{N}\sum_{i=1}^{N}L_{i}(x_{i},y_{i}, W) + \lambda R(W)
$$
$$
\text{Gradient} = \nabla_{W}L(W) = \frac{1}{N}\sum_{i=1}^{N}\nabla_{W}L_{i}(x_{i}, y_{i}, W) + \nabla_{W}R(W)
$$

## Advantages & Disadvantages

**Advantages**:
1. Fast: By the method [[D-DL4CV-Lec06-Backpropagation|backpropagation]]
2. Get the exact gradient value rather than approximate it

**Disadvantage**:
1. Error-Prone: Hard to implement, often has bugs

> [!important] In real world, we'll almost always use analytic gradient rather than numeric gradient

---
# Gradient Check

We've mentioned that analytic gradient is error-prone and numeric gradient is easy to implement. Hence, we can use numeric gradient to check the correctness of analytic gradient. We call this step **"gradient check"**

To overcome the inefficiency of numeric gradient, in gradient check, we'll instead use lower dimensional samples. This way, we can check analytic gradient's correctness without wasting so much time

> [!info] PyTorch offers `torch.autograd.gradcheck` function for gradient check
