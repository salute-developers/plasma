import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { WebShapeToken } from '../types';

export const getWebTokens = (config: ThemeConfig): WebShapeToken => ({
    'round.xxs': '4px',
    'round.xs': '6px',
    'round.s': '8px',
    'round.m': '12px',
    'round.l': '16px',
    'round.xl': '20px',
    'round.xxl': '40px',
});
