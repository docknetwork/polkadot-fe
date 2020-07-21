import React from 'react';
import { InputFileProps } from './InputFile';
interface Props extends Omit<InputFileProps, 'accept'> {
    isValidRef: React.MutableRefObject<boolean>;
    onChange: (contents: Uint8Array, name?: string) => void;
}
declare function InputWasm({ isValidRef, onChange, ...props }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof InputWasm>;
export default _default;
