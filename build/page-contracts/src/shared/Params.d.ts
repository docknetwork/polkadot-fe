import { ContractABIFnArg } from '@polkadot/api-contract/types';
import React from 'react';
interface Props {
    isDisabled?: boolean;
    params?: ContractABIFnArg[];
    onChange: (values: any[]) => void;
    onEnter?: () => void;
}
declare function Params({ isDisabled, onChange, onEnter, params: propParams }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Params>;
export default _default;
