---
type: source
category: course
title: "UMich EECS 498-007 / 598-005: Deep Learning for Computer Vision"
author: Justin Johnson
date_start: 2025-07-07
date_end: 2025-08-16
url: https://web.eecs.umich.edu/~justincj/teaching/eecs498/FA2020/
tags:
---
# Introduction to the Course

- Name: UMich EECS 498-007 / 598-005: Deep Learning for Computer Vision
- Lecturer: Justin Johnson
- Course Website: https://web.eecs.umich.edu/~justincj/teaching/eecs498/FA2020/

> [!note] 注：你可以用反向連結返回上一個筆記

# Linear Classifier Network
## Lecture 02: Image Classification

> This lecture introduces the computer vision task - image classification. Then we explain a naive approach K nearest neighbor

- [[D-DL4CV-Lec02-Image_Classification]]


## Lecture 03: Linear Classifier & Regularization

> This lecture introduces linear classifier and the concept of regularization.
> - **Linear classifier**: An image classification method that enables the model learn from the training data
> - **Regularization**: A method which enable us to tell the model our preference toward the final model and prevent overfitting

- [[D-DL4CV-Lec03-Linear_Classifier]]

## Lecture 04: Optimization
> In the previous lecture, we learned the loss function which tells us how good our model is performing currently.
> In this lecture, we introduces "optimization", which is the process utilizing the loss we've computed to improve the model

- [[D-DL4CV-Lec04-Optimization]]

## Lecture 05: Neural Networks

> In this lecture, we introduces
> 1. Feature Transform
> 2. Neural Network
> 3. Space Warping
> 4. Universal Approximation
> 
> We can't control our data distribution, but we can do feature transform to make them distribute in a way which we can easily classify
> Neural network gave us a way to tackle the problem we find in linear classifier. Space warping and universal approximation give us intuition about why and how neural network works

- [[D-DL4CV-Lec05-Neural_Networks]]

## Lecture 06: Backpropagation

> Backpropagation gives us an efficient and modular way to calculate gradient of the loss

- [[D-DL4CV-Lec06-Backpropagation]]

---
# Convolutional Network
## Lecture 07: Convolutional Network 

> Convolutional Network (CNN) resolves the problem of neural network we've learnt in previous lecture, which flattens the image pixels and doesn't respect the spacial structure of the image

- [[D-DL4CV-Lec07-ConvolutionalNetwork]]

## Lecture 08: CNN Architectures

> By introducing models in ImageNet classification challenges, this lecture taught us common rules and methods in creating CNN architectures

- [[D-DL4CV-Lec08-CNNArchitectures]]

## Lecture 10: Training Neural Network I

> In this lecture, we talk in detail about the initializations before training the network: activation function choice, activation functions, data preprocessing, weight initialization, and regularization

- [[D-DL4CV-Lec10-TrainingNeuralNetworksI]]

## Lecture 11: Training Neural Network II

> 1. Learning Rate Schedule
> 2. Tips and Tricks choosing hyperparameters
> 3. Model Ensembles
> 4. Transfer Learning
> 5. Distributed Training

- [[D-DL4CV-Lec11-TrainingNeuralNetworksII]]

---
# RNN and Transformers
## Lecture 12: Recurrent Neural Network

> This lecture introduce RNN, which is a kind of neural network that can deal with tasks where context and order of data matters. For example, speech understanding and stock price prediction over time

- [[D-DL4CV-Lec12-RecurrentNeuralNetwork]]

## Lecture 13: Transformers

> This lecture we start from the concept "attention", which resolve the bottleneck problem in sequence to sequence. After that, we extend the to a new kind of layer, "attention layer", which is a crucial part of the "transformer"

- [[D-DL4CV-Lec13-Transformers]]

---
# Other Computer Vision Tasks
## Lecture 14: Visualizing and Understanding

> This lecture we try to figure out what is actually happening in neural networks, and how do we use these findings to create interesting applications

- [[D-DL4CV-Lec14-Visualizaing_and_Understanding]]

## Lecture 15: Object Detection

> This lecture introduces object detection, a computer vision task that detects multiple objects in images and encloses them with bounding boxes.

- [[D-DL4CV-Lec15-Object_Detection]]