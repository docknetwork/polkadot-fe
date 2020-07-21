import { QueueTx } from '@polkadot/react-components/Status/types';
import { AddressProxy } from './types';
import React from 'react';
interface Props {
    className?: string;
    currentItem: QueueTx;
    onChange: (address: AddressProxy) => void;
    passwordError: string | null;
    requestAddress: string;
}
declare function Address({ currentItem, onChange, passwordError, requestAddress }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Address>;
export default _default;
