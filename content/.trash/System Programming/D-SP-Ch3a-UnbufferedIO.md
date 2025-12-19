---
type: digest
aliases:
  - Unbuffered I/O
source_link: "[[D-SP-Ch3-UnbufferedIO]]"
tags: []
---
# Overview
![[D-SP-Ch3a-UnbufferedIO-overview.png]]

- 當 User Process 要讀 Hard Disk 時，會 Trapped in Kernel 後，先查看 buffer cache 中以前有沒有取過同一段資料：
	- 如果有，則從 buffer cache 取出直接回傳
	- 反之，進入 Hard Disk 取出所需資料（因為 SSD 和 HDD 物理限制，一次取出的資料可能會大於所需資料）

# Explanation
![[D-SP-Ch3a-UnbufferedIO.png]]
## Per-Process Data Structure

在此範圍內的物件都是對於每一個 Process 都會建立一個新的物件

### FILE Object

包括 File Descriptor 和 buffer，當我們要取用資料 Buffered I/O 都會先查看此處 buffer 是否已經取用資料
- 如果以取用，就不用 Trapped in kernel 到 Open file desc. table
- 否則需要進入 kernel mode 進入更深處尋找資料

[[D-SP-Ch3aa-File_Descriptor]]

> [!important] 只有此曾在 User Space/Mode，橘線往右都是 Kernel Space/Mode 運行處

### Open File Desc. Table

此處將 FILE Object 儲存的 file descriptor 映射到 Open file table 的物件

## Kernel (global & shared) Data Structures

這裡的物件是整個 OS 共享的，每個 Process 都會存取同一個這裡的物件

### Open File Table

任何 Process 進行資料存取操作都會在此產生一個條目，他會記錄
1. 開啟的模式（read、write...）
2. 訪問什麼文件

### i-node table

此處紀錄了資料的 Metadata

### Buffer Cache

我們會將最近取用過的文件存在 Buffer Cache，這樣再次取用就不用再去 Hard Disk 讀

### Disk

儲存資料的地方