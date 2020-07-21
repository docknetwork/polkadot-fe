import { DeriveReferendumVote } from '@polkadot/api-derive/types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    change: BN;
    className?: string;
    count: number;
    isWinning: boolean;
    index: BN;
    total: BN;
    votes: DeriveReferendumVote[];
}
declare function ReferendumVotes({ change, className, count, index, isWinning, total, votes }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ReferendumVotes, any, {}, never>>;
export default _default;
