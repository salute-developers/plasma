export const isArraysEqual = (a: any[], b: any[]) => {
    return a.length === b.length && a.every((val, i) => val === b[i]);
};
