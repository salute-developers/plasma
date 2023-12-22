import { TokenData } from '../types';

import { camelize } from './camelize';
import { lowerFirstLetter } from './lowerFirstLetter';

export const getFormattedTokensForFallbackTheme = (array: Record<string, string>) =>
    Object.entries(array).reduce(
        (acc, [token, value]) => ({
            ...acc,
            [lowerFirstLetter(camelize(token) || '')]: {
                value,
            },
        }),
        {} as Record<string, TokenData<string>>,
    );
