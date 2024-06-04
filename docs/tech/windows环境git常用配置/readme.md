---
title: windows环境git常用配置
---

### autocrlf
```sh
# 提交时转换为LF，检出时不转换
git config --global core.autocrlf input

# 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true
```

### ignorecase
```sh
# 提交时不忽略文件名大小写
git config --global core.ignorecase false
```