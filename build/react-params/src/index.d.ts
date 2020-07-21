import { I18nProps } from '@polkadot/react-components/types';
import { ComponentMap, ParamDef, RawParams } from './types';
import React from 'react';
import Holder from './Holder';
interface Props extends I18nProps {
    children?: React.ReactNode;
    isDisabled?: boolean;
    onChange?: (value: RawParams) => void;
    onEnter?: () => void;
    onError?: () => void;
    onEscape?: () => void;
    overrides?: ComponentMap;
    params: ParamDef[];
    values?: RawParams | null;
    withBorder?: boolean;
}
export { Holder };
declare const _default: React.ComponentType<Pick<Props, "className" | "isDisabled" | "onChange" | "children" | "params" | "style" | "values" | "onError" | "onEnter" | "onEscape" | "withBorder" | "overrides"> & import("react-i18next").WithTranslationProps>;
export default _default;
