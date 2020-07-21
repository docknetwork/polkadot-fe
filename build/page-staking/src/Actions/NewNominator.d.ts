import { SortedTargets } from '../types';
import React from 'react';
interface Props {
    isInElection?: boolean;
    next?: string[];
    targets?: SortedTargets;
    validators?: string[];
}
declare function NewNominator({ isInElection, next, targets, validators }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof NewNominator>;
export default _default;
