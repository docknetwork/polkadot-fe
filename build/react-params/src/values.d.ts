import { TypeDef } from '@polkadot/types/types';
import { RawParam } from './types';
export declare function createValue(param: {
    type: TypeDef;
}): RawParam;
export default function createValues(params: {
    type: TypeDef;
}[]): RawParam[];
