/// <reference types="react" />
export interface Option {
    info?: string;
    isDisabled?: boolean;
    isHeader?: boolean;
    text: React.ReactNode;
    value: string | number;
}
