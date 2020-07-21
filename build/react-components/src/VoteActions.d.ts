import React from 'react';
interface Props {
    accountId: string | null;
    aye: boolean;
    className?: string;
    isDisabled?: boolean;
    onClick: () => void;
    params: any[];
    tx: string;
}
declare function VoteActions({ accountId, aye, className, isDisabled, onClick, params, tx }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof VoteActions>;
export default _default;
