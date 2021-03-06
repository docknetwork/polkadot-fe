// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { DOCK_GENESIS, DOCK_POS_TESTNET_GENESIS, KUSAMA_GENESIS, POLKADOT_GENESIS } from '../api/constants';

// mapping of the genesisHash with the actual app name for Ledger
export const ledgerChains = [
  [DOCK_GENESIS, 'dock'],
  [KUSAMA_GENESIS, 'kusama'],
  [POLKADOT_GENESIS, 'polkadot'],
  [DOCK_POS_TESTNET_GENESIS, 'dock-pos-testnet']
];
