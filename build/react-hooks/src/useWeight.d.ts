import { Call } from '@polkadot/types/interfaces';
import BN from 'bn.js';
export default function useWeight(call?: Call | null): [BN, number];
