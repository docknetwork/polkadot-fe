import { DeriveParachainInfo } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    id: string;
    onClick?: () => void;
    info: DeriveParachainInfo | null;
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    sudoKey: string;
}
declare function Deregister({ id, info, isOpen, onClose, onSubmit, sudoKey }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Deregister>;
export default _default;
