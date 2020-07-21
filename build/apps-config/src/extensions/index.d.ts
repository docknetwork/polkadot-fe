declare type Browser = 'chrome' | 'firefox';
interface Extension {
    desc: string;
    link: string;
    name: string;
}
declare const availableExtensions: Record<Browser, Extension[]>;
export { availableExtensions };
