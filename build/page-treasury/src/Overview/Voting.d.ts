import { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    councilProposals: DeriveCollectiveProposal[];
    isDisabled?: boolean;
    members: string[];
}
declare function Voting({ councilProposals, isDisabled, members }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Voting>;
export default _default;
