import React from 'react';
interface Props {
    buttons?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    defaultName?: string;
    isDisabled?: boolean;
    isInline?: boolean;
    onSaveName: (name: string) => void;
    assetId: string;
}
export default function AssetRow({ assetId, buttons, children, className, defaultName, isDisabled, isInline, onSaveName }: Props): React.ReactElement<Props>;
export {};
