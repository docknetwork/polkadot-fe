import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    defaultValue?: any;
    help?: React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    isFull?: boolean;
    isHidden?: boolean;
    label?: React.ReactNode;
    value?: React.ReactNode;
    withLabel?: boolean;
}
declare function Static({ children, className, defaultValue, help, isFull, isHidden, label, value, withLabel }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Static>;
export default _default;
