import type { TransformedToken } from 'style-dictionary';

const hexAToRGBA = (hex: string) => ({
    r: Number(`0x${hex[1]}${hex[2]}`),
    g: Number(`0x${hex[3]}${hex[4]}`),
    b: Number(`0x${hex[5]}${hex[6]}`),
    a: hex[7] && hex[8] ? Number(`0x${hex[7]}${hex[8]}`) : 255,
});

const getNormalizeValue = (value: number) => Number((value / 255).toFixed(3));

const getGradientStop = (color: string) => {
    const colors = hexAToRGBA(color);
    const [red, green, blue, alpha] = Object.values(colors).map(getNormalizeValue);

    return `UIColor(red: ${red}, green: ${green}, blue: ${blue}, alpha: ${alpha})`;
};

const getGradientStops = (colors: Array<string>) => [getGradientStop(colors[0]), getGradientStop(colors[1])];

const getPointX = (deg: number) => Number(parseFloat(`${Math.sin((deg * Math.PI) / 180)}`).toFixed(2));

const getPointY = (deg: number) => Number(parseFloat(`${Math.cos((deg * Math.PI) / 180)}`).toFixed(2));

const getCoord = (pointValue: number, sign: number) => parseFloat(`${(pointValue * sign + 1) / 2}`).toFixed(2);

const getVectorPoints = (angle: string) => {
    const degree = Number(angle);

    const startPoint = {
        x: getCoord(getPointX(degree), -1),
        y: getCoord(getPointY(degree), 1),
    };
    const endPoint = {
        x: getCoord(getPointX(degree), 1),
        y: getCoord(getPointY(degree), -1),
    };

    return {
        startPoint: `UnitPoint(x: ${startPoint.x}, y: ${startPoint.y})`,
        endPoint: `UnitPoint(x: ${endPoint.x}, y: ${endPoint.y})`,
    };
};

export const gradientSwiftTransformer = (prop: TransformedToken) => {
    const { linearGradient } = prop.original.value;

    if (!linearGradient || linearGradient.colors.length < 2) {
        return prop.value;
    }

    const { colors, angle } = prop.original.value.linearGradient;

    const [startColor, endColor] = getGradientStops(colors);
    const { startPoint, endPoint } = getVectorPoints(angle);

    return {
        startColor,
        endColor,
        startPoint,
        endPoint,
    };
};
