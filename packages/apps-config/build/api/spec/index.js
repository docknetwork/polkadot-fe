"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _centrifugeChain = _interopRequireDefault(require("./centrifuge-chain"));

var _edgeware = _interopRequireDefault(require("./edgeware"));

var _encointerNodeNotee = _interopRequireDefault(require("./encointer-node-notee"));

var _encointerNodeTeeproxy = _interopRequireDefault(require("./encointer-node-teeproxy"));

var _kulupu = _interopRequireDefault(require("./kulupu"));

var _nodeTemplate = _interopRequireDefault(require("./node-template"));

var _stablePoc = _interopRequireDefault(require("./stable-poc"));

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
var _default = {
  'centrifuge-chain': _centrifugeChain.default,
  edgeware: _edgeware.default,
  'encointer-node': _encointerNodeNotee.default,
  'encointer-node-notee': _encointerNodeNotee.default,
  'encointer-node-teeproxy': _encointerNodeTeeproxy.default,
  kulupu: _kulupu.default,
  'node-template': _nodeTemplate.default,
  'stable-poc': _stablePoc.default,
  stable_poc: _stablePoc.default
};
exports.default = _default;