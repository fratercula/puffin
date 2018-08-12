'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fetcher = require('../helper/fetcher');

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
      columns: [],
      dataSource: [],
      pagination: false,
      loading: false,
      error: ''
    }, _this.onChange = function (_ref2, filters, _ref3) {
      var current = _ref2.current;
      var field = _ref3.field,
          order = _ref3.order;
      var prev = _this.state.pagination;
      var url = _this.props.api;

      var pagination = _extends({}, prev, { current: current });

      if (!url) {
        return;
      }

      _this.setState({ pagination: pagination });
      _this.fetch({
        url: url,
        data: {
          page: current,
          filters: JSON.stringify(filters),
          sorter: JSON.stringify({ field: field, order: order })
        }
      });
    }, _this.fetch = function (params) {
      _this.setState({ loading: true });
      (0, _fetcher2.default)(params).then(function (_ref4) {
        var c = _ref4.c,
            m = _ref4.m,
            d = _ref4.d;

        if (c !== 0) {
          _this.setState({
            error: m || 'Fetch Error',
            loading: false
          });
          return;
        }
        _this.setState(_extends({
          loading: false
        }, d));
      }).catch(function (err) {
        return _this.setState({
          error: err.message || 'Fetch Error',
          loading: false
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var url = this.props.api;


      if (url) {
        this.fetch({ url: url });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          api = _props.api,
          c = _props.columns,
          d = _props.dataSource;
      var _state = this.state,
          loading = _state.loading,
          error = _state.error;
      var _state2 = this.state,
          columns = _state2.columns,
          dataSource = _state2.dataSource;


      if (!api) {
        columns = c;
        dataSource = d;
      }

      for (var i = 0; i < columns.length; i += 1) {
        columns[i].dataIndex = columns[i].key;
      }

      for (var _i = 0; _i < dataSource.length; _i += 1) {
        dataSource[_i].key = _i;
      }

      return _react2.default.createElement(
        'div',
        null,
        error ? _react2.default.createElement(_antd.Alert, { message: error, type: 'error', showIcon: true }) : null,
        api ? _react2.default.createElement(_antd.Table, _extends({
          columns: columns,
          dataSource: dataSource,
          loading: loading,
          onChange: this.onChange
        }, this.state)) : _react2.default.createElement(_antd.Table, _extends({
          columns: columns,
          dataSource: dataSource,
          onChange: this.onChange
        }, this.props))
      );
    }
  }]);

  return _class;
}(_react.Component);

_class.propTypes = {
  api: _propTypes2.default.string,
  columns: _propTypes2.default.array,
  dataSource: _propTypes2.default.array
};
_class.defaultProps = {
  api: '',
  columns: [],
  dataSource: []
};
exports.default = _class;