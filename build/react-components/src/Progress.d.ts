import BN from 'bn.js';
import React from 'react';
import { UInt } from '@polkadot/types';
interface Props {
    className?: string;
    percent?: BN | number;
    total?: UInt | BN | number;
    value?: UInt | BN | number;
}
declare function Progress({ className, percent, total, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Progress, any, {}, never>>;
export default _default;
