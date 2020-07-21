import React from 'react';
interface Props {
    assetId: string;
    className?: string;
    name: string;
    onSaveName: (id: string, name: string) => void;
    onForget: (id: string) => void;
}
declare function AssetCard({ assetId, className, name, onForget, onSaveName }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof AssetCard>;
export default _default;
