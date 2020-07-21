import { DeriveStakerReward } from '@polkadot/api-derive/types';
interface OwnRewards {
    allRewards?: Record<string, DeriveStakerReward[]>;
    isLoadingRewards: boolean;
    rewardCount: number;
}
export default function useOwnEraRewards(maxEras?: number): OwnRewards;
export {};
