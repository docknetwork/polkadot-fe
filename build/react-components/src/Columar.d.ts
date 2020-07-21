import React from 'react';
interface Props {
    children: React.ReactNode;
    className?: string;
    is60?: boolean;
}
declare type ColumarType = React.ComponentType<Props> & {
    Column: React.ComponentType<Props>;
};
declare const ColumarExp: ColumarType;
export default ColumarExp;
