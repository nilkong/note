---
type: digest
aliases: Generative Adversarial Networks (GANs)
source_link: "[[S-Course-2025-UMich_DL4CV_2020fall]]"
tags: 
---
# Concept
## Innovations

Traditional generative models like autoregressive models and VAEs optimize by maximizing the likelihood $p(x)$ of reproducing training data

GANs introduced a revolutionary approach: completely abandoning likelihood calculations and instead using a discriminator network to judge whether images look real. This enables GANs to focus purely on producing realistic images

## Steps
### Step 1: Sample $z$

We sample a random noise vector $z$ from a prior distribution $p(z)$, typically $\mathcal{N}(0,1)$.

### Step 2: Generator Network

The generator network transforms the noise into a synthetic image: $x = G(z)$.

### Step 3: Discriminator Network

The discriminator is a binary classifier that distinguishes between real training images and fake generated images, outputting a probability that an input image is real.

### Step 4: Adversarial Training

Both networks are trained simultaneously: the generator tries to fool the discriminator by creating more realistic images, while the discriminator tries to better detect fake images. This adversarial competition drives both networks to improve.

![[D-DL4CV-Lec20-GANs-concept.png]]

---
# Training Objective
## Objective
### Expression

We jointly train generator $G$ and discriminator $D$ with a minimax game
$$
\min_{\color{orange} G}\max_{\color{cyan}D}\left( E_{x\sim p_{\text{data}}}[\log {\color{cyan}D}(x)]+E_{{\color{lime}z}\sim p({\color{lime}z})}\left[ \log \left( 1-{\color{cyan}D }({\color{orange}G}({\color{lime}z})) \right)  \right]  \right) 
$$
### Reason

$p_{data}$ is the probability distribution that generates training data. When minimax game reaches global minimum, $p_{G}=p_{data}$

Which means that the generator $G$ can generate images that perfectly resemble training set 

> [!info] proof in slides

## Explanation
### First Expression
$$
E_{x\sim p_{\text{data}}}[\log D(x)]
$$
The discriminator wants $D(x)=1$ for real data, thus it wants to maximize the expression above 

### Second expression
$$
E_{z\sim p(z)}[\log \left( 1-D(G(z)) \right) ]
$$
**For Discriminator**: When input generated images, we want $D(G(z))=0$, thus we want to maximize this term

**For Generator**: The generator wants to generate images that can fool the discriminator, i.e., $D(G(z))=1$, thus want to minimize the term

## Problem & Solution: $G(z)$ gradient vanish at the start of training

At the start of the training, generator is very bad, thus $D(G(z))\to 0$. This makes $G$'s gradient vanished

Hence, instead of train G to minimize $\log(1-D(G(z)))$, we train G to minimize $-\log(D(G(z)))$

![[D-DL4CV-Lec20-GANs-gradient.png]]

---
# Alternating Gradient Update
## Challenge

Because of minimax game, parameters belong to discriminator want to maximize the expression, while those belong to generator want to minimize the term

Thus, we aren't able to update all the parameters in GANs simultaneously

## Solution: Alternating Gradient Update

The parameters are split into two groups. For every iteration, we only update one group of parameters and the other group stay the same

> [!info] Why can't we update them at the same time
> Think of $D$ and $G$ as two people. $D$ wants to climb uphill and $G$ wants to climb downhill. If we update them together, we'll be moving the same function at opposite direction at the same time
## Problem

In normal neural networks, we can draw a loss curve to identify whether our model is performing well.

However, in GANs, discriminator want to maximize the expression while the other wants to minimize. Hence, the expression's curve will bounce up and down, making us hard to determine whether the model is working well