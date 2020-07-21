interface Result {
    isMember: boolean;
    members: string[];
}
export default function useMembers(collective?: 'council' | 'technicalCommittee'): Result;
export {};
