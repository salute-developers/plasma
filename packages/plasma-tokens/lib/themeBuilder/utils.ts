import { general as generalColors, PlasmaSaturation } from '@salutejs/plasma-colors';
import { alphenColor, humanizeColor } from '@salutejs/plasma-tokens-utils';

import { generalColorsAdditionalSaturation } from './constants';
import { Grayscale } from './types';

interface GetGreyTokenDataParams {
    saturation: PlasmaSaturation | 50;
    grayscale: Grayscale;
    opacity?: number | null;
}

export const getGreyTokenData = ({ saturation, grayscale, opacity }: GetGreyTokenDataParams) => {
    const color =
        saturation !== 50
            ? generalColors[grayscale][saturation]
            : generalColorsAdditionalSaturation[grayscale][saturation];
    return opacity ? alphenColor(color, opacity - 1) : humanizeColor(color);
};

export const lowerFirstLetter = (value: string) => `${value[0].toLocaleLowerCase()}${value.slice(1)}`;

export const upperFirstLetter = (value: string) => `${value[0].toLocaleUpperCase()}${value.slice(1)}`;
