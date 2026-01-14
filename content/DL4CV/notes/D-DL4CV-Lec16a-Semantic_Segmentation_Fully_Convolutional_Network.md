---
type: digest
aliases:
  - fully convolutional network
  - FCN
source_link: "[[D-DL4CV-Lec16-Image_Segmentation]]"
tags:
---
# Comparison with Traditional CNN
## 1. No Fully Connected Layers

- **CNN**: Use FC layers at the end
- **FCN**: Replace FC layers with Conv layers throughout

## 2. Output Structure

- **CNN**: Single output per image (classification)
- **FCN**: One prediction per pixel location

## 3. Input Size Flexibility

- **CNN**: Fixed input size because FC layers required fixed size
- **FCN**: Can handle variable input sizes

---
# Fully Convolutional Network
## Implementation

The network is made up of a bunch of convolutional layers, with **downsampling** and **upsampling** inside the network

## Upsampling
### Why we need upsampling?

We do downsampling in the network. Hence, if we want to achieve "output per pixel", we need to "upsample" in order to scale up the feature vector again

### Upsampling

[[D-DL4CV-Lec16aa-Upsampling]]