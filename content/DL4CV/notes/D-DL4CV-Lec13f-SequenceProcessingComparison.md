---
type: digest
aliases: Comparison between Three Sequence Processing Method
source_link: "[[D-DL4CV-Lec13-Transformers]]"
tags: 
---
# Related Notes
- [[D-DL4CV-Lec07-ConvolutionalNetwork]]
- [[D-DL4CV-Lec12-RecurrentNeuralNetwork]]
- [[D-DL4CV-Lec13-Transformers]]

# Three Ways of Processing Sequences
## RNN

**Pros**:
- Good at processing long sequences

**Cons**:
- Not parallelizable, need to compute hidden states sequentially

## 1D Convolution

**Pros**:
- Highly parallelizable

**Cons**:
- Bad at dealing long sequences

## Self-Attention

**Pros**:
- Good at processing long sequences
- Highly parallel

**Cons**:
- Very memory extensive