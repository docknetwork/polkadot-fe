import React from 'react';
interface Props {
    hash: string;
    isMember: boolean;
    members: string[];
}
declare function TipEndorse({ hash, isMember, members }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TipEndorse>;
export default _default;
