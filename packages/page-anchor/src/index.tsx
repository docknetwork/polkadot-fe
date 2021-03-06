// Copyright 2017-2020 @polkadot/app-master-proposals authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AppProps as Props } from '@polkadot/react-components/types';

import React, { useMemo } from 'react';
import { Route, Switch } from 'react-router';
import { Tabs } from '@polkadot/react-components';

import Check from './Check';
import Batch from './Batch';
import { useTranslation } from './translate';

function Anchor({ basePath }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const items = useMemo(() => [{
    isRoot: false,
    name: 'batch',
    text: t<string>('Batch and Deploy Anchor')
  }, {
    isRoot: false,
    name: 'check',
    text: t<string>('Check Anchor')
  }], [t]);

  return (
    <main className='master-submit--App'>
      <header>
        <Tabs
          basePath={basePath}
          items={items}
        />
      </header>
      <Switch>
        <Route path={`${basePath}/batch`}>
          <Batch />
        </Route>
        <Route path={`${basePath}/check`}>
          <Check />
        </Route>
        <Route path={`${basePath}`}>
          <Batch />
        </Route>
      </Switch>
    </main>
  );
}

export default React.memo(Anchor);
