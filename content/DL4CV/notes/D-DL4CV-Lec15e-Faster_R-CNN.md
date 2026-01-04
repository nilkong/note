---
type: digest
aliases: Faster R-CNN
source_link: "[[D-DL4CV-Lec15-Object_Detection]]"
tags:
---
# Faster R-CNN
## Introduction

Faster R-CNN increase the speed of fast R-CNN by using RPN instead of selection search to predict proposals from features

The other parts of faster R-CNN are exactly same as that of fast R-CNN

## Region Proposal Network (RPN)

[[D-DL4CV-Lec15ea-RPN]]

> [!info] RPN uses both classification and regression, but only for **coarse filtering** - quickly identifying "object might be here" rather than precise detection. This avoids duplicating the final stage's detailed work, making the whole pipeline efficient through clear division of labor.

## Losses in Faster R-CNN

1. **RPN classification**: whether anchor box is object / not an object
2. **RPN regression**: predict transform from anchor box to proposal box
3. **Object classification**: classify proposals as background / object
4. **Object regression**: predict transform from proposal box to object box