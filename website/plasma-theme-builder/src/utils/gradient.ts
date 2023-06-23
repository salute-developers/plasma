import { zeroPoint } from '../types';
import type { MultiplatformValue } from '../types';

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
    const regex = /((rgba?|hsla?)\([\d.%\s,()#\w]?\))|(#\w{6,8})|(linear|radial)-gradient\([\d.%\s,()#\w]+?\)(?=,*\s*(linear|radial|$|rgb|hsl|#))/g;
    const gradientArray = gradientString.match(regex);

    if (!gradientArray) {
        return null;
    }

    return gradientArray.reduce((result, gradient) => {
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
        }

        if (!type) {
            result.push({
                origin,
                backgroundColor: origin,
            });
        }

        return result;
    }, [] as Array<MultiplatformValue>);
};
