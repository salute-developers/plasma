import type { TransformedToken } from 'style-dictionary';
import type { Gradient as GradientBase, Point } from '../types';

interface Gradient extends GradientBase {
    useAngle?: boolean;
    angleCenter?: Point;
}

const getGradient = (
    { colors, locations, useAngle, angle, start, end, angleCenter }: Gradient,
    [openingBracket, closingBracket]: [string, string],
) => {
    const getPoint = (key: string, point?: Point) => `${key}: ${openingBracket}
            x: ${point?.x},
            y: ${point?.y},
        ${closingBracket}`;

    return [
        colors ? `colors: [${colors.map((item: string) => `'${item}'`).join(', ')}]` : undefined,
        start ? getPoint('start', start) : undefined,
        end ? getPoint('end', end) : undefined,
        locations ? `locations: [${locations?.join(', ')}]` : undefined,
        useAngle ? `useAngle: ${useAngle}` : undefined,
        angleCenter ? getPoint('angleCenter', angleCenter) : undefined,
        angle ? `angle: ${angle}` : undefined,
    ].filter((item) => item);
};

export const gradientReactNativeTransformer = (prop: TransformedToken) => {
    const { linearGradient } = prop.original.value;

    if (!linearGradient || linearGradient.colors.length < 2) {
        return prop.value;
    }

    const [openingBracket, closingBracket] = ['@@@', '!!!'];

    const gradient = getGradient(linearGradient, [openingBracket, closingBracket]).join(',\n        ');

    return `${openingBracket}
        ${gradient}
    ${closingBracket}`;
};
