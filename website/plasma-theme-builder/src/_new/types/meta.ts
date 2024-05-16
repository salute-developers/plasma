import { TokenType, Variations } from './token';

const colorTuple = ['mode', 'category', 'subcategory'] as const;
export type ColorMetaTuple = typeof colorTuple;
export type ColorMeta = Record<ColorMetaTuple[number], Array<string>>;

const gradientTuple = ['mode', 'category', 'subcategory'] as const;
export type GradientMetaTuple = typeof gradientTuple;
export type GradientMeta = Record<GradientMetaTuple[number], Array<string>>;

const shadowTuple = ['direction', 'kind', 'size'] as const;
export type ShadowMetaTuple = typeof shadowTuple;
export type ShadowMeta = Record<ShadowMetaTuple[number], Array<string>>;

const shapeTuple = ['kind', 'size'] as const;
export type ShapeMetaTuple = typeof shapeTuple;
export type ShapeMeta = Record<ShapeMetaTuple[number], Array<string>>;

const typographyTuple = ['screen', 'kind', 'size', 'weight'] as const;
export type TypographyMetaTuple = typeof typographyTuple;
export type TypographyMeta = Record<TypographyMetaTuple[number], Array<string>>;

const fontFamilyTuple = ['kind'] as const;
export type FontFamilyMetaTuple = typeof fontFamilyTuple;
export type FontFamilyMeta = Record<TypographyMetaTuple[number], Array<string>>;

export type MetaTupleVariations = Variations<
    ColorMetaTuple,
    GradientMetaTuple,
    ShadowMetaTuple,
    ShapeMetaTuple,
    TypographyMetaTuple,
    FontFamilyMetaTuple
>;

export type MetaVariations = Variations<ColorMeta, GradientMeta, ShadowMeta, ShapeMeta, TypographyMeta, FontFamilyMeta>;

export interface ThemeMeta extends MetaVariations {
    name: string;
    version: string;
    tokens: Array<TokenType>;
}
