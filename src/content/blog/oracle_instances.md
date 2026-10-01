---
title: 甲骨文创建免费实例全流程
description: ''
pubDate: 2026-09-30T16:53
draft: false
tags: []
categories: []
badge: ''
---
import Collapse from "../../components/mdx/Collapse.astro";
import Info from "../../components/mdx/Info.astro";

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

配置区域这里系统默认的是AMD处理器(VM.Standard.E2.1.Micro)，如果想要创建Micro实例，那么配置这里保持默认的1核1GB内存即可。

![Micro实例](https://mycc.mcck.ccwu.cc/file/bf115f5278fd4f61.png)

![Micro实例](https://mycc.mcck.ccwu.cc/file/4bd8c0e006e042fe.png)

如果想换成高性能的ARM处理器(VM.Standard.A1.Flex)，就要点击 `更改配置` 。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/618c806c0984464b.png)

然后弹窗里按顺序操作：

![Oracle实例](https://mycc.mcck.ccwu.cc/file/b596ae9e35a747c5.png)

1. 实例类型保持虚拟机（ Virtual machine）

2. 配置系列选 Ampere ，基于ARM的处理器

3. 配置表里勾选 VM.Standard.A1.Flex

4. 勾上之后，点一下VM.Standard.A1.Flex左侧的三角图标，然后OCPU数选择2，内存量选择12GB，这是目前ARM免费实例的最高配置。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/1f79db4f9be549ce.png)

- 拉满：OCPU = 2，内存 = 12。一台机器吃掉全部额度，性能最好，适合只想要一台主力机的人。
- 拉小：OCPU = 1，内存 = 6。剩下的额度留着以后再开第二台。而且——小规格明显更容易申请成功。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/73ec8fc1ae6f4421.png)

![Oracle实例](https://mycc.mcck.ccwu.cc/file/a32a8b851b4e4a98.png)

进入网络设置，第一步是设置主要 VNIC (Primary VNIC) 区域。

新账号首次创建实例，主要网络选 「创建新虚拟云网络」，子网选 「创建新公共子网」,专用IPv4地址保持默认的「自动分配专用IPv4地址」，然后务必勾上「自动分配公共 IPv4 地址」，没有分配公网 IP 的话，你没法从外网 SSH 连上去。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/3c52488dfeab4762.png)

> 💬特别注意：新账户第一次创建实例时 `自动分配公共 IPv4 地址` 这里是灰色的，而且不一定那能开启，如果无法开启，就等该实例创建完成后，再回到该实例去创建一个公共 IPv4地址。

<Collapse title="如何创建公共 IPv4 地址">

![公共 IPv4 地址](https://mycc.mcck.ccwu.cc/file/9256d043f61e4f6b.png)

---

![公共 IPv4 地址](https://mycc.mcck.ccwu.cc/file/76d1ba68236a4481.png)

---

![公共 IPv4 地址](https://mycc.mcck.ccwu.cc/file/7783f913dc0f486d.png)

---

![公共 IPv4 地址](https://mycc.mcck.ccwu.cc/file/54f939b70a45462a.png)

---

![公共 IPv4 地址](https://mycc.mcck.ccwu.cc/file/13f839f31cda455f.png)

</Collapse>

再进行下一步的SSH密钥操作，没有公网 IP和私钥的话，后面就无法SSH访问新建的实例，私钥丢了 = 机器废了，没有找回流程，没有客服能帮你，只能删机重建，所以密钥一定要保存好。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/f1dab9bcf8904931.png)

进入存储设置后，默认的 `引导卷(Boot volume)` 大小：46.6GB，这也是 Oracle 允许的最小值。用户可根据需要自定义存储磁盘的大小，官方给到的免费存储额度总共是 200GB，如果你想创建两台Arm机器和两台 Micro 机器，那么每台给到50GB就可以了。

然后 `引导卷性能(VPU)` 是为了满足不同负载的要求。10 是默认值，适合大多数工作负载，20 适合 I/O 要求高的负载，30–120适合大型数据库之类的场景。如果要跑的是一般的服务器或代理，10 VPU 就够用了，保持默认即可，以后可以再编辑调整。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/2b20c7d3f1154973.png)

<Info>一般来说，不要一次性把引导卷拉满，虽然总存储空间不超过200G还在完全免费额度内，但后面就没空间开 Micro 了，因为A1实例的引导卷空间只能调大，不能调小，一旦开的太高，想降档就没可能了。</Info>

调整路径：左上角菜单 ≡ →「存储」→「块存储」→「右侧菜单中选-引导卷」→ 点右边的「⋯」→「编辑」，然后就可以调大引导卷空间。

所有配置确认完，滚动到页面最底部，点 Create（创建）按钮。

![Oracle实例](https://mycc.mcck.ccwu.cc/file/da2080f410af419f.png)

![Oracle实例](https://mycc.mcck.ccwu.cc/file/47a954caefd74e53.png)

顺利的话，页面跳回实例详情页，状态显示正在运行，那么恭喜你，机器到手了。

## 三、如何通过WindTerm进行SSH远程连接

【<a href="https://github.com/kingToolbox/WindTerm/releases/tag/2.5.0" target="_blank" rel="noopener noreferrer">官方下载↗</a>】

【<a href="https://mycc.mcck.ccwu.cc/file/e6bcc791ec6c47e4.zip" target="_blank" rel="noopener noreferrer">快速下载↗</a>】

下载好 WindTerm 以后，打开该软件，点开`会话` —— `新建会话` —— `输入公共IPV4地址` ，然后再进行 `验证` —— `身份验证文件` ——`选择该实例的私钥并载入`——`最后点击连接`

![SSH连接](https://mycc.mcck.ccwu.cc/file/3a7a060c89af46cf.png)

![SSH连接](https://mycc.mcck.ccwu.cc/file/df0c730927f845ed.png)

![SSH连接](https://mycc.mcck.ccwu.cc/file/0bb8807c21574257.png)



