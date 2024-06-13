import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { AndroidGradient, GradientToken, IOSGradient, WebGradient } from './gradient';
import { gradientTokens, getWebTokens, getIOSTokens, getAndroidTokens } from './default';
import { PlatformsVariations, TokenType } from '../../types';

export const createDefaultGradientTokens = (config: ThemeConfig) =>
    gradientTokens.map((token) => {
        const web = getWebTokens(config)[token.name];
        const ios = getIOSTokens(config)[token.name];
        const android = getAndroidTokens(config)[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebGradient(web),
            ios: new IOSGradient(ios),
            android: new AndroidGradient(android),
        };

        return new GradientToken(token, values);
    });

// INFO: Данный метод нужен для того, чтобы на момент формирования инстанса класса Theme
// не добавлять технические токены состояний active / hover в память объекта, 
// т.к. они никак не используются в визуальном интефрейсе
const removeHoverAndActiveTokens = (token: TokenType) =>
    !token.name.includes('-hover') && !token.name.includes('-active');

export const createGradientTokens = (tokens: Array<TokenType>, platforms: PlatformsVariations['gradient']) =>
    tokens.filter(removeHoverAndActiveTokens).map((token) => {
        const web = platforms.web[token.name];
        const ios = platforms.ios[token.name];
        const android = platforms.android[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebGradient(web),
            ios: new IOSGradient(ios),
            android: new AndroidGradient(android),
        };

        return new GradientToken(token, values);
    });

// TODO: Удалить метод после завершения разработки разделов с токенами
export const createMockGradientTokens = () => {
    const token = {
        displayName: 'gradientName',
        enabled: true,
        name: 'gradient.name',
        tags: ['gradient', 'name'],
        description: 'Description',
    };

    const values = {
        web: new WebGradient([]),
        ios: new IOSGradient([
            {
                kind: 'linear',
                angle: 90,
                colors: [],
                locations: [],
            },
        ]),
        android: new AndroidGradient([
            {
                kind: 'linear',
                angle: 90,
                colors: [],
                locations: [],
            },
        ]),
    };

    const gradient = new GradientToken(token, values);

    return [gradient];
};
