import { UpwardMessage } from '@polkadot/types/interfaces';
import React from 'react';
interface Props {
    className?: string;
    dispatchQueue: UpwardMessage[];
}
declare function DispatchQueue({ className, dispatchQueue }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof DispatchQueue, any, {}, never>>;
export default _default;
