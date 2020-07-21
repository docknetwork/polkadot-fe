import BN from 'bn.js';
import React from 'react';
import { Compact } from '@polkadot/types';
interface Props {
    children?: React.ReactNode;
    className?: string;
    isShort?: boolean;
    label?: React.ReactNode;
    labelPost?: string;
    value?: Compact<any> | BN | string | null | 'all';
    withSi?: boolean;
}
declare function FormatBalance({ children, className, isShort, label, labelPost, value, withSi }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof FormatBalance, any, {}, never>>;
export default _default;
