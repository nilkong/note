---
type: digest
aliases: Neural Networks
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: 
---
# Feature Transform
## Introduction

In [[D-DL4CV-Lec03a-Linear_Classifier#Hard Cases for Linear Classifier|lecture 3]], we've discussed some feature distributions which make linear classifier hard to deal with. Feature transform is a solution to this problem, which involves in change of variables

For example, if the feature distributions are in circle, then we can apply change of variables to make linear classifier works

$$
\begin{align*}
r &= (x^{2}+y^{2})^{1/2} \\
\theta &= \tan ^{-1}\left( \frac{y}{x} \right)
\end{align*}
$$

## Different Ways of Feature Transform in Computer Vision

[[D-DL4CV-Lec05a-Feature_Transform]]

---

# Neural Network
## Introduction (Use Two-Layer Neural Network as Example)
![[D-DL4CV-Lec05-Neural_Networks-neural-network-introduction.png]]
**Input Layer -> Hidden Layer:**
$$
h = f_{1}(x) = W_{1}x+b_{1} \in \mathbb{R}^{H}
$$
**Hidden Layer Neuron**:
$$
h' = \text{ReLU}(h) = \max(0, h)
$$
**Hidden Layer -> Output Layer**:
 $$
s = W_{2}h' + b_{2} \in \mathbb{R}^{C}
$$

> [!important] In convention people often ignore the bias term when writing it. However, we should keep in mind that the bias term still exists

## Concepts
### Fully-Connected Neural Network

If every neuron in the second layer is a linear combination of all the neurons in the first layer, then we said the neural network to be "fully-connected"

> [!info] also can be called as "Multi-Layer Perceptron" (MLP)

### Depth

Depth is the number of layer with trainable parameters (thus exclude input layer)
Another way to get the depth of the layer is by counting the number of weight matrices

### Width

The width of a layer is the number of neurons in the layer

### Distributed Representation

When we use linear classifier, we notice that only one [[D-DL4CV-Lec03a-Linear_Classifier#Visual Viewpoint|template]] per label can't cover every possible appearance of the label

The concept of **"distributed representation"** is using multiple templates per label to cover every possible appearance of the label. For example, the horse facing left and the horse facing right can be separated into two templates.

These templates are stored inside the hidden layer. When we head from the hidden layer to the output layer, each of the template will contribute to the final decision 

> [!warning] Like seen in the picture, some templates in hidden layer aren't interpretable

![[D-DL4CV-Lec05-Neural_Networks-distributed-representation.png]]

## Activation Function
### Introduction

Activation function is a key component to make neural networks work as we expect
It decides how much strength should we "recommend" this neuron (template) to the next layer

### Some Activation Functions

| Name    | Function                         |
| ------- | -------------------------------- |
| ReLU    | $\max(0,x)$                      |
| Sigmoid | $\sigma(x) = \frac{1}{1+e^{-x}}$ |
| ...     | ...                              |

> [!important] Most of the time ReLU is a good default choice for most of the problem

### Why is activation function so important?

Use the two-layer neural network as example, its process can be written as:
$$
f(x) = W_{2}\max(0,W_{1}x)
$$
If we get rid of the activation function (ReLU), then we'll left with:
$$
f(x) = W_{2}W_{1}x
$$
Let $W_{3}=W_{2}W_{1}$, then $f(x)=W_{3}x$, which makes the neural network again a linear classifier.

Hence, we can conclude that it is the activation function that makes neural networks different from linear classifier

---
# Space Warping

[[D-DL4CV-Lec05b-Space_Warping]]

# Universal Approximation

[[D-DL4CV-Lec05c-Universal_Approximation]]

# Convex Functions

[[D-DL4CV-Lec05d-Convex_Function]]
