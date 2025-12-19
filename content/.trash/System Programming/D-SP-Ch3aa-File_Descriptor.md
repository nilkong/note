---
type: digest
aliases:
  - File Descriptor
source_link: "[[D-SP-Ch3a-UnbufferedIO]]"
tags: []
---
# File Descriptor
## Concept

記錄此 process 中每次開啟檔案的操作，從 0 開始，kernel 可以用它在 Open file desc. table 映射到 Open file table 上的條目

## Implementation
### Default

在 UNIX 中，file descriptor 之 0 到 2 是固定的

- 0: stdin
- 1: stdout
- 2: stderr

### New File

當 Process 要開啟新的文件，會從 0 開始，尋找第一個空著的 file descriptor 並將這次的開啟操作的 file desc. 設為此數