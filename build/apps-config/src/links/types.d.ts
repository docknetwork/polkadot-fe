import BN from 'bn.js';
export declare type LinkTypes = 'address' | 'block' | 'council' | 'extrinsic' | 'proposal' | 'referendum' | 'techcomm' | 'treasury';
export interface ExternalDef {
    chains: Record<string, string>;
    isActive: boolean;
    paths: Partial<Record<LinkTypes, string>>;
    url: string;
    create: (chain: string, path: string, data: BN | number | string, hash?: string) => string;
}
