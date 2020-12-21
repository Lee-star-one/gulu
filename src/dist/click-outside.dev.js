"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeListener = exports["default"] = void 0;
// 指令是为了封装dom
var callbacks = [];
var _default = {
  bind: function bind(el, binding, vnode) {
    callbacks.push({
      el: el,
      callback: binding.value
    });
  }
};
exports["default"] = _default;

var onclickDocumnet = function onclickDocumnet(e) {
  var target = e.target;
  callbacks.forEach(function (item) {
    if (target === item.el || item.el.contains(target)) {
      return;
    } else {
      item.callback();
    }
  });
};

document.addEventListener('click', onclickDocumnet);

var removeListener = function removeListener() {
  document.removeEventListener('click', onclickDocumnet);
};

exports.removeListener = removeListener;