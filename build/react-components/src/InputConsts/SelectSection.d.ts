import { DropdownOptions } from '../util/types';
import { ConstValueBase, StorageEntryPromise } from './types';
import React from 'react';
interface Props {
    className?: string;
    defaultValue?: StorageEntryPromise;
    isError?: boolean;
    onChange: (value: string) => void;
    options: DropdownOptions;
    value: ConstValueBase;
}
declare function SelectSection({ className, defaultValue, isError, onChange, options, value: { section } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof SelectSection>;
export default _default;
