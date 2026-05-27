---
title: 5 分钟搭建永久免费的双渠道私人 AI 图床
description: ''
pubDate: 2026-05-27T15:58
draft: false
tags: []
categories: []
---
  基于 Cloudflare 全家桶 + Telegram 频道搭建的**永久免费**私人 AI 图床。支持 R2 和 Telegram 双渠道存储，AI 自动打标签，WebP 自动转换，支持分类管理、语义检索。全屏快速预览、一键下载、批量管理，让图片管理变得高效便捷。

✅ 完全免费 | ✅ 永不限速 | ✅ 一键部署 | ✅ 源码开源

---

## 🚀 快速部署

### 前提条件

- Cloudflare 账号（免费）
- Telegram 账号和频道
- GitHub 账号（可选）

### 部署步骤

#### 1. **Fork 项目** 【<a href="https://github.com/maiclez/aitc/tree/main" target="_blank" rel="noopener noreferrer">点击前往↗</a>】

#### 2. **创建 R2 存储桶** 

![R2](https://imgr2.aitc.ccwu.cc/截图/5e404b9b-b0b5-4f0d-8998-6229c53baa54.webp)

![R2](https://imgr2.aitc.ccwu.cc/截图/189f7049-ff93-44ea-a3b3-f3669fb9b04d.webp)

#### 3. **创建 D1 数据库** 并执行SQL创建表头

![D1](https://imgr2.aitc.ccwu.cc/截图/5ec9d5db-d267-487d-b7af-afaf6bfd1128.webp)

![D1](https://imgr2.aitc.ccwu.cc/截图/d4be05df-99bc-4e9d-8265-22fd99145422.webp)

![D1](https://imgr2.aitc.ccwu.cc/截图/6f1ab995-4cd6-44ea-a499-3eeba73f1601.webp)

进入该数据库，点击 `控制台` ，复制并执行以下 SQL 代码来创建表结构：

```
CREATE TABLE IF NOT EXISTS images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image_url TEXT NOT NULL,
  ai_tags TEXT NOT NULL,
  category TEXT NOT NULL,
  source TEXT DEFAULT 'R2',
  upload_time TEXT,
  file_id TEXT,
  short_id TEXT
);

CREATE INDEX IF NOT EXISTS idx_images_category ON images(category);
CREATE INDEX IF NOT EXISTS idx_images_source ON images(source);
CREATE INDEX IF NOT EXISTS idx_images_upload_time ON images(upload_time DESC);
CREATE INDEX IF NOT EXISTS idx_images_short_id ON images(short_id);
CREATE INDEX IF NOT EXISTS idx_images_file_id ON images(file_id);
```

![D1](https://imgr2.aitc.ccwu.cc/截图/d170535b-a7a3-4b69-9f77-468f9880ed78.webp)

![D1](https://imgr2.aitc.ccwu.cc/截图/b63f0d82-f196-4667-b782-b24678dfbc7f.webp)

![D1](https://imgr2.aitc.ccwu.cc/截图/2ce5de3d-859a-4bd4-a392-308e42de5af6.webp)

#### 4. **部署 r2-worker**，并分别绑定R2存储桶、D1数据库、Workers AI

![r2-worker](https://imgr2.aitc.ccwu.cc/截图/ed961592-dbd2-40f3-b31a-f396c01b6feb.webp)

![r2-worker](https://imgr2.aitc.ccwu.cc/截图/3df99eec-667d-4b14-8093-a51a9c10029b.webp)

![r2-worker](https://imgr2.aitc.ccwu.cc/截图/823059c9-9849-491b-b62d-c6adf681763e.webp)

#### 📋 R2 Worker 绑定配置

| 变量名称 | 类型 | 说明 |
| :--- | :--- | :--- |
| `MY_BUCKET` | R2 存储桶 | 你的 R2 桶 |
| `MY_DB` | D1 数据库 | 你的 D1 数据库 |
| `AI` | AI 绑定 | Workers AI |

![r2-worker](https://imgr2.aitc.ccwu.cc/截图/23319771-03fd-4a8b-8233-c855b55c69f9.webp)

#### 完成绑定后，再给 `r2-worker` 绑定两个自定义域名，例如：
- `api.aitc.ccwu.cc` 用作 R2 Worker 的 API 调用，(对应前端配置中的 R2_API_URL)
- `r2.aitc.ccwu.cc` 用作 R2 存储桶中图片的访问链接

![绑定域名](https://imgr2.aitc.ccwu.cc/截图/087dd78e-c452-4fd3-a07b-525f22c52725.webp)

![绑定域名](https://imgr2.aitc.ccwu.cc/截图/b0bed2d0-d3fa-433b-8d89-cfe3aa9e9401.webp)

#### 自定义域名绑定好之后，进入 GitHub 项目，打开 workers/r2-worker.js 文件，复制全部代码，然后粘贴到 Cloudflare `r2-worker`  的代码编辑器中，点击保存并部署。

![r2-worker](https://imgr2.aitc.ccwu.cc/截图/1fa07550-7625-42a5-91b0-a62c0bf75497.webp)

![r2-worker](https://imgr2.aitc.ccwu.cc/截图/d741de74-b510-4c9a-bc69-8a3daf37d9ff.webp)






5. 部署 tg-Worker





5. **创建 Telegram Bot** 并获取 Token 和 Chat ID

6. **部署 Pages**（前端页面）
7. **配置环境变量** 和绑定


---

## ✨ 核心功能

| 功能模块 | 具体特性 |
| :--- | :--- |
| **📦 双渠道存储** | R2 对象存储 + Telegram 频道，数据双重保障 |
| **🤖 AI 自动打标** | 集成 Workers AI，上传即自动生成中文标签，支持语义检索 |
| **🖼️ WebP 转换** | 前端 Canvas 自动转换，减少 60%-80% 存储空间 |
| **🖱️ 全屏快速预览** | 点击图片全屏查看，左右键/滚轮切换图片，支持下载、移动、复制、删除 |
| **📁 图片管理** | 单张/批量删除、移动、复制到分类 |
| **⬇️ 一键下载** | 图库卡片和全屏预览中均可一键下载图片 |
| **🏷️ 分类管理** | 自定义分类，动态显示/隐藏空分类 |
| **🔍 语义检索** | 基于 AI 标签的图片搜索，秒级找到目标图片 |
| **🎨 渠道标识** | 图库卡片和全屏预览显示 R2/TG 渠道标签 |
| **📄 格式标识** | 自动识别并显示图片格式（JPEG/PNG/WEBP等） |
| **⚡ 多种上传** | 拖拽、点击选择、Ctrl+V 粘贴，任你选择 |
| **💾 渠道记忆** | localStorage 记住上次选择的渠道 |
| **📜 分页加载** | 滚动自动加载更多，每页 100 张 |


## 🏗️ 技术架构

| 组件 | 技术 | 说明 |
| :--- | :--- | :--- |
| **前端** | HTML + Tailwind CSS | 响应式界面，部署在 Pages |
| **R2 Worker** | Cloudflare Workers | 处理 R2 上传、查询、删除、移动、复制 |
| **TG Worker** | Cloudflare Workers | 处理 Telegram 上传、删除、移动、复制、代理访问 |
| **数据库** | Cloudflare D1 | 存储图片元数据 |
| **存储** | Cloudflare R2 + Telegram 频道 | 双渠道文件存储 |
| **AI 模型** | Workers AI | 图片自动打标签 |