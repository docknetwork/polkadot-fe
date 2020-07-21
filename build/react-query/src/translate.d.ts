/// <reference types="react" />
import { UseTranslationResponse } from 'react-i18next';
export declare function useTranslation(): UseTranslationResponse;
declare const _default: <P extends import("react-i18next").WithTranslation>(component: import("react").ComponentType<P>) => import("react").ComponentType<Pick<P, Exclude<keyof P, "t" | "i18n" | "tReady">> & import("react-i18next").WithTranslationProps>;
export default _default;
