import { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
export interface CollectionProps extends I18nProps {
    banner?: React.ReactNode;
    buttons?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    headerText?: React.ReactNode;
    isEmpty?: boolean;
    emptyText?: React.ReactNode;
    showEmptyText?: boolean;
}
export interface CollectionState {
    isEmpty: boolean;
    showHeader?: boolean;
}
export declare const collectionStyles = "\n  .ui--Collection-header {\n    display: flex;\n    margin-bottom: 0.5rem;\n    min-height: 2.75rem;\n\n    h1 {\n      flex: 1 1;\n      margin: 0;\n      text-transform: lowercase;\n    }\n  }\n\n  .ui--Collection-lowercase {\n    text-transform: lowercase;\n  }\n";
export default class Collection<P extends CollectionProps, S extends CollectionState> extends React.PureComponent<P, S> {
    constructor(props: P);
    private static isEmpty;
    static getDerivedStateFromProps({ children, isEmpty }: CollectionProps): CollectionState;
    render(): React.ReactNode;
    protected renderHeader(): React.ReactNode;
    protected renderEmpty(): React.ReactNode;
    protected renderCollection(): React.ReactNode;
}
