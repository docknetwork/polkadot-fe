import { AmountValidateState } from '../types';
import BN from 'bn.js';
import React from 'react';
interface Props {
    controllerId: string | null;
    currentAmount?: BN | null;
    onError: (state: AmountValidateState | null) => void;
    stashId: string | null;
    value?: BN | null;
}
declare function ValidateAmount({ currentAmount, onError, stashId, value }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof ValidateAmount>;
export default _default;
