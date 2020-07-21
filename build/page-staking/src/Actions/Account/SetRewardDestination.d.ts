import React from 'react';
interface Props {
    defaultDestination?: number;
    controllerId: string;
    onClose: () => void;
    stashId: string;
}
declare function SetRewardDestination({ controllerId, defaultDestination, onClose, stashId }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof SetRewardDestination>;
export default _default;
