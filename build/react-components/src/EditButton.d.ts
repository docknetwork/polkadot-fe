import { IconName } from '@fortawesome/fontawesome-svg-core';
import { VoidFn } from './types';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    icon?: IconName;
    onClick: VoidFn;
}
declare function EditButton({ children, className, icon, onClick }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof EditButton, any, {}, never>>;
export default _default;
