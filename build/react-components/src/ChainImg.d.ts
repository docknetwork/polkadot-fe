import React from 'react';
import { namedLogos } from '@polkadot/apps-config/ui/logos';
interface Props {
    className?: string;
    logo?: keyof typeof namedLogos;
    onClick?: () => any;
}
declare function ChainImg({ className, logo, onClick }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ChainImg, any, {}, never>>;
export default _default;
