'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timeline = require('./timeline');

var _timeline2 = _interopRequireDefault(_timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Antd = require('antd');

var Apps = {};

Object.keys(Antd).forEach(function (key) {
  Apps[key] = Antd[key];
});

Apps.Timeline = _timeline2.default;

exports.default = Apps;