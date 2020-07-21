import { NominateInfo } from './types';
import { SortedTargets } from '../../types';
import React from 'react';
interface Props {
    className?: string;
    controllerId: string;
    next?: string[];
    nominating?: string[];
    onChange: (info: NominateInfo) => void;
    stashId: string;
    targets: SortedTargets;
    validators: string[];
    withSenders?: boolean;
}
declare function Nominate({ className, controllerId, next, nominating, onChange, stashId, targets, validators, withSenders }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Nominate, any, {}, never>>;
export default _default;
