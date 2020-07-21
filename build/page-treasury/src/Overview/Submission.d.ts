import { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import { ProposalIndex } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    councilProposals: DeriveCollectiveProposal[];
    id: ProposalIndex;
    isDisabled: boolean;
    members: string[];
}
declare function Submission({ councilProposals, id, isDisabled, members }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Submission>;
export default _default;
