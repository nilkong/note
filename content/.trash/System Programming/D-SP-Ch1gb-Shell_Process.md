---
type: digest
aliases:
  - Shell Process
source_link: "[[D-SP-Ch1g-Process_Management]]"
tags: []
---
![[D-SP-Ch1gb-Shell_Process.png]]

1. 當我們開啟 Shell 出現 `$` 符號時，系統就已經開啟了一個 Process（在螢幕上輸出`$`屬於 STDIN）
2. 當我們打 `$ ls` 後，Shell Process 會先呼叫 fork 這個 system call，這個函數會創造一個子 process 用來執行指令
3. 這個子 process 會呼叫`execve()`，這會複製 Parent Process 的狀態到子 process
4. 子 process 開始執行指令
5. 執行完後會終止 process 並讓 parent process 停止 wait