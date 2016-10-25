(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-polyfill"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-polyfill"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.babelPolyfill);
    global.index = mod.exports;
  }
})(this, function () {
  "use strict";

  var sum = function sum(a, b) {
    return a + b;
  };

  var x = sum(1, 2);

  console.log(x);
});