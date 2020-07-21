import { Routes } from './types';
export default function create(t: <T = string>(key: string, text: string, options: {
    ns: string;
}) => T): Routes;
