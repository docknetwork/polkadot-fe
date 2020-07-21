"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
var _default = {
  chains: {
    Kusama: 'kusama',
    'Kusama CC3': 'kusama'
  },
  create: (chain, path, data) => `https://${chain}.polkassembly.io/${path}/${data.toString()}`,
  isActive: true,
  paths: {
    council: 'motion',
    proposal: 'proposal',
    referendum: 'referendum',
    treasury: 'treasury'
  },
  url: 'https://polkassembly.io/'
};
exports.default = _default;