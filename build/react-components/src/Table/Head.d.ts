import React from 'react';
declare type HeaderDef = [React.ReactNode?, string?, number?, (() => void)?];
interface Props {
    className?: string;
    filter?: React.ReactNode;
    header: (null | undefined | HeaderDef)[];
    isEmpty: boolean;
}
declare function Head({ className, filter, header, isEmpty }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Head, any, {}, never>>;
export default _default;
