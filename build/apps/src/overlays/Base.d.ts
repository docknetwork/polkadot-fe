import React from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
interface Props {
    children: React.ReactNode;
    className?: string;
    icon: IconName;
    type: 'error' | 'info';
}
declare function BaseOverlay({ children, className, icon, type }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof BaseOverlay, any, {}, never>>;
export default _default;
