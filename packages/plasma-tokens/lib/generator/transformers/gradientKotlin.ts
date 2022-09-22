import type { TransformedToken } from 'style-dictionary';
import type { Gradient } from '../types';

const getColor = (color: string) => {
    const hex = color.slice(1, 7);
    const alfa = color.length === 9 ? `${color.slice(6)}` : `FF`;

    return `Color(0x${alfa}${hex})`;
};

const getColors = (colors: Array<string>) => {
    const colorList = colors.map(getColor);

    return `listOf(${colorList.join(', ')}`;
};

const getFloat = (value: string | number) => `${Number(value).toFixed(1)}f`;

const getStops = (stops: Array<string>) => {
    const stopList = stops.map(getFloat);

    return `listOf(${stopList.join(', ')}`;
};

const getGradient = ({ colors, locations, angle, start, end }: Gradient) =>
    [
        colors ? `colors = ${getColors(colors)})` : undefined,
        locations ? `stops = ${getStops(locations)})` : undefined,
        angle ? `angle = ${getFloat(angle)}` : undefined,
        start ? `start = Offset(${getFloat(start.x)}, ${getFloat(start.y)})` : undefined,
        end ? `start = Offset(${getFloat(end.x)}, ${getFloat(end.y)})` : undefined,
    ].filter((item) => item);

export const gradientKotlinTransformer = (prop: TransformedToken) => {
    const { linearGradient } = prop.original.value;

    if (!linearGradient || linearGradient.colors.length < 2) {
        return prop.value;
    }

    const gradient = getGradient(linearGradient).join(',\n        ');

    return `AngledLinearGradient(
        ${gradient}
    )`;
};
