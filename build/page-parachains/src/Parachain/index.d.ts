import { DeriveParachainInfo } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    basePath: string;
    className?: string;
    isMine?: boolean;
    paraInfoRef: React.MutableRefObject<DeriveParachainInfo | null>;
    sudoKey?: string;
}
declare function Parachain({ basePath, className, isMine, paraInfoRef, sudoKey }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Parachain, any, {}, never>>;
export default _default;
