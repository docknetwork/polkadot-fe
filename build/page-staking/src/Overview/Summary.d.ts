import { DeriveStakingOverview } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    isVisible: boolean;
    next?: string[];
    nominators?: string[];
    stakingOverview?: DeriveStakingOverview;
}
declare function Summary({ className, isVisible, next, nominators, stakingOverview }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Summary, any, {}, never>>;
export default _default;
