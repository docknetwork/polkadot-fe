import BN from 'bn.js';
import React from 'react';
interface Props {
    parachainCount: number;
    nextFreeId?: BN;
}
declare function Summary({ nextFreeId, parachainCount }: Props): React.ReactElement<Props>;
export default Summary;
