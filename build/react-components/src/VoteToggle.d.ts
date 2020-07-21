import React from 'react';
interface Props {
    className?: string;
    onChange: (value: boolean) => void;
    value: boolean;
}
declare function VoteToggle({ className, onChange, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof VoteToggle, any, {}, never>>;
export default _default;
