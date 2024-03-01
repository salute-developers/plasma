"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _typography = /*#__PURE__*/require("./typography");
Object.keys(_typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _typography[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typography[key];
    }
  });
});