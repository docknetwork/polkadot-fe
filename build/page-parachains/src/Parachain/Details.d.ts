import { DeriveParachainFull } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    parachain: DeriveParachainFull;
}
declare function Details({ parachain: { heads, id, info } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Details>;
export default _default;
