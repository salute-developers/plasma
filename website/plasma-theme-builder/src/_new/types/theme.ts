import { Platform, Variation, Variations } from './token';

import {
    ColorPlatforms,
    ColorToken,
    FontFamilyPlatforms,
    FontFamilyToken,
    GradientPlatforms,
    GradientToken,
    ShadowPlatforms,
    ShadowToken,
    ShapePlatforms,
    ShapeToken,
    TypographyPlatforms,
    TypographyToken,
} from '../tokens';

export type PlatformsVariations = Variations<
    ColorPlatforms,
    GradientPlatforms,
    ShadowPlatforms,
    ShapePlatforms,
    TypographyPlatforms,
    FontFamilyPlatforms
>;

export type TokenVariations = Variations<
    ColorToken,
    GradientToken,
    ShadowToken,
    ShapeToken,
    TypographyToken,
    FontFamilyToken
>;

export type VariationsClasses = {
    [key in keyof TokenVariations]: Array<TokenVariations[key]>;
};

export type PlatformsByVariationsMap<T extends Variation = Variation, U extends Platform = Platform> = {
    [key in U]: PlatformsVariations[T][key][string];
};
