import { TokenType } from '../../../types';

export const fontFamilyTokens: Array<TokenType> = [
    {
        type: 'fontFamily',
        name: 'display',
        tags: ['display'],
        displayName: 'fontFamilyDisplay',
        description: 'fontFamily display',
        enabled: true,
    },
    {
        type: 'fontFamily',
        name: 'header',
        tags: ['header'],
        displayName: 'fontFamilyHeader',
        description: 'fontFamily header',
        enabled: true,
    },
    {
        type: 'fontFamily',
        name: 'text',
        tags: ['text'],
        displayName: 'fontFamilyText',
        description: 'fontFamily text',
        enabled: true,
    },
    {
        type: 'fontFamily',
        name: 'body',
        tags: ['body'],
        displayName: 'fontFamilyBody',
        description: 'fontFamily body',
        enabled: true,
    },
];
