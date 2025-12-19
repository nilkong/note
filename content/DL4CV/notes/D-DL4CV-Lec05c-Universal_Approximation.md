---
type: digest
aliases:
  - Universal Approximation
source_link: "[[D-DL4CV-Lec05-Neural_Networks]]"
tags: []
---
# Universal Approximation
## Theorem

A neural network with one hidden layer containing finite neurons can approximate any continuous function $f:\mathbb{R}^{n}\to \mathbb{R}^{m}$ in any precision

## Explanation
### Output of a neuron in the hidden layer is a shifted, scaled ReLU
![[D-DL4CV-Lec05-Neural_Networks-universal-approximation1.png]]
- The image on the right represent a neuron in hidden layer

### 4 of these properly shifted ReLUs create a bump function
![[D-DL4CV-Lec05-Neural_Networks-universal-approximation2.png]]
- Two neuron can represent from flat at $y=0$ to flat at $y=t$
- The other two neuron can represent going down from $y=t$ to stay flat at $y=0$

### With many of these bump functions, we can approximate any continuous function
![[D-DL4CV-Lec05-Neural_Networks-universal-approximation3.png]]
- With many bumps we've created in the last step, we can simulate any continuous function

## Statement

**What Universal Approximation Tells Us**:
- Neural networks can represent any function

**What Universal Approximation Don't Tells Us**:
- Whether the optimization process can really learn any function
- How much data we need to learn a function
