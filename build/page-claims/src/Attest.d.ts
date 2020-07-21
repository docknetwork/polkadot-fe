import React from 'react';
import { TxCallback } from '@polkadot/react-components/Status/types';
import { EthereumAddress, StatementKind } from '@polkadot/types/interfaces';
interface Props {
    accountId: string;
    className?: string;
    ethereumAddress: EthereumAddress | null;
    onSuccess?: TxCallback;
    statementKind?: StatementKind;
    systemChain: string;
}
declare function Attest({ accountId, className, ethereumAddress, onSuccess, statementKind, systemChain }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Attest, any, {}, never>>;
export default _default;
