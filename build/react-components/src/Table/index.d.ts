import React from 'react';
interface TableProps {
    children: React.ReactNode;
    className?: string;
    empty?: React.ReactNode;
    emptySpinner?: React.ReactNode;
    filter?: React.ReactNode;
    footer?: React.ReactNode;
    header: [React.ReactNode?, string?, number?, (() => void)?][];
    isFixed?: boolean;
}
declare function Table({ children, className, empty, emptySpinner, filter, footer, header, isFixed }: TableProps): React.ReactElement<TableProps>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Table, any, {}, never>>;
export default _default;
