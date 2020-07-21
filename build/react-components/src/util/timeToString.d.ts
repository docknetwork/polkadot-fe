import { TFunction } from 'i18next';
import { Time } from '@polkadot/util/types';
export default function timeToString(t: TFunction, { days, hours, minutes, seconds }: Time): string;
