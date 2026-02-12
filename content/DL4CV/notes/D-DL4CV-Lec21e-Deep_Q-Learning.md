---
type: digest
aliases: Deep Q-Learning
source_link: "[[D-DL4CV-Lec21-Reinforcement_Learning]]"
tags:
---
# Deep Q-Learning
## Approach

We want to train a neural network with weight $\theta$ that approximate optimal [[D-DL4CV-Lec21c-Q-Function|Q-function]] $Q^{\star}$
$$
Q^{\star}(s,a)\approx Q(s,a;\theta)
$$
## Evaluating the Network

The target $y_{s,a,\theta}$ can be calculated by:
$$
y_{s,a,\theta} = \mathbb{E}_{r,s'}\left[ r+\gamma\max_{a'}Q(s',a';\theta) \right] 
$$
then we can use it to define the loss
$$
L(s,a) = (Q(s,a;\theta) - y_{s,a,\theta})^{2}
$$

## Why we define the loss this way?

In Bellman Equation, we say when we reach $Q^{\star}$, then
$$
Q^{\star}(s,a) = \mathbb{E}_{r,s'}\left[ r + \gamma\max_{a'}Q^{\star}(s',a') \right] 
$$
Hence, when $Q$ reach $Q^{\star}$, $Q(s,a;\theta)=y_{s,a,\theta}$

---
# Problem
## Target Non-Stationary

The target $y_{s,a,\theta}$ is the target we want $Q(s,a;\theta)$ to predict. However, the target depends on the weight $\theta$, when we update the weights in every iteration, our target is also changing

This creates a situation: We are chasing a target that is forever moving

### Solution: Fixed Q-Targets

We define target network $\theta^{-}$ for evaluation
1. make $\theta^{-}=\theta$
2. $\theta^{-}$ stay fixed for few training step
3. sync $\theta^{-}$ and $\theta$ again

This way, for the steps that $\theta^{-}$ are frozen, network target stay fixed

## How to sample batches of data for training?

#TBD I have no clue what the hell is this problem doing