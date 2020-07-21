import { DeriveAccountInfo } from '@polkadot/api-derive/types';
import { ApiPromise } from '@polkadot/api';
export declare function checkVisibility(api: ApiPromise, address: string, filterName: string, withIdentity: boolean, accountInfo?: DeriveAccountInfo): boolean;
