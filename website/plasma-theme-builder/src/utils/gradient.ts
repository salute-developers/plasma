import { zeroPoint } from '../types';
import type { MultiplatformValue } from '../types';
import { isValidBackground } from './other';

export const isValidGradient = (value: string) => isValidBackground(value) && value.includes('gradient');

const getLinearVectorPoints = (angle: string) => {
    const degree = Number(angle);

    const getCoord = (pointValue: number, sign: number) => Number(((pointValue * sign + 1) / 2).toFixed(2));
    const getPointX = (deg: number) => Number(Math.sin((deg * Math.PI) / 180).toFixed(2));
    const getPointY = (deg: number) => Number(Math.cos((deg * Math.PI) / 180).toFixed(2));

    const startPoint = {
        x: getCoord(getPointX(degree), -1),
        y: getCoord(getPointY(degree), 1),
    };
    const endPoint = {
        x: getCoord(getPointX(degree), 1),
        y: getCoord(getPointY(degree), -1),
    };

    return {
        startPoint: {
            x: startPoint.x,
            y: startPoint.y,
        },
        endPoint: {
            x: endPoint.x,
            y: endPoint.y,
        },
    };
};

const getGradientParts = (value: string) => {
    const gradient = value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
    return gradient.split(/,\s(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/gm);
};

const parseGradientsByLayer = (value: string) => {
    const layers: string[] = [];
    let depth = 0;
    let start = 0;

    for (let i = 0; i < value.length; i += 1) {
        const char = value[i];

        if (char === '(') {
            depth += 1;
        } else if (char === ')') {
            depth -= 1;

            if (depth < 0) {
                return null;
            }
        } else if (char === ',' && depth === 0) {
            layers.push(value.slice(start, i).trim());
            start = i + 1;
        }
    }

    const lastLayer = value.slice(start).trim();

    if (lastLayer) {
        layers.push(lastLayer);
    }

    return depth === 0 && layers.length ? layers : null;
};

const getColors = (restParams: string[]) =>
    restParams.reduce((colors: string[], item: string) => {
        const [, color] = item.match(/(.*) (\d+\.?\d+%)?/) || [];
        colors.push(color);

        return colors;
    }, []);

const getLocations = (restParams: string[]) =>
    restParams.reduce((locations: number[], item: string) => {
        const [, , location = '0'] = item.match(/(.*) (\d+\.?\d+%)?/) || [];
        const locationNumber = Number((Number(location.replace('%', '')) / 100).toFixed(2));

        locations.push(locationNumber);

        return locations;
    }, []);

export const parseGradient = (gradientString: string) => {
    const gradientArray = parseGradientsByLayer(gradientString);

    if (!gradientArray) {
        return null;
    }

    const layers = gradientArray.reduce((result, gradient) => {
        const type = gradient.substring(0, gradient.indexOf('('));

        const origin = gradient;

        if (type === 'linear-gradient') {
            const [angle, ...restParams] = getGradientParts(origin);
            const { startPoint, endPoint } = getLinearVectorPoints(angle.replace(/deg/gm, ''));

            result.push({
                origin,
                swift: {
                    kind: 'gradient',
                    type: '.linear',
                    colors: getColors(restParams),
                    locations: getLocations(restParams),
                    startPoint,
                    endPoint,
                },
                xml: {
                    kind: 'gradient',
                    type: '.linear',
                    colors: getColors(restParams),
                    locations: getLocations(restParams),
                    startPoint,
                    endPoint,
                },
            });

            return result;
        }

        if (type === 'radial-gradient') {
            const [, ...restParams] = getGradientParts(origin);

            result.push({
                origin,
                swift: {
                    kind: 'gradient',
                    type: '.radial',
                    colors: getColors(restParams),
                    locations: getLocations(restParams),
                    startPoint: zeroPoint,
                    endPoint: zeroPoint,
                },
                xml: {
                    kind: 'gradient',
                    type: '.radial',
                    colors: getColors(restParams),
                    locations: getLocations(restParams),
                    center: zeroPoint,
                    radius: zeroPoint,
                },
            });

            return result;
        }

        result.push({
            origin,
            backgroundColor: origin,
        });

        return result;
    }, [] as Array<MultiplatformValue>);

    const lastLayer = layers.length - 1;
    if (layers.length > 1 && !layers[lastLayer].backgroundColor) {
        const transparent = '#FFFFFF00';

        layers.push({
            backgroundColor: transparent,
            origin: transparent,
        });
    }

    return layers;
};
