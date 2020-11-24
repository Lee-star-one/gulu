import Vue from "vue"
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Row from './row'
import Col from './col'
import Input from './input'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Layout from './layout'
import Sider from './sider'
import plugin from './plugin'
import Tabs from "./tabs"
import TabsBody from "./tabs-body";
import TabsHeader from "./tabs-header";
import TabsPane from "./tabs-pane";
import TabsItem from "./tabs-item";
import Collapse from "./collapse.vue"
import CollapseItem from "./collapse-item.vue"


import { expect } from "chai"
import chai from "chai"
import spies from 'chai-spies'
chai.use(spies)

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
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)
Vue.use(plugin)

new Vue({
    el: '#app',
    data:{
        loading1:true,
        loading2:false,
        message:"1",
        selectedTab:"sports",
        selected:['1','2']
    },
    methods:{
        yyy(){
            
        },
        inputChange(e){
            console.log(e.target.value)
        },
        showToast(){
            this.$toast('<div style="color:red">有一条新的消息有一条新的消息有一条新的消息有一条新的消息有一条新的消息</div>',{
                closeButton:{
                text:"已读",
                callback(toast){
                    toast.log()
                    console.log("用户说他知道了")
                    }
                },
                position:"middle",
                enableHtml:false
              })
        }
    }
})

// 单元测试
// 测试icon参数
{   
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Construtor=Vue.extend(Button)
    console.log(Construtor)
    const vm =new Construtor({
        propsData:{
            icon:"setting"
        }
    })
    // vm.$mount('#test')
    vm.$mount(div) //挂在内存
    let useElement=vm.$el.querySelector('use')
    console.log(useElement)
    let href=useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}
// 测试loading参数
{   
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Construtor=Vue.extend(Button)
    const vm =new Construtor({
        propsData:{
            icon:"setting",
            loading:true
        }
    })
    vm.$mount(div) //挂在内存
    let useElement=vm.$el.querySelector('use')
    let href=useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
// 测试iconPosition参数
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Construtor=Vue.extend(Button)
    const vm =new Construtor({
        propsData:{
            icon:"setting",
            iconPosition:'right'
        }
    })
    vm.$mount(div) //挂在内存
    let svgElement=vm.$el.querySelector('svg')
    let {order}=window.getComputedStyle(svgElement)
    expect(order).to.eq("2")
    vm.$el.remove()
    vm.$destroy()
}
// 测试click参数
{
    const Construtor=Vue.extend(Button)
    const vm =new Construtor({
        propsData:{
            icon:"setting",
        }
    })
    vm.$mount() //挂在内存
    let spy =chai.spy(function(){})
    vm.$on('click',spy)
    // 希望这个函数被执行
    let button=vm.$el
    button.click()
    expect(spy).to.have.been.called()
}