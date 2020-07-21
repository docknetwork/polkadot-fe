import { EraIndex } from '@polkadot/types/interfaces';
import { StakerState } from '@polkadot/react-hooks/types';
import { SortedTargets } from '../../types';
import React from 'react';
interface Props {
    activeEra?: EraIndex;
    className?: string;
    isDisabled?: boolean;
    info: StakerState;
    next?: string[];
    stashId: string;
    targets: SortedTargets;
    validators?: string[];
}
declare function Account({ className, info: { controllerId, destination, destinationId, hexSessionIdNext, hexSessionIdQueue, isLoading, isOwnController, isOwnStash, isStashNominating, isStashValidating, nominating, sessionIds, stakingLedger, stashId }, isDisabled, next, targets, validators }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Account, any, {}, never>>;
export default _default;
