---
title: 如何部署Waline评论系统？
description: ''
pubDate: 2026-05-08T13:51
draft: false
tags:
  - 评论
  - comment
categories: []
---
  只需几个步骤，你就可以在你的网站中启用**Waline**提供评论与浏览量服务。GitHub项目地址：`https://github.com/walinejs/waline`

##一、部署服务端：

### 1、点击 【▶️[Deploy](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample)】跳转至 Vercel 进行 Server 端部署。
> 💬 **注**
>
> 如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。

### 2、输入一个你喜欢的 Vercel 项目名称并点击 `Create` 继续:

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/6d2f8b00-a1c9-47a6-a9f9-0fb903d8663b.png)

### 3、此时 Vercel 会基于**Waline**模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/550597f1-5018-442f-bb57-6019291546f6.png)

一两分钟后，满屏的烟花会庆祝你部署成功。此时点击 Continue to Dashboard 可以跳转到应用的控制台。

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/98f97fe5-6c8b-4406-9db7-7df733d1e811.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/fee40fd0-84f6-4cd8-b4b9-b4811c084f85.png)

## 二、创建数据库
### 1、点击左侧边栏的 `Storage` 进入存储服务配置页，进入 Create Database 创建数据库，然后 Marketplace Database Providers 数据库服务选择 Neon，点击 `Create` 进行下一步。

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/1da47d02-47b8-4868-aa4a-7b72c8d779de.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/f122f596-4a92-4661-bcdb-09969c3880f8.png)

### 2、Terms of Service 用户服务协议，点击 `Accept and Create` ，然后 Configuration and Plan 配置与方案里的都默认不需要更改，接着点击 `Continue` ，接下来 Confirmation 确认页面点击 `Create` ，进入配置成功页面后继续点击 `Continue` 进行下一步。 

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/4408bee2-0e9a-4477-8775-fc00c5b2b705.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/c5217b5f-f0d7-4e1c-9084-7e5e56feda16.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/25a595dc-c771-424a-bd32-4ae8eeb7d034.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/e7c37a15-a94d-4716-8a38-0efd4681bfd1.png)

### 3、选择我们创建的**Waline**的项目，然后点击按钮继续(前3个选项必须勾选，最下面两个选项可以不勾选)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/550b19d3-207f-431d-9974-a2bf4dbb18e4.png)

### 4、这时候 `Storage` 下就有你创建的数据库服务了，点击进去选择 `Open in Neon` 跳转到 Neon，然后在 Neon 界面左侧选择 `SQL Editor`

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/e971a3da-2101-438e-8f29-42253a6a19f7.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/20824e8d-7d88-4de5-a3a8-14e2c93bd322.png)

### 5、进入`SQL Editor` 后，将下面的 SQL 语句粘贴进编辑器中，点击 Run 执行创建表操作。
 
```astro

CREATE SEQUENCE wl_comment_seq;

CREATE TABLE wl_comment (
  id int check (id > 0) NOT NULL DEFAULT NEXTVAL ('wl_comment_seq'),
  user_id int DEFAULT NULL,
  comment text,
  insertedAt timestamp(0) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ip varchar(100) DEFAULT '',
  link varchar(255) DEFAULT NULL,
  mail varchar(255) DEFAULT NULL,
  nick varchar(255) DEFAULT NULL,
  pid int DEFAULT NULL,
  rid int DEFAULT NULL,
  sticky numeric DEFAULT NULL,
  status varchar(50) NOT NULL DEFAULT '',
  "like" int DEFAULT NULL,
  ua text,
  url varchar(255) DEFAULT NULL,
  createdAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ;

CREATE SEQUENCE wl_counter_seq;

CREATE TABLE wl_counter (
  id int check (id > 0) NOT NULL DEFAULT NEXTVAL ('wl_counter_seq'),
  time int DEFAULT NULL,
  reaction0 int DEFAULT NULL,
  reaction1 int DEFAULT NULL,
  reaction2 int DEFAULT NULL,
  reaction3 int DEFAULT NULL,
  reaction4 int DEFAULT NULL,
  reaction5 int DEFAULT NULL,
  reaction6 int DEFAULT NULL,
  reaction7 int DEFAULT NULL,
  reaction8 int DEFAULT NULL,
  url varchar(255) NOT NULL DEFAULT '',
  createdAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ;

CREATE SEQUENCE wl_users_seq;

CREATE TABLE wl_users (
  id int check (id > 0) NOT NULL DEFAULT NEXTVAL ('wl_users_seq'),
  display_name varchar(255) NOT NULL DEFAULT '',
  email varchar(255) NOT NULL DEFAULT '',
  password varchar(255) NOT NULL DEFAULT '',
  type varchar(50) NOT NULL DEFAULT '',
  label varchar(255) DEFAULT NULL,
  url varchar(255) DEFAULT NULL,
  avatar varchar(255) DEFAULT NULL,
  github varchar(255) DEFAULT NULL,
  twitter varchar(255) DEFAULT NULL,
  facebook varchar(255) DEFAULT NULL,
  google varchar(255) DEFAULT NULL,
  weibo varchar(255) DEFAULT NULL,
  qq varchar(255) DEFAULT NULL,
  oidc varchar(255) DEFAULT NULL,
  huawei varchar(255) DEFAULT NULL,
  "2fa" varchar(32) DEFAULT NULL,
  createdAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp(0) without time zone NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ;
```
![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/98a9d6c2-3e88-43cc-b234-55e3f6ee90c6.png)

### 6、稍等片刻之后会告知你创建成功。此时回到 Vercel，找到你的**Waline**项目，然后点击 `Deloeyments`进入部署页面，选择最近或最新的部署项，点击[...]，然后点 `Redeploy` 按钮进行重新部署。该步骤是为了让刚才配置的数据库服务生效。

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/bbf706fa-499b-43db-8940-474287369403.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/4594d68d-21e3-4cb5-a9c3-aa8e43ce9274.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/74a49814-9fb2-44f5-81e1-0194b2eb085c.png)

### 7、等待片刻后 STATUS 会变成 Ready，代表waline部署成功。此时请点击 `Visit` ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/dfdee906-d6af-4d34-8ec0-c6dc7744523d.png)

## 三、绑定域名
利用托管在Cloudflare的免费二级域名去绑定部署好的网站地址xxx.vercel.app