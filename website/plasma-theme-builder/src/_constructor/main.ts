import fs from 'fs';

const baseConfig = JSON.parse(fs.readFileSync('./config.json', { encoding: 'utf-8' }));

// добавить поддержку инвариантов в конфигурации компонент

// TODO: забирать значения из темы
const helpers: any = {
    shape: {
        'round.xxs': '4px',
        'round.xs': '6px',
        'round.s': '8px',
        'round.m': '12px',
        'round.l': '16px',
        'round.xl': '20px',
        'round.xxl': '32px',
        'round.circle': '50%',
    },
    // TODO: забирать значения из темы
    typography: {
        'body.l.bold': [
            '--plasma-typo-body-l-font-family',
            '--plasma-typo-body-l-font-size',
            '--plasma-typo-body-l-font-style',
            '--plasma-typo-body-l-bold-font-weight',
            '--plasma-typo-body-l-letter-spacing',
            '--plasma-typo-body-l-line-height',
        ],
        'body.m.bold': [
            '--plasma-typo-body-m-font-family',
            '--plasma-typo-body-m-font-size',
            '--plasma-typo-body-m-font-style',
            '--plasma-typo-body-m-bold-font-weight',
            '--plasma-typo-body-m-letter-spacing',
            '--plasma-typo-body-m-line-height',
        ],
        'body.s.bold': [
            '--plasma-typo-body-s-font-family',
            '--plasma-typo-body-s-font-size',
            '--plasma-typo-body-s-font-style',
            '--plasma-typo-body-s-bold-font-weight',
            '--plasma-typo-body-s-letter-spacing',
            '--plasma-typo-body-s-line-height',
        ],
        'body.xs.bold': [
            '--plasma-typo-body-xs-font-family',
            '--plasma-typo-body-xs-font-size',
            '--plasma-typo-body-xs-font-style',
            '--plasma-typo-body-xs-bold-font-weight',
            '--plasma-typo-body-xs-letter-spacing',
            '--plasma-typo-body-xs-line-height',
        ],
    },
};

const ICON_BUTTON_STYLE_API: StyleAPI = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variants: ['view', 'size', 'shape', 'disabled', 'readOnly'], // outline для примера
    tokens: {
        spinnerColor: 'buttonSpinnerColor',
        labelColor: 'buttonColor',
        backgroundColor: ['buttonBackgroundColor', 'buttonLoadingBackgroundColor'],
        valueColor: 'buttonValueColor',
        shape: 'buttonRadius',
        labelStyle: [
            'buttonFontFamily',
            'buttonFontSize',
            'buttonFontStyle',
            'buttonFontWeight',
            'buttonLetterSpacing',
            'buttonLineHeight',
        ],
        height: 'buttonHeight',
        minWidth: 'buttonWidth',
        paddingStart: 'buttonPadding',
        paddingEnd: 'buttonPadding',
        spinnerSize: 'buttonSpinnerSize',
        iconMargin: [
            { name: 'buttonLeftContentMargin', adjustment: (v: string | number) => `0 ${v}rem -0.125rem` },
            { name: 'buttonRightContentMargin', adjustment: (v: string | number) => `0 -0.125rem 0 ${v}rem` },
        ],
        valueMargin: { name: 'buttonValueMargin', adjustment: (v: string | number) => `0 0 0 ${v}rem` },
        disableAlpha: 'buttonDisabledOpacity',
        // - buttonFocusColor
    },
};

type ConfigTokenFields<T extends ConfigToken> = {
    [K in Exclude<keyof T, 'name'>]: T[K];
};

// TODO придумать название получше
type ComplexToken = { name: string; adjustment: (v: string | number) => string };

type TokenFromStyleAPI = string | string[] | ComplexToken | ComplexToken[];

interface StyleAPI {
    defaults: Record<string, string>;
    variants: string[];
    tokens: Record<string, TokenFromStyleAPI>;
}

