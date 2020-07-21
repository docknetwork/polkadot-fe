import { DeriveStakingOverview } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    favorites: string[];
    hasQueries: boolean;
    isIntentions?: boolean;
    next?: string[];
    setNominators?: (nominators: string[]) => void;
    stakingOverview?: DeriveStakingOverview;
    toggleFavorite: (address: string) => void;
}
declare function CurrentList({ favorites, hasQueries, isIntentions, next, stakingOverview, toggleFavorite }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof CurrentList>;
export default _default;
