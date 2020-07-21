import { DeriveCollectiveProposals } from '@polkadot/api-derive/types';
import { AccountId } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    motions?: DeriveCollectiveProposals;
    prime: AccountId | null;
}
declare function Proposals({ className, motions, prime }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Proposals>;
export default _default;
