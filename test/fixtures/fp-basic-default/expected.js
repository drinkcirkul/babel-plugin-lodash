"use strict";

var _reject2 = _interopRequireDefault(require("lodash/fp/reject"));

var _take2 = _interopRequireDefault(require("lodash/fp/take"));

var _add2 = _interopRequireDefault(require("lodash/fp/add"));

var _map2 = _interopRequireDefault(require("lodash/fp/map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapper = (0, _map2.default)((0, _add2.default)(1));
var result = mapper([]);
(0, _take2.default)(1, (0, _reject2.default)(Boolean, result));