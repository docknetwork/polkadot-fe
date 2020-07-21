import { StringOrNull, VoidFn } from '@polkadot/react-components/types';
import React from 'react';
declare type ToggleContext = undefined | (([address, onUpdateName]: [StringOrNull, VoidFn | null]) => void);
interface Props {
    children: React.ReactNode;
}
declare const AccountSidebarToggle: React.Context<ToggleContext>;
declare function AccountSidebar({ children }: Props): React.ReactElement<Props>;
export { AccountSidebarToggle };
declare const _default: React.MemoExoticComponent<typeof AccountSidebar>;
export default _default;
