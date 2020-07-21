import { DeriveProposalImage } from '@polkadot/api-derive/types';
import { AccountId } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    depositors: AccountId[];
    image?: DeriveProposalImage;
    proposalId: BN | number;
}
declare function Seconding({ depositors, image, proposalId }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Seconding>;
export default _default;
