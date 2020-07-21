import { ApiProps } from '../types';
import { Options } from './types';
import React from 'react';
export default function withCall<P extends ApiProps>(endpoint: string, { at, atProp, callOnResult, fallbacks, isMulti, params, paramName, paramPick, paramValid, propName, skipIf, transform, withIndicator }?: Options): (Inner: React.ComponentType<ApiProps>) => React.ComponentType<any>;
