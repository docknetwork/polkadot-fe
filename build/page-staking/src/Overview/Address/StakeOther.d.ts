import { Balance } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    stakeOther?: BN;
    nominators: [string, Balance][];
}
declare function StakeOther({ nominators, stakeOther }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof StakeOther>;
export default _default;
