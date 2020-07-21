import { ContractABIFn, ContractABIMessage } from '@polkadot/api-contract/types';
import { StringOrNull } from '@polkadot/react-components/types';
import { ApiPromise } from '@polkadot/api';
import { PromiseContract as Contract } from '@polkadot/api-contract';
export declare function findCallMethod(callContract: Contract | null, callMethodIndex?: number): ContractABIMessage | null;
export declare function getContractMethodFn(callContract: Contract | null, callMethodIndex: number | null): ContractABIFn | null;
export declare function getContractForAddress(api: ApiPromise, address: StringOrNull): Contract | null;
export declare function getCallMessageOptions(callContract: Contract | null): any[];
