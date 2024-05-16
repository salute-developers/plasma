import { PlatformClasses, Token } from '../token';
import { PlatformToken } from '../platformToken';

import type { Platforms, TokenType } from '../../types';
import type { WebFontFamilyToken, IOSFontFamilyToken, AndroidFontFamilyToken } from './types';

export type FontFamilyPlatforms = Platforms<WebFontFamilyToken, IOSFontFamilyToken, AndroidFontFamilyToken>;

export class WebFontFamily extends PlatformToken<WebFontFamilyToken> {
    public setValue(value: WebFontFamilyToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class IOSFontFamily extends PlatformToken<IOSFontFamilyToken> {
    public setValue(value: IOSFontFamilyToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class AndroidFontFamily extends PlatformToken<AndroidFontFamilyToken> {
    public setValue(value: AndroidFontFamilyToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class FontFamilyToken extends Token<FontFamilyPlatforms> {
    constructor(meta: Omit<TokenType, 'type'>, values: PlatformClasses<FontFamilyPlatforms>) {
        const data: TokenType = {
            type: 'fontFamily',
            ...meta,
        };

        super(data, values);
    }
}
