import { Signer, SignerResult } from '@polkadot/api/types';
import { KeyringPair } from '@polkadot/keyring/types';
import { SignerPayloadJSON } from '@polkadot/types/types';
export default class AccountSigner implements Signer {
    #private;
    constructor(keyringPair: KeyringPair);
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
}
