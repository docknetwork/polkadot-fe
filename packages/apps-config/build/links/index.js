"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _commonwealth = _interopRequireDefault(require("./commonwealth"));

var _polkascan = _interopRequireDefault(require("./polkascan"));

var _polkassembly = _interopRequireDefault(require("./polkassembly"));

var _subscan = _interopRequireDefault(require("./subscan"));

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const externals = {
  Commonwealth: _commonwealth.default,
  Polkascan: _polkascan.default,
  Polkassembly: _polkassembly.default,
  Subscan: _subscan.default
};
var _default = externals;
exports.default = _default;