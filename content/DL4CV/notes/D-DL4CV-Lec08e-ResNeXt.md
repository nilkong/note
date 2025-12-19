---
type: digest
aliases: ResNeXt Introduction
source_link: "[[D-DL4CV-Lec08-CNNArchitectures]]"
tags: 
---
# Introduction

ResNeXt improve the performance of ResNet by introducing the concept of "group convolution"

---

# Group Convolution
## Method

Similar to GoogLeNet, ResNeXt splits each stage into multiple parallel branches that are concatenated after processing. We introduce cardinality $G$, a hyperparameter that determines the number of groups. The input is divided into $G$ groups of $C_{in} / G$ channels each. Each branch processes its group independently and outputs $C_{out}/G$ channels. Concatenating all branch outputs reconstructs the full $C_{out}$ dimension.

## small $c$

We introduce another parameter small $c$ in ResNeXt, this parameter is chosen to make the grouped convolution has the same FLOPs like that of ResNet

It is the number of channel in the middle layer of bottleneck block, we can get its value by solving
$$
9Gc^{2} + 8GCc - 17C^{2} = 0
$$

![[D-DL4CV-Lec8e-ResNeXt.png]]