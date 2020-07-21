import { TabItem } from './types';
import React from 'react';
interface Props extends TabItem {
    basePath: string;
    className?: string;
    index: number;
    isSequence?: boolean;
    num: number;
}
declare function Tab({ basePath, className, hasParams, index, isExact, isRoot, isSequence, name, num, text }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tab, any, {}, never>>;
export default _default;
