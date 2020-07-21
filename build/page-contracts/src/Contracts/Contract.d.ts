import React from 'react';
import { PromiseContract as ApiContract } from '@polkadot/api-contract';
interface Props {
    className?: string;
    contract: ApiContract;
    onCall: (_?: number) => () => void;
}
declare function Contract({ className, contract: { abi, address }, onCall }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Contract, any, {}, never>>;
export default _default;
