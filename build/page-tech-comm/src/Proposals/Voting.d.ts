import { AccountId, Hash } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    hash: Hash | string;
    prime?: AccountId | null;
    proposalId: BN | number;
}
declare function Voting({ hash, prime, proposalId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Voting>;
export default _default;
