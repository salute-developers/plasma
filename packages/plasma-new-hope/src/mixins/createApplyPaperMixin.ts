// TODO: Обновить prettier до версии 2.2.0+
/* eslint-disable prettier/prettier */
import type { CSSProperties } from 'react';

type ShadowTokensKeys = 'shadow';

type BorderRadiusTokensKeys = 'borderRadius';

type SpacingTokensKeys = 'spacing';

type ExcludedTokenKeys =
    | `${ShadowTokensKeys}${string}`
    | `${BorderRadiusTokensKeys}${string}`
    | `${SpacingTokensKeys}${string}`;

type FilterKeys<T, Pattern extends string> = T extends Pattern ? T : never;

type AbstractTokens = Record<string, any>;

type OnlyColorTokens<T extends AbstractTokens> = {
    [K in keyof T]: T[K] extends object ? never : K extends ExcludedTokenKeys ? never : K;
}[keyof T];

export const createApplyPaperMixin = <T extends AbstractTokens>(tokens: T) => {
    type ColorTokens = OnlyColorTokens<typeof tokens>;

    type AllTokenKeys = keyof typeof tokens;

    type ShadowTokens = FilterKeys<AllTokenKeys, `${ShadowTokensKeys}${string}`>;

    type BorderRadiusTokens = FilterKeys<AllTokenKeys, `${BorderRadiusTokensKeys}${string}`>;

    type PaperProps = {
        backgroundColor?: ColorTokens;
        shadow?: ShadowTokens;
        borderRadius?: BorderRadiusTokens;
        styles?: CSSProperties;
    };

    return ({ backgroundColor, shadow, borderRadius, styles }: PaperProps): CSSProperties => ({
        backgroundColor: backgroundColor ? tokens[backgroundColor] : undefined,
        boxShadow: shadow ? tokens[shadow] : undefined,
        borderRadius: borderRadius ? tokens[borderRadius] : undefined,
        ...styles,
    });
};
