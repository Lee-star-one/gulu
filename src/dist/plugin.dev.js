"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toast = _interopRequireDefault(require("./toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  install: function install(Vue, options) {
    Vue.prototype.$toast = function (message, toastoption) {
      var Constructor = Vue.extend(_toast["default"]);
      var toast = new Constructor({
        propsData: toastoption
      });
      toast.$slots["default"] = [message];
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  }
};
exports["default"] = _default;