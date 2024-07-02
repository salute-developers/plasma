export interface IRgb {
    red?: number;
    green?: number;
    blue?: number;
}

export const isValidHex = (hex: string): boolean => {
    try {
        const hexRegExp = /^#(([0-9a-f]{3})|([0-9a-f]{6}))$/gi;

        return hexRegExp.test(hex);
    } catch (err) {
        throw Error(`isValidHex failed. ${err}`);
    }
};

export const getFullHex = (hex: string): string => {
    try {
        if (hex.length === 6) return hex;

        return hex
            .split('')
            .map((char) => `${char}${char}`)
            .join('');
    } catch (err) {
        throw Error(`getFullHex failed. ${err}`);
    }
};

export const separateStringPerCharGroup = (string: string, groupBy: number): string[] | null => {
    try {
        const regExp = new RegExp(`.{1,${groupBy}}`, 'g');

        return string.match(regExp);
    } catch (err) {
        throw Error(`separateStringPerCharGroup failed. ${err}`);
    }
};

export const convertHexToRgb = (hex: string): IRgb => {
    try {
        if (!isValidHex(hex)) {
            throw Error('Invalid hexadecimal string');
        }

        const hexadecimal = hex.slice(1);

        const fullHex = getFullHex(hexadecimal);

        const hexParts: string[] | null = separateStringPerCharGroup(fullHex, 2) ?? [];

        const rgbObject: IRgb = hexParts.reduce((prev: IRgb, part: string, index: number): IRgb => {
            const decimal = parseInt(part, 16);

            switch (index) {
                case 0:
                    prev.red = decimal;

                    return prev;
                case 1:
                    prev.green = decimal;

                    return prev;

                case 2:
                    prev.blue = decimal;

                    return prev;
                // no default
            }

            return prev;
        }, {});

        return rgbObject;
    } catch (err) {
        throw Error(`convertHexToRgb failed. ${err}`);
    }
};
