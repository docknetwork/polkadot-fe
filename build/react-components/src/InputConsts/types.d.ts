import { StorageEntryBase } from '@polkadot/api/types';
import { ModuleConstantMetadataV7 } from '@polkadot/types/interfaces';
export declare type StorageEntryPromise = StorageEntryBase<'promise', any>;
export interface ConstValueBase {
    method: string;
    section: string;
}
export interface ConstValue extends ConstValueBase {
    meta: ModuleConstantMetadataV7;
}
