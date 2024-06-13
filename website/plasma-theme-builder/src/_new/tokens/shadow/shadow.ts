import { PlatformClasses, Token } from '../token';
import { PlatformToken } from '../platformToken';

import type { Platforms, TokenType } from '../../types';
import type { WebShadowToken, IOSShadowToken, AndroidShadowToken } from './types';

export type ShadowPlatforms = Platforms<WebShadowToken, IOSShadowToken, AndroidShadowToken>;

export class WebShadow extends PlatformToken<WebShadowToken> {
    public setValue(value: WebShadowToken[string]) {
        this.value = value;
    }
}

export class IOSShadow extends PlatformToken<IOSShadowToken> {
    public setValue(value: IOSShadowToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class AndroidShadow extends PlatformToken<AndroidShadowToken> {
    public setValue(value: AndroidShadowToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class ShadowToken extends Token<ShadowPlatforms> {
    constructor(meta: Omit<TokenType, 'type'>, values: PlatformClasses<ShadowPlatforms>) {
        const data: TokenType = {
            type: 'shadow',
            ...meta,
        };

        super(data, values);
    }
}
