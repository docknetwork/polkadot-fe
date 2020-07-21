import { SessionRewards } from '../types';
import { u32 } from '@polkadot/types';
export default function useBlockCounts(accountId: string, sessionRewards: SessionRewards[]): u32[];
