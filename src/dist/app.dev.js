"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _vue = _interopRequireDefault(require("vue"));

var _button = _interopRequireDefault(require("./button"));

var _icon = _interopRequireDefault(require("./icon"));

var _buttonGroup = _interopRequireDefault(require("./button-group"));

var _row = _interopRequireDefault(require("./row"));

var _col = _interopRequireDefault(require("./col"));

var _input = _interopRequireDefault(require("./input"));

var _content = _interopRequireDefault(require("./content"));

var _footer = _interopRequireDefault(require("./footer"));

var _header = _interopRequireDefault(require("./header"));

var _layout = _interopRequireDefault(require("./layout"));

var _sider = _interopRequireDefault(require("./sider"));

var _plugin = _interopRequireDefault(require("./plugin"));

var _tabs = _interopRequireDefault(require("./tabs"));

var _tabsBody = _interopRequireDefault(require("./tabs-body"));

var _tabsHeader = _interopRequireDefault(require("./tabs-header"));

var _tabsPane = _interopRequireDefault(require("./tabs-pane"));

var _tabsItem = _interopRequireDefault(require("./tabs-item"));

var _collapse = _interopRequireDefault(require("./collapse.vue"));

var _collapseItem = _interopRequireDefault(require("./collapse-item.vue"));

var _chai = _interopRequireWildcard(require("chai"));

var _chaiSpies = _interopRequireDefault(require("chai-spies"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_chai["default"].use(_chaiSpies["default"]);

_vue["default"].component('g-button', _button["default"]);

_vue["default"].component('g-icon', _icon["default"]);

_vue["default"].component('g-button-group', _buttonGroup["default"]);

_vue["default"].component('g-input', _input["default"]);

_vue["default"].component('g-row', _row["default"]);

_vue["default"].component('g-col', _col["default"]);

_vue["default"].component('g-sider', _sider["default"]);

_vue["default"].component('g-content', _content["default"]);

_vue["default"].component('g-footer', _footer["default"]);

_vue["default"].component('g-header', _header["default"]);

_vue["default"].component('g-layout', _layout["default"]);

_vue["default"].component('g-layout', _layout["default"]);

_vue["default"].component('g-tabs', _tabs["default"]);

_vue["default"].component('g-tabs-body', _tabsBody["default"]);

_vue["default"].component('g-tabs-header', _tabsHeader["default"]);

_vue["default"].component('g-tabs-pane', _tabsPane["default"]);

_vue["default"].component('g-tabs-item', _tabsItem["default"]);

_vue["default"].component('g-collapse', _collapse["default"]);

_vue["default"].component('g-collapse-item', _collapseItem["default"]);

_vue["default"].use(_plugin["default"]);

new _vue["default"]({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    message: "1",
    selectedTab: "sports",
    selected: ['1', '2']
  },
  methods: {
    yyy: function yyy() {},
    inputChange: function inputChange(e) {
      console.log(e.target.value);
    },
    showToast: function showToast() {
      this.$toast('<div style="color:red">有一条新的消息有一条新的消息有一条新的消息有一条新的消息有一条新的消息</div>', {
        closeButton: {
          text: "已读",
          callback: function callback(toast) {
            toast.log();
            console.log("用户说他知道了");
          }
        },
        position: "middle",
        enableHtml: false
      });
    }
  }
}); // 单元测试
// 测试icon参数

{
  var div = document.createElement('div');
  document.body.appendChild(div);

  var Construtor = _vue["default"].extend(_button["default"]);

  console.log(Construtor);
  var vm = new Construtor({
    propsData: {
      icon: "setting"
    }
  }); // vm.$mount('#test')

  vm.$mount(div); //挂在内存

  var useElement = vm.$el.querySelector('use');
  console.log(useElement);
  var href = useElement.getAttribute('xlink:href');
  (0, _chai.expect)(href).to.eq('#i-setting');
  vm.$el.remove();
  vm.$destroy();
} // 测试loading参数

{
  var _div = document.createElement('div');

  document.body.appendChild(_div);

  var _Construtor = _vue["default"].extend(_button["default"]);

  var _vm = new _Construtor({
    propsData: {
      icon: "setting",
      loading: true
    }
  });

  _vm.$mount(_div); //挂在内存


  var _useElement = _vm.$el.querySelector('use');

  var _href = _useElement.getAttribute('xlink:href');

  (0, _chai.expect)(_href).to.eq('#i-loading');

  _vm.$el.remove();

  _vm.$destroy();
} // 测试iconPosition参数

{
  var _div2 = document.createElement('div');

  document.body.appendChild(_div2);

  var _Construtor2 = _vue["default"].extend(_button["default"]);

  var _vm2 = new _Construtor2({
    propsData: {
      icon: "setting",
      iconPosition: 'right'
    }
  });

  _vm2.$mount(_div2); //挂在内存


  var svgElement = _vm2.$el.querySelector('svg');

  var _window$getComputedSt = window.getComputedStyle(svgElement),
      order = _window$getComputedSt.order;

  (0, _chai.expect)(order).to.eq("2");

  _vm2.$el.remove();

  _vm2.$destroy();
} // 测试click参数

{
  var _Construtor3 = _vue["default"].extend(_button["default"]);

  var _vm3 = new _Construtor3({
    propsData: {
      icon: "setting"
    }
  });

  _vm3.$mount(); //挂在内存


  var spy = _chai["default"].spy(function () {});

  _vm3.$on('click', spy); // 希望这个函数被执行


  var button = _vm3.$el;
  button.click();
  (0, _chai.expect)(spy).to.have.been.called();
}