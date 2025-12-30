---
type: digest
aliases: Sequence to Sequence with Attention
source_link: "[[D-DL4CV-Lec13-Transformers]]"
tags:
---
# Intuition

Instead of using the same context vector for every time step, we let decoder at each time step decide itself which combination of hidden state does it think is more relevant to this time steps

---
# Implementation
![[D-DL4CV-Lec13a-Attention-implementation.png]]
## Use $s_{t-1}$ to assist finding hidden state relevant currently

For time step $t$, $s_{t-1}$ memorizes all the information from the previous time steps, we can use it as a reference to decide which hidden states are more important in step $t$

## Steps
### Step 1: Calculate Alignment Score $e_{t,i}$

Alignment score $e_{t,i}$ is a scalar which represent how important the hidden state $h_{i}$ is to the time step $t$

> [!note] Computation of $e_{t,i}$ relies on $s_{t-1}$

### Step 2: Normalize Alignment Scores to get Attention Weights $a_{t,i}$

Attention weights $a_{t,i}$ are the normalized probabilities derived from alignment scores that determine how much each encoder hidden state contributes to the current context vector

### Step 3: Compute Context Vector $c_{t}$
$$
c_{t} = \sum_{i}a_{t,i}h_{i}
$$

### Step 4: Computer Decoder State $s_{t}$
$$
s_{t} = g_{U}(y_{t-1}, s_{t-1}, c_{t})
$$
## Example: English to French Translation
![[D-DL4CV-Lec13a-Attention-translation-example.png]]

---
# Image Captioning with RNNs and Attention
## Implementation

very similar to basic attention implementation
![[D-DL4CV-Lec13a-Attention-image-captioning-implementation.png]]

## Intuition

The attention weights concentrated on the position which the current word (output) refers to

For example, when we generate the word "bird", the weights will concentrate on the pixels of bird
![[D-DL4CV-Lec13a-Attention-bird.png]]