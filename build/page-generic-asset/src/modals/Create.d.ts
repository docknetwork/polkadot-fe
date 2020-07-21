import BN from 'bn.js';
import React from 'react';
export interface ModalProps {
    onClose: () => void;
    onRegister: (id: BN, name: string) => void;
}
interface Props extends ModalProps {
    className?: string;
    onClose: () => void;
    onRegister: (id: BN, name: string) => void;
}
declare function Create({ onClose, onRegister }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Create>;
export default _default;
