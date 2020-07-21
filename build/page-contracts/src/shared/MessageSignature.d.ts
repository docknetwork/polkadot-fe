import { ContractABIMessage } from '@polkadot/api-contract/types';
import React from 'react';
export interface Props {
    asConstructor?: boolean;
    className?: string;
    message: ContractABIMessage;
    params?: any[];
    withTooltip?: boolean;
}
declare function MessageSignature({ className, message: { args, mutates, name, returnType }, params, asConstructor, withTooltip }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof MessageSignature, any, {}, never>>;
export default _default;
