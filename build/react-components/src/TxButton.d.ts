import { TxButtonProps as Props } from './types';
import React from 'react';
declare function TxButton({ accountId, className, extrinsic: propsExtrinsic, icon, isBasic, isDisabled, isIcon, isNegative, isPrimary, isUnsigned, label, onClick, onFailed, onSendRef, onStart, onSuccess, onUpdate, params, tooltip, tx, withSpinner }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof TxButton>;
export default _default;
