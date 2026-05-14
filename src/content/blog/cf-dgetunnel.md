---
title: 5 分钟搭建 Edgetunnel  就是这么简单！✨ 就是这么方便！
description: Cloudflare最强免费VPN节点！ ｜永久免费｜全球高速节点｜无限流量
pubDate: 2026-05-12T16:20
image: >-
  https://imgr2.aitc.ccwu.cc/%E5%85%B6%E4%BB%96/938a7512-6399-4c0d-8dad-9ad2c59b9998.png
draft: false
tags:
  - kv空间
  - 域名绑定
  - 科学上网
  - Cloudflare Pages
  - Edgetunnel
  - VLESS
  - Trojan
  - 节点
  - v2rayN
categories:
  - 安装部署
  - 科学上网
badge: ''
---
  今天教大家用 Cloudflare 搭建一套长期可用的免费高速VPN节点，不用服务器、不花一分钱、全球节点任选、无限流量。不但能够访问各大AI平台，还能通过 Cloudflare 的后台，控制代理指定国家的节点。废话不多说，直接开始教程。

支持 Workers、Pages GitHub、Pages 上传 三种部署方式，本教程将以 Pages 上传 方式为例，因为该方式部署无需任何门槛。

GitHub项目地址：`https://github.com/cmliu/edgetunnel` ，进入该项目后把项目压缩包下载到本地电脑进行备用。如需了解其他部署方式，请自行查看 edgetunnel 官方部署指南【[点击前往](https://blog.cmliussss.com/p/edt2/)】

Cloudflare注册地址：`https://www.cloudflare.com`

注册免费域名地址：

DNSHE：`https://www.dnshe.com`  邀请码：CY483A4A4B

DigitalPlat: `https://domain.digitalplat.org` 

ClouDNS：`https://www.cloudns.net/index/lang/chs`

dynv6：`https://dynv6.com`

ZoneABC：`https://zoneabc.net`

## 一、安装部署前的准备

### 1、提前准备好Cloudflare账号、免费的域名、以及项目压缩包。

### 2、把免费域名托管到Cloudflare平台

![免费域名](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/bebe4171-e901-40ea-b82e-a29591ee831b.png)

![免费域名](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/9c8a77d8-4d58-4944-867e-33e387024018.png)

![免费域名](https://imgr2.aitc.ccwu.cc/截图/329991eb-b4d6-4bc9-bdc7-a584d65d080f.png)

![免费域名](https://imgr2.aitc.ccwu.cc/截图/05c1084b-9e97-4a17-86be-35e781d50c50.png)

![域名绑定](https://imgr2.aitc.ccwu.cc/截图/9626bc88-f389-4cbc-939c-c98593c8642e.png)

![域名绑定](https://imgr2.aitc.ccwu.cc/截图/38768a13-22eb-45e0-895b-4deb0fc7c92f.png)

![域名绑定](https://imgr2.aitc.ccwu.cc/截图/366ea9d4-5432-402c-ab7e-d858bd5d2eb3.png)

![域名绑定](https://imgr2.aitc.ccwu.cc/截图/2c5af2b6-aeed-4b4b-90cf-4fab818b500b.png)

## 二、创建kv空间

![创建kv空间](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/52062981-80c8-4b3d-bafd-3d3ede3e910a.png)

![创建kv空间](https://imgr2.aitc.ccwu.cc/截图/93b4f972-f866-4cac-bdcb-92dc73bcbef7.png)

![创建kv空间](https://imgr2.aitc.ccwu.cc/截图/dc8fad20-a998-4c15-89fe-1dad9639283b.png)

## 三、创建Cloudflare Pages

![Cloudflare Pages](https://imgr2.aitc.ccwu.cc/截图/a6833488-dd57-4fea-9e85-87aef324fde1.png)

![Cloudflare Pages](https://imgr2.aitc.ccwu.cc/截图/8a9339d0-395b-4f9f-a694-025f15848f5f.png)

![Cloudflare Pages](https://imgr2.aitc.ccwu.cc/截图/b14c1838-b7d1-4cbe-8e05-97f235d8aadb.png)

![Cloudflare Pages](https://imgr2.aitc.ccwu.cc/截图/a15a44e1-503b-4117-ba1a-db29071a229b.png)

![Cloudflare Pages](https://imgr2.aitc.ccwu.cc/截图/f1d4915d-26eb-459d-9df9-5b7b78c69b21.png)

![Cloudflare Pages](https://imgr2.aitc.ccwu.cc/截图/6a8f578a-028d-4ee9-a57a-18d4e87e3f67.png)

![Cloudflare Pages](https://imgr2.aitc.ccwu.cc/截图/99ab425c-d4a6-415e-b84c-79d5e103adbc.png)

![Cloudflare Pages](https://imgr2.aitc.ccwu.cc/截图/87edfca7-5dcd-45b3-aab0-0c2db854726b.png)

## 四、设置管理员变量

> 💬 **注**
>
> 类型 `文本` ，变量名称 `ADMIN` ，值 为`WebUI管理员密码`，建议密码设置复杂点，避免被暴力破解。

![截图](https://imgr2.aitc.ccwu.cc/截图/9bf75fd0-2ac4-4497-9013-6fa872815049.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/a50c3b4b-ac67-43df-8d40-232e6060fef7.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/5c96428f-204b-4a56-8b9c-da18da92f14a.png)

## 五、绑定 KV 命名空间

> 💬 **注**
>
> 变量名称必须填写大写 KV ，命名空间选择刚刚创建的 kv名称，点击 `保存` 完成绑定。

![绑定kv空间](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/33cb0082-2af2-4830-9854-0a0d47184807.png)

![绑定kv空间](https://imgr2.aitc.ccwu.cc/截图/446641c0-9b3c-43ef-8bd3-223acfcffb91.png)

![绑定kv空间](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/627b3991-836a-4502-b2a3-dc0504a55e9b.png)

![绑定kv空间](https://imgr2.aitc.ccwu.cc/其他/52f0690f-6b66-4888-b89c-4c694233449a.png)

## 六、重新部署，使其变量生效！

![Pages](https://imgr2.aitc.ccwu.cc/截图/eebe5525-7348-4a32-82e8-75fe40596638.png)

![Pages](https://imgr2.aitc.ccwu.cc/截图/f354d0c1-32a1-476a-bf12-acda53a581c1.png)

![Pages](https://imgr2.aitc.ccwu.cc/截图/744b4064-0c0a-4e01-89d8-505d9213d10a.png)

## 七、绑定自定义域名

![绑定域名](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/2cadaffd-17e4-43dc-9443-97ea0840924f.png)

![绑定域名](https://imgr2.aitc.ccwu.cc/截图/5d9bcf97-3d09-4da6-aff4-4ef7783ede58.png)

![绑定域名](https://imgr2.aitc.ccwu.cc/截图/36a930d6-7079-46af-be7d-02187cbc6177.png)

![绑定域名](https://imgr2.aitc.ccwu.cc/截图/05450111-ad94-4aad-96c6-274988fba65b.png)

![绑定域名](https://imgr2.aitc.ccwu.cc/截图/9230932c-9e17-47df-9143-97b1841c796e.png)

## 八、登录 EDT2 管理页面

输入您绑定的自定义域名，若页面提示`Welcome to nginx!` 则说明已部署成功，然后在地址栏的后面添加上 `/admin` (例如你绑定的自定义域名是 edt2.cfjd.cc.cd ，则需访问 https://edt2.cfjd.cc.cd/admin )，即可登录管理页面；

![Edgetunnel](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/bbe7f734-2c26-48c3-9a94-208b03cb45db.png)

输入管理员密码，点击 `登录` 即可进入管理页面；

![Edgetunnel](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/6dbf201f-00d0-4960-ba05-79ddd3efa7c8.png)

登录成功后，即可看到管理页面，如果您是小白，无需折腾直接订阅使用即可；

![Edgetunnel](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/f609e787-ab69-4684-b804-5d564fa10453.png)

## 九、将复制好的订阅链接导入 `v2rayN` 并使用

### 1、打开 `v2RayN` ，点击顶部菜单栏：订阅分组 → 订阅分组设置 → 添加

![科学上网](https://imgr2.aitc.ccwu.cc/截图/aad4bb03-aa6a-4ea2-834b-ffb05eb927d3.png)

![科学上网](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/15ddb0ac-7e86-48a8-b228-da5ee070c963.png)

### 2、`别名`：随便填（如 “我的订阅”，“x科学上网”）；`可选地址 (URL)`：粘贴你复制的订阅链接

![v2rayN](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/5c7d77b1-606b-4622-beb8-8c44a2e1b32c.png)

### 3、更新订阅节点，等待更新的节点列表

![v2rayN](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/b4c35bb5-775e-42bf-b316-dc9bb6f4bda1.png)

![v2rayN](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/8e3cdc7b-86b6-47da-81c1-cf9884f21993.png)

### 4、在节点列表中随便选一个节点，然后按 `Ctrl+A` 全选，再按 `Ctrl+R` 测试真链接，选一个延迟低的节点并双击，

![v2rayN](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/172865a0-6d43-4338-b901-2d5bf97d7f3f.png)

### 5、开启 `自动配置系统代理` ，路由选择 `全局` 

![v2rayN](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/15434e29-8b39-4735-82e6-ca1957aa08b1.png)

![v2rayN](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/6c19e56b-babf-4bc1-9d71-457a83109aa0.png)

# 至此，`Edgetunnel` 部署、`v2rayN` 订阅链接导入配置全部完成，从这一刻你拥有了科学上网能力，从此开启全新网络视界，任你随心畅游、尽情徜徉！
