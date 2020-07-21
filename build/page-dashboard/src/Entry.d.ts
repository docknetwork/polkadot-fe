import { Route } from '@polkadot/apps-routing/types';
import React from 'react';
interface Props {
    className?: string;
    route: Route;
}
declare function Entry({ className, route: { icon, name, text } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof Entry, any, {}, never>>;
export default _default;