interface MultiplatformConfigToken {
    kind: string | null;
    style: string | null;
    parent: Additions | null;
    props?: Record<string, ConfigProps>;
}

const isComplexToken = (token: any): token is ComplexToken => {
    return typeof token === 'object' && 'name' in token;
};

const isComplexTokenArray = (array: any[]): array is ComplexToken[] => {
    return array.every(isComplexToken);
};

abstract class ConfigToken {
    public name = '';

    public type?: string;

    public value?: string | number;

    protected tokenFromStyleAPI?: TokenFromStyleAPI;

    protected DEFAULT_FONT_SIZE = 16;

    public createWebToken(values: number | string | number[] | string[]) {
        if (!this.tokenFromStyleAPI) {
            return null;
        }

        if (
            Array.isArray(this.tokenFromStyleAPI) &&
            Array.isArray(values) &&
            isComplexTokenArray(this.tokenFromStyleAPI)
        ) {
            return this.tokenFromStyleAPI.reduce((acc, item, index) => {
                return {
                    ...acc,
                    [item.name]: item.adjustment(values?.[index]),
                };
            }, {});
        }

        if (
            Array.isArray(this.tokenFromStyleAPI) &&
            Array.isArray(values) &&
            !isComplexTokenArray(this.tokenFromStyleAPI)
        ) {
            return this.tokenFromStyleAPI.reduce((acc, item, index) => {
                return {
                    ...acc,
                    [item]: values?.[index],
                };
            }, {});
        }

        if (!Array.isArray(values) && isComplexToken(this.tokenFromStyleAPI)) {
            return {
                [this.tokenFromStyleAPI.name]: this.tokenFromStyleAPI.adjustment(values),
            };
        }

        if (
            !Array.isArray(values) &&
            !Array.isArray(this.tokenFromStyleAPI) &&
            !isComplexToken(this.tokenFromStyleAPI)
        ) {
            return {
                [this.tokenFromStyleAPI]: values,
            };
        }

        return null;
    }

    public getWebToken() {}
}

class ColorConfigToken extends ConfigToken {
    public readonly type = 'color';

    public value: string; // text.on-dark.primary / red / etc.

    public states: {
        state: string[]; // ['pressed']
        value: string; // text.on-dark.primary-active
    }[];

    protected tokenFromStyleAPI: TokenFromStyleAPI;

    constructor(name: string, data: ConfigColorProp, tokenFromStyleAPI: TokenFromStyleAPI) {
        super();

        const { value, states } = data;

        this.name = name;
        this.value = value;
        this.states = states;

        this.tokenFromStyleAPI = tokenFromStyleAPI;
    }

    private getColorCSSVariable(token: string) {
        const [category, subcategory, name] = token.split('.');

        if (!category || !subcategory || !name) {
            return token;
        }

        return `var(--${subcategory}-${category}-${name})`;
    }

    private getAdditionalTokens(token: string) {
        if (!this.states?.length) {
            return null;
        }

        const statesMap = {
            hovered: 'Hover',
            pressed: 'Active',
        };

        return this.states.reduce((acc, item) => {
            const state = item.state[0] as keyof typeof statesMap; // TODO поддержать работу с несколькими стейтами
            const newTokenName = `${token}${statesMap[state]}`;

            return {
                ...acc,
                [newTokenName]: this.getColorCSSVariable(item.value),
            };
        }, {});
    }

    public getWebToken() {
        // TODO: поддержать другие типы?
        if (
            isComplexToken(this.tokenFromStyleAPI) ||
            (Array.isArray(this.tokenFromStyleAPI) && isComplexTokenArray(this.tokenFromStyleAPI))
        ) {
            return null;
        }

        const baseToken = this.getColorCSSVariable(this.value);

        if (Array.isArray(this.tokenFromStyleAPI)) {
            const values = new Array(this.tokenFromStyleAPI.length).fill(baseToken);

            const additionalValues = this.tokenFromStyleAPI.reduce((acc, item) => {
                return {
                    ...acc,
                    ...this.getAdditionalTokens(item),
                };
            }, {});

            return {
                ...this.createWebToken(values),
                ...additionalValues,
            };
        }

        return {
            ...this.createWebToken(baseToken),
            ...this.getAdditionalTokens(this.tokenFromStyleAPI),
        };
    }
}

