import React from 'react';
interface Props {
    className?: string;
    isDisabled?: boolean;
    label: React.ReactNode;
    onChange?: (isChecked: boolean) => void;
    preventDefault?: boolean;
    value?: boolean;
}
declare function Toggle({ className, isDisabled, label, onChange, preventDefault, value }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Toggle, any, {}, never>>;
export default _default;
