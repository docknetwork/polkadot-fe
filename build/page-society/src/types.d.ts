import { SocietyVote } from '@polkadot/types/interfaces';
export interface OwnMembers {
    allMembers: string[];
    isMember: boolean;
    ownMembers: string[];
}
export interface VoteSplit {
    allAye: VoteType[];
    allNay: VoteType[];
    allSkeptic: VoteType[];
}
export declare type VoteType = [string, SocietyVote];
