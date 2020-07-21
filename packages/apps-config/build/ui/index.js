"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSystemIcon = getSystemIcon;
exports.getSystemChainColor = void 0;

var _general = require("./general");

var _identityIcons = require("./identityIcons");

// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function sanitize(value) {
  return (value === null || value === void 0 ? void 0 : value.toLowerCase().replace('-', ' ')) || '';
}

function getSystemIcon(systemName) {
  return _identityIcons.identityNodes[systemName.toLowerCase().replace(/-/g, ' ')] || 'substrate';
}

const getSystemChainColor = (systemChain, systemName) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return _general.chainColors[sanitize(systemChain)] || _general.nodeColors[sanitize(systemName)];
};

exports.getSystemChainColor = getSystemChainColor;