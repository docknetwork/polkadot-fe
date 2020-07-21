export default function memo<T extends (...args: any[]) => any>(inner: T): T;
