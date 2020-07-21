import { Proposal } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    children?: React.ReactNode;
    accessory?: React.ReactNode;
    proposal?: Proposal | null;
    idNumber: BN | number | string;
    expandNested?: boolean;
}
export declare const styles: string;
declare function ActionItem({ accessory, children, className, expandNested, idNumber, proposal }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ActionItem, any, {}, never>>;
export default _default;
