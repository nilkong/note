---
type: digest
aliases: Pixel2Mesh
source_link: "[[D-DL4CV-Lec17e-Triangle_Mesh]]"
tags:
---
# Introduction
## Goal

Input an RGB image and output 3D objects using triangle mesh

## Key Ideas

- Iterative Refinement
- Graph Convolution
- Vertex Aligned-Features
- Chamfer Loss Function

---
# Key Ideas Explanation
## Iterative Refinement
### Motivation

A problem in generating triangle mesh 3D object is that we don't know how to initialize the output of the network

### Implementation

This paper initialize the output as an ellipsoid, then the network will make the ellipsoid shrink and shrink until the shape adhere to the surface of the object

> [!info] Vertex-aligned features which will be introduced later is an alternative which can achieve the same result as iterative refinement

![[D-DL4CV-Lec17ea-Pixel2Mesh-iterative-refinement.png]]

## Graph Convolution
### Motivation

In 2D CNN, we use filter to capture features in the feature map, graph convolution is a way for us to do the same thing on triangle mesh

In Pixel2Mesh, we replace ordinary layers with graph convolution layers

### Implementation

Vertex $v_{i}$ has features $f_{i}$
The new feature $f'_{i}$ (like we will create new channel in Conv layer) for vertex $v_{i}$ depends on feature of neighboring vertices $\mathcal{N}(i)$
$$
f'_{i} = W_{0}f_{i} + \sum_{j\in\mathcal{N}(i)}W_{1}f_{j}
$$

## Vertex-Aligned Features
### Implementation

1. First, we start with the same ellipsoid as we did in iterative refinement
2. Next, we use specific methods to match each vertex of our 3D object to the initial 2D input image pixels
3. We use CNN to process the original image, and use the element in the feature map corresponding to the input pixel to update the features (location, colors, ...) of the vertices (This step is done using [[D-DL4CV-Lec15db-RoI_Align#Bilinear Interpolation|bilinear interpolation]])

![[D-DL4CV-Lec17ea-Pixel2Mesh-vertex-aligned-features.png]]

## Chamfer Loss Function
### Motivation

There are many ways to represent the same shape, e.g., a square can be represent with different set and different numbers of vertices

Hence, we need a way to omit the influence of the above situation

### Implementation: Transfer to Point Cloud

**1. For predicted object**
We sample points from the surface of the predicted mesh. Their feature vectors are calculated using bilinear interpolation (This is done online)

**2. For ground-truth object**
We do the same thing like that for predicted object (This is done offline)

**3. Compare the point clouds**
We use [[D-DL4CV-Lec17d-Point_Cloud#Loss Function Chamfer Distance|Chamfer distance]] to calculate loss between predicted and ground-truth objects