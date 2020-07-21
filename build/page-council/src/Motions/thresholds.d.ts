import { ApiPromise } from '@polkadot/api';
declare const THRESHOLDS: Record<string, number>;
export declare function getThreshold(api: ApiPromise): number;
export { THRESHOLDS };
