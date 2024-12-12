export const valueConstraints = {
    min: 0,
    max: 5,
};

export const helperTextPlacements = {
    inner: 'inner',
    outer: 'outer',
};

export const getHelperTextPlacement = (
    value?: number | null,
    size?: string,
    hasIcons?: boolean,
    iconQuantity?: number,
) => {
    if (!value || !size || !hasIcons) {
        return helperTextPlacements.outer;
    }

    if (size.includes('display') && iconQuantity !== 1) {
        return helperTextPlacements.inner;
    }

    return helperTextPlacements.outer;
};

export const getInnerValue = (value?: number | null, precision?: number, iconQuantity = 5) => {
    let innerValue = value ? String(value) : '';

    if (value && value > valueConstraints.max) {
        innerValue = iconQuantity === 1 ? String(valueConstraints.max) : String(iconQuantity);
    }

    if (value && value < valueConstraints.min) {
        innerValue = String(valueConstraints.min);
    }

    if (precision !== undefined) {
        innerValue = Number(innerValue).toFixed(precision);
    }

    return innerValue;
};
