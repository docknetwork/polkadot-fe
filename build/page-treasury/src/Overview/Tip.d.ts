import { BlockNumber, OpenTip, OpenTipTo225 } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    bestNumber?: BlockNumber;
    className?: string;
    hash: string;
    isMember: boolean;
    members: string[];
    tip: OpenTip | OpenTipTo225;
}
declare function Tip({ bestNumber, className, hash, isMember, members, tip }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Tip, any, {}, never>>;
export default _default;
