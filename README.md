# vue 造轮子
[![Build Status](https://www.travis-ci.org/Lee-star-one/gulu.svg?branch=master)](https://www.travis-ci.org/Lee-star-one/gulu)
[![NPM version](https://img.shields.io/npm/v/gulu.svg)](https://www.npmjs.com/package/gulu)
## 介绍
demo
https://lee-star-one.github.io/gulu_docs/
## 开始使用

1. 安装 gulu
```
npm i  test_gulu_lee
```
2. 引入 gulu 

    2.1按需引入
```
import {Button,ButtonGroup,Icon} from 'test_gulu_lee'
import 'test_gulu_lee/dist/gulu.css'
export default {
  name:'app',
  components:{
    'g-button':Button,
    'g-icon':Icon
  }
}
```
    2.2全局引入
```
import gulu from 'test_gulu_lee'
vue.use(gulu)
```
