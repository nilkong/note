---
type: digest
aliases: Feature Inversion
source_link: "[[D-DL4CV-Lec14-Visualizaing_and_Understanding]]"
tags: 
---
# Feature Inversion
## Strategy

We'll give a feature vector for an image in any layer, we want to generate an image that
- Gives similar feature vector at the same layer
- "looks natural" (This can be done by regularization)

## Mathematical Expression
$$
\mathbf{x}^{*} = \text{argmin}_{\mathbf{x}\in \mathbb{R}^{H\times W\times C}}\;\ell(\Phi(\mathbf{x}), \Phi_{0}) + \lambda R(\mathbf{x})
$$
**Explanation**:
1. $\Phi(\mathbf{x})$ : Feature vector of new image
2. $\Phi_{0}$ : Given feature vector
3. $\ell(\Phi(\mathbf{x}), \Phi_{0})$ : Compute distance between two feature vector
$$
\ell(\Phi(\mathbf{x}),\Phi_{0}) = \left| \Phi(\mathbf{x})-\Phi_{0} \right| ^{2}
$$
4. $R(\mathbf{x})$ : Total variation regularizer (encourages spatial smoothness)
$$
R_{V^{\beta}} = \sum_{i,j}\left( (x_{i,j+1}-x_{i,j})^{2} + (x_{i+1,j}-x_{i,j})^{2} \right) ^{\beta/2}
$$

## Example

This example gives us the images generated when we use feature vectors from different depth

We can see feature vectors from deeper layers get rid of more features of the original image
![[D-DL4CV-Lec14f-Feature_Inversion-example.png]]