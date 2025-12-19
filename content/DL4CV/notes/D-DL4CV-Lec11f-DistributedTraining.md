---
type: digest
aliases: Distributed Training
source_link: "[[D-DL4CV-Lec11-TrainingNeuralNetworksII]]"
tags:
---
# Two Intuitive but Bad Idea
## Idea #1: Run Different Layer on Different CPU

**Problem**:
- GPUs will spend time waiting other GPU to complete their tasks

## Idea #2: Run Parallel branches of Model on Different GPUs

**Problems**:
- Require expensive synchronizing across GPUs
- They need to communicate in the end of each branch, and when executing backpropagation we need gradient from the subsequent layer to compute its own

# Data Parallelism
![[D-DL4CV-Lec11f-DistributedTraining-data-parallelism.png]]
## Idea

Instead of splitting the model, we choose to split the data. Every GPU gets a subset of data then compute in parallel, then exchange necessary information afterward

## Steps

1. **Split Computation**: Each GPU computes gradients on its subset of data
2. **Exchange Gradients**: GPUs communicate their locally computed gradients to each other
3. **Average Gradients**: The gradients are averaged across all GPUs
4. **Synchronized Update**: Each GPU uses the same averaged gradient to update its copy of parameters

# Large-Batch Training
## Idea

More data trained per batch → More accurate gradient → Take larger step in update

**Core Idea**:

We calculate a more accurate gradient by making batch size larger. Although batch size increases, we can maintain the same training time by parallel computing

Since we have more accurate gradients, we can take more aggresive updates, which can reduce the number of iterations required

## Implementation

If we make batch size from $n$ to $Kn$, then we can increase learning rate $\alpha$ to $K\alpha$
