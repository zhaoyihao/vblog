---
title: ShareX 搭配 Worker API 实现无感图床
description: 解放双手的自动化流水线：截图 - 静默上传 - AI识图打标签 - 剪贴板获取链接，一步到位。
pubDate: 2026-05-28T22:46
image: https://imgr2.aitc.ccwu.cc/截图/fc2533ac-7c55-48a4-9c2f-7030b27d2cb1.webp
draft: false
tags:
  - 图床
  - sharex
  - TG
  - Cloudflare
  - telegram
categories:
  - 使用指南
---
你有没有遇到过这样的场景：写技术文章需要配图时，先截图、保存、打开图床上传、复制链接、再粘贴到文档里？一个截图要折腾五六步，思路很容易被打断。

如果这一切能变成：按下快捷键 → 截图自动上传 → 链接直接在剪贴板等你粘贴。甚至，每张图片还能被 AI 自动识别内容并打上标签。下面，我就用 ShareX 配合 R2 Worker API 或 TG Worker API，一步步搭建这条“截图即用”的自动化流水线。

## 1、下载并安装 ShareX（推荐使用便携版）【<a href="https://getsharex.com/" target="_blank" rel="noopener noreferrer">点击前往↗</a>】。

![ShareX](https://imgr2.aitc.ccwu.cc/截图/361768ac-04fb-4fac-931d-7d3cba6c49ba.webp)

## 2、打开 ShareX，进入“快捷键设置”，设定一个顺手的截图快捷键，并将“截图后的任务”配置为 `上传图片`。

![ShareX](https://imgr2.aitc.ccwu.cc/截图/1e4e405b-6ca2-4053-842f-1b91c1194532.webp)

![ShareX](https://imgr2.aitc.ccwu.cc/截图/747856af-90e5-401f-a11a-ee1672010f7a.webp)

## 3、在“自定义上传设置”中，一键导入配置文件（.sxcu），然后将“目标”中的“图像上传”选项改为“自定义图像上传”。

```
{
  "Version": "16.1.0",
  "Name": "2026 AI 视觉图床",
  "DestinationType": "ImageUploader",
  "RequestMethod": "POST",
  "RequestURL": "https://这里换成你的Worker API地址",
  "Headers": {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
  },
  "Body": "MultipartFormData",
  "FileFormName": "file",
  "URL": "{json:url}",
  "ErrorMessage": "{json:error}"
}
```
> 💬重点提示：将上面这段代码复制到记事本(.txt 文件)中 → 保存关闭 → 重命名为 `aitc.sxcu`

![ShareX](https://imgr2.aitc.ccwu.cc/截图/e93d29ea-f1b6-42c5-b730-8663810aa864.webp)

![ShareX](https://imgr2.aitc.ccwu.cc/截图/73049b19-0083-4eaf-b0f8-417c0a91c88f.webp)

![ShareX](https://imgr2.aitc.ccwu.cc/截图/0a779445-7d40-4c54-aefc-bbec420755ef.webp)

![ShareX](https://imgr2.aitc.ccwu.cc/截图/3e6df908-0b8d-4aee-b914-61909fc5d741.webp)

![ShareX](https://imgr2.aitc.ccwu.cc/截图/2ccbc2a3-164e-445e-b398-db8dd26aefda.webp)

回顾一下我们做成了什么：
底层存储：用 Cloudflare R2 白嫖了一个永不关停、全球加速的私人云盘；
自动化上传：用 ShareX 实现截图即传、链接直达剪贴板；
AI 视觉大脑：用 Worker API 给每张图片自动打标签，从此图库不再是冰冷的文件名堆砌；
语义检索：想找什么图，直接打字描述就行，而不是在一堆 IMG_001.png 里翻到崩溃。

至此，你已经完成了这套「AI + 图床」效率工作流的全部搭建。以后你写博客、做笔记、发帖子，截图的流程会变成这样：按一下快捷键 → 图已传好 → AI 已打好标签 → 链接已在剪贴板，全程不超过 3 秒。你甚至感觉不到图床的存在，但它一直在那里，稳定、快速、免费。
