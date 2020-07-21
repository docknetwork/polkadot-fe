import React from 'react';
interface Props {
    isElected: boolean;
    numNominators?: number;
    onlineCount?: false | number;
    onlineMessage?: boolean;
}
declare function Status({ isElected, numNominators, onlineCount, onlineMessage }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Status>;
export default _default;
