import { Route } from '@polkadot/apps-routing/types';
import React from 'react';
interface Props {
    isCollapsed: boolean;
    onClick: () => void;
    route: Route;
}
declare function Item({ isCollapsed, onClick, route }: Props): React.ReactElement<Props> | null;
declare const _default: React.MemoExoticComponent<typeof Item>;
export default _default;