class FloatConfigToken extends ConfigToken {
    public readonly type = 'float';

    public value: number; // 0.2

    protected tokenFromStyleAPI: TokenFromStyleAPI;

    constructor(name: string, data: ConfigFloatProp, tokenFromStyleAPI: TokenFromStyleAPI) {
        super();

        const { value } = data;

        this.name = name;
        this.value = value;

        this.tokenFromStyleAPI = tokenFromStyleAPI;
    }

    public getWebToken() {
        // TODO: поддержать другие типы?
        if (
            isComplexToken(this.tokenFromStyleAPI) ||
            (Array.isArray(this.tokenFromStyleAPI) && isComplexTokenArray(this.tokenFromStyleAPI))
        ) {
            return null;
        }

        return {
            ...this.createWebToken(this.value),
        };
    }
}

class DimensionConfigToken extends ConfigToken {
    public readonly type = 'dimension';

    public value: number; // 2

    protected tokenFromStyleAPI: TokenFromStyleAPI;

    constructor(name: string, data: ConfigDimensionProp, tokenFromStyleAPI: TokenFromStyleAPI) {
        super();

        const { value } = data;

        this.name = name;
        this.value = value;

        this.tokenFromStyleAPI = tokenFromStyleAPI;
    }

    public getWebToken() {
        // TODO: поддержать другие типы?

        if (isComplexToken(this.tokenFromStyleAPI)) {
            return {
                ...this.createWebToken(this.value),
            };
        }

        if (Array.isArray(this.tokenFromStyleAPI) && isComplexTokenArray(this.tokenFromStyleAPI)) {
            const value = this.value / this.DEFAULT_FONT_SIZE;
            const values = new Array(this.tokenFromStyleAPI.length).fill(value);

            return {
                ...this.createWebToken(values),
            };
        }

        return null;
    }
}

class ShapeConfigToken extends ConfigToken {
    public readonly type = 'shape';

    public value: string; // round.s / round.circle

    public adjustment?: string | number;

    protected tokenFromStyleAPI: TokenFromStyleAPI;

    constructor(name: string, data: ConfigShapeProp, tokenFromStyleAPI: TokenFromStyleAPI) {
        super();

        const { value, adjustment } = data;

        this.name = name;
        this.value = value;
        this.adjustment = adjustment;

        this.tokenFromStyleAPI = tokenFromStyleAPI;
    }

    public getWebToken() {
        // TODO: поддержать другие типы?
        if (
            isComplexToken(this.tokenFromStyleAPI) ||
            (Array.isArray(this.tokenFromStyleAPI) && isComplexTokenArray(this.tokenFromStyleAPI))
        ) {
            return null;
        }

        const value = this.adjustment
            ? `calc(${helpers.shape[this.value]} + ${this.adjustment}px)`
            : `${helpers.shape[this.value]}`;

        return {
            ...this.createWebToken(value),
        };
    }
}

class TypographyConfigToken extends ConfigToken {
    public readonly type = 'typography';

    public value: string; // body.m.bold

    protected tokenFromStyleAPI: TokenFromStyleAPI;

    constructor(name: string, data: ConfigTypographyProp, tokenFromStyleAPI: TokenFromStyleAPI) {
        super();

        const { value } = data;

        this.name = name;
        this.value = value;

        this.tokenFromStyleAPI = tokenFromStyleAPI;
    }

    public getWebToken() {
        // TODO: поддержать другие типы?

        if (!Array.isArray(this.tokenFromStyleAPI) || isComplexTokenArray(this.tokenFromStyleAPI)) {
            return null;
        }

        const values = helpers.typography[this.value].map((item: string) => `var(${item})`);

        return {
            ...this.createWebToken(values),
        };
    }
}

