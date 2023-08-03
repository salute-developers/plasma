import type { TransformedToken } from 'style-dictionary';
import { getHEXAColor } from '@salutejs/plasma-tokens-utils';

import { Point } from '../../types';

const hexAToRGBA = (hex: string) => ({
    r: Number(`0x${hex[1]}${hex[2]}`),
    g: Number(`0x${hex[3]}${hex[4]}`),
    b: Number(`0x${hex[5]}${hex[6]}`),
    a: hex[7] && hex[8] ? Number(`0x${hex[7]}${hex[8]}`) : 255,
});

const getNormalizeValue = (value: number) => Number((value / 255).toFixed(3));

const getUIColor = (color: string) => {
    const hexColor = getHEXAColor(color);
    const colors = hexAToRGBA(hexColor);
    const [red, green, blue, alpha] = Object.values(colors).map(getNormalizeValue);

    return `UIColor(red: ${red}, green: ${green}, blue: ${blue}, alpha: ${alpha})`;
};

const getGradientStops = (colors: Array<string>) => colors.map(getUIColor);

const getVectorPoints = (startPoint: Point, endPoint: Point) => ({
    startPoint: `CGPoint(x: ${startPoint.x}, y: ${startPoint.y})`,
    endPoint: `CGPoint(x: ${endPoint.x}, y: ${endPoint.y})`,
});

const getGradient = (value: any) => {
    const { type, colors: colorsBase, locations, startPoint: rawStartPoint, endPoint: rawEndPoint } = value;
    const colors = getGradientStops(colorsBase);
    const { startPoint, endPoint } = getVectorPoints(rawStartPoint, rawEndPoint);

    return {
        type,
        colors,
        locations,
        startPoint,
        endPoint,
    };
};

// TODO: Убрать после того, как переделаем схемы на новый формат градиентов
const getLinearVectorPointsLegacy = (angle: string) => {
    const degree = Number(angle);

    const getCoord = (pointValue: number, sign: number) =>
        Number(parseFloat(`${(pointValue * sign + 1) / 2}`).toFixed(2));
    const getPointX = (deg: number) => Number(parseFloat(`${Math.sin((deg * Math.PI) / 180)}`).toFixed(2));
    const getPointY = (deg: number) => Number(parseFloat(`${Math.cos((deg * Math.PI) / 180)}`).toFixed(2));

    const startPoint = {
        x: getCoord(getPointX(degree), -1),
        y: getCoord(getPointY(degree), 1),
    };
    const endPoint = {
        x: getCoord(getPointX(degree), 1),
        y: getCoord(getPointY(degree), -1),
    };

    return {
        startPoint: `CGPoint(x: ${startPoint.x}, y: ${startPoint.y})`,
        endPoint: `CGPoint(x: ${endPoint.x}, y: ${endPoint.y})`,
    };
};
// TODO: Убрать после того, как переделаем схемы на новый формат градиентов
const getLinearGradientLegacy = (value: any) => {
    const { angle, colors: colorsBase, locations = ['0', '100'] } = value;
    const colors = getGradientStops(colorsBase);
    const { startPoint, endPoint } = getLinearVectorPointsLegacy(angle);

    return {
        type: '.linear',
        colors,
        locations: locations.map((item: string) => Number((Number(item) / 100).toFixed(2))),
        startPoint,
        endPoint,
    };
};

export const gradientSwiftTransformer = (prop: TransformedToken) => {
    if (Array.isArray(prop.original.value)) {
        return {
            gradient: prop.original.value.reverse().map((item) => {
                if (item.swift) {
                    return getGradient(item.swift);
                }

                if (item.backgroundColor) {
                    return {
                        backgroundColor: getUIColor(getHEXAColor(item.backgroundColor)),
                    };
                }

                return 'undefined';
            }),
        };
    }

    const { linearGradient, swift } = prop.original.value;

    if (swift && swift.colors.length > 1) {
        return { gradient: getGradient(swift) };
    }

    // TODO: Убрать после того, как переделаем схемы на новый формат градиентов
    if (linearGradient && linearGradient.colors.length > 1) {
        return { gradient: getLinearGradientLegacy(linearGradient) };
    }

    return prop.value;
};
