---
type: digest
aliases: Image Segmentation
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: 
---
# 1 Semantic Segmentation
## 1.1 Task Description

We want to label each pixel in the image with a category. Currently we don't care about classifying different objects of the same label

## 1.2 Solutions
### 1.2.1 Sliding Windows

For each pixel we crop a small patch around it, pass it into CNN, and label the pixel with the output of CNN. However, this approach is too slow since we need to use the CNN for every pixel

### 1.2.2 Fully Convolutional Network

[[D-DL4CV-Lec16a-Semantic_Segmentation_Fully_Convolutional_Network]]

---
# 2 Things & Stuffs
## 2.1 Things

Things are object categories that can be separated into object instances

For example: cats, cars, people, ...

## 2.2 Stuffs

Stuffs are object categories that cannot be separated into instances

For example: sky, grass, water, ...

---
# 3 Instance Segmentation
## 3.1 Task Description

We extend the task of semantic segmentation. Now other than classifying all pixels of "cows" as "cows", I also want to identify "cow 1" and "cow 2"

Instance segmentation handle "Things" but not "Stuffs"

## 3.2 Mask R-CNN

[[D-DL4CV-Lec16b-Mask_R-CNN]]

---
# 4 Beyond Instance Segmentation
## 4.1 Panoptic Segmentation

Panoptic segmentation is similar to instance segmentation, but it also handles "Stuffs" other than "Things"

## 4.2 Human Keypoints

Representing the pose of human by detecting a set of keypoints on the human body

For example: nose, eyes, shoulders, elbows, ...

Its implementation is similar to mask R-CNN, it also create a new branch in each region proposal of fast R-CNN