import BN from 'bn.js';
import { FormField } from './useFormField';
export default function useNonZeroBn(initialValue?: BN): FormField<BN>;
