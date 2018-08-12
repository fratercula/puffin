'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (args) {
  var url = args.url,
      _args$data = args.data,
      data = _args$data === undefined ? {} : _args$data,
      _args$method = args.method,
      method = _args$method === undefined ? 'GET' : _args$method,
      rest = _objectWithoutProperties(args, ['url', 'data', 'method']);

  var params = _extends({
    method: method
  }, rest);

  var query = url;

  if (method !== 'GET') {
    params.body = JSON.stringify(data);
  }

  if (method === 'GET') {
    var qs = Object.keys(data).map(function (k) {
      return esc(k) + '=' + esc(data[k]);
    }).join('&');

    query = query + '?' + qs;
  }

  return fetch(query, params).then(function (res) {
    return res.json();
  });
};

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _window = window,
    fetch = _window.fetch,
    esc = _window.encodeURIComponent;