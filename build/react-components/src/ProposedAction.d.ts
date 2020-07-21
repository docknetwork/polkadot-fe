import { Proposal } from '@polkadot/types/interfaces';
import BN from 'bn.js';
import React from 'react';
import { InsetProps } from './Inset';
interface Props {
    className?: string;
    asInset?: boolean;
    insetProps?: Partial<InsetProps>;
    proposal?: Proposal | null;
    idNumber: BN | number | string;
    withLinks?: boolean;
    expandNested?: boolean;
}
export declare const styles = "\n  margin-left: 2rem;\n\n  .ui--ProposedAction-extrinsic {\n    .ui--Params-Content {\n      padding-left: 0;\n    }\n  }\n\n  .ui--ProposedAction-header {\n    margin-bottom: 1rem;\n  }\n";
declare function ProposedAction({ asInset, className, expandNested, idNumber, insetProps, proposal, withLinks }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof ProposedAction, any, {}, never>>;
export default _default;
