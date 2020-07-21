import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    value?: BN | Date | number;
}
declare function Elapsed({ className, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Elapsed>;
export default _default;
