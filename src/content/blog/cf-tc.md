---
title: 0 成本搭建免费无限图床
description: 利用 Cloudflare + Telegram 搭建永久免费图床：零成本无限图床全攻略_
pubDate: 2026-05-23T00:20
image: https://imgr2.aitc.ccwu.cc/其他/00eac7d1-9e10-46d8-ad30-6049b88568a9.png
draft: false
tags:
  - 图床
  - Cloudflare
  - Telegram
  - TG
categories:
  - 安装部署
badge: ''
---
  今天给大家带来一个非常实用的 GitHub 开源项目【<a href="https://cfbed.sanyue.de/guide/features.html" target="_blank" rel="noopener noreferrer">项目介绍↗</a>】，教大家如何利用 Cloudflare 的生态系统搭建一个完全免费的个人图床。

该方案的巧妙之处在于：使用 Cloudflare Pages 部署前端，KV 存储元数据，D1 存储数据库，而真正的图片文件则存储在 Telegram 上（利用 TG 的无限容量作为免费硬盘）。

<div style="max-width: 900px; width: 96%; margin: 2rem auto;">
<iframe style="width: 100%; height: auto; aspect-ratio: 16 / 9; border: none;" 
src="https://www.youtube.com/embed/UBXmvVZgMqo" allowfullscreen></iframe>
</div>

---

## 1. 项目准备

首先，进入本项目地址并 Fork 到你的 GitHub 账号下：【<a href="https://github.com/MarSeventh/CloudFlare-ImgBed" target="_blank" rel="noopener noreferrer">点击前往↗</a>】

## 2. 创建 Cloudflare Pages

1. 登录账户主页，点击 Workers 和 Pages -> 创建应用程序 -> Pages -> 连接到 Git。
2. 选择你刚刚 Fork 的项目 CloudFlare-ImgBed。
3. 在“构建设置”中进行如下配置：

|  配置项  |  值  |  说明  |
| --------- | --------- | ------- |
|  项目名称  |  `cloudflare-imgbed（或自定义）`  |  项目标识符  |
|  生产分支 |  `main`  |  生产环境分支  |
|  构建命令 |  `npm install` |  重要：v2.0 新构建命令  |
|  构建输出路径|  `/frontend-dist` |  前端构建产物目录  |

4. 点击“保存并部署”。

## 3. 配置 KV 数据库

1. 回到账户主页，选择 存储和数据库 -> Workers KV。
2. 点击“创建命名空间”，名称输入：`img_url` 。

## 4. 绑定 KV 到项目

1. 进入你刚刚创建的 Pages 项目设置。
2. 选择 设置 -> 绑定 -> 添加 -> KV 命名空间绑定。
3. 点击“保存”：
   - 变量名称：`img_url` （必须是这个名称，否则程序无法读取）
   - KV 命名空间：选择刚才创建的 `img_url` 。

> 说明：在这个项目中，KV 仅用来存储图片的元数据（如短链接索引），它并不存储真实的图片文件。我们利用 Telegram 作为后端“硬盘”来存储实际图片。

## 5. 创建 D1 数据库并初始化

1. 在账户主页选择 `存储和数据库` -> D1 数据库。
2. 点击“创建数据库”，名称建议使用：`img_d1` 。
3. 数据库位置就选第一个"位置"选项，然后点击创建。
4. 进入该数据库，点击 `控制台` ，复制并执行以下 SQL 脚本来创建表结构：

