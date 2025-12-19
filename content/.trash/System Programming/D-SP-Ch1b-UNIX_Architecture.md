---
type: digest
aliases:
  - UNIX Architecture
source_link: "[[D-SP-Ch1-Basic_OS_Concepts]]"
tags: []
---
![[D-SP-Ch1ba-UNIX_Architecture.png]]
# Explanation
## Kernel

Kernels directly manage hardware resources (CPU, memory, files, devices) and are written mostly in C (~95%) with some assembly language (~5%) for low-level operations. The kernel source code gets compiled into machine language that the CPU executes. The final kernel runs as pre-compiled machine code, never needing runtime compilation.

> [!important] For new hardware, kernels are ported by rewriting only the assembly code (~5%) and architecture-specific C code (~10-15%). The majority of C code (~80-90%) remains portable across different architectures.

## System Calls

User programs can't directly access hardware, so system calls act as an interface which allows user programs to request service from the kernel

If we think of the computer as a restaurant, we won't tell the chef (kernel) directly what we want to eat. Instead, we'll order our food from the counter (system calls)

## Shell

Shell is command-line interface that acts as the bridge between you and system calls

## Library Routines

Library routines are the pre-written functions that provide a layer between programs and system calls

## Applications

The programs that the we use in daily life