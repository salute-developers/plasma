import { getSizeValueFromProp } from '../../../utils/getSizeValueFromProp';

const zeroSizeRegExp = /^[+-]?(?:0+\.?0*|\.0+)(?:[a-z%]+)?$/i;

const isZeroSize = (size: number | string) => {
    if (typeof size === 'number') {
        return size === 0;
    }

    return zeroSizeRegExp.test(size.trim());
};

export const hasCustomCalendarContainerSize = (size?: number | string): size is number | string => {
    const isEmptySize = typeof size === 'string' && size.trim() === '';

    return size !== undefined && !isEmptySize && !isZeroSize(size);
};

export const getCalendarContainerSize = (size?: number | string, stretched?: boolean) => {
    if (hasCustomCalendarContainerSize(size)) {
        return getSizeValueFromProp(size, 'rem');
    }

    return stretched ? '100%' : undefined;
};
