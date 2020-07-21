/// <reference types="react" />
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { ButtonProps as SUIButtonProps } from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import { BareProps } from '../types';
export declare type Button$Callback = () => void | Promise<void>;
export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    icon?: IconName;
    isAnimated?: SUIButtonProps['animated'];
    isBasic?: boolean;
    isCircular?: boolean;
    isDisabled?: boolean;
    isFull?: boolean;
    isIcon?: boolean;
    isNegative?: boolean;
    isPositive?: boolean;
    isPrimary?: boolean;
    label?: React.ReactNode;
    onClick?: Button$Callback;
    onMouseEnter?: Button$Callback;
    onMouseLeave?: Button$Callback;
    tabIndex?: number;
    tooltip?: React.ReactNode;
}
export declare type DividerProps = BareProps;
export interface GroupProps {
    children?: React.ReactNode;
    className?: string;
    isCentered?: boolean;
}
export declare type ButtonType = React.ComponentType<ButtonProps> & {
    Group: React.ComponentType<GroupProps>;
};
