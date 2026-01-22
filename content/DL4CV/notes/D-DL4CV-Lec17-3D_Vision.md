---
type: digest
aliases: 3D Vision
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: 
---
# 3D Representation
## Depth Map

Depth map give the distance from the camera to the object

- [[D-DL4CV-Lec17a-Depth_Map]]

## Surface Normals

Surface normals define a vector perpendicular to the object's surface for every pixel in the image

- [[D-DL4CV-Lec17b-Surface_Normals]]

## Voxel Grid

Representing 3D objects as small blocks

- [[D-DL4CV-Lec17c-Voxel_Grid]]

## Implicit Surface

We create a function that takes in the coordinates then output 1, 1/2, and 0.
- 1 means the coordinate is inside the object
- 0 means outside
- 1/2 means on the object
$$
o:\mathbb{R}^{3} \to \left\{ 0,1 \right\} 
$$
The object surface can be expressed as
$$
\left\{ x:o(x)=\frac{1}{2} \right\} 
$$

This function will be learned in training process

> [!info] Implicit surface allows for multiscale outputs like [[D-DL4CV-Lec17c-Voxel_Grid#Oct-Trees|Oct-Trees]]

## Point Cloud

Just use points to depict the surface of the object
- [[D-DL4CV-Lec17d-Point_Cloud]]

## Triangle Mesh

Use points that are connected to each other to represent surface of objects
- [[D-DL4CV-Lec17e-Triangle_Mesh]]

---
# Shape Comparison Metrics
## Intersection over Union (IoU)

**Problems**:
- Struggles to capture thin structures
- Cannot applied to point clouds since it doesn't have volume
- Small IoU difference doesn't provide meaningful information
- For triangle meshes, we need to first turn it into voxel grid before we can compute IoU

## Chamfer Distance

**Problem**:
- Very few badly placed points can dramatically skew the entire metric

## F1 Score
### Precision & Recall

Precision@$t$ = fraction of predicted points within $t$ of some ground-truth point
Recall@$t$ = fraction of ground-truth points within $t$ of some predicted point

We compute the output $F1@t$ by
$$
F1@t = 2\cdot \frac{\text{Precision@t}\cdot \text{Recall@t}}{\text{Precision@t}+\text{Recall@t}}
$$
> [!important] F1 score is best shape prediction metric in common use

---
# Camera System
## Canonical Coordinates
### Introduction

**Definition**: A fixed, standard coordinate system where objects are always oriented in the same way, regardless of how they appear in the input image.

**Example**: Regardless of how the chairs face in the image, we always predict it facing the same direction

### Problem

Neural networks learn from associating input features with output predictions. However, when the spatial alignment is broken, it become harder for the network to learn consistent mappings

## View Coordinates

**Definition**: A coordinate system aligned with the camera's viewpoint - objects are oriented relative to how the camera sees them.

---
# Datasets
## ShapeNet

**Cons**:
- Without context, isolated object

## Pix3D

**Pros**:
- Real images with context
- Only 1 object per image

---
# Mesh R-CNN
## Motivation

Topology tells us we can't create doughnut shape from ellipsoid. This becomes the restriction for [[D-DL4CV-Lec17ea-Pixel2Mesh|Pixel2Mesh]]

Mesh R-CNN resolve this problem by changing the way we initialize the input of Pixel2Mesh

## Implementation

1. Predict 3D objects with voxel grid
2. Sample on the surface of the object to create triangle mesh
3. Run Pixel2Mesh to get more accurate object