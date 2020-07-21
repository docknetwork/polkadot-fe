"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// structs need to be in order

/* eslint-disable sort-keys */
var _default = {
  Difficulty: 'U256',
  DifficultyAndTimestamp: {
    difficulty: 'Difficulty',
    timestamp: 'Moment'
  },
  Era: {
    genesisBlockHash: 'H256',
    finalBlockHash: 'H256',
    finalStateRoot: 'H256'
  }
};
exports.default = _default;