---
type: digest
aliases: Vanilla RNN
source_link: "[[D-DL4CV-Lec12-RecurrentNeuralNetwork]]"
tags:
---
# RNN Structure
![[D-DL4CV-Lec12a-VanillaRNN-structure.png]]
## Parameters

| Variable           | Description                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| $\mathbf{x}$       | The entire sequence of data you want to process (like a full sentence or time series)                                                      |
| $\mathbf{x}_t$     | One piece of data at time step $t$ (like a single word in a sentence, or one data point in a time series)                                  |
| $\mathbf{h}_t$     | The RNN's "memory" or internal state at the current moment - contains information from everything the network has seen so far              |
| $\mathbf{h}_{t-1}$ | The RNN's "memory" from the previous moment - what the network remembered before seeing the current input                                  |
| $f_W$              | The transformation function that combines the current input with previous memory to create new memory (this is where the learning happens) |
| $\mathbf{W}$       | The learned weights/parameters that determine how to combine inputs and memory - these stay the same at every time step                    |

## Key Concept

The main concept is that RNNs maintain a "memory" (hidden state) that memorize what the network see before the current input

## Math Formula Intuition
$$
h_{t} = f_{W}(h_{t-1}, x_{t})
$$
- **What the network see**: current input $x_{t}$
- **What they remembered before**: previous state $h_{t-1}$
- **Combine current input with memory to create new state**: $f_{W}$ with weight $W$

> [!important] Every time step shares the same weight matrix $W$, i.e., every time we use $f_{W}$ we are using the same weight matrix

# RNN Computational Graph
![[D-DL4CV-Lec12a-RNNStructure_and_VanillaRNN-computational-graph.png]]

# Backpropagation
## Problem

When we want to compute the gradient of loss, we need to remember the derivative of every steps, which will take a lot of memory when having long sequences

## Solution: Truncated Backpropagation

We'll divide the long sequence into some numbers of chunks, then run the forward pass and backward pass through chunks instead of whole sequence. This way, we only need to remember the derivatives in the chunk, and can forget it once we leave the chunk

![[D-DL4CV-Lec12a-RNNStructure_and_VanillaRNN-truncated-backpropagation.png]]

