// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Route } from './types';

import Component from '@polkadot/app-master-proposals';

export default function create (t: <T = string> (key: string, text: string, options: { ns: string }) => T): Route {
  return {
    Component,
    display: {
      needsAccounts: false,
      needsApi: []
    },
    group: 'governance',
    icon: 'sync',
    name: 'master-proposals',
    text: t<string>('nav.proposals', 'Proposals', { ns: 'apps-routing' })
  };
}
