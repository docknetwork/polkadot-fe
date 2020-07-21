import { DeriveStakingOverview } from '@polkadot/api-derive/types';
import React from 'react';
interface Props {
    className?: string;
    favorites: string[];
    hasQueries: boolean;
    isIntentions?: boolean;
    next?: string[];
    stakingOverview?: DeriveStakingOverview;
    toggleFavorite: (address: string) => void;
}
declare function Overview({ className, favorites, hasQueries, isIntentions, next, stakingOverview, toggleFavorite }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof Overview>;
export default _default;
