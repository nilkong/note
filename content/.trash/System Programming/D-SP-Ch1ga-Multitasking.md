---
type: digest
aliases:
  - Multitasking
source_link: "[[D-SP-Ch1g-Process_Management]]"
tags: []
---
# Concept
## Time Sharing

Time sharing is a CPU scheduling technique where the processor time is divided into small time intervals and allocated to multiple processes in rotation

## Context Switch

A context switch is when the CPU stops executing one process and starts executing another

Before stop executing, CPU will save the current executing context into the process. This way, CPU can continue the process in the next time slice for this process

# Example
![[D-SP-Ch1ga-Multitasking-example.png]]
## Ready Queue

Ready queue stores the instruction that wants to be executed by the CPU. The instruction must first store all required data in the memory before entering the queue

## CPU

When the CPU is empty, it'll select an instruction from the ready queue and start executing.

The execution will end in two conditions:
1. The time slice ends
2. The instruction needs to grab data from hard disk

## Event Queue

We store the request for hard disk data in this queue

## Event

Hard disk reading and copying data to memory

![[D-SP-Ch1ga-Multitasking-state.png]]