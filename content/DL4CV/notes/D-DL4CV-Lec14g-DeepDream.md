---
type: digest
aliases: DeepDream
source_link: 
tags:
---
# DeepDream
## Strategy

Instead of generating a completed new image, here we want to amplify the existing features which we've detected on the original image

We know that positions with strong features also have high activations, this will be the key for this algorithm

## Steps

- Choose an image and a layer in a CNN

Repeat:
1. Compute activations at chosen layer with forward pass
2. Set gradient of chosen layer equal to its activations, $f_{i}(I)$ is outputs (activations) of the layer
$$
I^{*} = \text{arg min}_{I}\,\sum_{i}f_{i}(I)^{2}
$$
3. Compute gradient on image pixels
4. Update image

## Example

Step 2 amplifies "all" the important features it detects. However, there will be wrong detection, and the wrong features will be applied on the image
![[D-DL4CV-Lec14g-DeepDream-dogfish.png]]
