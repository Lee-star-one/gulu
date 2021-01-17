<template>
  <div id='app'>
        <p>栅格</p>
        <div class="box">
            <g-row>
                <g-col span="4" :pc="{span:6}" offset="2">
                    <div class="demo"></div>
                </g-col>
                <g-col span="4" :pc="{span:6}" offset="2">
                    <div class="demo"></div>
                </g-col>
                <g-col span="4" :pc="{span:6}" offset="2">
                    <div class="demo"></div>
                </g-col>
            </g-row>
        </div>
        <p>input输入框</p>
        <div class="box">
            <g-input value="张三"></g-input>
            <g-input value="张三"></g-input>
            <g-input value="李四" disabled></g-input>
            <g-input value="王五" readonly></g-input>
        </div>
        <div class="box">
            <g-input value="赵六" error="姓名不能少于2个字"></g-input>
        </div>
        <div class="box">
            <g-input value="赵六" @change="inputChange"></g-input>
        </div>
        <div class="box">
            <g-input v-model="message"></g-input>
            <span>{{message}}</span>
            <button @click="message+=1">按钮</button>
        </div>
        <p>按钮</p>
        <div class="box">
            <g-button icon="setting">设置</g-button>
            <g-button icon="setting" :loading="loading1" @click="loading1=!loading1">设置</g-button>
            <g-button>设置</g-button>
            <g-button icon="setting" icon-position="right">设置</g-button>
            <g-button icon="setting" icon-position="right" :loading="loading2" @click="loading2=!loading2">设置</g-button>
            <!-- 错误示例 -->
            <!-- <g-button icon="setting" icon-position="up">设置</g-button> -->
            <!-- 错误示例 -->
            <!--
        <g-button-group>
            <div><g-button icon="left">上一页</g-button></div>
            <g-button icon="you" icon-position="right">下一页</g-button>
        </g-button-group>
         -->
            <!-- 正确示例 -->
            <g-button-group>
                <g-button icon="left">上一页</g-button>
                <g-button icon="you" icon-position="right">下一页</g-button>
            </g-button-group>
        </div>
        <p>布局</p>
        <div class="box">
            <g-layout style="height: 50vh;">
                <g-header>header</g-header>
                <g-layout>
                    <g-sider>sider</g-sider>
                    <g-content>content</g-content>
                </g-layout>
                <g-footer>footer</g-footer>
            </g-layout>
        </div>
        <div class="box">
            <g-layout style="height: 50vh;">
                <g-sider>sider</g-sider>
                <g-layout>
                    <g-header>header</g-header>
                    <g-content>content</g-content>
                    <g-footer>footer</g-footer>
                </g-layout>
            </g-layout>
        </div>
        <p>Toast</p>
        <div class="box">
            <g-button @click="showToast">Toast</g-button>
        </div>
        <p>Tabs</p>
        <div class="box">
            <!-- <g-tabs selected="selectedTab" @update:selected="selectedTab = $event"> -->
            <g-tabs :selected.sync="selectedTab">
                <g-tabs-header class="frank">
                    <g-tabs-item name="news" disabled>
                        新闻
                    </g-tabs-item>
                    <g-tabs-item name="finance">
                        财经
                    </g-tabs-item>
                    <g-tabs-item name="sports">
                        体育
                    </g-tabs-item>
                    <g-tabs-item name="yule">
                        娱乐
                    </g-tabs-item>
                    <template slot="actions">
                        <button>设置</button>
                    </template>
                </g-tabs-header>
                <g-tabs-body>
                    <g-tabs-pane name="news">
                        新闻内容
                    </g-tabs-pane>
                    <g-tabs-pane name="finance">
                        财经内容
                    </g-tabs-pane>
                    <g-tabs-pane name="sports">
                        体育内容
                    </g-tabs-pane>
                    <g-tabs-pane name="yule">
                        娱乐内容
                    </g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
        </div>
        <p>Collapse</p>
        <div class="box">
            <g-collapse :selected.sync="selected" single>
                <g-collapse-item title="标题1" name="1">1</g-collapse-item>
                <g-collapse-item title="标题2" name="2">2</g-collapse-item>
                <g-collapse-item title="标题3" name="3">3</g-collapse-item>
            </g-collapse>
            {{selected}}
        </div>
        <p>Cascader</p>
        <div class="box">
            <g-cascader :source="source" :selected.sync="selected1"></g-cascader>
        </div>
        <p>Slides</p>
        <g-slides :selected.sync="selected2">
            <g-slides-item name="1">
                <div class="slides-box">1</div>
            </g-slides-item>
            <g-slides-item name="2">
                <div class="slides-box">2</div>
            </g-slides-item>
            <g-slides-item name="3">
                <div class="slides-box">3</div>
            </g-slides-item>
            <g-slides-item name="4">
                <div class="slides-box">4</div>
            </g-slides-item>
        </g-slides>
         <p>Nav</p>
          <g-nav :selected.sync="selected3">
              <g-nav-item name="home">首页</g-nav-item>
              <g-sub-nav name="sub1">
                  <template slot="title">
                      关于
                  </template>
                   <g-nav-item name="about">关于</g-nav-item>
                   <g-nav-item name="about1">关于</g-nav-item>
                   <g-sub-nav name="sub2">
                      <template slot="title">
                          关于2
                      </template>
                       <g-nav-item name="about22">关于</g-nav-item>
                       <g-nav-item name="about12">关于</g-nav-item>
                       <g-nav-item name="about32">关于</g-nav-item>
                  </g-sub-nav>
              </g-sub-nav>
              <g-nav-item name="hire">招聘</g-nav-item>
          </g-nav>
    </div>
