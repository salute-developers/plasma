export type Breakpoint = 'small' | 'medium' | 'large';
type TypographyCategory = 'dspl' | 'body' | 'header' | 'text';
type TypographySize = 'l' | 'm' | 's' | 'xs' | 'xxs' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type TypographyWeight = 'normal' | 'bold';

type TypographyRootProperties = {
    letterSpacing: string;
    fontStyle: string;
};

export type TypographyProperties = {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
} & TypographyRootProperties;

type TypographyRootStructure = {
    [weight in TypographyWeight]: {
        [category in TypographyCategory]: {
            [size in TypographySize]?: TypographyRootProperties;
        };
    };
};

export type TypographyStructure = {
    [weight in TypographyWeight]: {
        [breakpoint in Breakpoint]: {
            [category in TypographyCategory]: {
                fontFamily: string;
                sizes: {
                    [size in TypographySize]?: TypographyProperties;
                };
            };
        };
    };
};

export const typographyPangrams = {
    dspl: 'Художник-эксперт с компьютером всего лишь яйца в объёмный низкий ящик чохом фасовал',
    header: 'Безмозглый широковещательный цифровой передатчик сужающихся экспонент',
    body:
        'Юный директор целиком сжевал весь объём продукции фундука (товара дефицитного и деликатесного), идя энергично через хрустящий камыш.',
    text:
        'Юный директор целиком сжевал весь объём продукции фундука (товара дефицитного и деликатесного), идя энергично через хрустящий камыш.',
};

const rootResult = {
    normal: {
        dspl: {},
        body: {},
        header: {},
        text: {},
    },
    bold: {
        dspl: {},
        body: {},
        header: {},
        text: {},
    },
} as TypographyRootStructure;
const result = {
    normal: {
        large: {},
        medium: {},
        small: {},
    },
    bold: {
        large: {},
        medium: {},
        small: {},
    },
} as TypographyStructure;

const breakpoints: Record<Breakpoint, string> = {
    small: '\\(max-width: 559px\\)',
    medium: '\\(min-width: 560px\\) and \\(max-width: 959px\\)',
    large: '\\(min-width: 960px\\)',
};

const fontFamilies = {
    dspl: 'SB Sans Display',
    body: 'SB Sans Text',
    header: 'SB Sans Display',
    text: 'SB Sans Text',
};

const cssToTypographyMap: Record<string, keyof TypographyProperties> = {
    'font-size': 'fontSize',
    'font-weight': 'fontWeight',
    'line-height': 'lineHeight',
    'letter-spacing': 'letterSpacing',
    'font-style': 'fontStyle',
};

export const typographyToCssMap = {
    fontWeight: 'font-weight',
    fontSize: 'font-size',
    lineHeight: 'line-height',
    fontStyle: 'font-style',
    letterSpacing: 'letter-spacing',
};

const fontRootInfoRegex = new RegExp(':root \\{\\s*font-size: 16px;([\\s\\S]*?)\\}');

const getFontRootInfo = (cssRootString: string) => {
    const lines = cssRootString
        .split(';')
        .map((line) => line.trim())
        .filter((line) => line);

    lines.forEach((line) => {
        const [property, value] = line.split(':').map((part) => part.trim());

        if (!property.includes('letter-spacing') && !property.includes('font-style')) {
            return;
        }

        const parts = property.replace('--plasma-typo-', '').split('-');
        const weight: TypographyWeight = parts.includes('bold') ? 'bold' : 'normal';
        const isHeader = /h\d/.test(parts[0]);
        const category = isHeader ? 'header' : (parts[0] as TypographyCategory); // dspl, body, header, text
        const size = isHeader ? (parts[0] as TypographySize) : (parts[1] as TypographySize); // l, m, s, etc.

        if (!rootResult[weight][category][size]) {
            rootResult[weight][category][size] = {} as TypographyProperties;
        }

        if (property.includes('letter-spacing') && rootResult[weight][category][size]) {
            rootResult[weight][category][size]!.letterSpacing = value;
        } else if (property.includes('font-style') && rootResult[weight][category][size]) {
            rootResult[weight][category][size]!.fontStyle = value;
        }
    });
};

const getFontMainInfo = (css: string, breakpoint: Breakpoint) => {
    const regex = /--plasma-typo-([\w-]+):\s*([^;]+);/g;
    const matches = Array.from(css.matchAll(regex));

    matches.forEach((match) => {
        const [_, part, value] = match;
        const parts = part.split('-');
        const isBold = parts.includes('bold'); // Check if this is a bold property
        const weight = isBold ? 'bold' : 'normal';
        const partsWithoutBold = parts.filter((prop) => prop !== 'bold');
        const isHeader = /h\d/.test(parts[0]);
        const category = isHeader ? 'header' : (parts[0] as TypographyCategory); // e.g., "header", "dspl", "body"
        const size = isHeader ? (parts[0] as TypographySize) : (parts[1] as TypographySize);
        const property = partsWithoutBold.slice(isHeader ? 1 : 2).join('-');

        const target = isBold ? result.bold[breakpoint] : result.normal[breakpoint];

        if (!target[category]) {
            target[category] = {
                fontFamily: fontFamilies[category],
                sizes: {},
            };
        }

        if (!target[category].sizes[size]) {
            target[category].sizes[size] = {
                fontWeight: '',
                fontSize: '',
                lineHeight: '',
                fontStyle: '',
                letterSpacing: '',
            };
        }

        const typographyProperty = cssToTypographyMap[property];

        if (typographyProperty && target[category].sizes[size]) {
            target[category].sizes[size]![typographyProperty] = value;
        }

        target[category].sizes[size]!.letterSpacing = rootResult[weight][category][size]?.letterSpacing || '';
        target[category].sizes[size]!.fontStyle = rootResult[weight][category][size]?.fontStyle || '';
    });
};

export const getGroupedTypographyTokens = (cssString: string) => {
    const fontRootMatch = cssString.match(fontRootInfoRegex);

    if (!fontRootMatch) {
        throw new Error('Provide :root with root font size font style and letter spacing');
    }

    getFontRootInfo(fontRootMatch[1]);

    Object.entries(breakpoints).forEach(([breakpoint, mediaQuery]) => {
        const regex = new RegExp(`@media\\s*${mediaQuery}\\s*\\{([\\s\\S]*?)\\}`);
        const match = cssString.match(regex);

        if (match) {
            getFontMainInfo(match[1], breakpoint as Breakpoint);
        }
    });

    return result;
};
