import { ValidatorInfo } from '../types';
import React from 'react';
interface Props {
    canSelect: boolean;
    filterName: string;
    info: ValidatorInfo;
    isNominated: boolean;
    isSelected: boolean;
    toggleFavorite: (accountId: string) => void;
    toggleSelected: (accountId: string) => void;
    withElected: boolean;
    withIdentity: boolean;
}
declare function Validator({ canSelect, filterName, info, isNominated, isSelected, toggleFavorite, toggleSelected, withElected, withIdentity }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Validator>;
export default _default;
