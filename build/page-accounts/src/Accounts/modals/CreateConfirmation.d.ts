import React from 'react';
interface Props {
    address: string;
    name: string;
    onClose: () => void;
    onCommit: () => void;
}
declare function CreateConfirmation({ address, name, onClose, onCommit }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof CreateConfirmation>;
export default _default;
