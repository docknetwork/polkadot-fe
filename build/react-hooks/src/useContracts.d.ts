interface UseContracts {
    allContracts: string[];
    hasContracts: boolean;
    isContract: (address: string) => boolean;
}
export default function useContracts(): UseContracts;
export {};
