---
type: digest
aliases: Intermediate Features via Guided Backpropagation
source_link: "[[D-DL4CV-Lec14-Visualizaing_and_Understanding]]"
tags: 
---
# Intermediate Features via Guided Backpropagation

## Goal

Answer "what are the intermediate features looking for?" by calculating gradients from a single neuron activation to each input pixel.

> [!info] We choose one specific neuron activation (a single scalar value), not an entire filter.

## Steps

1. **Choose one neuron**: Pick one activation value 
   (e.g., Conv5$[channel=17, x=6, y=8] =0.73$)
2. **Backpropagate**: Calculate each input pixel's contribution to that activation
3. **Visualize**: Display gradient information as images

## The "Guided" Modification

**Problem**: Standard backprop creates noisy visualizations due to negative gradients

**Solution**: During ReLU backpropagation:

- Set negative gradients to 0 (normal ReLU)
- **Also** set gradients to 0 where forward pass was negative

This double filtering produces cleaner visualizations. Why it works better isn't fully understood, but results are significantly clearer.