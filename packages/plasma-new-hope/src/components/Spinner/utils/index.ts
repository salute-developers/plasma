const scalingPixelBasis = 16;

export const getCustomSize = (size?: string | number): string | undefined => {
    if (typeof size === 'number') {
        return `${size / scalingPixelBasis}rem`;
    }

    if (!size) {
        return undefined;
    }

    if (size.endsWith('rem') || size.endsWith('px')) {
        return size;
    }

    const parsed = Number.parseFloat(size);

    return Number.isNaN(parsed) ? undefined : `${parsed / scalingPixelBasis}rem`;
};
