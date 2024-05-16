import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { AndroidColor, ColorToken, IOSColor, WebColor } from './color';
import { colorTokens, getWebTokens, getIOSTokens, getAndroidTokens } from './default';
import { PlatformsVariations, TokenType } from '../../types';

export const createDefaultColorTokens = (config: ThemeConfig) =>
    colorTokens.map((token) => {
        const web = getWebTokens(config)[token.name];
        const ios = getIOSTokens(config)[token.name];
        const android = getAndroidTokens(config)[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebColor(web),
            ios: new IOSColor(ios),
            android: new AndroidColor(android),
        };

        return new ColorToken(token, values);
    });


// INFO: Данный метод нужен для того, чтобы на момент формирования инстанса класса Theme
// не добавлять технические токены состояний active / hover в память объекта, 
// т.к. они никак не используются в визуальном интефрейсе
const removeHoverAndActiveTokens = (token: TokenType) =>
    !token.name.includes('-hover') && !token.name.includes('-active');

export const createColorTokens = (tokens: Array<TokenType>, platforms: PlatformsVariations['color']) =>
    tokens.filter(removeHoverAndActiveTokens).map((token) => {
        const web = platforms.web[token.name];
        const ios = platforms.ios[token.name];
        const android = platforms.android[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebColor(web),
            ios: new IOSColor(ios),
            android: new AndroidColor(android),
        };

        return new ColorToken(token, values);
    });

// TODO: Удалить метод после завершения разработки разделов с токенами
export const createMockColorTokens = () => {
    const token = {
        displayName: 'colorName',
        enabled: true,
        name: 'color.name',
        tags: ['color', 'name'],
        description: 'Description',
    };

    const values = {
        web: new WebColor(''),
        ios: new IOSColor(''),
        android: new AndroidColor(''),
    };

    const color = new ColorToken(token, values);

    return [color];
};
