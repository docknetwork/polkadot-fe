import { SortedTargets } from '../../types';
import React from 'react';
interface Props {
    controllerId: string;
    next?: string[];
    nominating?: string[];
    onClose: () => void;
    stashId: string;
    targets: SortedTargets;
    validators?: string[];
}
declare function Nominate({ controllerId, next, nominating, onClose, stashId, targets, validators }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Nominate>;
export default _default;
