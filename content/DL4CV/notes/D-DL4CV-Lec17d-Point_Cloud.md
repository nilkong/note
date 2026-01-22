---
type: digest
aliases: Point Cloud
source_link: "[[D-DL4CV-Lec17-3D_Vision]]"
tags:
---
# What is Point Cloud?
## Introduction

We depict the surface of the object with points, and memorize the coordinates of the points

## Pros and Cons

**Pros**:
- Can represent fine structures without huge numbers of points

**Cons**:
- Point clouds are just scattered points, they don't contain information about
	- Which points are connected to each other
	- What's the actual surface look like

---
# Tasks
## Processing Point Cloud Inputs: PointNet

1. First, we process every coordinate one by one with the same fully-connected network
2. Next, we do max pooling on the outputs
3. Eventually, we pass the feature vector into fully-connected network and output class scores

> [!info] Processing the coordinates one by one can avoid the order of the coordinate affect the result


![[D-DL4CV-Lec17d-Point_Cloud-PointNet.png]]

## Generating Point Cloud Outputs
### 1. Feature Extraction

We use 2D CNN to extract feature from input image

### 2.1 Fully Connected Branch

- We straighten the image features and send it into fully connected network to predict fix number of points ($P_{1}$)
- Fully connected network is good at learning the overall structure of the object, but bad at predicting the detail of the object

### 2.2 Convolutional Branch

- We send image features into 2D CNN to predict $P_{2}$ points for every spatial position ($H'\times W'$)
- Convolutional layer, on the other hand, is good at predicting details of the object

### 3. Output Aggregation

Finally, we combine the points predicted by fully connected network and CNN to get the final output

![[D-DL4CV-Lec17d-Point_Cloud-generate-pointcloud.png]]

---
# Loss Function: Chamfer Distance
## Requirement

We need a way to compare the point clouds as sets. That is, we don't want the order we memorize the coordinate affect the final result

## Chamfer Distance
$$
d_{CD}(S_{1},S_{2}) = \sum_{x\in S_{1}} \min_{y\in S_{2}}\left| x-y \right|_{2} ^{2} + \sum_{y\in S_{2}}\min_{x\in S_{1}}\left| x-y \right|_{2}^{2}
$$

> [!info] subscript 2 means square root
> i.e. $|x-y|^{2}_{2} = \sqrt{ (x-y)^{2} }$

