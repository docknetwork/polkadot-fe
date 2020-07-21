import BN from 'bn.js';
declare const _default: {
    chains: {
        Edgeware: string;
        Kulupu: string;
        Kusama: string;
        'Kusama CC3': string;
        Polkadot: string;
        'Polkadot CC1': string;
        Westend: string;
    };
    create: (chain: string, path: string, data: BN | number | string) => string;
    isActive: boolean;
    paths: {
        address: string;
        block: string;
        council: string;
        extrinsic: string;
        proposal: string;
        referendum: string;
        techcomm: string;
        treasury: string;
    };
    url: string;
};
export default _default;
