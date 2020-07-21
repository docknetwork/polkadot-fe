import React from 'react';
declare type Props = {
    password: string;
    onChange: (password: string, isPasswordValid: boolean) => void;
    onEnter: () => void;
};
export default function PasswordInput({ onChange, onEnter, password }: Props): React.ReactElement;
export {};
