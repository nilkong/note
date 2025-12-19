---
type: digest
aliases:
  - SSD
source_link: "[[D-NASA-Lec03-Storage_and_Filesystem]]"
tags: []
---
# How SSD Works?
## NAND Flash
![[D-NASA-Lec03b-SSD-NAND-Flash-structure.png|500]]

NAND Flash 是記憶體的最小單位，稱為 memory cell，其原理和 DRAM 類似，但和 DRAM 相比 NAND Flash 就算停止通電其中紀錄的資訊也能維持

電子原本在 N ，當被施以高壓電，則會同過 P 並進入 Float Gate，Float Gate 中沒有電子我們記作 1 ，有電子時記作 0

## Page and Block

我們將多個 memory cell 平行排列，並且以一條 Word Line 串連起來，我們稱此為一個 **Page**

多個 Page 則會組成一個 Block

## SLC, MLC, TLC, QLC

SLC 中每個 cell 最多存一個電子、MLC 兩個、TLC 三個、QLC 四個

---
# Operation
## Introduction

SSD 有三個操作：Write、Read 和 Erase

|               | SLC  | MLC  | TLC  | HDD       | RAM      |
| ------------- | ---- | ---- | ---- | --------- | -------- |
| Read latency  | 25   | 50   | 100  | 2000-7000 | 0.04-0.1 |
| Write latency | 250  | 900  | 1500 | 2000-7000 | 0.04-0.1 |
| Erase latency | 1500 | 3000 | 5000 | -         | -         |
由上表可觀察到
1. SSD 雖然比 RAM 慢，但遠比 HDD 快
2. 延遲：Erase >> Write > Read
3. Memory Cell 可容納電子越多，延遲越高

## Write, Read, and Erase
### Read

Read 操作回傳某段記憶體（以 Page 為單位）的內容，方法是通電流過 Word Line 並以此檢測各個 Memory Cell 的狀態

### Write

Write 操作可以將原本沒有電子的 Float Gate 加入電子，也就是執行 1 變 0 的操作，方法也是用較高的電壓通入 Word Line 使電子進入 Float Gate（以 Page 為單位）

### Erase

將整個 Block 的電子全部移除，也就是將全部 0 變為 1，此需用到更強的電壓，因此是以 Block 為單位

## Problem: Write Issue

要將一個 Page 做更新我們只能將整個 Block 重新寫入到新的 Block，並將輸入內容中更新的部分做更改

---
# Concepts
## Garbage Collection

此方法減少了在 Erase 時重新寫入所需的時間，具體方法是當某一段記憶體不再被需要時，我們將它標為 Invalid，當我們要 Erase 這個 Block 時，便可在將此 Block 覆寫到新的 Block 時跳過標為 Invalid 的記憶體

## TRIM

TRIM 便是將不需要的資料標為 Invalid 的方法

## Write Amplification

因為覆寫需要先 Erase 再 Write，並且 Erase 是以 Block 為單位，因此我們實際改動的記憶體大小會比我們實際要更改的大上不少

## Wear Leveling

SSD 是有壽命的，當他重複讀寫便會消耗耐久，Wear Leveling 便是一種分配機制，讓每個記憶體區段盡量讀寫的次數一樣