export const hexToHSL = (hex: string): number[] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    let r = parseInt(result?.[1] ?? '0', 16);
    let g = parseInt(result?.[2] ?? '0', 16);
    let b = parseInt(result?.[3] ?? '0', 16);

    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    let s;
    let l = (max + min) / 2;

    if (max === min) {
        s = 0;
        h = s;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            // no default
        }
        h = (h ?? 0) / 6;
    }

    s *= 100;
    s = Math.round(s);
    l *= 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    return [h, s, l];
};
