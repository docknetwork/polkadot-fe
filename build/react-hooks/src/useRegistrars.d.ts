interface Registrar {
    address: string;
    index: number;
}
interface State {
    isRegistrar: boolean;
    registrars: Registrar[];
    skipQuery?: boolean;
}
export default function useRegistrars(skipQuery?: boolean): State;
export {};
