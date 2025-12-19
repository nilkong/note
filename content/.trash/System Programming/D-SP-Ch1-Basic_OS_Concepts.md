---
type: digest
aliases:
  - "Chapter 1: Basic OS Concepts"
source_link: "[[S-Course-2025-CSIE2210-SP]]"
tags: []
---
# Computer System

A computer system is fundamentally an **integrated collection of components that work together to process, store, and communicate information automatically**

[[D-SP-Ch1a-Computer_System]]

# Operating System
## Vertical View: It is an extended machine

- Present user with a virtual machine - this allows developers no need to rewrite programs when switching to different hardware (since different hardware has different [[D-SP-Ch1ab-ISA|ISA]])

[[D-SP-Ch1b-UNIX_Architecture|UNIX Architecture]]
[[D-SP-Ch1c-Function_Calls_vs_System_Calls|System Calls vs. Function Calls]]
[[D-SP-Ch1d-Modes_of_Execution|Modes of Execution]]
[[D-SP-Ch1e-System_Memory|System Memory (User Space vs. Kernel Space)]]

## Horizontal View: It is a resource managaer

- Manage hardware resources: CPU, memory, I/O devices
- Each program gets time using the resource and space on the resource
- OS makes sure programs have a fair use on the resource
- Act as interface for user to access kernel

[[D-SP-Ch1f-User_Identification|User Identification]]
[[D-SP-Ch1g-Process_Management|Process Management]]
[[D-SP-Ch1gc-File_and_Directory_Management|File/Directory Management]]