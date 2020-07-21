"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const HASH_PATHS = ['proposal/councilmotion'];
var _default = {
  chains: {
    Edgeware: 'edgeware',
    Kusama: 'kusama',
    'Kusama CC3': 'kusama'
  },
  create: (chain, path, data, hash) => `https://commonwealth.im/${chain}/${path}/${HASH_PATHS.includes(path) ? hash || '' : data.toString()}`,
  isActive: true,
  paths: {
    council: 'proposal/councilmotion',
    proposal: 'proposal/democracyproposal',
    referendum: 'proposal/referendum',
    treasury: 'proposal/treasuryproposal'
  },
  url: 'https://commonwealth.im/'
};
exports.default = _default;