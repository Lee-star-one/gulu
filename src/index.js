import Button from "./button/button";
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
import Plugin from './assets/js/plugin'
import Validate from './assets/js/validate'
export {
    Button,
    ButtonGroup,
    Icon,
    Row,
    Col,
    Input,
    Content,
    Footer,
    Header,
    Layout,
    Sider,
    Plugin,
    Tabs,
    TabsBody,
    TabsHeader,
    TabsPane,
    TabsItem,
    Collapse,
    CollapseItem,
    Cascader,
    CascaderItem,
    Slides,
    SlidesItem,
    Nav,
    NavItem,
    SubNav,
    Validate
}

const components = [
  Button,
    ButtonGroup,
    Icon,
    Row,
    Col,
    Input,
    Content,
    Footer,
    Header,
    Layout,
    Sider,
    plugin,
    Tabs,
    TabsBody,
    TabsHeader,
    TabsPane,
    TabsItem,
    Collapse,
    CollapseItem,
    Cascader,
    CascaderItem,
    Slides,
    SlidesItem,
    Nav,
    NavItem,
    SubNav,
]

const install = function(Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// script直接引用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
