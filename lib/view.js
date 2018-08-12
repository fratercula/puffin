'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _childnode = require('./helper/childnode');

var _childnode2 = _interopRequireDefault(_childnode);

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _fetcher = require('./helper/fetcher');

var _fetcher2 = _interopRequireDefault(_fetcher);

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
      loading: false,
      error: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var url = this.props.api;

      if (url) {
        this.setState({ loading: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;
      var data = this.props.data;


      return _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '100%' } },
        _react2.default.createElement(
          _antd.Row,
          { style: { width: '100%', height: '100%' } },
          data.map(function (item, i) {
            var span = item.span,
                offset = item.offset,
                style = item.style,
                _item$apps = item.apps,
                apps = _item$apps === undefined ? [] : _item$apps;


            return _react2.default.createElement(
              _antd.Col,
              {
                key: i,
                span: span,
                offset: offset,
                style: style
              },
              apps.map(function (app, j) {
                var type = app.type,
                    _app$props = app.props,
                    props = _app$props === undefined ? {} : _app$props,
                    _app$children = app.children,
                    children = _app$children === undefined ? [] : _app$children,
                    appStyle = app.style;

                var App = _component2.default[type];

                return _react2.default.createElement(
                  'div',
                  { key: j, style: appStyle },
                  children.length ? _react2.default.createElement(
                    App,
                    props,
                    children.map(function (ch, l) {
                      return _react2.default.createElement(_childnode2.default, _extends({ key: l }, ch));
                    })
                  ) : _react2.default.createElement(App, props)
                );
              })
            );
          })
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

_class.propTypes = {
  api: _propTypes2.default.string,
  data: _propTypes2.default.array
};
_class.defaultProps = {
  api: '',
  data: []
};
exports.default = _class;