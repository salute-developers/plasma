import { PlatformClasses, Token } from '../token';
import { PlatformToken } from '../platformToken';

import type { Platforms, TokenType } from '../../types';
import type { WebGradientToken, IOSGradientToken, AndroidGradientToken } from './types';

export type GradientPlatforms = Platforms<WebGradientToken, IOSGradientToken, AndroidGradientToken>;

export class WebGradient extends PlatformToken<WebGradientToken> {
    public setValue(value: WebGradientToken[string]) {
        this.value = value;
    }
}

export class IOSGradient extends PlatformToken<IOSGradientToken> {
    public setValue(value: IOSGradientToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class AndroidGradient extends PlatformToken<AndroidGradientToken> {
    public setValue(value: AndroidGradientToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class GradientToken extends Token<GradientPlatforms> {
    constructor(meta: Omit<TokenType, 'type'>, values: PlatformClasses<GradientPlatforms>) {
        const data: TokenType = {
            type: 'gradient',
            ...meta,
        };

        super(data, values);
    }
}
