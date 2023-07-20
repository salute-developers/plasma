import type { TransformedToken } from 'style-dictionary';
import { getHEXAColor } from '@salutejs/plasma-tokens-utils';

const getNormalizeValue = (color: string) => {
    const hex = color.slice(1, 7);
    const alfa = color.length === 9 ? `${color.slice(7)}` : 'FF';
    return `#${alfa}${hex}`;
};

const getAndroidColor = (color: string) => {
    const hexColor = getHEXAColor(color);
    return getNormalizeValue(hexColor);
};

const getGradientStops = (colors: Array<string>) => colors.map(getAndroidColor);

const getGradient = (value: any) => {
    const { type, colors: colorsBase, locations } = value;
    const colors = getGradientStops(colorsBase);

    const base = {
        type,
        colors,
        locations,
    };

    if (type === '.linear') {
        const { startPoint, endPoint } = value;

        return {
            ...base,
            startPoint,
            endPoint,
        };
    }

    if (type === '.radial') {
        const { center, radius } = value;

        return {
            ...base,
            center,
            radius,
        };
    }
};

const getGradientLayer = (item: any) => {
    const { xml, backgroundColor } = item;

    if (xml) {
        return getGradient(xml);
    }

    if (backgroundColor) {
        return {
            backgroundColor: getAndroidColor(backgroundColor),
        };
    }

    return undefined;
};

export const gradientXMLTransformer = (prop: TransformedToken) => {
    const { value } = prop.original;

    if (Array.isArray(value)) {
        return {
            gradient: value.map(getGradientLayer),
        };
    }

    const { xml } = value;

    if (xml && xml.colors.length > 1) {
        return { gradient: getGradient(xml) };
    }

    return prop.value;
};
