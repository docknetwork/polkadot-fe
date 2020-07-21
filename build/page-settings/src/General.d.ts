import React from 'react';
interface Props {
    className?: string;
    isModalContent?: boolean;
    onClose: () => void;
}
declare function General({ className, isModalContent, onClose }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof General>;
export default _default;
