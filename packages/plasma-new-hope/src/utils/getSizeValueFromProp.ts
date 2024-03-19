export const getSizeValueFromProp = (prop: string | number, defaultUnit = 'px') => {
    return Number.isNaN(Number(prop)) ? String(prop) : `${prop}${defaultUnit}`;
};
