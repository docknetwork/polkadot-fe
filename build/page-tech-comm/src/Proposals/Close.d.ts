import { Hash, Proposal, ProposalIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    hasFailed: boolean;
    hash: Hash;
    idNumber: ProposalIndex;
    isDisabled: boolean;
    members: string[];
    proposal: Proposal;
}
declare function Close({ hasFailed, hash, idNumber, isDisabled, members, proposal }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Close>;
export default _default;
