---
type: digest
aliases:
  - User Identification
source_link: "[[D-SP-Ch1-Basic_OS_Concepts]]"
tags: []
---
# User Identification
## Concept

在 UNIX 中，User 其實是代表權限，每組 User 都有自己的權限，可能你想要以低權限跑一個程式，你就先切換 User 後用這個 User 跑

## Explanation

在 `etc/passwd` 中紀錄了此系統中所有用戶的資料，以下是一個用戶的範例
```
root:x:0:1:Super-User:/root:/bin/tcsh
```
分別記錄了
- Login name
- encrypted passwd: 以 x 代替，現在密碼存在`/etc/shadow`，因為`etc/passwd`是所有人都能看見的，而`etc/shadow`需要特定權限
- numeric user ID
- numeric group ID
- comment: 可以自行設定，過去曾用來存像是用戶電話號碼、名字之類的
- home dir
- shell program

## Password Encryption

`crypt(3)` 是一種難以從 y 推到 x 的加密方法，因為如果很多人的密碼一樣，y 都會相同，所以我們引入了一個概念 salt ，這是系統隨機選擇的兩個英文字母，把它作為加密的一個參數

並且為了之後可以解密，我們將 salt 加在算出的 y 的前面
```
crypt("apple", "am") = "amADASGsflsdfjABSA"
```