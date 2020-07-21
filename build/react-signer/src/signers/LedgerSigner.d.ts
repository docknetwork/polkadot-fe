import { Signer, SignerResult } from '@polkadot/api/types';
import { SignerPayloadJSON } from '@polkadot/types/types';
export default class LedgerSigner implements Signer {
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
}
