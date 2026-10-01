---
title: 甲骨文创建免费实例全流程
description: ''
pubDate: 2026-09-30T16:53
draft: false
tags: []
categories: []
badge: ''
---
## 一、进入Oracle控制台，找到创建实例的入口

浏览器打开登录网址：<a href="https://www.oracle.com/cn/cloud/free/" target="_blank" rel="noopener noreferrer">Oracle中国区↗</a>，输入Oracle Cloud 账户名称，点下一步，再填写登录邮箱和登录密码登录。如果控制台是英文界面，点右上角的头像 →「Language」，切换成简体中文。


如果你是从已经创建的实例进入，就点左上角的汉堡菜单（三条横线），依次点进：
Compute(计算) → Instances(实例)

![Oracle实例](https://mycc.mcck.ccwu.cc/file/2f39aaf21f604fad.png)

![Oracle实例](https://mycc.mcck.ccwu.cc/file/22e9f66f771247d3.png)

![Oracle实例](https://mycc.mcck.ccwu.cc/file/f2fdb57c4eb24ca9.png)

也可从主页直接点右侧工作 版本下的 `创建VM实例` 。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/05d0cfcf837942bf.png)

## 二、进入配置页，给实例进行配置

可用性域这一栏取决于你注册时选的区域（Region），大多数区域只有 1 个可用区（显示 AD-1），没得选，直接跳过。
少数大区域会有 3 个可选（比如美国西部的 Phonenix、东部 Ashburn、德国法兰克福），这几个会显示 AD-1 / AD-2 / AD-3
不同可用区的物理机资源是各自独立的，AD-1 满了不代表 AD-2 也满。所以如果创建失败的话，可以换一个 AD 重试创建，这也是注册时建议选 `凤凰城，阿什本` 的原因。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/1f3f6ce4ecea472a.png)

`更改映像` 这里系统默认的是 Oracle Linux 这个映像。如果想长期稳定使用 Oracle 免费 ARM A1，建议使用 `Ubuntu` ，因为网上的教程、Docker 安装脚本、各种一键脚本，绝大多数是按 Ubuntu 或 Debian 写的。然后版本的话，选择Ubuntu 24.04 这个版本比较稳定而且免费。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/632b9c111f0c4302.png)

![Oracle实例](https://mycc.mcck.ccwu.cc/file/073a6073cdaa4676.png)

![Oracle实例](https://mycc.mcck.ccwu.cc/file/a675bd9690264d17.png)

