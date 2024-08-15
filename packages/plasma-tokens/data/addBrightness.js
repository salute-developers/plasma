const fs = require('fs');
const utils = require('@salutejs/plasma-tokens-utils');

const testFolder = './themes/';

const scheme = [
    {
        name: 'dark',
        next: [
            {
                name: 'text',
                next: [
                    {
                        name: 'default',
                    },
                    {
                        name: 'onDark',
                    },
                    {
                        name: 'onLight',
                    },
                    {
                        name: 'inverse',
                    },
                ],
            },
            {
                name: 'surface',
                next: [
                    {
                        name: 'default',
                    },
                    {
                        name: 'onDark',
                    },
                    {
                        name: 'onLight',
                    },
                    {
                        name: 'inverse',
                    },
                ],
            },
            {
                name: 'background',
                next: [
                    {
                        name: 'default',
                    },
                    {
                        name: 'onDark',
                    },
                    {
                        name: 'onLight',
                    },
                    {
                        name: 'inverse',
                    },
                ],
            },
            {
                name: 'overlay',
                next: [
                    {
                        name: 'default',
                    },
                    {
                        name: 'onDark',
                    },
                    {
                        name: 'onLight',
                    },
                    {
                        name: 'inverse',
                    },
                ],
            },
            {
                name: 'outline',
                next: [
                    {
                        name: 'default',
                    },
                    {
                        name: 'onDark',
                    },
                    {
                        name: 'onLight',
                    },
                    {
                        name: 'inverse',
                    },
                ],
            },
        ],
    },
    {
        name: 'light',
        next: [
            {
                name: 'text',
                next: [
                    {
                        name: 'default',
                    },
                    {
                        name: 'onDark',
                    },
                    {
                        name: 'onLight',
                    },
                    {
                        name: 'inverse',
                    },
                ],
            },
            {
                name: 'surface',
                next: [
                    {
                        name: 'default',
                    },
                    {
                        name: 'onDark',
                    },
                    {
                        name: 'onLight',
                    },
                    {
                        name: 'inverse',
                    },
                ],
            },
            {
                name: 'background',
                next: [
                    {
                        name: 'default',
                    },
                    {
                        name: 'onDark',
                    },
                    {
                        name: 'onLight',
                    },
                    {
                        name: 'inverse',
                    },
                ],
            },
            {
                name: 'overlay',
                next: [
                    {
                        name: 'default',
                    },
                    {
                        name: 'onDark',
                    },
                    {
                        name: 'onLight',
                    },
                    {
                        name: 'inverse',
                    },
                ],
            },
            {
                name: 'outline',
                next: [
                    {
                        name: 'default',
                    },
                    {
                        name: 'onDark',
                    },
                    {
                        name: 'onLight',
                    },
                    {
                        name: 'inverse',
                    },
                ],
            },
        ],
    },
];

const tokensFilter = [
    'surfaceSolidCard',
    'plasmaColorsBackgroundPrimary',
    'surfaceSolidPrimary',
    'surfaceTransparentCard',
];

const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
        hex = hex
            .split('')
            .map((x) => x + x)
            .join('');
    }

    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return { r, g, b };
};

const rgbToHex = (r, g, b) => {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const parseColor = (color) => {
    if (color.startsWith('#')) {
        let { r, g, b } = hexToRgb(color);
        return { r, g, b, a: 1 };
    }

    const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d\.]+)?\)/);
    if (rgbaMatch) {
        return {
            r: parseInt(rgbaMatch[1], 10),
            g: parseInt(rgbaMatch[2], 10),
            b: parseInt(rgbaMatch[3], 10),
            a: rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 0.5,
        };
    }

    throw new Error('Invalid color format');
};

const blendColors = (color1, color2) => {
    try {
        let c1 = parseColor(color1);
        let c2 = parseColor(color2);

        const a1 = c1.a !== undefined ? c1.a : 1;
        const a2 = c2.a !== undefined ? c2.a : 0.5;

        const r = Math.round(c2.r * a2 + c1.r * (1 - a2));
        const g = Math.round(c2.g * a2 + c1.g * (1 - a2));
        const b = Math.round(c2.b * a2 + c1.b * (1 - a2));

        return '#' + rgbToHex(r, g, b);
    } catch (error) {
        return color1;
    }
};

const updateTokens = (tokens) => {
    let newData = {};
    if (!tokens) return {};

    let keys = Object.keys(tokens);

    for (let i = 0; i < keys.length; i++) {
        if (!tokensFilter.find((t) => t === keys[i])) {
            newData[keys[i]] = tokens[keys[i]];
        } else {
            newData[keys[i]] = tokens[keys[i]];

            let name = `${keys[i]}Brightness`;
            console.log(tokens[keys[i]].value);
            newData[name] = {
                ...tokens[keys[i]],
                value: blendColors(
                    utils.getRestoredColorFromPalette(tokens[keys[i]].value),
                    'rgba(255, 255, 255, 0.06)',
                ),
            };
        }
    }

    console.log(newData);

    return newData;
};

const fileRead = (fileName) => {
    const fileData = fs.readFileSync(testFolder + fileName, 'utf8');
    let data = JSON.parse(fileData);

    scheme.forEach((theme) => {
        theme.next.forEach((type) => {
            type.next.forEach((tokenType) => {
                data[theme.name][type.name][tokenType.name] = updateTokens(data[theme.name][type.name][tokenType.name]);
            });
        });
    });

    fs.writeFileSync(testFolder + fileName, JSON.stringify(data));
};

fs.readdir(testFolder, (err, files) => {
    files.forEach((file) => {
        fileRead(file);
    });
});
