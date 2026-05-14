---
title: Markdown 样式指南
description: 本文列举了 Astro 项目中编写 Markdown 内容的常用基础语法示例。
pubDate: 2024-07-01T00:00
image: https://imgr2.aitc.ccwu.cc/其他/a1099896-3fe0-4cff-aaa7-ef01fae64ec8.png
draft: false
tags:
  - Markdown
categories:
  - Markdown示例
badge: Markdown
---
在 Astro 中撰写 Markdown 内容时，常会用到以下基础 Markdown 语法示例。

## 一、标题

以下 HTML<h1>元素<h6>代表六个级别的章节标题。<h1>是最高级别的章节标题，而<h6>是最低级别的章节标题。

# H1 → 1个 **#**

## H2 → 2个 **#**

### H3 → 3个 **#**

#### H4 → 4个 **#**

##### H5 → 5个 **#**

###### H6 → 6个 **#**

## 二、段落

``   =   `灰色等宽字体` | ` 的键盘位置是在左上角 Esc 下面、数字1左边 那个键，并不是单引号 '。它是用来标记代码、命令、标签、关键字、专有名词，和普通文字区分开。

## 三、图片

```markdown
![](https://imgr2.aitc.ccwu.cc/其他/a1099896-3fe0-4cff-aaa7-ef01fae64ec8.png)
```

#### 输出

![wdblog](https://imgr2.aitc.ccwu.cc/其他/a1099896-3fe0-4cff-aaa7-ef01fae64ec8.png)

## 四、超链接：

### 1、网址超链

```
1. [点击前往](https://inav.ccwu.cc)
2. 【[点击前往](https://inav.ccwu.cc)】
3. 【[▶️点击前往](https://inav.ccwu.cc)】
```
#### 输出
1. [点击前往](https://inav.ccwu.cc)
2. 【[点击前往](https://inav.ccwu.cc)】
3. 【[▶️点击前往](https://inav.ccwu.cc)】

### 2、视频超链

#### 文字跳转链接
```
<a href="https://youtu.be/IzQybHQSwGI?si=1R5S6ZIK9X66s6nl" target="_blank">YouTube视频↗</a>
```
#### 输出

<a href="https://youtu.be/IzQybHQSwGI?si=1R5S6ZIK9X66s6nl" target="_blank">YouTube视频↗</a>

#### 直接嵌入播放代码
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/IzQybHQSwGI?si=JcUZdVBBlWVd-0wb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```
#### 输出

<iframe width="560" height="315" src="https://www.youtube.com/embed/IzQybHQSwGI?si=JcUZdVBBlWVd-0wb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 五、引用块

### 1、大于号 > 开头，就是 Markdown 引用块，例如：

```
> 这是单行引用块
```
#### 输出 
> 这是单行引用块
---
### 2、多行引用，每行都加 >，也可以只在第一行加，

写法 1：每行都加 >

```
> 第一行引用
> 第二行引用
> 第三行引用
```
#### 输出
> 第一行引用
> 第二行引用
> 第三行引用
---
写法 2：只有开头一个 > ，换行继续写
```
> 第一行引用
第二行引用
第三行引用
```
#### 输出
> 第一行引用
第二行引用
第三行引用
---
### 3、引用块里可以嵌套其他 Markdown：

比如**加粗**、_斜体_、`行内代码`；

```
> 💬重点提示：可以在引用块里用  **加粗**、  _斜体_、  `行内代码`
```
#### 输出
> 💬重点提示：可以在引用块里用  **加粗**、  _斜体_、  `行内代码`
---
比如 - 列表1、- 列表2、- 列表3；
```
- 列表第1条内容
- 列表第2条内容
- 列表第3条内容
```
#### 输出
> - 列表第1条内容
> - 列表第2条内容
> - 列表第3条内容
---
### 4、嵌套引用块（引用块里套引用块），多加一个 >>

```
> 外层引用
>> 内层嵌套引用
```

#### 输出
> 外层引用
>> 内层嵌套引用
---

### 5、带出处引用
```
> 不要通过共享内存来通信，要通过通信来共享内存。<br>
> — <cite>Rob Pike[^1]</cite>

--------------------------------------------------------------------------
[^1]: Go 语言联合创始人，著名程序员。The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.
```
#### 输出

> 不要通过共享内存来通信，要通过通信来共享内存。<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: Go 语言联合创始人，著名程序员。The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

- `<br>`是 HTML 的换行；
- `<cite>名称</cite>` 是 HTML 标签作用，标注引用的出处、作者、来源；
所以👉 <cite>Rob Pike</cite>意思是：出处 / 作者为Rob Pike
- `[^1]` 可以上标引用，绑定底部注释
---

## 6、表格

#### 三列表格

```
|  变量名称  |  填写示例  |  说明  |
| --------- | --------- | ------- |
|  替换名称  |  替换示例  |  说明  |
|  替换名称  |  替换示例  |  说明  |
```

#### 输出

|  变量名称  |  填写示例  |  说明  |
| --------- | --------- | ------- |
|  替换名称  |  替换示例  |  说明  |
|  替换名称  |  替换示例  |  说明  |

#### 两列表格

```
| 变量名称 | 值 |
| :--- | :--- |
| 文本 | 文本 | 文本 |
| 文本 | 文本 | 文本 |
```
#### 输出
| 变量名称 | 值 |
| :--- | :--- |
| 文本 | 文本 | 文本 |
| 文本 | 文本 | 文本 |

- `:--- 或 只有 ----` = 左对齐；
- `---: ` = 右对齐；
- `:--: `= 居中对齐;

## 七、代码块

我们可以使用三个反引号 ``` ，然后另起一行编写代码片段，代码编写完后在另起一行再次使用三个反引号。为了突出显示特定语言的语法，可以在开头的三个反引号后写上该语言名称的一个单词，例如：html、javascript、css、markdown、typescript、txt、bash

````Markdown
```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 1e5 + 5;
int n, k, a[N];
long long ans;
vector<int> v[N];
int main()
{
    scanf("%d%d", &n, &k);
    for (int i = 1; i <= n; i++)
    {
        scanf("%d", &a[i]);
        v[i % k].push_back(a[i]);
    }
    for (int i = 0; i < k; i++)
        sort(v[i].rbegin(), v[i].rend());
    for (int i = 0; i < k; i++)
    {
        for (int j = 0; j + 1 < v[i].size(); j += 2)
        {
            ans += v[i][j] + v[i][j + 1];
        }
    }
    printf("%lld\n", ans);
    return 0;
}
```
````

#### 输出

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 1e5 + 5;
int n, k, a[N];
long long ans;
vector<int> v[N];
int main()
{
    scanf("%d%d", &n, &k);
    for (int i = 1; i <= n; i++)
    {
        scanf("%d", &a[i]);
        v[i % k].push_back(a[i]);
    }
    for (int i = 0; i < k; i++)
        sort(v[i].rbegin(), v[i].rend());
    for (int i = 0; i < k; i++)
    {
        for (int j = 0; j + 1 < v[i].size(); j += 2)
        {
            ans += v[i][j] + v[i][j + 1];
        }
    }
    printf("%lld\n", ans);
    return 0;
}
```

## 八、列表类型

### 有序列表
```markdown
1. 第一项
2. 第二项
3. 第三项
```
#### 输出
1. 第一项
2. 第二项
3. 第三项

### 无序列表

```markdown
- 列表项
- 另一件物品
- 还有另一件物品
```
#### 输出

- 列表项
- 另一件物品
- 还有另一件物品

### 嵌套列表

```markdown
- 水果
  - 苹果
  - 橙子
  - 香蕉
- 奶制品
  - 牛奶
  - 奶酪
```

#### 输出

- 水果
  - 苹果
  - 橙子
  - 香蕉
- 奶制品
  - 牛奶
  - 奶酪

## 九、其他要素

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### 输出

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

- <abbr> 是 HTML 缩写标签，专门用来标记英文缩写、简写。
- title="" 属性，title="Graphics Interchange Format"
- 鼠标悬停在 GIF 文字上时，会弹出小字提示：Graphics Interchange Format

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

- `<kbd>按键名</kbd>` 是 HTML 专用标签，渲染效果会变成按键样式，像键盘按钮一样。

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

- `<mark>内容</mark>`，HTML 高亮标签，默认黄色背景高亮，用来标记、突出重点文字。
