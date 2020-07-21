import { TFunction } from 'i18next';
import { Option } from './types';
interface LinkOption extends Option {
    dnslink?: string;
}
export default function create(t: TFunction): LinkOption[];
export {};
