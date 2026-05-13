---
title: 10 分钟搭建 🚀Edgetunnel2.0 全新版本
description: Cloudflare最强免费VPN节点！ ｜永久免费｜全球高速节点｜无限流量
pubDate: 2026-05-12T16:20
draft: false
tags: []
categories: []
badge: ''
---
  今天教大家用 Cloudflare 搭建一套长期可用的免费高速VPN节点，不用服务器、不花一分钱、全球节点任选、无限流量。不但能够访问各大AI平台，还能通过 Cloudflare 的后台，控制代理指定国家的节点。废话不多说，直接开始教程。

支持 Workers、Pages GitHub、Pages 上传 三种部署方式，本教程将以 Pages 上传 方式为例，因为该方式部署无需任何门槛。

如需了解其他部署方式，请自行查看：`https://github.com/cmliu/edgetunnel` 项目文档，并把项目压缩包下载到本地电脑备用。

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

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/bebe4171-e901-40ea-b82e-a29591ee831b.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/9c8a77d8-4d58-4944-867e-33e387024018.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/329991eb-b4d6-4bc9-bdc7-a584d65d080f.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/05c1084b-9e97-4a17-86be-35e781d50c50.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/9626bc88-f389-4cbc-939c-c98593c8642e.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/38768a13-22eb-45e0-895b-4deb0fc7c92f.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/366ea9d4-5432-402c-ab7e-d858bd5d2eb3.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/2c5af2b6-aeed-4b4b-90cf-4fab818b500b.png)

## 二、创建kv空间

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/52062981-80c8-4b3d-bafd-3d3ede3e910a.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/93b4f972-f866-4cac-bdcb-92dc73bcbef7.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/dc8fad20-a998-4c15-89fe-1dad9639283b.png)

## 三、创建Pages

![截图](https://imgr2.aitc.ccwu.cc/截图/a6833488-dd57-4fea-9e85-87aef324fde1.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/8a9339d0-395b-4f9f-a694-025f15848f5f.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/b14c1838-b7d1-4cbe-8e05-97f235d8aadb.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/a15a44e1-503b-4117-ba1a-db29071a229b.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/f1d4915d-26eb-459d-9df9-5b7b78c69b21.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/6a8f578a-028d-4ee9-a57a-18d4e87e3f67.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/99ab425c-d4a6-415e-b84c-79d5e103adbc.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/87edfca7-5dcd-45b3-aab0-0c2db854726b.png)

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
> 变量名称必须填写大写 KV ，命名空间选择刚刚创建的 kv名称，点击 保存 完成绑定。

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/33cb0082-2af2-4830-9854-0a0d47184807.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/446641c0-9b3c-43ef-8bd3-223acfcffb91.png)

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/627b3991-836a-4502-b2a3-dc0504a55e9b.png)

![截图](https://imgr2.aitc.ccwu.cc/其他/52f0690f-6b66-4888-b89c-4c694233449a.png)

## 六、重新部署，使其变量生效！

![截图](https://imgr2.aitc.ccwu.cc/截图/eebe5525-7348-4a32-82e8-75fe40596638.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/f354d0c1-32a1-476a-bf12-acda53a581c1.png)

![截图](https://imgr2.aitc.ccwu.cc/截图/744b4064-0c0a-4e01-89d8-505d9213d10a.png)

## 七、绑定自定义域名

![截图](https://imgr2.aitc.ccwu.cc/%E5%85%B6%E4%BB%96/2cadaffd-17e4-43dc-9443-97ea0840924f.png)

![截图](https://imgr2.aitc.ccwu.cc/其他/5d9bcf97-3d09-4da6-aff4-4ef7783ede58.png)

![截图](https://imgr2.aitc.ccwu.cc/其他/36a930d6-7079-46af-be7d-02187cbc6177.png)

![截图](https://imgr2.aitc.ccwu.cc/%E5%85%B6%E4%BB%96/05450111-ad94-4aad-96c6-274988fba65b.png)

![截图](https://imgr2.aitc.ccwu.cc/其他/9230932c-9e17-47df-9143-97b1841c796e.png)

## 八、此时浏览器输入绑定的域名，假如主页提示`Welcome to nginx!` 说明已部署成功，这时再在输入框的域名后面添加 `/admin` 再回车，即可进入管理页面；

![截图](https://imgr2.aitc.ccwu.cc/%E6%88%AA%E5%9B%BE/bbe7f734-2c26-48c3-9a94-208b03cb45db.png)

输入管理员密码，点击 `登录` 即可进入管理页面；

![截图](https://imgr2.aitc.ccwu.cc/其他/6dbf201f-00d0-4960-ba05-79ddd3efa7c8.png)

登录成功后，即可看到管理页面，如果您是小白，无需折腾直接订阅使用即可；

![截图](https://imgr2.aitc.ccwu.cc/其他/f609e787-ab69-4684-b804-5d564fa10453.png)

```astro
---
// src/components/comments/Waline.astro
interface Props {
  serverURL: string;
  lang?: string;
  dark?: string;
  emoji?: string[];
  meta?: string[];
  requiredMeta?: string[];
  reaction?: boolean;
  pageview?: boolean;
}
const {
  serverURL,
  lang = "zh-CN",
  dark = "html[data-theme-type='dark']",
  emoji = ["https://unpkg.com/@waline/emojis@1.1.0/weibo", "https://unpkg.com/@waline/emojis@1.1.0/bilibili"],
  meta = ["nick", "mail", "link"],
  requiredMeta = [],
  reaction = false,
  pageview = false,
} = Astro.props;
---
<div id="waline-container"></div>
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v3/dist/waline.css" />
<script type="module" define:vars={{
  serverURL, lang, dark, emoji, meta, requiredMeta, reaction, pageview,
}}>
  import { init } from "https://unpkg.com/@waline/client@v3/dist/waline.js";
  let walineInstance;
  async function mountWaline() {
    if (walineInstance) await walineInstance.destroy();
    walineInstance = init({
      el: "#waline-container",
      serverURL, path: location.pathname, lang, dark, emoji, meta, requiredMeta, reaction, pageview,
    });
  }
  document.addEventListener("astro:after-swap", mountWaline);
  document.addEventListener("DOMContentLoaded", mountWaline);
</script>
<style>
  #waline-container { margin-top: 2rem; margin-bottom: 2rem; }
</style>
```


