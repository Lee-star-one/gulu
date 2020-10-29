# vue 造轮子
[![Build Status](https://www.travis-ci.org/Lee-star-one/gulu.svg?branch=master)](https://www.travis-ci.org/Lee-star-one/gulu)
[![NPM version](https://img.shields.io/npm/v/gulu.svg)](https://www.npmjs.com/package/gulu)
## 介绍

## 开始使用

1. 添加 css 样式
使用本框架前，请在 css 中开启 boder-box

```
*{
  box-sizing:border-box
},*::after{box-sizing:border-box;}
```
```
IE 8 及以上浏览器都支持此样式
还需要射中默认的颜色等变量（后续会改为scss变量）
```
```
html {
  --button-height: 32px;
  --button-size: 14px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
2. 安装 gulu
```
npm i -S leestarui
```
3. 引入 gulu
```
import {Button,ButtonGroup,Icon} from 'leestarui'
import 'leestarui/index.css'
export default {
  name:'app',
  components:{
    'g-button':Button,
    'g-icon':Icon
  }
}
```
4. 引入svg symbols
<script src="//at.alicdn.com/t/font_2140954_9o7toyfdr5r.js"></script>
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码