import { MetaTupleVariations, MetaVariations, ThemeMeta, TokenType, Variation } from '../types';
import { Theme } from '../themes';

export type ExtraMetaTokensGetters = Partial<Record<Variation, (data: TokenType) => Array<TokenType>>>;

const getMetaTokens = (theme: Theme, extraMetaTokenGetters?: ExtraMetaTokensGetters) => {
    const tokens: Array<TokenType> = [];

    Object.values(theme.getTokens()).forEach((variation) => {
        variation.forEach((token) => {
            const data = token.getTokenData();

            tokens.push(data);

            const extraTokensGetter = extraMetaTokenGetters?.[data.type];
            if (extraTokensGetter) {
                const newTokensData = extraTokensGetter(data);
                tokens.push(...newTokensData);
            }
        });
    });

    return tokens;
};

const getMetaTokenKinds = <K extends Variation>(
    type: K,
    fields: MetaTupleVariations[K],
    theme: Theme,
): MetaVariations[K] => {
    const tokens = theme.getTokens('color');

    if (!tokens?.length) {
        return {} as MetaVariations[K];
    }

    const sets = fields.map(() => new Set<string>());

    tokens.forEach((token) => {
        fields.forEach((_, index) => {
            const tag = token.getTags()[index];
            sets[index].add(tag);
        });
    });

    return fields.reduce(
        (acc, field, index) => ({
            ...acc,
            [field]: Array.from(sets[index]),
        }),
        {} as MetaVariations[K],
    );
};

// INFO: Функция, которая создаёт объект с мета информацией на основе экземпляра темы.
// Так же метод позволяет применять кастомные обработчики, которые могут добавлять дополнительные токены.
// Например, с помощью метода `getHoverAndActiveMetaTokens` добавляются токены для `active` и `hover` состояний.
export const createMetaTokens = (theme: Theme, extraMetaTokenGetters?: ExtraMetaTokensGetters): ThemeMeta => {
    const name = theme.getName();
    const version = theme.getVersion();

    const tokens = getMetaTokens(theme, extraMetaTokenGetters);

    const color = getMetaTokenKinds('color', ['mode', 'category', 'subcategory'], theme);
    const gradient = getMetaTokenKinds('gradient', ['mode', 'category', 'subcategory'], theme);
    const shadow = getMetaTokenKinds('shadow', ['direction', 'kind', 'size'], theme);
    const shape = getMetaTokenKinds('shape', ['kind', 'size'], theme);
    const typography = getMetaTokenKinds('typography', ['screen', 'kind', 'size', 'weight'], theme);
    const fontFamily = getMetaTokenKinds('fontFamily', ['kind'], theme);

    return {
        name,
        version,
        tokens,
        color,
        gradient,
        shadow,
        shape,
        typography,
        fontFamily,
    };
};