</template>
<script>
import Vue from 'vue'
import Button from "./button/button"
import Icon from './icon/icon'
import ButtonGroup from './button/button-group'
import Row from './grid/row'
import Col from './grid/col'
import Input from './input/input'
import Content from './layout/content'
import Footer from './layout/footer'
import Header from './layout/header'
import Layout from './layout/layout'
import Sider from './layout/sider'
import plugin from './assets/js/plugin'
import Tabs from "./tabs/tabs"
import TabsBody from "./tabs/tabs-body";
import TabsHeader from "./tabs/tabs-header";
import TabsPane from "./tabs/tabs-pane";
import TabsItem from "./tabs/tabs-item";
import Collapse from "./collapse/collapse.vue"
import CollapseItem from "./collapse/collapse-item.vue"
import Cascader from "./cascader/cascader.vue"
import CascaderItem from "./cascader/cascader-item.vue"
import Slides from './slides/slides'
import SlidesItem from './slides/slides-item'
import Nav from './nav/nav'
import NavItem from './nav/nav-item'
import SubNav from './nav/subnav'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-layout', Layout)
Vue.component('g-layout', Layout)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-header', TabsHeader)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)
Vue.component('g-cascader-item', CascaderItem)
Vue.component('g-slides',Slides)
Vue.component('g-slides-item',SlidesItem)
Vue.component('g-nav',Nav)
Vue.component('g-nav-item',NavItem)
Vue.component('g-sub-nav',SubNav)
Vue.use(plugin)
export default {
  name: "demo",
  components: {
  },
   data(){
     return {
        loading1: true,
        loading2: false,
        message: "1",
        selectedTab: "sports",
        selected: ['1', '2'],
        source: [{
            "name": "浙江",
            "children": [{
                "name": "杭州",
                "children": [{
                    "name": "上城"
                }, {
                    "name": "下城"
                }]
            }]
        },{
            "name": "山西",
            "children": [{
                "name": "太原",
                "children": [{
                    "name": "小店"
                }, {
                    "name": "迎泽"
                }]
            }]
        }],
        selected1:[],
        selected2:undefined,
        selected3:['home']
    }
   },
    created() {
      // let n =1
      // setInterval(()=>{
      //     if(n===5){
      //         n=1
      //     }
      //     this.selected2=n.toString()
      //     n++
      // },3000)
    },
    methods: {
        yyy() {

        },
        inputChange(e) {
            console.log(e.target.value)
        },
        showToast() {
            this.$toast('<div style="color:#ff0000">有一条新的消息有一条新的消息有一条新的消息有一条新的消息有一条新的消息</div>', {
                closeButton: {
                    text: "已读",
                    callback(toast) {
                        toast.log()
                        console.log("用户说他知道了")
                    }
                },
                position: "middle",
                enableHtml: false
            })
        }
    }
};
</script>
<style lang="less" scoped>
  @button-height: 32px;
  @button-size: 14px;
  @font-size: 14px;
  @button-bg: white;
  @button-active-bg: #eee;
  @border-radius: 4px;
  @color: #333;
  @border-color: #999;
  @border-color-hover: #666;
body {
  font-size: var(@font-size);
}
.slides-box{
    width: 100%;
    height: 150px;
    background: #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
.box {
  margin: 10px 0;
}

.demo {
  background: #dddddd;
  border: 1px solid #666;
  min-height: 100px;
}

.sider {
  background: #333;
  width: 150px;
}

.header {
  background: #666;
  height: 50px;
}

.footer {
  background: #666;
  height: 50px;
}
</style>