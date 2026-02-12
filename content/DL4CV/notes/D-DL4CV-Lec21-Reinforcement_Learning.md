---
type: digest
aliases: Reinforcement Learning
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: 
---
# Reinforcement Learning
## Introduction

An **agent** performs **action** in **environment**, and receive **rewards** based on the action it took. The agent will update its policy to get more reward

## Process

Repeat:
1. The agent sees a **state** $s_{t}$ from the environment
2. It makes an **action** $a_{t}$ based on what is sees
3. The agent receives **reward** $r_{t}$ based on $(s_{t},a_{t})$

## Difference against Supervised Learning
### 1. Stochasticity

Though we take the same action at the same state, the state transition and the reward may be different. The reward and state transition aren't fixed, they are sample from **probability distributions**

For example: When a robot decides to turn right, a wind blow may affect the next state

### 2. Credit Assignment

In chess, we'll gain reward after we win the game. However, it's very hard for the network to determine what step it took during the game leads to the win

### 3. Non-Differentiable

The reward and state transition are sampled from probability distributions because the world are ever-changing and not predictable. Hence, we aren't able to backpropagate through the world since we can't memorize the complete state of every moment of the world

### 4. Non-Stationary

Non-stationary refers to situations where environment change over time, violating our initial assumption

> [!important] Difference between stochasticity and non-stationary
> **Stochasticity**: Environment change over time, but it is included in our state by probability distribution
> **Non-stationary**: Environment change over time, but the change is surprising and not included in our probability distribution

---
# Markov Decision Process (MDP)
> MDP is a mathematical blueprint that describe everything the agent needs to know to make decisions

[[D-DL4CV-Lec21a-MDP]]

---
# Finding Optimal Policy $\pi^{\star}$ with Q-Function
## Goal

We want to find optimal policy $\pi^{\star}$ that maximize discounted sum of rewards. However, there are lots of randomness during the process (lots of sampling), thus we choose to maximize the expected sum of rewards
$$
\pi^{\star} = \arg\max_{\pi}\mathbb{E}\left[ \sum_{t\geq 0}\gamma^{t}r_{t}\,|\,\pi \right] 
$$

## Value Function and Q-Function
> Value Function and Q function helps us compute the expected cumulative rewards based on current situations

[[D-DL4CV-Lec21b-Value_Function]]
[[D-DL4CV-Lec21c-Q-Function]]

## Bellman Equation
### Optimal Q-Function
$$
Q^{\star}(s,a) = \max_{\pi}\mathbb{E}\left[ \sum_{t\geq 0}\gamma^{t}r_{t}\,|\,s_{0}=s,a_{0}=a,\pi \right] 
$$
Optimal Q-function $Q^{\star}(s,a)$ is the Q-function for the optimal policy $\pi^{\star}$. It gives the max possible future reward when taking action $a$ at state $s$

If we find $Q^{\star}$, we can then get $\pi^{\star}$ since $Q^{\star}$ contain all the information we need to find $\pi^{\star}$

### Bellman Equation

$Q^{\star}$ will satisfy the following recurrence relation:
$$
Q^{\star}(s,a) = \mathbb{E}_{r,s'}\left[ r+\gamma\max_{a'}Q^{\star}(s',a') \right]\text{, where }r\sim R(s,a),\;s'\sim P(s,a)
$$

## Finding Optimal $Q^{\star}$
### Value Iteration Convergence

[[D-DL4CV-Lec21d-Value_Iteration_Convergence]]

**Problem**: For every $Q_{i}$ , we need to memorize optimal choice for every state $s$. Hence, when there are infinite states, we'll need infinite memory, which is impossible

**Solution**: We'll try to approximate $Q(s,a)$ with a neural network, and use Bellman Equation as loss

### Deep Q-Learning

[[D-DL4CV-Lec21e-Deep_Q-Learning]]

---
# Finding Optimal Policy $\pi^{\star}$ with Policy Gradient
## Policy Gradient
### Approach

Train a network $\pi_{\theta}(a|s)$ that takes state as input and give distribution over the action took in the state

### Objective Function

Expected future rewards when following policy $\pi_{\theta}$ :
$$
J(\theta) = \mathbb{E}_{r\sim p_{\theta}}\left[ \sum_{t\geq 0}\gamma^{t}r_{t} \right] 
$$
We can find optimal policy by using gradient ascent: $\theta^{\star}=\arg\max_{\theta}J(\theta)$

### Problem: Gradient $\partial J / \partial\theta$ Calculation
$$
\frac{\partial J}{\partial\theta} = \frac{\partial}{\partial\theta}\mathbb{E}_{r\sim p_{\theta}}\left[ \sum_{t\geq 0}\gamma^{t}r_{t} \right] 
$$
When we change the weight, we'll change the reward distribution, which makes the entire computation super complex

Hence, we need to come up with a way to overcome this computation

## REINFORCE algorithm

[[D-DL4CV-Lec21f-REINFORCE_Algorithm]]