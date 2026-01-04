---
type: digest
aliases: Multiple Objects Detection with Sliding Windows
source_link: "[[D-DL4CV-Lec15-Object_Detection]]"
tags:
---
# Sliding Windows
## Intuition

We'll just try every possible position with every possible box size, pass them into CNN, then determine whether the cropped image is an object or just background

## Shortcoming

1. Very time-consuming
2. We might create several boxes for one same object