import type { SemanticShorthandItem } from 'semantic-ui-react/dist/commonjs/generic';
import type { LabelProps } from 'semantic-ui-react/dist/commonjs/elements/Label';
export declare type LogType = 'error' | 'log';
export interface Log {
    args: any[];
    type: LogType;
}
export interface Snippet {
    text: string;
    value: string;
    code: string;
    label?: SemanticShorthandItem<LabelProps>;
    type?: 'custom' | 'shared';
}
