export const getTokenValueInPixels = (tokenName: string, element: HTMLElement): number | undefined => {
    const tokenValue = getComputedStyle(element).getPropertyValue(tokenName).trim();

    if (!tokenValue) {
        return undefined;
    }

    const valueMatch = tokenValue.match(/^([\d.]+)(rem|px)$/);

    if (!valueMatch) {
        return undefined;
    }

    const [, number, unit] = valueMatch;
    const numericValue = parseFloat(number);

    if (unit === 'px') {
        return numericValue;
    }
    if (unit === 'rem') {
        const rootFontSize = parseFloat(getComputedStyle(element).fontSize);
        return numericValue * rootFontSize;
    }

    return undefined;
};
