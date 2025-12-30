---
type: digest
aliases: Recurrent Neural Network (RNN)
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: []
---
# Introduction
## Introduction

Traditional neural networks excel at processing single, static inputs—like classifying a photograph. But they falter when faced with sequences where context and order matter, such as understanding speech, analyzing video frames, or predicting stock prices over time.

Recurrent Neural Networks (RNNs) solve this fundamental limitation by maintaining memory across sequences, allowing them to understand not just what they're seeing now, but how it connects to what came before.

# What can RNNs do?
![[D-DL4CV-Lec12-RecurrentNeuralNetwork-what-can-it-do.png]]
## Process Sequences
### one to one

This is what we are doing using [[D-DL4CV-Lec07-ConvolutionalNetwork|CNNs]]

For example: image classification

### one to many

We has one input, and generate a sequence of output

For example: image captioning

### many to one

We has a sequence of input which order matters, and we'll give an output

For example: video classification

### many to many (1)

We have many input and the networks give many output, the number of input and output may not be the same

For example: Google Translate (the input and output may have different number of words)

### many to many (2)

Similar to the previous section, but we give an output for every input

For example: Per-frame video classification

## Non-Sequential Data
### Introduction

Sometimes we can process non-sequential data in a sequential way

### Example: Digit Recognition

Instead of feeding the network with the entire image, we let the network decide which part of the image it wants to see, the process might be like follows

1. The network asks to see a small fragment of the image
2. The network process that part of image
3. It figures out what should I see next to understand the entire image, then request us to give it see that part of data (Step 1)

### Example: Image Generation

The network decide where to write and what to write, doing this process many times and stacking all the result will give us the complete image

---
# What is RNNs structure looks like?
## Introduction

[[D-DL4CV-Lec12a-RNNsIntro]]

## Sequence to Sequence (seq2seq)

[[D-DL4CV-Lec12b-seq2seq]]

---
# Long Short Term Memory (LSTM)
## Problem with Vanilla RNNs Gradient Flow

[[D-DL4CV-Lec12c-VanillaRNNs]]

## LSTM

[[D-DL4CV-Lec12d-LSTM]]

---
# Multilayer RNNs
![[D-DL4CV-Lec12-RecurrentNeuralNetwork-multilayer-RNN.png]]

Every RNN layer has its own weights