---
type: digest
aliases: Object Detection
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: 
---
# 1. Object Detection Introduction
## 1.1 Task Definition

**Input**: Single RGB image

**Output**: A set of detected objects with:
1. Category label (from fixed, known set of categories)
2. Bounding boxes (x, y, width, height)

## 1.2 Challenges

- **Multiple Output**: The number of objects varies
- **Multiple types of output**: The task require model to not only detects "what" is the object but also "where" is the object
- **Large Images**: Images contains multiple objects tend to have high resolutions

---
# 2. Detecting a Single Object

[[D-DL4CV-Lec15a-Single_Object_Detection]]

---
# 3. Detecting Multiple Objects
## 3.1 Sliding Windows (Bad Approach)

[[D-DL4CV-Lec15b-Detecting_Multiple_Objects_with_Sliding_Windows]]

## 3.2 Region Proposals
### 3.2.1 Method

We create some algorithms that can find a small set of boxes that are likely to cover objects in the image, then we process classification on these boxes
### 3.2.1 R-CNN

[[D-DL4CV-Lec15c-R-CNN]]

- Intersection over Union (IoU)
- Non-Max Suppression (NMS)
- Mean Average Precision (mAP)
### 3.2.2 Fast R-CNN

[[D-DL4CV-Lec15d-Fast_R-CNN]]

- Rol Pooling
- Rol Align
### 3.2.3 Faster R-CNN

[[D-DL4CV-Lec15e-Faster_R-CNN]]

- Region Proposal Network (RPN)
## 3.3 Single-Stage Object Detection

[[D-DL4CV-Lec15f-Single-Stage_Object_Detection]]