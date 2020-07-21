import { ContractCallOutcome } from '@polkadot/api-contract/types';
import React from 'react';
interface Props {
    className?: string;
    onClear?: () => void;
    outcome: ContractCallOutcome;
}
declare function Outcome({ className, onClear, outcome: { isSuccess, message, origin, output, params, time } }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Outcome, any, {}, never>>;
export default _default;
