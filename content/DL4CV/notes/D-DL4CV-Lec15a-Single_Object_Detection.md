---
type: digest
aliases: Single Object Detection
source_link: "[[D-DL4CV-Lec15-Object_Detection]]"
tags:
---

# Single Object Detection
## Steps
### Step 1: Pass the image into a pretrained CNN

This step uses the technique of [[D-DL4CV-Lec11e-TransferLearning|transfer learning]], the CNN is often pretrained on ImageNet

### Step 2: Predict

 After flattening the Conv outputs, we use two parallel FC layers instead of one, one of them predicts the category of the object, the other one predicts the position of the object

**Category Prediction**: Same as original CNN
**Position Prediction**: Predict the box enclosing the object, i.e., $(x, y, \text{width}, \text{height})$

### Step 3: Optimization

1. We compute the loss of two FC layers separately
2. Next, we combine them with weighted sum to get final loss
3. Use backpropagation to update learnable parameters

![[D-DL4CV-Lec15a-Single_Object_Detection.png]]
## Comment

This method works pretty well on single object detection. However, this method can't work for multiple objects detection