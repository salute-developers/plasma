import { general } from '@salutejs/plasma-colors';
import _ from 'lodash';
import { ContrastRatioChecker } from 'contrast-ratio-checker';

import { hexToHSL } from './hexToHSL';

const checker = new ContrastRatioChecker();

export const paletteColors: {
    [key: string]: {
        [key: string]: string;
    };
} = _.omit(general, ['gray', 'coolGray']);

export const formattedPaletteColors = Object.keys(paletteColors)
    .map((key) => ({
        name: key,
        colors: Object.keys(_.omit(paletteColors[key], '50')).map((colorKey) => {
            return {
                ratio: Math.round(checker.getContrastRatioByHex(paletteColors[key][colorKey], '#FFFFFF') * 100) / 100,
                color: paletteColors[key][colorKey],
                code: colorKey,
            };
        }),
        h: hexToHSL(paletteColors[key][600])[0], // H из цветов HSL
    }))
    .sort((a, b) => {
        return a.h - b.h;
    });

export const colorsForGradient = formattedPaletteColors.map(
    (paletteColor) => paletteColor.colors.find((color) => color.code === '500')?.color ?? '',
);

export const colorsHSL = formattedPaletteColors.map((color) => color.h);

export const checkColor = (color: string, colorCode: string) => {
    const keys = Object.keys(paletteColors);
    if (!keys.includes(color ?? '')) {
        return false;
    }

    const colorKeys = Object.keys(paletteColors[color]);
    if (!colorKeys.includes(colorCode ?? '')) {
        return false;
    }

    return true;
};
