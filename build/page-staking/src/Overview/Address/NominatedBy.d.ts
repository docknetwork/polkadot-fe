import React from 'react';
interface Props {
    nominators?: [string, number][];
}
declare function NominatedBy({ nominators }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof NominatedBy>;
export default _default;
