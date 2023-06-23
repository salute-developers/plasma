import React from 'react';
import { general as generalColors } from '@salutejs/plasma-colors';
import { alphenColor, getHEXAColor, humanizeColor } from '@salutejs/plasma-tokens-utils';
import type { PlasmaSaturation } from '@salutejs/plasma-colors';

import { PreviewColor } from '../components/PreviewColor/PreviewColor';

import { generalColorsAdditionalSaturation } from '../types';
import type { ComplexValue, GeneralColor, GetGreyTokenDataParams } from '../types';

export { getHEXAColor };

export const normalizeValue = (value: ComplexValue) => {
    const regex = new RegExp(/((rgba?|hsla?)\([\d.%\s,()#\w]*\))|(#\w{6,8})/gm);
    const defaultColor = '#FFFFFFFF';

    if (typeof value === 'string' && !value.includes('gradient')) {
        if (!regex.test(value)) {
            return defaultColor;
        }

        return value;
    }

    return defaultColor;
};

export const getColorValue = (value: ComplexValue) => {
    if (Array.isArray(value)) {
        return value.map((val) => val.origin).join(', ');
    }

    if (typeof value === 'object') {
        return value.origin;
    }

    return value;
};

const hexAToRGBA = (hex: string) => [
    Number(`0x${hex[1]}${hex[2]}`),
    Number(`0x${hex[3]}${hex[4]}`),
    Number(`0x${hex[5]}${hex[6]}`),
    hex[7] && hex[8] ? Number(`0x${hex[7]}${hex[8]}`) : 255,
];

export const getRGBAColor = (color: string) => {
    const hex = getHEXAColor(color);
    const [r, g, b, a] = hexAToRGBA(hex);
    return `rgba(${r}, ${g}, ${b}, ${Number(a / 255).toFixed(2)})`;
};

export const getSwiftUIColor = (color: string | undefined) => {
    if (!color) {
        return '';
    }

    const hexColor = getHEXAColor(color);
    const colors = hexAToRGBA(hexColor);
    const [red, green, blue, alpha] = colors.map((value) => Number((value / 255).toFixed(3)));

    return `UIColor(red: ${red}, green: ${green}, blue: ${blue}, alpha: ${alpha})`;
};

export const getAndroidColor = (color: string) => {
    const hexColor = getHEXAColor(color);
    const hex = hexColor.slice(1, 7);
    const alfa = hexColor.length === 9 ? `${hexColor.slice(7)}` : 'FF';

    return `#${alfa}${hex}`;
};

export const getSaturations = (accentColors: GeneralColor = 'red') =>
    Object.keys(generalColors.amber).map((name: any) => ({
        value: name,
        label: name,
        contentLeft: (
            <PreviewColor
                background={generalColors[accentColors][name as PlasmaSaturation]}
                borderRadius="0.5rem"
                size="2rem"
            />
        ),
    }));

export const getAccentColors = () =>
    Object.entries(generalColors).map(([name, item]) => ({
        value: name as GeneralColor,
        label: name,
        contentLeft: <PreviewColor background={item['500']} borderRadius="0.5rem" size="2rem" />,
    }));

export const getGreyTokenData = ({ saturation, grayscale, opacity }: GetGreyTokenDataParams) => {
    const color =
        saturation !== 50
            ? generalColors[grayscale][saturation]
            : generalColorsAdditionalSaturation[grayscale][saturation];
    return opacity ? alphenColor(color, opacity - 1) : humanizeColor(color);
};
