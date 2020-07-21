import { VoidFn } from '@polkadot/react-components/types';
import { CodeStored } from './types';
import React from 'react';
interface Props {
    basePath: string;
    allCodes: CodeStored[];
    codeHash: string;
    constructorIndex?: number;
    isOpen?: boolean;
    onClose: VoidFn;
    setCodeHash: React.Dispatch<string>;
    setConstructorIndex: React.Dispatch<number>;
}
declare function Deploy({ allCodes, basePath, codeHash, constructorIndex, isOpen, onClose, setCodeHash, setConstructorIndex }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Deploy>;
export default _default;
