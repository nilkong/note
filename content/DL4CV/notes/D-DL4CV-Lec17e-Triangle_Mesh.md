---
type: digest
aliases: Triangle Mesh
source_link: "[[D-DL4CV-Lec17-3D_Vision]]"
tags:
---
# What is Triangle Mesh?
## Introduction

Represent a 3D shape as a set of triangles. These triangles are made up of connections of vertices

## Pros and Cons

**Pros**:
- Standard representation for graphics
- Explicitly represent 3D shapes - we can know the exact surface of the object

**Cons**:
- Nontrivial to process with neural nets

---
# Predicting Meshes: Pixel2Mesh
## Task

Input an RGB image and output 3D objects using triangle mesh

## Implementation

[[D-DL4CV-Lec17ea-Pixel2Mesh]]