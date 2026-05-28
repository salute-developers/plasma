export const GRADIENT_TOKENS = {
    linearGradient: /^(-(webkit|o|ms|moz)-)?(linear-gradient)/i,
    repeatingLinearGradient: /^(-(webkit|o|ms|moz)-)?(repeating-linear-gradient)/i,
    radialGradient: /^(-(webkit|o|ms|moz)-)?(radial-gradient)/i,
    repeatingRadialGradient: /^(-(webkit|o|ms|moz)-)?(repeating-radial-gradient)/i,
    sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
    extentKeywords: /^(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)/,
    positionKeywords: /^(left|center|right|top|bottom)/i,
    pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
    percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))%/,
    emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
    angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
    startCall: /^\(/,
    endCall: /^\)/,
    comma: /^,/,
    hexColor: /^#([0-9a-fA-F]+)/,
    literalColor: /^([a-zA-Z]+)/,
    rgbColor: /^rgb/i,
    spacedRgbColor: /^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s+\/\s+([0-1](\.\d+)?)/,
    rgbaColor: /^rgba/i,
    hslColor: /^hsl/i,
    hsvColor: /^hsv/i,
    number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/,
} as const;

export type Locales = typeof defaultLocales;

export const defaultLocales = {
    CONTROLS: {
        SOLID: 'Cплошной',
        GRADIENT: 'Градиент',
    },
} as const;

export const defaultPresets: string[] = [
    'linear-gradient(135deg, rgb(255, 255, 255) 50%, rgb(0, 0, 0) 50%)',
    '#262626',
    '#4E4E4E',
    '#7A7A7A',
    '#949494',
    '#B3B3B3',
    '#DDDDDD',

    '#FEB3BB',
    '#FFD1B8',
    '#FFE785',
    '#94FF94',
    '#85CEFF',
    '#EAD0FB',
    '#F9CDF2',

    '#FF8F9A',
    '#FD9C68',
    '#FFD83D',
    '#3CE73C',
    '#52BAFF',
    '#D39CF7',
    '#F391E2',

    '#FF293E',
    '#FA5F05',
    '#DCB104',
    '#15B015',
    '#118CDF',
    '#B559F3',
    '#E833CA',

    '#9C1422',
    '#D14D00',
    '#B79201',
    '#0B8C0B',
    '#0C72B6',
    '#A139E5',
    '#8A2178',

    '#4A0D13',
    '#5C2709',
    '#5E4D08',
    '#055C05',
    '#0D3B59',
    '#36154C',
    '#450E3C',
];
