---
type: digest
aliases: Feature Space Nearest Neighbor Analysis
source_link: "[[D-DL4CV-Lec14-Visualizaing_and_Understanding]]"
tags: 
---
# Feature Space Nearest Neighbor Analysis

In CNNs, when we enter the end of the network, we'll destroy the spatial information of the feature map and pass it into FC layer

In this method, we record the feature vectors output by each image. Then, when we process a test set image, we can compare its feature vector with those in the training set by nearest neighbor. This can give us an intuition which images are closed to the test image in the feature map

Recall: [[D-DL4CV-Lec02a-kNN]]

![[D-DL4CV-Lec14a-Feature_Space_Nearest_Neighbor_Analysis.png]]