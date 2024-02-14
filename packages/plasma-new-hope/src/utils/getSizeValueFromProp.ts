export const getSizeValueFromProp = (prop: string | number) => {
    return Number.isNaN(Number(prop)) ? String(prop) : `${prop}px`;
};
