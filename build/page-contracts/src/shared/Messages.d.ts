import React from 'react';
import { Abi } from '@polkadot/api-contract';
export interface Props {
    address?: string;
    className?: string;
    contractAbi: Abi;
    isLabelled?: boolean;
    isRemovable: boolean;
    onRemove?: () => void;
    onSelect?: (messageIndex: number) => () => void;
    onSelectConstructor?: (constructorIndex: number) => void;
    withConstructors?: boolean;
}
declare function Messages(props: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Messages, any, {}, never>>;
export default _default;
