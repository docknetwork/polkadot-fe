import { ActionsProps, ColumnProps, ModalProps } from './types';
import React from 'react';
import SUIModal from 'semantic-ui-react/dist/commonjs/modules/Modal/Modal';
declare type ModalType = React.FC<ModalProps> & {
    Actions: React.FC<ActionsProps>;
    Column: React.FC<ColumnProps>;
    Columns: React.FC<ColumnProps>;
    Content: typeof SUIModal.Content;
    Header: typeof SUIModal.Header;
    Description: typeof SUIModal.Description;
};
declare const Modal: ModalType;
export default Modal;
