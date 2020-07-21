import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    isInElection?: boolean;
    stakerPayoutsAfter: BN;
}
declare function Payouts({ className, isInElection }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Payouts, any, {}, never>>;
export default _default;
