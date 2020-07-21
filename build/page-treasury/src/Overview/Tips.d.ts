import React from 'react';
interface Props {
    className?: string;
    hashes?: string[] | null;
    isMember: boolean;
    members: string[];
}
declare function Tips({ className, hashes, isMember, members }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Tips>;
export default _default;
