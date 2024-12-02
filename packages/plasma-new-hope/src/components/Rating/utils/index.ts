export const valueConstraints = {
    min: 0,
    max: 5,
};

export const helperTextPlacements = {
    inner: 'inner',
    outer: 'outer',
};

export const getHelperTextPlacement = (value?: number, size?: string, hasIcons?: boolean, iconQuantity?: number) => {
    if (!value || !size || !hasIcons) {
        return helperTextPlacements.outer;
    }

    if (size.includes('display') && iconQuantity !== 1) {
        return helperTextPlacements.inner;
    }

    return helperTextPlacements.outer;
};
