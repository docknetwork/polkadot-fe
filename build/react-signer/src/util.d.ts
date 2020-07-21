import { QueueTx, QueueTxMessageSetStatus } from '@polkadot/react-components/Status/types';
import { AddressFlags } from './types';
import { SubmittableResult } from '@polkadot/api';
export declare function extractExternal(accountId: string | null): AddressFlags;
export declare function recodeAddress(address: string | Uint8Array): string;
export declare function handleTxResults(handler: 'send' | 'signAndSend', queueSetTxStatus: QueueTxMessageSetStatus, { id, txFailedCb, txSuccessCb, txUpdateCb }: QueueTx, unsubscribe: () => void): (result: SubmittableResult) => void;
