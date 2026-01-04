---
type: digest
aliases: RoI Pooling
source_link: "[[D-DL4CV-Lec15d-Fast_R-CNN]]"
tags:
---
# RoI Pooling
## Steps

1. **Mapping RoIs to feature maps**: The RoI coordinates (originally in image space) are mapped to the feature map space by dividing by the stride of the network
2. **Quantization**: The mapped coordinates are quantized (rounded) to discrete feature map locations
3. **Subdivision**: Each RoI is divided into a fixed grid (e.g., 7×7 bins)
4. **Max pooling**: Within each bin, max pooling is performed to extract a single value

## Quantization Errors (Misalignment)

- When mapping from image coordinates to feature map coordinates, rounding introduces spatial misalignment
- The quantized RoI boundaries may not accurately represent the original object boundaries
- This leads to a "coarse" representation that loses spatial precision

![[D-DL4CV-Lec15da-RoI_Pooling.png]]

## Backpropagation Error

Since we snap the coordinate to integers, we are not able to backprop to the original bounded box coordinate in backward pass