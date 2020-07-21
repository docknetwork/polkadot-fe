import React from 'react';
interface Props {
    className?: string;
    label?: React.ReactNode;
    variant?: 'app' | 'push' | 'mini';
}
declare function Spinner({ className, label, variant }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Spinner, any, {}, never>>;
export default _default;
