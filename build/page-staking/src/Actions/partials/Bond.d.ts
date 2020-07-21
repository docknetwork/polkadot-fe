import { BondInfo } from './types';
import React from 'react';
interface Props {
    className?: string;
    onChange: (info: BondInfo) => void;
}
declare function Bond({ className, onChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Bond>;
export default _default;
