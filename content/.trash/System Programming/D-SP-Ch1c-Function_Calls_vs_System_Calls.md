---
type: digest
aliases:
  - System Calls vs. Function Calls
source_link: "[[D-SP-Ch1b-Operating_System]]"
tags: []
---
![[D-SP-Ch1bb-Function_Calls_vs_System_Calls.png]]
# Function Calls

Function calls run on the same process as the other parts of program and stay in user mode

For example, `printf()`, `malloc()`

# System Calls

System calls will first transit the process to kernel, switch to kernel mode, then process it in kernel

For example, `write()`, `sbrk()` - these functions is defined by system calls in [[D-SP-Ch1b-UNIX_Architecture|UNIX Architecture]]