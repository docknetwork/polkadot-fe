import { StringOrNull } from '@polkadot/react-components/types';
export default function useAccountId(initialValue?: StringOrNull, onChangeAccountId?: (_: StringOrNull) => void): [StringOrNull, (_: StringOrNull) => void];
