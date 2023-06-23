import {
    TextIconsTokenName,
    ControlsSurfacesName,
    BackgroundName,
    OverlayName,
    TokenGenericType,
    TokenBackgroundType,
    ThemeConfig,
    TokenMode,
    TokenData as TokenDataBase,
} from '@salutejs/plasma-tokens-utils';

import { MultiplatformValue } from './';

export type TokenData<T = {}> = TokenDataBase<T> & {
    enabled?: boolean;
};

export type TokenGeneralColorByType<T extends string = string> = Record<
    TokenMode | TokenGenericType | TokenBackgroundType | string,
    Record<T, TokenData<string | Record<string, string> | MultiplatformValue | Array<MultiplatformValue>>>
>;

export type TokensName = TextIconsTokenName | ControlsSurfacesName | BackgroundName | OverlayName | string;

export interface Theme {
    config: ThemeConfig;
    dark: {
        [k: string]: TokenGeneralColorByType<TokensName>;
    };
    light: {
        [k: string]: TokenGeneralColorByType<TokensName>;
    };
}
