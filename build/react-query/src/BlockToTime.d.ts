import BN from 'bn.js';
import React from 'react';
interface Props {
    blocks?: BN;
    children?: React.ReactNode;
    className?: string;
    label?: React.ReactNode;
}
declare function BlockToTime({ blocks, children, className, label }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof BlockToTime>;
export default _default;
