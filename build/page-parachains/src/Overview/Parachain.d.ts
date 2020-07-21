import { DeriveParachain } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    parachain: DeriveParachain;
}
declare function Parachain({ className, parachain: { didUpdate, id, info, pendingSwapId, relayDispatchQueueSize } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Parachain, any, {}, never>>;
export default _default;
