const rgbaToHexA = (rgbaOrigin: string) => {
    const separator = rgbaOrigin.includes(',') ? ',' : ' ';
    const rgba = rgbaOrigin.substring(5).replace(')', '');
    const rgbaArray = rgba.split(separator);

    let [r, g, b, a] = [
        Number(rgbaArray[0]).toString(16),
        Number(rgbaArray[1]).toString(16),
        Number(rgbaArray[2]).toString(16),
        Math.round(Number(rgbaArray[3]) * 255).toString(16),
    ];

    const color = [r, g, b, a].reduce((result, code) => result + (code.length === 1 ? `0${code}` : code), '');

    return `#${color}`.toUpperCase();
};

const hexAToRGBA = (hex: string) => ({
    r: Number(`0x${hex[1]}${hex[2]}`),
    g: Number(`0x${hex[3]}${hex[4]}`),
    b: Number(`0x${hex[5]}${hex[6]}`),
    a: hex[7] && hex[8] ? Number(`0x${hex[7]}${hex[8]}`) : 255,
});

const getNormalizeValue = (value: number) => Number((value / 255).toFixed(3));

export const getHEXA = (value: string) => {
    if (value.startsWith('#')) {
        return value.length < 8 ? `${value}FF` : value;
    }

    return rgbaToHexA(value);
};

export const getRGBA = (color: string) => {
    const hex = getHEXA(color);
    const colors = hexAToRGBA(hex);
    const [red, green, blue, alpha] = Object.values(colors).map(getNormalizeValue);

    return `${red}, ${green}, ${blue}, ${alpha}`;
};

export const getThemeName = () => {
    const params = new URL(window.location.toString()).searchParams;
    return params.get('theme');
};

export const clearURLParam = () => (window.location.href = '/');
