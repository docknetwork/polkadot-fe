import { Signer, SignerResult } from '@polkadot/api/types';
import { SubmittableResult } from '@polkadot/api';
import { QueueTxPayloadAdd, QueueTxMessageSetStatus } from '@polkadot/react-components/Status/types';
import { Hash } from '@polkadot/types/interfaces';
import { SignerPayloadJSON } from '@polkadot/types/types';
export default class ApiSigner implements Signer {
    #private;
    constructor(queuePayload: QueueTxPayloadAdd, queueSetTxStatus: QueueTxMessageSetStatus);
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
    update(id: number, result: Hash | SubmittableResult): void;
}
