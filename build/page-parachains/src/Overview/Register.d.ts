import BN from 'bn.js';
import React from 'react';
interface Props {
    nextFreeId?: BN;
    sudoKey: string;
}
declare function Register({ nextFreeId, sudoKey }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Register>;
export default _default;
