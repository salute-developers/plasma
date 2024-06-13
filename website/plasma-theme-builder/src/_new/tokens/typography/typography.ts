import { PlatformClasses, Token } from '../token';
import { PlatformToken } from '../platformToken';

import type { Platforms, TokenType } from '../../types';
import type { WebTypographyToken, IOSTypographyToken, AndroidTypographyToken } from './types';

export type TypographyPlatforms = Platforms<WebTypographyToken, IOSTypographyToken, AndroidTypographyToken>;

export class WebTypography extends PlatformToken<WebTypographyToken> {
    public setValue(value: WebTypographyToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class IOSTypography extends PlatformToken<IOSTypographyToken> {
    public setValue(value: IOSTypographyToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class AndroidTypography extends PlatformToken<AndroidTypographyToken> {
    public setValue(value: AndroidTypographyToken[string]) {
        this.value = { ...this.value, ...value };
    }
}

export class TypographyToken extends Token<TypographyPlatforms> {
    constructor(meta: Omit<TokenType, 'type'>, values: PlatformClasses<TypographyPlatforms>) {
        const data: TokenType = {
            type: 'typography',
            ...meta,
        };

        super(data, values);
    }
}
