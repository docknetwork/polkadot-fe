import { StringOrNull } from '@polkadot/react-components/types';
import { Abi } from '@polkadot/api-contract';
interface UseAbi {
    abi: string | null;
    contractAbi: Abi | null;
    errorText: string | null;
    isAbiError: boolean;
    isAbiValid: boolean;
    isAbiSupplied: boolean;
    onChangeAbi: (u8a: Uint8Array) => void;
    onRemoveAbi: () => void;
}
export default function useAbi(initialValue?: [string | null, Abi | null], codeHash?: StringOrNull, isRequired?: boolean): UseAbi;
export {};
