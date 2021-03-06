// Copyright 2017-2020 @polkadot/app-extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SubmittableExtrinsic } from '@polkadot/api/types';

import React, { useCallback, useState, useEffect } from 'react';
import { hexToU8a, u8aToHex } from '@polkadot/util';
import { blake2AsHex } from '@polkadot/util-crypto';
import { Extrinsic, Output } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';

import { useTranslation } from './translate';

function Create (): React.ReactElement {
  const { t } = useTranslation();
  const { apiDefaultTxSudo } = useApi();
  const [proposalJSON, setProposalJSON] = useState<string>('');
  const [proposalURL, setProposalUrl] = useState<string>('');
  const [proposalHex, setProposalproposalHex] = useState<string>('');
  const [proposalHash, setProposalproposalHash] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [extrinsic, setExtrinsic] = useState<SubmittableExtrinsic<'promise'> | null>(null);

  const _onExtrinsicChange = useCallback(
    (method?: SubmittableExtrinsic<'promise'>) => setExtrinsic(() => method || null),
    []
  );

  const _onExtrinsicError = useCallback(
    (error?: Error | null) => setError(error ? error.message : null),
    []
  );

  useEffect(() => {
    if (extrinsic) {
      // const proposalBytes = extrinsic.toU8a();
      const proposalHex = (extrinsic as SubmittableExtrinsic)?.method.toHex() || '';
      const proposalHash = blake2AsHex(proposalHex);
      const jprop = extrinsic.method.toJSON();

      // Bug in polkadot-js makes hex-encoded call index unparsable so we convert to an array.
      jprop.callIndex = [...hexToU8a(jprop.callIndex)];

      const propJSON = JSON.stringify(jprop);

      setProposalJSON(propJSON);
      setProposalUrl(window.location.origin + '/#/master-proposals?proposal=' + encodeURIComponent(btoa(propJSON)));
      setProposalproposalHex(proposalHex);
      setProposalproposalHash(proposalHash);
    }
  }, [extrinsic]);

  return (
    <div className='extrinsics--Create'>
      <Extrinsic
        defaultValue={apiDefaultTxSudo}
        label={t<string>('propose the following extrinsic')}
        onChange={_onExtrinsicChange}
        onError={_onExtrinsicError}
      />
      {error && (
        <article className='error'>{error}</article>
      )}

      <br />

      {proposalJSON && (
        <Output
          autoFocus
          className='medium'
          help={t<string>('Share this proposal JSON or the B64 encoded URL below')}
          label={t<string>('Proposal JSON')}
          value={proposalJSON}
          isMonospace
          withCopy
        />
      )}

      <br />

      {proposalURL && (
        <Output
          autoFocus
          className='medium'
          help={t<string>('Share this URL for people to vote on your proposal')}
          label={t<string>('Proposal URL')}
          value={proposalURL}
          isMonospace
          withCopy
        />
      )}

      {proposalHex && (
        <Output
          autoFocus
          className='medium'
          help={t<string>('This is the proposal bytes as hex and can be used when submitting in democracy')}
          label={t<string>('Proposal bytes as hex')}
          value={proposalHex}
          isMonospace
          withCopy
        />
      )}

      {proposalHash && (
        <Output
          autoFocus
          className='medium'
          help={t<string>('This is the hash of proposal and can be used when submitting in democracy')}
          label={t<string>('Proposal image (hash)')}
          value={proposalHash}
          isMonospace
          withCopy
        />
      )}
    </div>
  );
}

export default React.memo(Create);