type ConfigTokens =
    | ColorConfigToken
    | FloatConfigToken
    | DimensionConfigToken
    | ShapeConfigToken
    | TypographyConfigToken;

type Additions = Record<string, string[]>;

type ConfigColorProp = ConfigTokenFields<ColorConfigToken>;

type ConfigFloatProp = ConfigTokenFields<FloatConfigToken>;

type ConfigDimensionProp = ConfigTokenFields<DimensionConfigToken>;

type ConfigShapeProp = ConfigTokenFields<ShapeConfigToken>;

type ConfigTypographyProp = ConfigTokenFields<TypographyConfigToken>;

type ConfigProps = ConfigColorProp | ConfigFloatProp | ConfigDimensionProp | ConfigShapeProp | ConfigTypographyProp;

class Variation {
    public kind: string | null = null; // из variants

    public style: string | null = null; // название стиля

    public parent: Additions | null = null; // [additions] вариации из существующих в конфиге

    public props: ConfigTokens[] = [];

    constructor(data: MultiplatformConfigToken, styleAPI?: StyleAPI) {
        const { kind, style, parent, props } = data;

        this.kind = kind;
        this.style = style;
        this.parent = parent;

        if (!props || !styleAPI) {
            return;
        }

        Object.entries(props).forEach(([tokenName, item]) => {
            const configToken = this.getConfigToken(tokenName, item, styleAPI);

            if (configToken) {
                this.props.push(configToken);
            }
        });
    }

    private getConfigToken(tokenName: string, item: ConfigProps, styleAPI: StyleAPI) {
        const tokenFromStyleAPI = styleAPI.tokens[tokenName] as TokenFromStyleAPI;

        if (!tokenFromStyleAPI) {
            return null;
        }

        if (item.type === 'color') {
            return new ColorConfigToken(tokenName, item, tokenFromStyleAPI);
        }

        if (item.type === 'float') {
            return new FloatConfigToken(tokenName, item, tokenFromStyleAPI);
        }

        if (item.type === 'dimension') {
            return new DimensionConfigToken(tokenName, item, tokenFromStyleAPI);
        }

        if (item.type === 'shape') {
            return new ShapeConfigToken(tokenName, item, tokenFromStyleAPI);
        }

        if (item.type === 'typography') {
            return new TypographyConfigToken(tokenName, item, tokenFromStyleAPI);
        }

        return null;
    }
}

interface WebConfig {
    [k: string]: {
        [k: string]: {
            [k: string]: string;
        };
    };
}

abstract class Config {
    private variants: Variation[] = [];

    private config: WebConfig = {};

    constructor(styleAPI: StyleAPI, multiplatformConfig: { data: MultiplatformConfigToken[] }) {
        styleAPI.variants.forEach(() => {
            multiplatformConfig.data.forEach((item) => {
                const variation = new Variation(item, styleAPI);

                this.variants.push(variation);
            });
        });
    }

    getVariants() {
        return this.variants;
    }

    getWebConfig() {
        return this.config;
    }

    createWebConfig() {
        this.variants.forEach((variant) => {
            if (!variant.kind || !variant.style) {
                return;
            }

            const props = variant.props.reduce((acc, prop) => {
                return {
                    ...acc,
                    ...prop.getWebToken(),
                };
            }, {});

            if (!this.config[variant.kind]) {
                this.config[variant.kind] = {};
            }

            if (!this.config[variant.kind][variant.style]) {
                this.config[variant.kind][variant.style] = {};
            }

            this.config[variant.kind][variant.style] = props;
        });

        return this.config;
    }
}

class IconButtonConfig extends Config {
    constructor() {
        super(ICON_BUTTON_STYLE_API, baseConfig);
    }
}

const iconButtonConfig = new IconButtonConfig();

// iconButtonConfig.createWebConfig();

// console.log('iconButtonConfig', iconButtonConfig.getVariants());
console.dir(iconButtonConfig.createWebConfig(), {
    depth: 5,
});
