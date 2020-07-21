interface State {
    ipnsChain: string | null;
    ipnsDomain: string | null;
    ipfsHash: string | null;
    ipfsPath: string | null;
    isIpfs: boolean;
    isIpns: boolean;
}
export declare function extractIpfsDetails(): State;
export default function useIpfs(): State;
export {};
