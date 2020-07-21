import { TabItem } from './types';
import React from 'react';
interface Props {
    className?: string;
    basePath: string;
    hidden?: (string | boolean | undefined)[];
    items: TabItem[];
    isSequence?: boolean;
}
declare function Tabs({ basePath, className, hidden, isSequence, items }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tabs, any, {}, never>>;
export default _default;
