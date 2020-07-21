import { BlockNumber, Extrinsic, Health, PeerInfo } from '@polkadot/types/interfaces';
import { Vec } from '@polkadot/types';
export interface Info {
    blockNumber?: BlockNumber;
    extrinsics?: Vec<Extrinsic> | null;
    health?: Health | null;
    peers?: PeerInfo[] | null;
}
