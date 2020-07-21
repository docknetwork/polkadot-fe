export declare type IpcMainHandler = {
    [channel: string]: (...args: any[]) => Promise<void> | any;
};
