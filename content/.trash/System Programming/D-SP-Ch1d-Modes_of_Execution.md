---
type: digest
aliases:
  - Modes of Execution
source_link: "[[D-SP-Ch1b-Operating_System]]"
tags: []
---
# Kernel Mode (Privileged)

When a user wants to use a service provided by the kernel (e.g., a system call), the system must first switch temporarily to kernel mode to get enough permission

> [!important] Kernel mode can access other user's memory

# User Mode (Non-Privileged)

Mode that is forbidden to access portions of memory that have been allocated to the kernel or other user