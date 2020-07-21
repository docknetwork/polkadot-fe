import React from 'react';
interface Props {
    className?: string;
    collapse: () => void;
    handleResize: () => void;
    isCollapsed: boolean;
    isMenuOpen: boolean;
    toggleMenu: () => void;
}
declare function SideBar({ className, collapse, handleResize, isCollapsed, isMenuOpen, toggleMenu }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof SideBar, any, {}, never>>;
export default _default;
