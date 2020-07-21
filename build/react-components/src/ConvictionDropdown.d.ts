import React from 'react';
export interface Props {
    className?: string;
    help?: string;
    label?: React.ReactNode;
    onChange?: (value: number) => void;
    value?: number;
}
declare function AvailableDisplay({ className, help, label, onChange, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof AvailableDisplay>;
export default _default;
