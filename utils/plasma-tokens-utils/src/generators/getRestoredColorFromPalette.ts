import { additional, general } from '@salutejs/plasma-colors';

import { alphenColor, extractColors } from '../functions';

const paletteMap: Record<string, Record<string, Record<string, string>>> = {
    general,
    additional,
};

export const getRestoredColorFromPalette = (value: string) => {
    if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
        const [, color, opacity] = extractColors(value);
        const [palette, shade, saturation] = color.split('.');
        const resultColor = paletteMap[palette]?.[shade]?.[saturation];

        const format = 'hexa';
        const isRaw = true;

        return opacity ? alphenColor(resultColor, Number(opacity), format, isRaw) : resultColor;
    }

    return value;
};
