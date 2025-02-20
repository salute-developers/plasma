import { DataName, TokensGetterFn } from '@salutejs/plasma-tokens-utils';

import { getDataYellowTokens } from './getDataYellowTokens';
import { getDataYellowMinorTokens } from './getDataYellowMinorTokens';
import { getDataYellowTransparentTokens } from './getDataYellowTransparentTokens';

export const dataTokenGetters: Record<DataName, TokensGetterFn> = {
    dataYellow: getDataYellowTokens,
    dataYellowMinor: getDataYellowMinorTokens,
    dataYellowTransparent: getDataYellowTransparentTokens,
};
