'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: ''
    }, _this.onClick = function () {
      var active = _this.state.active;

      _this.setState({ active: active ? '' : 'active' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var active = this.state.active;
      var _props = this.props,
          _props$header = _props.header,
          title = _props$header.title,
          iconColor = _props$header.icon,
          headerStyle = _props$header.style,
          _props$body = _props.body,
          cells = _props$body.cells,
          boxStyle = _props$body.style,
          collapsible = _props.collapsible,
          style = _props.style;

      var iconStyle = { color: iconColor || '#666' };

      if (headerStyle.fontSize) {
        iconStyle.fontSize = headerStyle.fontSize + 2;
      }

      var header = _react2.default.createElement(
        'div',
        { style: headerStyle, className: 'puffin-card-header' },
        _react2.default.createElement(
          'h3',
          { className: 'puffin-card-header-title' },
          title
        )
      );

      if (collapsible) {
        header = _react2.default.createElement(
          'div',
          {
            style: headerStyle,
            className: 'puffin-card-header ' + (active ? '' : 'inactive')
          },
          _react2.default.createElement(
            'h3',
            { className: 'puffin-card-header-title' },
            title
          ),
          active ? _react2.default.createElement(_antd.Icon, {
            style: iconStyle,
            className: 'puffin-card-header-icon',
            onClick: this.onClick,
            type: 'down'
          }) : _react2.default.createElement(_antd.Icon, {
            style: iconStyle,
            className: 'puffin-card-header-icon',
            onClick: this.onClick,
            type: 'up'
          })
        );
      }

      return _react2.default.createElement(
        _antd.Collapse,
        {
          bordered: false,
          activeKey: !collapsible ? 'active' : active
        },
        _react2.default.createElement(
          _antd.Collapse.Panel,
          {
            showArrow: false,
            header: header,
            key: 'active',
            style: style,
            className: 'puffin-card'
          },
          _react2.default.createElement(
            _antd.Row,
            { style: boxStyle, className: 'puffin-card-box' },
            cells.map(function (cell, i) {
              var _cell$label = cell.label,
                  text = _cell$label.text,
                  color = _cell$label.color,
                  fontSize = _cell$label.fontSize;

              var labelStyle = { color: color, fontSize: fontSize };

              return _react2.default.createElement(
                _antd.Col,
                {
                  span: cell.span,
                  offset: cell.offset,
                  key: i
                },
                _react2.default.createElement(
                  'div',
                  { className: 'puffin-card-cell' },
                  _react2.default.createElement(
                    'div',
                    {
                      style: labelStyle,
                      className: 'puffin-card-cell-label'
                    },
                    text
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'puffin-card-cell-value' },
                    cell.value
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

_class.propTypes = {
  header: _propTypes2.default.object,
  collapsible: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  body: _propTypes2.default.object
};
_class.defaultProps = {
  header: {
    title: '',
    icon: '#666',
    style: {}
  },
  body: {
    cells: [],
    style: {}
  },
  collapsible: false,
  style: {}
};
exports.default = _class;