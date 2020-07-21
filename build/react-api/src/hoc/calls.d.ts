import { ApiProps, SubtractProps } from '../types';
import { Options } from './types';
import React from 'react';
declare type Call = string | [string, Options];
export default function withCalls<P>(...calls: Call[]): (Component: React.ComponentType<P>) => React.ComponentType<SubtractProps<P, ApiProps>>;
export {};
