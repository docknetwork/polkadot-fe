import { DeriveParachainInfo } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    children?: React.ReactNode;
    className?: string;
    info: DeriveParachainInfo | null;
    isBig?: boolean;
}
declare function ParachainInfo({ children, className, info, isBig }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ParachainInfo, any, {}, never>>;
export default _default;
