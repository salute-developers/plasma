import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { IOSShapeToken } from '../types';

export const getIOSTokens = (config: ThemeConfig): IOSShapeToken => ({
    'round.xxs': {
        kind: 'round',
        cornerRadius: 4,
    },
    'round.xs': {
        kind: 'round',
        cornerRadius: 6,
    },
    'round.s': {
        kind: 'round',
        cornerRadius: 8,
    },
    'round.m': {
        kind: 'round',
        cornerRadius: 12,
    },
    'round.l': {
        kind: 'round',
        cornerRadius: 16,
    },
    'round.xl': {
        kind: 'round',
        cornerRadius: 20,
    },
    'round.xxl': {
        kind: 'round',
        cornerRadius: 40,
    },
});
