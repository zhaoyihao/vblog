---
title: Markdown 样式指南
description: 本文列举了 Astro 项目中编写 Markdown 内容的常用基础语法示例。
pubDate: 2024-07-01T00:00
image: https://imgr2.aitc.ccwu.cc/其他/a1099896-3fe0-4cff-aaa7-ef01fae64ec8.png
draft: false
tags:
  - Markdown
categories:
  - Documentation
  - Examples
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

## 四、引用块

### 1、大于号 > 开头，就是 Markdown 引用块，例如：

```
> 这是单行引用块
```
#### 输出 
> 这是单行引用块

### 2、多行引用，每行都加 >，也可以只在第一行加，

写法 1：每行都加 >
#### 输出
```
> 第一行引用
> 第二行引用
> 第三行引用
```
> 第一行引用
> 第二行引用
> 第三行引用

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

### 3、引用块里可以嵌套其他 Markdown：

比如**加粗**、_斜体_、`行内代码`；

```
> 重点提示：可以在引用块里用  **加粗**、  _斜体_、  `行内代码`
```
#### 输出
> 重点提示：可以在引用块里用  **加粗**、  _斜体_、  `行内代码`

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

带出处引用

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>










The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

#### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
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

Output

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

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements

#### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
