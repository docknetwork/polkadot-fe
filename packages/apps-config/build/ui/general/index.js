"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeColors = exports.emptyColor = exports.chainColors = exports.defaultColor = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const defaultColor = undefined; // '#f19135'

exports.defaultColor = defaultColor;
const emptyColor = '#999';
exports.emptyColor = emptyColor;
const chainKulupu = '#003366';
const chainPolkadot = '#e6007a';
const chainKusama = '#000'; // '#d32e79';

const chainWestend = '#da68a7';
const nodeCentrifuge = '#fcc367';
const nodeEdgeware = '#0a95df';
const nodeNodle = '#1ab394'; // overrides based on the actual matched chain name

const chainColors = [['Kulupu', chainKulupu], ['Kusama', chainKusama], ['Kusama CC1', chainKusama], ['Kusama CC2', chainKusama], ['Kusama CC3', chainKusama], ['Polkadot', chainPolkadot], ['Polkadot CC1', chainPolkadot], ['Westend', chainWestend]].reduce((colors, [chain, color]) => _objectSpread(_objectSpread({}, colors), {}, {
  [chain.toLowerCase()]: color
}), {}); // overrides based on the actual software node type (all '-' converted to ' ')

exports.chainColors = chainColors;
const nodeColors = [['centrifuge chain', nodeCentrifuge], ['edgeware node', nodeEdgeware], ['nodle chain node', nodeNodle] // ['node template', emptyColor],
// ['parity polkadot', emptyColor],
// ['substrate node', emptyColor]
].reduce((colors, [node, color]) => _objectSpread(_objectSpread({}, colors), {}, {
  [node.toLowerCase().replace(/-/g, ' ')]: color
}), {});
exports.nodeColors = nodeColors;