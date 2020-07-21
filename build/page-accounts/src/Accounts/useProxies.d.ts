import { ProxyType } from '@polkadot/types/interfaces';
interface Proxy {
    address: string;
    isOwned: boolean;
    type: ProxyType;
}
interface State {
    hasOwned: boolean;
    owned: Proxy[];
    proxies: Proxy[];
}
export default function useProxies(address?: string | null): State;
export {};
