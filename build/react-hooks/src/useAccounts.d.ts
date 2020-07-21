interface UseAccounts {
    allAccounts: string[];
    hasAccounts: boolean;
    isAccount: (address: string) => boolean;
}
export default function useAccounts(): UseAccounts;
export {};
