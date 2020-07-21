import { AppProps } from '@polkadot/react-components/types';
import React from 'react';
interface Props extends AppProps {
    className?: string;
}
declare function DashboardApp({ className }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<import("styled-components").StyledComponent<typeof DashboardApp, any, {}, never>>;
export default _default;
