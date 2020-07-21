import React from 'react';
interface Props {
    address: string;
    className?: string;
    onClose: () => void;
    onUpdateName: () => void;
}
declare function Sidebar({ address, className, onClose, onUpdateName }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Sidebar, any, {}, never>>;
export default _default;
