---
type: digest
aliases:
  - upsampling
source_link: "[[D-DL4CV-Lec16a-Semantic_Segmentation_Fully_Convolutional_Network]]"
tags:
---
# What is Upsampling?

It is the reverse operation of downsampling. Instead of extracting features from larger input to smaller output, we expand the input to get larger output

---
# In-Network Upsampling
## Unpooling
### Bed of Nails

Expand each input pixel to a $2\times 2$ block: place original value in top-left, fill remaining positions with 0

### Nearest Neighbor

Expand each input pixel to a $2\times 2$ block: duplicate original value to all positions

![[D-DL4CV-Lec16_1a-Upsampling-unpooling.png]]

## Bilinear Interpolation

We use 4 nearest neighbor coordinates to fit a polynomial
$$
p(x,y)=\sum_{i=0}^{1}\sum_{j=0}^{1}a_{ij}x^{i}y^{j}
$$
Then we insert our output coordinates to get pixel values

![[D-DL4CV-Lec16_1a-Upsampling-bilinear-interpolation.png]]

## Bicubic Interpolation

We use 16 nearest integer coordinates to fit in the polynomial:
$$
p(x,y) = \sum_{i=0}^{3}\sum_{j=0}^{3}a_{ij}x^{i}y^{j}
$$
then we insert our output coordinates to get pixel values

## Max Unpooling

Each max unpooling layer pair with a max pooling layer. We first remember which positions had the max value. Then, when doing max unpooling, we place each value in the input into the remembered position, and fill other positions with zeros

![[D-DL4CV-Lec16_1a-Upsampling-max-unpooling.png]]

---
# Learnable Unsampling: Transposed Convolution
## Introduction

Transposed convolution is an operation that performs learnable unsampling by applying mathematical transpose of a convolution operation (filter).

## Core Concept

- **Input**: Small feature map
- **Output** Larger feature map
- **Difference from regular convolution**: Expands rather than compresses spatial dimensions

## How does it works
### Input
```
[1, 2]
[3, 4]
```
### Step 1: Expand with zeros

We make the rows and columns $k$ times where $k$ is the stride
```
(stride 2)
[1, 0, 2, 0]
[0, 0, 0, 0]
[3, 0, 4, 0]
[0, 0, 0, 0]
```

### Step 2: Apply Convolution

We simply apply the filters like in convolution on the expanded matrix. Here we'll create $4\times 4$ matrix by $3\times 3$ filter stride 1 padding 1

> [!info] Stride in transposed convolution means how much times we want to upsample while in convolution it means how much do we want to downsample

![[D-DL4CV-Lec16_1a-Upsampling-transposed-convolution.png]]

## Convolution as Matrix Multiplication

We can express convolution in terms of matrix multiplication
$$
\vec{x}\star \vec{a} = X\vec{a}
$$
$$
\begin{bmatrix}
x & y & z & 0 & 0 & 0 \\
0 & x & y & z & 0 & 0 \\
0 & 0 & x & y & z & 0 \\
0 & 0 & 0 & x & y & z
\end{bmatrix} \begin{bmatrix}
0 \\
a \\
b \\
c \\
d \\
0
\end{bmatrix} = \begin{bmatrix}
ay + bz \\
ax+by+cz \\
bx+cy+dz \\
cx+dy
\end{bmatrix}
$$
We can also express transposed Conv with stride 1 as normal Conv
$$
\vec{x} \star^{T} \vec{a} = X^{T}\vec{a}
$$
$$
\begin{bmatrix}
x & 0 & 0 & 0 \\
y & x & 0 & 0 \\
z & y & x & 0 \\
0 & z & y & x \\
0 & 0 & z & y \\
0 & 0 & 0 & z
\end{bmatrix} \begin{bmatrix}
a \\
b \\
c \\
d \\
\end{bmatrix} = \begin{bmatrix}
ax \\
ay+bx \\
az + by + cx \\
bz + cy + dx \\
cz + dy \\
dz
\end{bmatrix}
$$
However, with stride > 1, we can't express transposed Conv as normal Conv
$$
\begin{bmatrix}
x & 0 \\
y & 0 \\
z & x \\
0 & y \\
0 & z \\
0 & 0
\end{bmatrix} \begin{bmatrix}
a \\
b
\end{bmatrix} = \begin{bmatrix}
ax \\
ay \\
az+bx \\
by \\
bz \\
0
\end{bmatrix}
$$
