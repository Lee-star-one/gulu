"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _app = _interopRequireDefault(require("./app.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;
new _vue["default"]({
  render: function render(h) {
    return h(_app["default"]);
  }
}).$mount('#app');