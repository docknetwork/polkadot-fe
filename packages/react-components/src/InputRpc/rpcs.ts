// Copyright 2017-2022 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from '@polkadot/types';
import type { RuntimeVersion } from '@polkadot/types/interfaces';
import type { DefinitionRpc, DefinitionRpcExt, Registry } from '@polkadot/types/types';

import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import { getSpecRpc } from '@polkadot/types-known';

// TODO: Find a better way
import { poaRpcDefs, stakingRewardsRpcDefs, coreModsRpcDefs } from '@polkadot/apps-config/api/spec/dock-rpc';
jsonrpc.poa = poaRpcDefs;
jsonrpc.staking_rewards = stakingRewardsRpcDefs;
jsonrpc.core_mods = coreModsRpcDefs;

function toExt (section: string, input: Record<string, DefinitionRpc>): Record<string, DefinitionRpcExt> {
  return Object.entries(input).reduce((output: Record<string, DefinitionRpcExt>, [method, def]): Record<string, DefinitionRpcExt> => {
    output[method] = {
      isSubscription: false,
      jsonrpc: `${method}_${section}`,
      method,
      section,
      ...def
    };

    return output;
  }, {});
}

export function getAllRpc (registry: Registry, chain: Text, { specName }: RuntimeVersion): Record<string, Record<string, DefinitionRpcExt>> {
  return Object
    .entries(getSpecRpc(registry, chain, specName))
    .reduce((all: Record<string, Record<string, DefinitionRpcExt>>, [section, contents]): Record<string, Record<string, DefinitionRpcExt>> => {
      all[section] ??= toExt(section, contents);

      return all;
    }, { ...jsonrpc });
}
