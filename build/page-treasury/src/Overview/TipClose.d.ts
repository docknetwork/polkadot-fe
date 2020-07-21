import React from 'react';
interface Props {
    hash: string;
    isMember: boolean;
    members: string[];
}
declare function TipClose({ hash, isMember, members }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TipClose>;
export default _default;
