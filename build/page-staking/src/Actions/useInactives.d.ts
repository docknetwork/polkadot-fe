interface Inactives {
    nomsActive?: string[];
    nomsInactive?: string[];
    nomsWaiting?: string[];
}
export default function useInactives(stashId: string, nominees?: string[]): Inactives;
export {};
