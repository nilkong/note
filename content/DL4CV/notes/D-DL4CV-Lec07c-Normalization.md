# Introduction
## Idea

We normalize the outputs of a layer so they have zero mean and unit variance. We've already done this in linear classification and will work the same way in neural network

## Why it works?

When we draw the contour map for loss function, we'll find the width and length of it looks like and oval instead of circle. This makes it super easy to overshoot

Hence, after we apply normalization to the input, the contour map for loss function will become a circle, which makes it more efficient and easy to optimize

## Mathematical Expression

$$
\begin{align*}
\mu &= \frac{1}{N}\sum_{i} x_{i} \\
\sigma^{2} &= \frac{1}{N}\sum_{i=1}^{N}(x_{i} - \mu)^{2} \\
\hat{x}_{i} &= \frac{x_{i}-\mu}{\sqrt{ \sigma^{2}+\epsilon }} \\
y_{i} &= \gamma \hat{x}_{i}+\beta
\end{align*}
$$

## Gamma $\gamma$ and Beat $\beta$

After normalization, the output will go through activation function (e.g., ReLU). The normalization process will let the output extremely hard to go through, thus we introduce $\gamma$ and $\beta$ after normalization to adjust the output's distribution

## Test Process

After training, we'll only feed one test data into the neural network as input, normalization one example is meaningless. Hence, we'll use the average mean and variance we've calculated during the training process when using the model

Using these constant makes the normalization process become the equation below making it a **linear classifier**.
$$
y_{i} = \gamma\frac{(x_{i}-\mu)}{\sqrt{ \sigma^{2}+\epsilon }}+\beta
$$

> [!important] Usually we insert normalization after fully connected or convolutional layers, and before the nonlinearity, i.e., activation function

# Different Kinds of Normalization
![[D-DL4CV-Lec07c-Normalization-normalization.png]]
## Batch Normalization

In batch normalization, we'll normalize over one channels at a time, but with all $N$ examples and all $H\times W$ spatial positions

That is, $\mu$, $\sigma^{2}$, $\gamma$, and $\beta$ all have the same size $C$, which is the number of channels

## Layer Normalization

Normalize across all features within one sample at a time, i.e., normalize across $C\times H\times W$

 $\mu$, $\sigma^{2}$, $\gamma$, and $\beta$ all have the same size $N$, the number of examples

> [!info] Seldom use in CNN, since each channel in CNN isn't related

## Instance Normalization

Normalize across each one channel in one example at a time, i.e., normalize across $H\times W$

$\mu$, $\sigma^{2}$, $\gamma$, and $\beta$ all have the same size $N\times C$

## Group Normalization

It divides channels into groups and normalizes within each group. Instead of normalizing each channel separately (like Instance Norm) or all channels together (like Layer Norm), it normalizes a few channels at a time by grouping them. It normalize area has the size $G\times H\times W$