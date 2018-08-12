'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _component = require('../component');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChildNode(node) {
  var Node = node.node,
      text = node.text,
      type = node.type,
      props = node.props,
      children = node.children;


  if (Node) {
    if (text) {
      return _react2.default.createElement(
        Node,
        props,
        text
      );
    }
    return _react2.default.createElement(
      Node,
      props,
      children.map(function (item, i) {
        return _react2.default.createElement(ChildNode, _extends({ key: i }, item));
      })
    );
  }

  if (type) {
    var App = _component2.default[type];

    if (text) {
      return _react2.default.createElement(
        App,
        props,
        text
      );
    }
    return _react2.default.createElement(
      App,
      props,
      children.map(function (item, i) {
        return _react2.default.createElement(ChildNode, _extends({ key: i }, item));
      })
    );
  }

  return text;
}

ChildNode.propTypes = {
  node: _propTypes2.default.string,
  text: _propTypes2.default.string,
  type: _propTypes2.default.string,
  props: _propTypes2.default.object,
  children: _propTypes2.default.array
};

ChildNode.defaultProps = {
  node: '',
  text: '',
  type: '',
  props: {},
  children: []
};

exports.default = ChildNode;