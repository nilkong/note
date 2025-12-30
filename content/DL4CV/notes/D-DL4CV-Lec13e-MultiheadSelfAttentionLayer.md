---
type: digest
aliases:
  - Multihead Self-Attention Layer
  - MHSA
source_link: "[[D-DL4CV-Lec13-Transformers]]"
tags:
---
# Multi-Head Self-Attention Layer (MHSA)

## 1. Introduction

While a [[D-DL4CV-Lec13b-AttentionLayer#Standard Attention Layer|Standard Attention Layer]] uses a single attention distribution to aggregate values, **Multi-Head Self-Attention (MHSA)** allows the model to jointly attend to information from different representation subspaces at different positions.

Think of it as having multiple "Standard Attention" layers running in parallel, each focusing on a different aspect of the sequence (e.g., one head for grammar, one for vocabulary, one for long-range dependencies).

## 2. Input & Hyperparameters

- **Input Matrix**: $X \in \mathbb{R}^{N \times D_{model}}$  
- **Number of Heads**: $h$ (usually 8, 12, or 16)
- **Head Dimension**: $d_k = d_v = D_{model} / h$  
- **Weight Matrices (for each head** $i \in \{1, \dots, h\}$**)**:
    - $W_{Q,i} \in \mathbb{R}^{D_{model} \times d_k}$  
    - $W_{K,i} \in \mathbb{R}^{D_{model} \times d_k}$  
    - $W_{V,i} \in \mathbb{R}^{D_{model} \times d_v}$  
- **Output Projection Matrix**: $W_O \in \mathbb{R}^{D_{model} \times D_{model}}$  

## 3. Computation Pipeline

### Step 1: Parallel Linear Projections

For each head $i$, project the input $X$ into Query, Key, and Value subspaces:

$$
Q_i = XW_{Q,i}, \quad K_i = XW_{K,i}, \quad V_i = XW_{V,i}
$$

_(Shape of_ $Q_i, K_i, V_i$ :  $N \times d_k$_)_

### Step 2: Independent Attention Heads

Compute the attention output for each head independently using the **Scaled Dot-Product Attention** formula (refer to Standard Attention Layer for details):

$$\text{head}_i = \text{Attention}(Q_i, K_i, V_i) = \text{softmax}\left(\frac{Q_i K_i^\top}{\sqrt{d_k}}\right) V_i$$

_(Shape of_ $\text{head}_i$_:_ $N \times d_v$_)_

### Step 3: Concatenation

Combine the outputs of all $h$ heads by concatenating them along the feature dimension:

$$\text{MultiHead\_Concat} = \text{Concat}(\text{head}_1, \text{head}_2, \dots, \text{head}_h)$$

_(Shape:_ $N \times (h \times d_v) = N \times D_{model}$_)_

### Step 4: Final Linear Projection

Apply a final linear layer to mix the information gathered by all heads:

$$Y = (\text{MultiHead\_Concat})\cdot W_O$$

_(Shape:_ $N \times D_{model}$_)_

## 4. Multi-Head vs. Standard Attention: Key Differences

|                        |                                           |                                                                     |
| ---------------------- | ----------------------------------------- | ------------------------------------------------------------------- |
| **Feature**            | **Standard (Single-Head)**                | **Multi-Head**                                                      |
| **Perspective**        | One global weighted average.              | Multiple "points of view" (subspaces).                              |
| **Resolution**         | High-variance scores can dominate.        | Different heads can focus on different items simultaneously.        |
| **Complexity**         | $O(N^2 \cdot D)$                          | $O(N^2 \cdot D)$ (Computationally similar due to reduced head dim). |
| **Feature Extraction** | Struggles with overlapping relationships. | Can capture syntax, semantics, and proximity in parallel.           |

> [!tip] Implementation Efficiency
> 
> In practice, we don't perform $h$ separate matrix multiplications. Instead, we use a single large weight matrix to project $X$ into $D_{model}$ dimensions, then reshape and transpose the tensor to separate the heads. This allows for massive parallelization on GPUs.