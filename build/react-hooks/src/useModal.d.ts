import { ModalState } from './types';
export default function useModal(defaultIsOpen?: boolean, onOpen?: () => void, onClose?: () => void): ModalState;
