export const rgb2cmyk = (r: number, g: number, b: number) => {
    if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
        return { c: 0, m: 0, y: 0, k: 1 };
    }

    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        return { c: 0, m: 0, y: 0, k: 1 };
    }

    if (r === 0 && g === 0 && b === 0) {
        return { c: 0, m: 0, y: 0, k: 1 };
    }

    const c = 1 - r / 255;
    const m = 1 - g / 255;
    const y = 1 - b / 255;

    const k = Math.min(c, m, y);
    const scale = 1 - k;

    return {
        c: (c - k) / scale,
        m: (m - k) / scale,
        y: (y - k) / scale,
        k,
    };
};

export type CMYK = {
    c: number;
    m: number;
    y: number;
    k: number;
};

export const cmykToRgb = ({ c, m, y, k }: CMYK) => ({
    r: 255 * (1 - c) * (1 - k),
    g: 255 * (1 - m) * (1 - k),
    b: 255 * (1 - y) * (1 - k),
});

export const getHexAlpha = (opacityPercent: number): string => {
    if (opacityPercent <= 0) return '00';
    if (opacityPercent >= 1) return 'FF';

    return Math.round(opacityPercent * 255)
        .toString(16)
        .padStart(2, '0')
        .toUpperCase();
};
