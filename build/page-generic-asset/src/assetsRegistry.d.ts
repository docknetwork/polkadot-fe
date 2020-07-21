import { BehaviorSubject } from 'rxjs';
export interface AssetsSubjectInfo {
    [id: string]: string;
}
declare const _default: {
    add: (id: string, name: string) => void;
    getAssets: () => AssetsSubjectInfo[];
    remove: (id: string) => void;
    subject: BehaviorSubject<AssetsSubjectInfo>;
};
export default _default;
