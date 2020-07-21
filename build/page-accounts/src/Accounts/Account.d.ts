import { KeyringAddress } from '@polkadot/ui-keyring/types';
import { Delegation } from '../types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    account: KeyringAddress;
    className?: string;
    delegation?: Delegation;
    filter: string;
    isFavorite: boolean;
    setBalance: (address: string, value: BN) => void;
    toggleFavorite: (address: string) => void;
}
declare function Account({ account: { address, meta }, className, delegation, filter, isFavorite, setBalance, toggleFavorite }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Account, any, {}, never>>;
export default _default;
