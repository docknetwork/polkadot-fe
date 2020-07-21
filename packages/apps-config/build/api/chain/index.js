"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _arcadia = _interopRequireDefault(require("./arcadia"));

var _berlin = _interopRequireDefault(require("./berlin"));

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
var _default = {
  'Arcadia Nodle Network': _arcadia.default,
  Berlin: _berlin.default
};
exports.default = _default;