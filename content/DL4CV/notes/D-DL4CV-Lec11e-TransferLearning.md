---
type: digest
aliases: Transfer Learning
source_link: "[[D-DL4CV-Lec11-TrainingNeuralNetworksII]]"
tags:
---
# Motivation

ImageNet, CIFAR10, ... are all image dataset, why do we need to train a new model for every new dataset?

We know that before the last layer, the network is just doing feature extraction, I think if we get rid of last layer, we can treat the network as "feature extractor" and just train the last classification layer!

This is why we come up with "feature extraction" and "fine-tuning"

---
![[D-DL4CV-Lec11e-TransferLearning.png]]
# Feature Extraction

We remove the last layer of the network, freeze the hyperparameters in the other parts of the network, then train a new last layer with the new dataset

---
# Fine-Tuning
## Method

With large dataset, instead of only retrain the last layer, we can continue training the entire model or few layers on the new dataset

## Tricks

1. Train with feature extraction first before fine-tuning
2. Lower the learning rate, commonly make it 1/10
3. Sometimes freeze lower layers to save computation resource - low layers tends to extract low level characteristics which share between different datasets

> [!info] Downstream tasks in image classification like object detection may wrap image classification models, and we'll fine-tune the model before putting into other tasks

---
# When to use them?


|                                    | Dataset Similar to ImageNet        | Data very different from ImageNet                                  |
| ---------------------------------- | ---------------------------------- | ------------------------------------------------------------------ |
| very little data (10s to 100s)     | Use Linear Classifier on top layer | You're in trouble...<br>Try linear classifier from different stage |
| quite lots of data (100s to 1000s) | Finetune a few layers              | Finetune a larger number of layers                                 |

The **upper right** means we can try to put the last layer (classification layer) in different stage of the old network to find the best place to insert last layer