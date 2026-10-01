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

`可用性域` 这一栏取决于你注册时选的区域(Region)，大多数区域只有 1 个可用区(显示 AD-1)，没得选，直接跳过。
少数大区域会有 3 个可选，比如美国西部的 Phonenix、东部 Ashburn、德国法兰克福，这几个会显示 AD-1 / AD-2 / AD-3。
不同可用区的物理机资源是各自独立的，AD-1 满了不代表 AD-2 也满。所以如果创建失败的话，可以换一个 AD 重试创建，这也是注册时建议选 `凤凰城，阿什本` 的原因。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/1f3f6ce4ecea472a.png)

映像区域这里系统默认的是 Oracle Linux 这个映像。如果想长期稳定使用 Oracle 免费 ARM A1，建议使用 `Ubuntu` ，因为网上的教程、Docker 安装脚本、各种一键脚本，绝大多数是按 Ubuntu 或 Debian 写的。所以点击 `更改映像` 选择 `Ubuntu` ，然后下拉选择版本的话，选择Ubuntu 24.04 这个版本，它比较稳定而且免费。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/632b9c111f0c4302.png)

![Oracle实例](https://mycc.mcck.ccwu.cc/file/073a6073cdaa4676.png)

![Oracle实例](https://mycc.mcck.ccwu.cc/file/a675bd9690264d17.png)

配置区域这里系统默认的是AMD处理器(VM.Standard.E2.1.Micro)，如果想换成高性能的ARM处理器(VM.Standard.A1.Flex)，就要点击 `更改配置` 。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/618c806c0984464b.png)

然后弹窗里按顺序操作：

1. 实例类型保持虚拟机（ Virtual machine）

2. 配置系列选 Ampere ，基于ARM的处理器

3. 配置表里勾选 VM.Standard.A1.Flex

勾上之后，点一下左侧的三角图标，下方右侧会冒出两个三角滑块：Number of OCPUs → OCPU数 和 Amount of memory (GB) → 内存量。上箭头是增加，下箭头是减少。这里你会看到OCPU最大值80，和内存最大值512，就以为可以创建80CPU和512GB内存的机器。千万不要一冲动就使劲加码，这个指的是最大值，Arm免费实例的最高配置就2OCPU和12GB内存，如果选超了钱包缩小的速度，一定大于你选OCPU的速度。

滑块怎么拉，有讲究：

拉满：OCPU = 2，内存 = 12。一台机器吃掉全部额度，性能最好，适合只想要一台主力机的人。
拉小：OCPU = 1，内存 = 6。剩下的额度留着以后再开第二台。而且——小规格明显更容易申请成功。
