---
type: digest
aliases: Variational Autoencoders (VAEs)
source_link: "[[D-DL4CV-Lec19-Generative_Model_I]]"
tags:
---
# How it works?
## Encoder & Latent (Hidden) Feature $z$

For every input image $x$, we try to guess "which latent feature $z$ will generate this image $x$?" We achieve this guess by using an encoder to encode the input image into latent feature $z$

However, since we are just guessing the latent feature, **we don't know the exact $z$**. Hence, we express $z$ as probability distribution

In summary, the encoder in variational autoencoder output a **mean** and a **variance** which tells us the distribution of $z$ (normally Gaussian distribution)

## Decoder
### Step 1: Sample $z$

The decoder input $z$ and output $x$. In last section, we mentioned $z$ is a probability distribution, thus in order to pass it into the decoder, we sample a specific $z$ using the given distribution

### Step 2: Decode

Now, we pass our sampled $z$ into the network. **The output of the decoder is also a distribution**, which mean the decoder also output a **mean** and a **variance**

### Step 3: Get generated image

To get the final output image, we have two choices
1. sample from the distribution
2. use the mean

![[D-DL4CV-Lec19f-Variational_Autoencoders-generation.png]]

> [!info] $\theta$ means the learnable parameters of the network
> Hence, $p_{\theta}(z)$ means "the probability of $z$, given learnable parameters $\theta$"

---
# How do we train the model?
## Basic Idea

If we input $x$, we want to maximize the output image probability distribution of generating exact input $x$

## Idea 1: Integration
### Mathematical Expression
$$
p_{\theta}(x) = \int p_{\theta}(x,z)dz = \int p_{\theta}(x|z)p_{\theta}(z)dz
$$
We want to find $\theta$ that maximize $p_{\theta}(x)$ - the probability of generating $x$ given learnable parameters $x$

Since $z$ is also a distribution, we need to marginalize the calculation

### Problem

However, we can't integrate over $dz$ since $z$ has infinite number of possibilities

## Idea 2: Bayes' Formula
### Mathematical Expression
$$
p_{\theta}(x) = \frac{p_{\theta}(x|z)p(z)}{p_{\theta}(z|x)}
$$
### Problem: Unable to Compute $p_{\theta}(z|x)$

$p_{\theta}(z|x)$ means "given input image $x$, what is the probability of latent feature $z$"

**This is what we want the encoder to learn!!!**
The encoder wants to learn the best probability distribution for $z$, so we can't know the exact $p_{\theta}(z|x)$ for sure

### Solution: Approximate $p_{\theta}(z|x)$ by $q_{\phi}(z|x)$ 

We use a new network $q_{\phi}(z|x)$ to approximate $p_{\theta}(z|x)$

> [!important] $p(z)$ is fixed. It is our belief in what should $z$ distribution looks like before we look at input data $x$. Normally we choose Gaussian distribution with mean 0 and variance 1

---
# Mathematical Detail Finding Lower Bound for $p_{\theta}(x)$
## What is $q_{\phi}$ ?

We train encoder $q_{\phi}$ and decoder $p_{\theta}$ together in the training process

## Steps
### Step 1: Change Bayes' Formula Representation
$$
\begin{align}
\log p_{\theta}(x) &= \log \frac{p_{\theta}(x|z)p(z)}{p_{\theta}(z|x)} \\
&= \log \frac{p_{\theta}(x|z)p(z)q_{\phi}(z|x)}{p_{\theta}(z|x)q_{\phi}(z|x)} \\
&= \log p_{\theta}(x|z) - \log \frac{q_{\phi}(z|x)}{p(z)} + \log \frac{q_{\phi}(z|x)}{p_{\theta}(z|x)}
\end{align}
$$

### Step 2: Wrap

Since $\log p_{\theta}(x)$ doesn't depends on $z$, so we can wrap it with expectation:
$$
E_{z}(c) = c \implies E_{z\sim q_{\phi}(z|x)}\log p_{\theta}(x) = \log p_{\theta}(x)
$$
Thus the Bayes' formula can then be organize to
$$
\begin{align}
\log p_{\theta}(x) &= E_{z}\log p_{\theta}(x|z) - E_{z}\left[\log \frac{q_{\phi}(z|x)}{p(z)}\right] + E_{z}\left[\log \frac{q_{\phi}(z|x)}{p_{\theta}(z|x)}\right] \\
&= E_{z\sim q_{\phi}(z|x)}\left[ \log p_{\theta}(x|z) \right]  - D_{KL}\left( q_{\phi}(z|x),p(z) \right) + D_{KL}\left( q_{\phi}(z|x),p_{\theta}(z|x) \right) 
\end{align}
$$

### Step 3: Observe Lower Bound

KL >= 0, so dropping the last term gives lower bound on $p_{\theta}(x)$
$$
\log p_{\theta}(x) \geq E_{z\sim q_{\phi}(z|x)}\left[ \log p_{\theta}(x|z) \right]  - D_{KL}\left( q_{\phi}(z|x),p(z) \right) 
$$
This gives us the lower bound of $p_{\theta}(x)$

---
# Training Process
## Encoder

The corresponding term for encoder in lower bound formula is:
$$
-D_{KL}\left( q_{\phi}(z|x),p(z) \right) 
$$
This term tells us in order to let the lower bound higher, we want the distribution of $q_{\phi}(z|x)$ and $p(z)$ to be close, which will give us divergence nearly zero

> [!info] KL divergence goes to zero when the two distributions is about the same, and large if two distributions are different

> [!info] $p(z)$ is predefined, normally $\mathcal{N}(0,1)$

## Decoder

The corresponding term for decoder in lower bound formula is:
$$
E_{z\sim q_{\phi}(z|x)}[\log p_{\theta}(x|z)]
$$
This term mean
1. Sample $z$ from $q_{\phi}(z|x)$
2. Compute the weighted average of $\log p_{\theta}(x|z)$ across all possible $z$ values, where the weights $z$ are given by $q_{\phi}(z|x)$
3. This measures: "For the given $z$ distribution, how likely can it reconstruct the input image $x$?" We want to maximize this expectation

![[D-DL4CV-Lec19f-Variational_Autoencoders-training-process.png]]

---
# Generating Data

1. Sample $z$ from prior $p(z)$
2. Pass $z$ into decoder
3. We should get $\hat{x}$ which resembles the training input image

![[D-DL4CV-Lec19f-Variational_Autoencoders-generating-data.png]]

---
# Pros & Cons
## Pros

- The mathematical foundation of the model make them interpretable and theoretically well-understood
- The encoder $q_{\phi}(z|x)$ learns meaningful latent feature, which can be used for downstream tasks

## Cons

- VAEs optimize the lower bound, but not the exact likelihood
- Samples blurrier and low quality compared to GANs