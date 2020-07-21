import React from 'react';
import { Text } from '@polkadot/types';
interface Meta {
    documentation: Text[];
}
export interface Props {
    children?: React.ReactNode;
    className?: string;
    isOpen?: boolean;
    summary?: React.ReactNode;
    summaryMeta?: Meta;
    summarySub?: React.ReactNode;
    withDot?: boolean;
    withHidden?: boolean;
}
declare function Expander({ children, className, isOpen, summary, summaryMeta, summarySub, withDot, withHidden }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Expander, any, {}, never>>;
export default _default;
