import { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { AndroidShape, ShapeToken, IOSShape, WebShape } from './shape';
import { shapeTokens, getWebTokens, getIOSTokens, getAndroidTokens } from './default';
import { PlatformsVariations, TokenType } from '../../types';

export const createDefaultShapeTokens = (config: ThemeConfig) =>
    shapeTokens.map((token) => {
        const web = getWebTokens(config)[token.name];
        const ios = getIOSTokens(config)[token.name];
        const android = getAndroidTokens(config)[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebShape(web),
            ios: new IOSShape(ios),
            android: new AndroidShape(android),
        };

        return new ShapeToken(token, values);
    });

export const createShapeTokens = (tokens: Array<TokenType>, platforms: PlatformsVariations['shape']) =>
    tokens.map((token) => {
        const web = platforms.web[token.name];
        const ios = platforms.ios[token.name];
        const android = platforms.android[token.name];

        if (!web || !ios || !android) {
            throw new Error(`Токен '${token.name}' не найден`);
        }

        const values = {
            web: new WebShape(web),
            ios: new IOSShape(ios),
            android: new AndroidShape(android),
        };

        return new ShapeToken(token, values);
    });

// TODO: Удалить метод после завершения разработки разделов с токенами
export const createMockShapeTokens = () => {
    const token = {
        displayName: 'shapeName',
        enabled: true,
        name: 'shape.name',
        tags: ['shape', 'name'],
        description: 'Description',
    };

    const values = {
        web: new WebShape(''),
        ios: new IOSShape({
            cornerRadius: 0,
            kind: 'round',
        }),
        android: new AndroidShape({
            cornerRadius: 0,
            kind: 'round',
        }),
    };

    const shape = new ShapeToken(token, values);

    return [shape];
};
