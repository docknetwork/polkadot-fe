import { CallOptions, CallParam, CallParams } from './types';
declare type TrackFnResult = Promise<() => void>;
interface TrackFn {
    (...params: CallParam[]): TrackFnResult;
    meta?: {
        type: {
            isDoubleMap: boolean;
        };
    };
}
export default function useCall<T>(fn: TrackFn | undefined | null | false, params?: CallParams, options?: CallOptions<T>): T | undefined;
export {};
