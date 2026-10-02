import { Platform, PlatformsVariations, TokenVariations, Variation } from '../types';
import { Theme } from '../themes';
import { Token } from '../tokens/token';

export type ExtraThemeTokensGetters = {
    [variationKey in Variation]?: {
        [platformKey in keyof PlatformsVariations[variationKey]]: (
            token: TokenVariations[variationKey],
        ) => PlatformsVariations[variationKey][platformKey] | undefined;
    };
};

// INFO: Функция, которая создаёт объект с набором всех типов токенов для всех поддерживаемых платформ.
// Так же метод позволяет применять кастомные обработчики, которые могут добавлять дополнительные токены.
// Например, с помощью метода `getHoverAndActiveColorThemeTokens` добавляются токены для `active` и `hover` состояний.
export const createVariationTokens = (theme: Theme, extraThemeTokenGetters?: ExtraThemeTokensGetters) => {
    const tokens = theme.getTokens();

    let variations = {} as PlatformsVariations;

    const tokenEntries = Object.entries(tokens) as Array<[keyof TokenVariations, Array<Token>]>;
    tokenEntries.forEach(([variation, values]) => {
        values.forEach((token) => {
            (Object.keys(token.getPlatforms()) as Platform[]).forEach((platform) => {
                const extraTokens = (extraThemeTokenGetters?.[variation]?.[platform] as (
                    token: TokenVariations[typeof variation],
                ) => PlatformsVariations[typeof variation][typeof platform] | undefined)?.(
                    token as TokenVariations[typeof variation],
                );

                const tokenName = token.getName();
                const tokenValue = token.getValue(platform);

                // TODO: Подумать, как можно упростить этот код
                variations = {
                    ...variations,
                    [variation]: {
                        ...variations?.[variation],
                        [platform]: {
                            ...variations?.[variation]?.[platform],
                            [tokenName]: tokenValue,
                            ...extraTokens,
                        },
                    },
                };
            });
        });
    });

    return variations;
};
