import { Signer, SignerResult } from '@polkadot/api/types';
import { SignerPayloadJSON } from '@polkadot/types/types';
import { QrState } from '../types';
export default class QrSigner implements Signer {
    #private;
    constructor(setState: (state: QrState) => void);
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
}
