import React from 'react';
interface Props {
    className?: string;
    onChange: (url: string) => void;
}
declare function SelectUrl({ className, onChange }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof SelectUrl, any, {}, never>>;
export default _default;
