import { PlatformClasses, Token } from '../token';
import { PlatformToken } from '../platformToken';

import type { Platforms, TokenType } from '../../types';
import type { WebColorToken, IOSColorToken, AndroidColorToken } from './types';

export type ColorPlatforms = Platforms<WebColorToken, IOSColorToken, AndroidColorToken>;

export class WebColor extends PlatformToken<WebColorToken> {
    public setValue(value: WebColorToken[string]) {
        this.value = value;
    }
}

export class IOSColor extends PlatformToken<IOSColorToken> {
    public setValue(value: IOSColorToken[string]) {
        this.value = value;
    }
}

export class AndroidColor extends PlatformToken<AndroidColorToken> {
    public setValue(value: AndroidColorToken[string]) {
        this.value = value;
    }
}

export class ColorToken extends Token<ColorPlatforms> {
    constructor(meta: Omit<TokenType, 'type'>, values: PlatformClasses<ColorPlatforms>) {
        const data: TokenType = {
            type: 'color',
            ...meta,
        };

        super(data, values);
    }
}
