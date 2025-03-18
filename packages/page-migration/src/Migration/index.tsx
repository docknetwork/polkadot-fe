// Copyright 2017-2022 @polkadot/app-rpc authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { MarkWarning } from '@polkadot/react-components';

import { useTranslation } from '../translate';

function MigrationApp ({ className }): React.ReactElement {
  const { t } = useTranslation();
  return (
    <div className={`staking--Overview ${className}`}>
      <MarkWarning
        className='warning centered'
      >
        The DOCK -> CHEQD token migration has ended as of March 15th, 2025. If you need assistance contact the cheqd team on <a href="https://t.me/cheqd" target="_blank">Telegram</a>
      </MarkWarning>
    </div>
  );
}

export default React.memo(MigrationApp);
