import BN from 'bn.js';
import React from 'react';
interface Props {
    className?: string;
    executionTime: number;
    help: React.ReactNode;
    isValid: boolean;
    label: React.ReactNode;
    megaGas: BN;
    percentage: number;
    setMegaGas: (value?: BN) => void;
}
declare function InputMegaGas({ className, executionTime, help, isValid, label, megaGas, percentage, setMegaGas }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof InputMegaGas, any, {}, never>>;
export default _default;
