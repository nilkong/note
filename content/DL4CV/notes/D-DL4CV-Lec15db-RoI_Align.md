---
type: digest
aliases: RoI Align
source_link: "[[D-DL4CV-Lec15d-Fast_R-CNN]]"
tags:
---
# RoI Align
## How is it better than Rol pooling?

It resolve the problem of misalignment

## Steps

1. Maps RoI to feature map (without rounding)
2. Divide the region into fixed grid of same size (don't need to be integer)
3. Sample features at regular-spaced points in each subregion using "bilinear interpolation"
4. Conduct max pooling

## Bilinear Interpolation

Bilinear interpolation is a method for estimating values at non-integer coordinates by using weighted average of the four nearest known values
$$
f_{x,y}=\sum_{i,j}f_{i,j}\max(0, 1-\left| x-i \right| )\cdot\max(0,1-\left| y-j \right| )
$$
where
$$
\begin{align}
i &\in \left\{ \lfloor x \rfloor -1,\dots,\lceil x \rceil +1 \right\} \\
j &\in \left\{ \lfloor y \rfloor -1,\dots,\lceil y \rceil +1 \right\} 
\end{align}
$$
![[D-DL4CV-Lec15db-RoI_Align.png]]