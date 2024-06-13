import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { AndroidShadow, ShadowToken, IOSShadow, WebShadow } from './shadow';
import { shadowTokens, getWebTokens, getIOSTokens, getAndroidTokens } from './default';
import { PlatformsVariations, TokenType } from '../../types';

export const createDefaultShadowTokens = (config: ThemeConfig) =>
    shadowTokens.map((token) => {
        const web = getWebTokens(config)[token.name];
        const ios = getIOSTokens(config)[token.name];
        const android = getAndroidTokens(config)[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebShadow(web),
            ios: new IOSShadow(ios),
            android: new AndroidShadow(android),
        };

        return new ShadowToken(token, values);
    });

export const createShadowTokens = (tokens: Array<TokenType>, platforms: PlatformsVariations['shadow']) =>
    tokens.map((token) => {
        const web = platforms.web[token.name];
        const ios = platforms.ios[token.name];
        const android = platforms.android[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebShadow(web),
            ios: new IOSShadow(ios),
            android: new AndroidShadow(android),
        };

        return new ShadowToken(token, values);
    });

// TODO: Удалить метод после завершения разработки разделов с токенами
export const createMockShadowTokens = () => {
    const token = {
        displayName: 'shadowName',
        enabled: true,
        name: 'shadow.name',
        tags: ['shadow', 'name'],
        description: 'Description',
    };

    const values = {
        web: new WebShadow([]),
        ios: new IOSShadow({
            color: '#FFF',
            offset: { width: 0, height: 0 },
            opacity: 0,
            radius: 9,
        }),
        android: new AndroidShadow({
            color: '#FFF',
            elevation: 0,
        }),
    };

    const shadow = new ShadowToken(token, values);

    return [shadow];
};
