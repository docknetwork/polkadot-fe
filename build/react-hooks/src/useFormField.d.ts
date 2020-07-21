export declare type FormField<T> = [T | null, boolean, (_?: T | null) => void];
export default function useFormField<T>(defaultValue: T | null, validate?: (_: T) => boolean): FormField<T>;
