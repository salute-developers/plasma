import { PlatformClasses, Token } from '../token';
import { PlatformToken } from '../platformToken';

import type { Platforms, TokenType } from '../../types';
import type { WebShapeToken, IOSShapeToken, AndroidShapeToken } from './types';

export type ShapePlatforms = Platforms<WebShapeToken, IOSShapeToken, AndroidShapeToken>;

export class WebShape extends PlatformToken<WebShapeToken> {
    public setValue(value: WebShapeToken[string]) {
        this.value = value;
    }
}

export class IOSShape extends PlatformToken<IOSShapeToken> {
    public setValue(value: IOSShapeToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class AndroidShape extends PlatformToken<AndroidShapeToken> {
    public setValue(value: AndroidShapeToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class ShapeToken extends Token<ShapePlatforms> {
    constructor(meta: Omit<TokenType, 'type'>, values: PlatformClasses<ShapePlatforms>) {
        const data: TokenType = {
            type: 'shape',
            ...meta,
        };

        super(data, values);
    }
}
