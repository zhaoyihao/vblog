---
title: 0 成本搭建Cloudflare个人精美博客
description: Cloudflare Pages免费搭建个人精美博客网站
pubDate: 2026-05-04T00:28
image: >-
  https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/5dc47cd8-8656-43aa-9348-f6c13789d032.png
draft: false
tags:
  - blog
  - 博客
  - CF
  - Cloudflare
  - Cloudflare Pages
categories:
  - 安装部署
badge: ''
---
  今天我们将使用网络大善人的 Cloudflare Pages，来免费搭建一个基于**Astro**开发的个人博客！完全免费开源，精美又小巧，对于个人使用还是非常不错！ CloudFlare Pages 每日免费请求次数有 10w，对于个人使用完全够用。<a href="https://www.bilibili.com/video/BV18EktBAET5/" target="_blank">🌐B站原视频</a>

## 部署步骤：

### 1、Fork开源项目： `https://github.com/kobaridev/RyuChan`【[点击前往](https://github.com/kobaridev/RyuChan)】

### 2、Cloudflare 建立一个Pages项目 ：`https://www.cloudflare.com/zh-cn/`【[点击前往](https://www.cloudflare.com/zh-cn)】
![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/30a3b190-98c8-4b1b-b36e-deda3456baf9.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/54d92fc3-5dde-47ed-9c4a-c4e1e4736e23.png)

- `项目名称`：自定义
- `生产分支`：main
- `框架预设`：Astro
- `构建命令`：npm run build
- `构建输出目录`：dist

### 3、配置一个 GitHub App：
(1)、点击GitHub 账号右上角头像

(2)、下拉菜单选择 Settings

(3)、左侧菜单栏拉到最底部 → 点击 Developer settings

(4)、选择 GitHub Apps

(5)、点击右上角 New GitHub App

| 配置项 | 填写示例 | 说明 |
| -------- | -------- | -------- |
| GitHub App name | ryuchan-write | 自定义随便起名 |
| Homepage URL | `https://vblog-45I.pages.dev/` | 填写你自己部署好的博客 Pages 链接 |
| Webhook | 取消勾选 Active | 不需要启用 Webhook 推送 |
| Permissions → Contents | Read and write | 用于往仓库读写、提交文章 |

**最后全部设置完成后点击** `Create GitHub App`  **创建**

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/25b943c2-7e70-4829-b4b2-cb07817fb6cb.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/a0cd2fe5-ec87-427b-a5dc-d2844173633c.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/40c4235c-e705-47c5-a1cf-835faa482480.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/a09bd100-79ca-46cb-b99b-c1914a1c82f3.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/3815af21-3169-44f4-9e65-735f69d829a5.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/f0d225fa-f70e-4bc4-85ed-7690d3afb65b.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/1ce70a7b-b00f-44d5-b91a-4f189613f5cc.png)

### 4、配置Pages环境变量，再重新部署一遍Pages：

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/354fda98-a242-4adf-8d5f-1d77023a2e1a.png)

| 变量名称 | 值 |
| :--- | :--- |
| PUBLIC_GITHUB_OWNER | 你自己GitHub 的用户名（例如：kobe） |
| PUBLIC_GITHUB_REPO | 你自己定义的仓库名（例如：blok） |
| PUBLIC_GITHUB_APP_ID | GitHub App 的 ID（例如：3682308） |

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/40a24558-94c9-4f4f-bdab-48a81b57fe98.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/a34516a8-5874-4f22-9e8e-a87eac93c623.png)

### 5、为此Github仓库安装GitHub App

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/2d03b6f6-cb01-4f63-86aa-86ec887227bc.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/ae679fa5-a5f7-420d-806d-64d33cfaf7af.png)

### 6、生成 GitHub App 私钥（PEM 文件）
(1)、进入刚刚创建好的 GitHub App

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/ee785dc0-6156-4a81-bd7c-8aa4403cbfac.png)

(2)、左侧菜单栏找到`General` ，并往下翻找到 Private keys

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/1cbadd30-ef8f-487e-9032-55f4758d3bc8.png)

(3)、点击 `Generate private key` 生成私钥

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/18576fac-a259-45e2-af80-b7761d2c589e.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/c6dcfee8-de7b-4bfc-bb8f-b8c4fb7e5076.png)

浏览器自动下载后缀为 .pem 的密钥文件，文件名格式示例：your-app-name-xxxxxxxx.pem

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/98648454-b55e-4638-993c-e011b73df882.png)

`⚠️ 重要提醒：该文件是博客必需的私钥凭证，请妥善保存、切勿泄露、不要丢失。`

# 至此，整套个人博客网站部署流程全部结束，接下来可自行访问站点、测试各项在线功能。
