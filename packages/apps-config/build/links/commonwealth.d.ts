import BN from 'bn.js';
declare const _default: {
    chains: {
        Edgeware: string;
        Kusama: string;
        'Kusama CC3': string;
    };
    create: (chain: string, path: string, data: BN | number | string, hash?: string | undefined) => string;
    isActive: boolean;
    paths: {
        council: string;
        proposal: string;
        referendum: string;
        treasury: string;
    };
    url: string;
};
export default _default;
