interface UseAccounts {
    allAddresses: string[];
    hasAddresses: boolean;
    isAddress: (address: string) => boolean;
}
export default function useAccounts(): UseAccounts;
export {};
