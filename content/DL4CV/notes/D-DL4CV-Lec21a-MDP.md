---
type: digest
aliases: Markov Decision Property
source_link: "[[D-DL4CV-Lec21-Reinforcement_Learning]]"
tags:
---
# Introduction
## Definition

MDP is like a mathematical blueprint that captures all the necessary information for the network to make decision. It can be express with a tuple $(S,A,R,P,\gamma)$

## Explanation
### $S$ : The Set of Possible States

States represent every situation that the agent might find itself in

### $A$ : The Set of Possible Actions

Actions represent all the possible choices available for the agent

### $R$ : The Reward Distribution

When the agent takes an action, the reward will be sampled from $R$

### $P$ : The Transition Distribution

When we transit from $s_{t}$ to $s_{t+1}$ by $a_{t}$. $s_{t+1}$ is not fixed. Instead, it is sampled from $P$

### $\gamma$ : The Discount Factor

How much should the future rewards matter compared to immediate ones in current decision making?

The discount factor encodes this tradeoff

## Markov Property

The current state $s_{t}$ completely describe the current world. The agent only makes decision based on $s_{t}$ and has no need to take history into consideration

## Process
### Policy $\pi$ : The Action Probability Distribution

The agent samples an action $a_{t}$ from policy $\pi(a|s_{t})$

### Steps

- At time step $t=0$, environment samples initial state $s_{0}\sim p(s_{0})$
- Then, repeat till done:
	- Agent selects an action $a_{t}\sim \pi(a|s_{t})$
	- Environment samples reward $r_{t}\sim R(r|s_{t},a_{t})$
	- Environment samples next state $s_{t+1}\sim P(s|s_{t},a_{t})$
	- Agent receives reward $r_{t}$ and next state $s_{t+1}$