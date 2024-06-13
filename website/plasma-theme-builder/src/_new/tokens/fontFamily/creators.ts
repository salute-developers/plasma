import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { AndroidFontFamily, FontFamilyToken, IOSFontFamily, WebFontFamily } from './fontFamily';
import { fontFamilyTokens, getWebTokens, getIOSTokens, getAndroidTokens } from './default';
import { PlatformsVariations, TokenType } from '../../types';

export const createDefaultFontFamilyTokens = (config: ThemeConfig) =>
    fontFamilyTokens.map((token) => {
        const web = getWebTokens(config)[token.name];
        const ios = getIOSTokens(config)[token.name];
        const android = getAndroidTokens(config)[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebFontFamily(web),
            ios: new IOSFontFamily(ios),
            android: new AndroidFontFamily(android),
        };

        return new FontFamilyToken(token, values);
    });

export const createFontFamilyTokens = (tokens: Array<TokenType>, platforms: PlatformsVariations['fontFamily']) =>
    tokens.map((token) => {
        const web = platforms.web[token.name];
        const ios = platforms.ios[token.name];
        const android = platforms.android[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebFontFamily(web),
            ios: new IOSFontFamily(ios),
            android: new AndroidFontFamily(android),
        };

        return new FontFamilyToken(token, values);
    });

// TODO: Удалить метод после завершения разработки разделов с токенами
export const createMockFontFamilyTokens = () => {
    const token = {
        displayName: 'fontFamilyName',
        enabled: true,
        name: 'fontFamily.name',
        tags: ['fontFamily', 'name'],
        description: 'Description',
    };

    const values = {
        web: new WebFontFamily({
            name: '',
            fonts: [
                {
                    src: [],
                    fontWeight: '100',
                    fontStyle: 'normal',
                },
            ],
        }),
        ios: new IOSFontFamily({
            name: '',
            fonts: [
                {
                    link: '',
                    weight: 'bold',
                    style: 'normal',
                },
            ],
        }),
        android: new AndroidFontFamily({
            name: '',
            fonts: [
                {
                    link: '',
                    fontWeight: 100,
                    fontStyle: 'normal',
                },
            ],
        }),
    };

    const fontFamily = new FontFamilyToken(token, values);

    return [fontFamily];
};
