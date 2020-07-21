import React from 'react';
interface Props {
    address: string;
    className?: string;
    filterName: string;
    hasQueries: boolean;
    isElected: boolean;
    isFavorite: boolean;
    isMain?: boolean;
    lastBlock?: string;
    nominatedBy?: [string, number][];
    onlineCount?: false | number;
    onlineMessage?: boolean;
    points?: string;
    toggleFavorite: (accountId: string) => void;
    withIdentity: boolean;
}
declare function Address({ address, className, filterName, hasQueries, isElected, isFavorite, isMain, lastBlock, nominatedBy, onlineCount, onlineMessage, points, toggleFavorite, withIdentity }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Address>;
export default _default;
