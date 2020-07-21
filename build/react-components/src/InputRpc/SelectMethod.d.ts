import { DefinitionRpcExt } from '@polkadot/types/types';
import { DropdownOptions } from '../util/types';
import React from 'react';
interface Props {
    className?: string;
    isError?: boolean;
    onChange: (value: DefinitionRpcExt) => void;
    options: DropdownOptions;
    value: DefinitionRpcExt;
}
declare function SelectMethod(props: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof SelectMethod>;
export default _default;
