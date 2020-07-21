import { DeriveParachain } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    parachains: DeriveParachain[];
}
declare function Parachains({ parachains }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Parachains, any, {}, never>>;
export default _default;
