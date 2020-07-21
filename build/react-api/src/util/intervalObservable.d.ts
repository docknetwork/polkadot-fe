/// <reference types="react" />
import { CallState } from '../types';
import { Subscription } from 'rxjs';
export default function intervalObservable<T, Props, State extends CallState>(that: React.Component<Props, State>): Subscription;
