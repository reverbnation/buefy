'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./chunk-2777282e.js');
require('./helpers.js');
require('./chunk-8806479f.js');
require('./chunk-f45d15e3.js');
require('./chunk-acfb68f5.js');
var __chunk_5 = require('./chunk-13e039f5.js');
require('./chunk-e79d8d75.js');
require('./chunk-c5b5b708.js');
require('./chunk-0dbbaff2.js');
require('./chunk-28f7fb29.js');
require('./chunk-611c489f.js');
var __chunk_15 = require('./chunk-80ce8b90.js');

var Plugin = {
  install: function install(Vue) {
    __chunk_5.registerComponent(Vue, __chunk_15.Datepicker);
  }
};
__chunk_5.use(Plugin);

exports.BDatepicker = __chunk_15.Datepicker;
exports.default = Plugin;
