'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Table from './component/table'
// import Card from './component/card'


var cardData = {
  collapsible: false,
  header: {
    title: 'Card Title',
    icon: '',
    style: {
      padding: '10px 12px',
      fontSize: 13
    }
  },
  style: {
    borderRadius: 3
  },
  body: {
    style: {
      padding: '10px 12px'
    },
    cells: [{
      label: {
        text: 'User Name :',
        color: '#56a8a7',
        fontSize: 15
      },
      value: 'new town',
      span: 8,
      offset: 8
    }, {
      label: {
        text: 'User Number :'
      },
      value: '9817817812',
      span: 8
    }, {
      label: {},
      value: '',
      span: 24
    }, {
      label: {
        text: 'User Number2 :'
      },
      value: '曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口',
      span: 8
    }, {
      label: {
        text: 'User Name :'
      },
      value: 'new town',
      span: 8,
      offset: 4
    }]
  }
};

var viewData = [{
  span: 10,
  offset: 2,
  style: {
    border: '1px solid #eee'
  },
  apps: [{
    type: 'Icon',
    style: {
      marginTop: 30
    },
    props: {
      type: 'link'
    }
  }, {
    type: 'Timeline',
    props: {
      pending: 'Pending',
      mode: 'right',
      items: [{
        text: 'Solve initial network problems 2015-09-01'
      }, {
        node: 'div',
        text: 'line1',
        props: {
          dot: 'up-circle'
        }
      }, {
        node: 'div',
        children: [{
          node: 'span',
          text: 'span',
          props: {
            style: {
              color: 'red'
            }
          }
        }, {
          type: 'Button',
          text: 'Button',
          props: {
            type: 'danger'
          }
        }]
      }]
    }
  }]
}, {
  span: 6,
  style: {
    background: '#ddd'
  },
  apps: [{
    type: 'Button',
    children: [{
      text: 'Button'
    }],
    props: {
      type: 'danger'
    }
  }, {
    type: 'Carousel',
    children: [{
      node: 'div',
      children: [{
        node: 'h3',
        children: [{
          type: 'Button',
          props: {
            type: 'danger'
          },
          text: 'span'
        }, {
          node: 'span',
          children: [{
            node: 'em',
            text: 'em'
          }]
        }]
      }]
    }, {
      node: 'div',
      props: {
        style: {
          background: '#fff'
        }
      },
      children: [{
        node: 'h3',
        text: 'text'
      }]
    }]
  }]
}];

// <Table api="http://127.0.0.1:2333/table.json" />
// <Card {...cardData} />

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
      title: 'Puffin'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var title = this.state.title;


      return _react2.default.createElement(
        'div',
        { style: { width: '100vw', height: '100vh' } },
        _react2.default.createElement(_view2.default, { data: viewData })
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;