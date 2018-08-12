'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _childnode = require('../helper/childnode');

var _childnode2 = _interopRequireDefault(_childnode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PuffinTimeLine(params) {
  var pending = params.pending,
      mode = params.mode,
      items = params.items;


  return _react2.default.createElement(
    _antd.Timeline,
    { pending: pending, mode: mode },
    items.map(function (item, i) {
      var _item$props = item.props,
          props = _item$props === undefined ? {} : _item$props;
      var dot = props.dot,
          color = props.color;


      return _react2.default.createElement(
        _antd.Timeline.Item,
        {
          key: i,
          color: color,
          dot: dot ? _react2.default.createElement(_antd.Icon, { type: dot }) : undefined
        },
        _react2.default.createElement(_childnode2.default, item)
      );
    })
  );
}

PuffinTimeLine.propTypes = {
  pending: _propTypes2.default.string,
  mode: _propTypes2.default.string,
  items: _propTypes2.default.array
};

PuffinTimeLine.defaultProps = {
  pending: '',
  mode: '',
  items: []
};

exports.default = PuffinTimeLine;