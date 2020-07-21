import { DeriveElectionsInfo } from '@polkadot/api-derive/types';
import { BlockNumber } from '@polkadot/types/interfaces';
import { ComponentProps } from './types';
import React from 'react';
interface Props extends ComponentProps {
    bestNumber?: BlockNumber;
    className?: string;
    electionsInfo?: DeriveElectionsInfo;
}
declare function Summary({ bestNumber, className, electionsInfo }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Summary>;
export default _default;
