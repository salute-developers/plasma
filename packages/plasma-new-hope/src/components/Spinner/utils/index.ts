const scalingPixelBasis = 16;

/**
 * Приводит значение пропа size/width/height к css-длине.
 */
export const getCustomSize = (size?: string | number): string | undefined => {
    if (typeof size === 'number') {
        return `${size / scalingPixelBasis}rem`;
    }

    if (!size) {
        return undefined;
    }

    if (size.endsWith('px') || size.endsWith('rem')) {
        return size;
    }

    const pixels = Number(size);

    return Number.isNaN(pixels) ? undefined : `${pixels / scalingPixelBasis}rem`;
};
