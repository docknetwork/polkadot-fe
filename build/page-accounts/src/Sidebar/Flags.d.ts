import { AddressFlags } from '@polkadot/react-hooks/types';
import React from 'react';
interface Props {
    flags: AddressFlags;
}
declare function Flags({ flags: { isCouncil, isDevelopment, isExternal, isInjected, isMultisig, isProxied, isSociety, isSudo, isTechCommittee } }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Flags>;
export default _default;
