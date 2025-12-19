---
type: digest
aliases:
  - Space Warping
source_link: "[[D-DL4CV-Lec05-Neural_Networks]]"
tags: []
---
# Space Warping
## Introduction

Space warping gives us an intuition about how neural network works in "geometric viewpoint"

## Understand Space Warping
![[D-DL4CV-Lec05-Neural_Networks-space-warping-step.png]]
**Steps of Space Warping**:
1. In the original space, draw the linear classifiers defined by the weight matrix
2. Apply linear transformation on the original space to make the linear classifiers the new axis
3. The activation function will then be applied to the features, which will change the distribution of features in the space
	- Use ReLU as example, it will collapse negative component in the feature vector to 0
4. Now, we'll repeat the first three steps until we get to the output layer

> [!note] Simply speaking, every point on the graph is an input. What neural network is doing is just applying transformation on input so that the data distribution become easier to classify

**Visualization**:
![[D-DL4CV-Lec05-Neural_Networks-space-warping-visualization1.png]]
![[D-DL4CV-Lec05-Neural_Networks-space-warping-visualization2.png]]
![[D-DL4CV-Lec05-Neural_Networks-space-warping-visualization3.png]]
## Demo

- [Andrej Karpathy Demo](https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html)
