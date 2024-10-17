import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { AndroidTypography, TypographyToken, IOSTypography, WebTypography } from './typography';
import { typographyTokens, getWebTokens, getIOSTokens, getAndroidTokens } from './default';
import { PlatformsVariations, TokenType } from '../../types';

export const createDefaultTypographyTokens = (config: ThemeConfig): TypographyToken[] => {
    const webTokens = getWebTokens(config);
    const iosTokens = getIOSTokens(config);
    const androidTokens = getAndroidTokens(config);

    return typographyTokens.map((token) => {
        const web = webTokens[token.name];
        const ios = iosTokens[token.name];
        const android = androidTokens[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebTypography(web),
            ios: new IOSTypography(ios),
            android: new AndroidTypography(android),
        };

        return new TypographyToken(token, values);
    });
};

export const createTypographyTokens = (tokens: Array<TokenType>, platforms: PlatformsVariations['typography']) =>
    tokens.map((token) => {
        const web = platforms.web[token.name];
        const ios = platforms.ios[token.name];
        const android = platforms.android[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebTypography(web),
            ios: new IOSTypography(ios),
            android: new AndroidTypography(android),
        };

        return new TypographyToken(token, values);
    });

export const createMockTypographyTokens = () => {
    const token = {
        displayName: 'typographyName',
        enabled: true,
        name: 'typography.name',
        tags: ['typography', 'name'],
        description: 'Description',
    };

    const values = {
        web: new WebTypography({
            fontFamilyRef: '',
            fontWeight: '100',
            fontStyle: 'normal',
            fontSize: '0',
            lineHeight: '0',
            letterSpacing: '0',
        }),
        ios: new IOSTypography({
            fontFamilyRef: '',
            weight: 'black',
            style: 'normal',
            size: 0,
            lineHeight: 0,
            kerning: 0,
        }),
        android: new AndroidTypography({
            fontFamilyRef: '',
            fontWeight: 100,
            fontStyle: 'normal',
            textSize: 0,
            lineHeight: 0,
            letterSpacing: 0,
        }),
    };

    const typography = new TypographyToken(token, values);

    return [typography];
};
