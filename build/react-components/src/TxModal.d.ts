import { I18nProps } from '@polkadot/react-components/types';
import React from 'react';
import { TxComponent } from '@polkadot/react-components';
export interface TxModalProps extends I18nProps {
    filter?: string[];
    onSubmit?: () => void;
    onClose?: () => void;
    onSuccess?: () => void;
    onFailed?: () => void;
}
export interface TxModalState {
    accountId?: string | null;
    isBusy: boolean;
    isOpen: boolean;
}
export default class TxModal<P extends TxModalProps, S extends TxModalState> extends TxComponent<P, S> {
    protected defaultState: S;
    state: S;
    render(): React.ReactNode;
    protected headerText: () => React.ReactNode;
    protected accountHelp: () => React.ReactNode;
    protected accountLabel: () => React.ReactNode;
    protected submitLabel: () => React.ReactNode;
    protected cancelLabel: () => React.ReactNode;
    protected onChangeAccount: (accountId: string | null) => void;
    protected onSubmit: () => void;
    protected onSuccess: () => void;
    protected onFailed: () => void;
    protected isDisabled: () => boolean;
    protected toggleBusy: (isBusy: boolean) => () => void;
    protected isUnsigned: () => boolean;
    protected txMethod: () => string;
    protected txParams: () => any[];
    protected renderContent: () => React.ReactNode;
    protected renderPreContent: () => React.ReactNode;
    protected renderTrigger?: () => React.ReactNode;
    protected renderButtons: () => React.ReactNode;
    protected renderInputAccount(): React.ReactNode;
    protected renderTxButton(): React.ReactNode;
    protected reset: () => void;
    protected showModal: () => void;
    protected hideModal: () => void;
}