```
CREATE TABLE IF NOT EXISTS files (
    id TEXT PRIMARY KEY,
    value TEXT,
    metadata TEXT NOT NULL,
    file_name TEXT,
    file_type TEXT,
    file_size TEXT,
    upload_ip TEXT,
    upload_address TEXT,
    list_type TEXT,
    timestamp INTEGER,
    label TEXT,
    directory TEXT,
    channel TEXT,
    channel_name TEXT,
    tg_file_id TEXT,
    tg_chat_id TEXT,
    tg_bot_token TEXT,
    is_chunked BOOLEAN DEFAULT FALSE,
    tags TEXT, 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    category TEXT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS index_operations (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    timestamp INTEGER NOT NULL,
    data TEXT NOT NULL,
    processed BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS index_metadata (
    key TEXT PRIMARY KEY,
    last_updated INTEGER,
    total_count INTEGER DEFAULT 0,
    last_operation_id TEXT,
    chunk_count INTEGER DEFAULT 0,
    chunk_size INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS other_data (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    type TEXT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_files_timestamp ON files(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_files_directory ON files(directory);
CREATE INDEX IF NOT EXISTS idx_files_channel ON files(channel);
CREATE INDEX IF NOT EXISTS idx_files_file_type ON files(file_type);
CREATE INDEX IF NOT EXISTS idx_files_upload_ip ON files(upload_ip);
CREATE INDEX IF NOT EXISTS idx_files_created_at ON files(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_files_tags ON files(tags);

CREATE INDEX IF NOT EXISTS idx_settings_category ON settings(category);

CREATE INDEX IF NOT EXISTS idx_index_operations_timestamp ON index_operations(timestamp);
CREATE INDEX IF NOT EXISTS idx_index_operations_processed ON index_operations(processed);
CREATE INDEX IF NOT EXISTS idx_index_operations_type ON index_operations(type);

CREATE INDEX IF NOT EXISTS idx_other_data_type ON other_data(type);

CREATE TRIGGER IF NOT EXISTS update_files_updated_at 
    AFTER UPDATE ON files
    BEGIN
        UPDATE files SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;

CREATE TRIGGER IF NOT EXISTS update_settings_updated_at 
    AFTER UPDATE ON settings
    BEGIN
        UPDATE settings SET updated_at = CURRENT_TIMESTAMP WHERE key = NEW.key;
    END;

CREATE TRIGGER IF NOT EXISTS update_index_metadata_updated_at 
    AFTER UPDATE ON index_metadata
    BEGIN
        UPDATE index_metadata SET updated_at = CURRENT_TIMESTAMP WHERE key = NEW.key;
    END;

CREATE TRIGGER IF NOT EXISTS update_other_data_updated_at 
    AFTER UPDATE ON other_data
    BEGIN
        UPDATE other_data SET updated_at = CURRENT_TIMESTAMP WHERE key = NEW.key;
    END;
```
## 6. 绑定 D1 数据库

1. 回到 Pages 项目的 设置 -> 绑定 -> 添加 。
2. 找到 D1 数据库绑定，点击“保存”：
    - 变量名称：`img_d1`
    - D1 数据库：选择刚才创建的 `img_d1`

## 7. 重新部署并生效

1. 在 Pages 项目中点击 "部署" 选项卡。
2. "所有部署"中在最近的第一条部署记录右侧点击三个点 ...，选择“重试部署”。
3. 等待部署完成，访问你的 Pages 域名。

> 💬安全提醒：首次登录直接点击登录，请务必第一时间进入后台修改管理员账号、密码以及上传密码。

## 8. 获取 Telegram 配置，@BotFather可获取Bot_Token，@VersaToolsBot可获取频道ID。

![Telegram 渠道](https://imgr2.aitc.ccwu.cc/截图/911347a7-798a-42fb-97fc-0f8cf9c2929d.png)

1. 获取Bot_Token：在Telegram中，向@BotFather发送命令/newbot，根据提示依次输入您的机器人名称和用户名。成功创建机器人后，您将会收到一个BOT_TOKEN，用于与Telegram API进行交互。

![API Token](https://imgr2.aitc.ccwu.cc/截图/af9f15b6-4a5b-4f5a-978c-063bc09efc22.png)

![API Token](https://imgr2.aitc.ccwu.cc/截图/82dc28aa-fdcb-424b-9178-edc5cac03c7b.png)

2. 获取 Chat ID：创建一个新的频道（Channel），进入该频道后，点击频道头像，将刚刚创建的机器人添加为频道管理员，然后往频道随便发一条内容，再将这条内容转发给这样 @VersaToolsBot ，然后去到@VersaToolsBot 聊天界面，它就会发给你一条消息，这样你就能得到CHAT_ID。

![Chat ID](https://imgr2.aitc.ccwu.cc/截图/0de98b02-29a5-42e2-b6a1-4b6fd481232c.png)

![Chat ID](https://imgr2.aitc.ccwu.cc/截图/81eeb555-c45d-4c43-8266-0b564f1976aa.png)

![Chat ID](https://imgr2.aitc.ccwu.cc/截图/5ec430aa-c1de-4c09-9eeb-3801c6365b0b.png)

![Chat ID](https://imgr2.aitc.ccwu.cc/截图/f9b28cb5-267a-4e6d-90ed-6cbde2e4c27f.png)

![Chat ID](https://imgr2.aitc.ccwu.cc/截图/631fe7bf-8226-490b-a443-c61a9cf4a044.png)

![Chat ID](https://imgr2.aitc.ccwu.cc/截图/ec613f2c-a045-4512-84b5-03541c974016.png)

![Chat ID](https://imgr2.aitc.ccwu.cc/截图/2923a276-5353-4f20-8da9-24737360acb4.png)
