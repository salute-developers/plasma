import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { WebShadowToken } from '../types';

export const getWebTokens = (config: ThemeConfig): WebShadowToken => ({
    'down.soft.s': ['0px 4px 14px -4px rgba(8, 8, 8, 0.08)', '0px 1px 4px -1px rgba(0, 0, 0, 0.04)'],
    'down.soft.m': ['0px 24px 48px -8px rgba(0, 0, 0, 0.08)'],
    'down.soft.l': ['0px 60px 112px -8px rgba(0, 0, 0, 0.08)'],
    'down.hard.s': ['0px 4px 12px -3px rgba(8, 8, 8, 0.16)', '0px 1px 4px -2px rgba(0, 0, 0, 0.08)'],
    'down.hard.m': ['0px 16px 32px -8px rgba(0, 0, 0, 0.24)'],
    'down.hard.l': ['0px 60px 112px -8px rgba(0, 0, 0, 0.40)'],
    'up.soft.s': ['0px -4px 14px -4px rgba(8, 8, 8, 0.08)', '0px -1px 4px -1px rgba(0, 0, 0, 0.03)'],
    'up.soft.m': ['0px -24px 48px -8px rgba(0, 0, 0, 0.08)'],
    'up.soft.l': ['0px -60px 112px -8px rgba(0, 0, 0, 0.08)'],
    'up.hard.s': ['0px -4px 12px -3px rgba(8, 8, 8, 0.20)', '0px -1px 4px -1px rgba(0, 0, 0, 0.03)'],
    'up.hard.m': ['0px -16px 32px -8px rgba(0, 0, 0, 0.24)'],
    'up.hard.l': ['0px -60px 112px -8px rgba(0, 0, 0, 0.40)'],
});
