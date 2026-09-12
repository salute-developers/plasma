type ThemeTokens = Record<string, string>;

export type TokenUsageEntry = {
    component: string;
    /** Конфигурация компонента: `clear` */
    variant: string;
    /** `view`, `size`, `disabled` */
    variation: string;
    /** `accent`, `m` */
    value: string;
    /** Куда попал токен: `--plasma-button-text-color` */
    property: string;
    /** Промежуточные переменные компонента, если токен пришёл через алиас */
    via: string[];
};

export type TokenUsageIndex = {
    /** имя токена -> где используется */
    byToken: Record<string, TokenUsageEntry[]>;
    /** Токен -> его css-переменные */
    cssVarsByToken: Record<string, string[]>;
    /** Все токены темы, включая неиспользуемые */
    tokenKeys: string[];
    usedTokenKeys: string[];
    stats: { components: number; tokens: number; usedTokens: number; usages: number };
};

const TYPO_PREFIX = 'plasma-typo-';
const TYPO_PROPS = ['font-family', 'font-size', 'font-style', 'font-weight', 'letter-spacing', 'line-height'];
const TYPO_SIZE = /^x*[sml]$/;

const DECLARATION = /(--[\w-]+|[a-zA-Z][\w-]*)\s*:\s*([^;{}]+)(?=[;}]|$)/g;
const VAR_REF = /var\(\s*(--[\w-]+)/g;

const MAX_ALIAS_DEPTH = 5;

const camelize = (source: string) => source.replace(/[_-]+(.)/g, (_, char) => char.toUpperCase());

export const getTokenKey = (cssVar: string) => {
    const name = cssVar.replace(/^--/, '');

    if (name.startsWith(TYPO_PREFIX)) {
        const rest = name.slice(TYPO_PREFIX.length);
        const prop = TYPO_PROPS.find((item) => rest.endsWith(`-${item}`));
        const family = prop ? rest.slice(0, -(prop.length + 1)) : rest;

        return family
            .split('-')
            .map((part, position) => {
                if (position === 0) {
                    return part;
                }

                return TYPO_SIZE.test(part) ? part.toUpperCase() : part[0].toUpperCase() + part.slice(1);
            })
            .join('');
    }

    return camelize(name);
};

export const collapseTypographyProperty = (property: string) => {
    const prop = TYPO_PROPS.find((item) => property.endsWith(`-${item}`));

    return prop ? `${property.slice(0, -(prop.length + 1))}-*` : property;
};

export const stringifyCss = (value: unknown, depth = 0): string => {
    if (!value || depth > 10) {
        return '';
    }

    if (typeof value === 'string') {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map((item) => stringifyCss(item, depth + 1)).join('');
    }

    if (typeof value === 'object') {
        const node = value as { styles?: unknown; next?: unknown };

        if (typeof node.styles === 'string') {
            return node.styles + stringifyCss(node.next, depth + 1);
        }
    }

    return '';
};

const isCssLike = (node: unknown) =>
    typeof node === 'string' ||
    Array.isArray(node) ||
    (typeof node === 'object' && node !== null && typeof (node as { styles?: unknown }).styles === 'string');

const walkConfig = (node: unknown, path: string[], onCss: (path: string[], css: string) => void) => {
    if (node === null || node === undefined) {
        return;
    }

    if (isCssLike(node)) {
        const css = stringifyCss(node);

        if (css.includes(':')) {
            onCss(path, css);
        }

        return;
    }

    if (typeof node === 'object') {
        Object.entries(node as Record<string, unknown>).forEach(([key, child]) => {
            if (key === 'defaults' && path.length === 0) {
                return;
            }

            if (key === 'css' && path[0] === 'variations') {
                return;
            }

            walkConfig(child, [...path, key], onCss);
        });
    }
};

const getDeclarations = (css: string) => {
    const declarations: Array<[string, string]> = [];

    Array.from(css.matchAll(DECLARATION)).forEach(([, property, value]) => {
        declarations.push([property, value.trim()]);
    });

    return declarations;
};

const getComponentInfo = (filePath: string) => {
    const fileName = (filePath.split('/').pop() || '').replace(/\.config\.[jt]sx?$/, '');
    const [component, ...rest] = fileName.split('.');

    return { component, fileVariant: rest.join('.') };
};

const getExportVariant = (exportName: string) => (exportName === 'config' ? '' : exportName.replace(/^config/, ''));

const getVariationInfo = (path: string[]) => {
    if (path[0] === 'variations') {
        return { variation: path[1] || 'base', value: path.slice(2).join('.') || '—' };
    }

    return { variation: 'base', value: path.join('.') || '—' };
};

const resolveThemeTokens = (
    value: string,
    scopes: Array<Map<string, string>>,
    themeVars: Set<string>,
    via: string[] = [],
    seen = new Set<string>(),
): Array<{ cssVar: string; via: string[] }> => {
    const result: Array<{ cssVar: string; via: string[] }> = [];

    Array.from(value.matchAll(VAR_REF)).forEach(([, cssVar]) => {
        if (themeVars.has(cssVar)) {
            result.push({ cssVar, via });
            return;
        }

        if (seen.has(cssVar) || via.length >= MAX_ALIAS_DEPTH) {
            return;
        }

        const aliasValue = scopes.reduce<string | undefined>((acc, scope) => acc ?? scope.get(cssVar), undefined);

        if (aliasValue) {
            const branchSeen = new Set(seen).add(cssVar);

            result.push(...resolveThemeTokens(aliasValue, scopes, themeVars, [...via, cssVar], branchSeen));
        }
    });

    return result;
};

/**
 * @param configModules результат `import.meta.glob` по конфигам пакета, `{ eager: true }`
 * @param themeTokens результат `convertTheme(theme[0])`
 */
export const collectTokenUsage = (
    configModules: Record<string, unknown>,
    themeTokens: ThemeTokens,
): TokenUsageIndex => {
    const themeVars = new Set(Object.keys(themeTokens).map((name) => `--${name}`));

    const byToken: Record<string, TokenUsageEntry[]> = {};
    const components = new Set<string>();
    const seenUsages = new Set<string>();

    const cssVarsByToken = Object.keys(themeTokens).reduce((acc, name) => {
        const key = getTokenKey(`--${name}`);

        acc[key] = acc[key] || new Set();
        acc[key].add(`--${name}`);

        return acc;
    }, {} as Record<string, Set<string>>);
    let usages = 0;

    Object.entries(configModules).forEach(([filePath, module]) => {
        const { component, fileVariant } = getComponentInfo(filePath);

        Object.entries((module || {}) as Record<string, unknown>).forEach(([exportName, config]) => {
            if (!config || typeof config !== 'object') {
                return;
            }

            const blocks: Array<{ path: string[]; declarations: Array<[string, string]> }> = [];

            walkConfig(config, [], (path, css) => {
                blocks.push({ path, declarations: getDeclarations(css) });
            });

            if (!blocks.length) {
                return;
            }

            const configScope = new Map<string, string>();
            blocks.forEach(({ declarations }) =>
                declarations.forEach(([property, value]) => {
                    if (property.startsWith('--') && !configScope.has(property)) {
                        configScope.set(property, value);
                    }
                }),
            );

            blocks.forEach(({ path, declarations }) => {
                const blockScope = new Map(declarations.filter(([property]) => property.startsWith('--')));
                const { variation, value: variationValue } = getVariationInfo(path);

                declarations.forEach(([property, declarationValue]) => {
                    resolveThemeTokens(declarationValue, [blockScope, configScope], themeVars).forEach(
                        ({ cssVar, via }) => {
                            const key = getTokenKey(cssVar);

                            const usageProperty = cssVar.startsWith(`--${TYPO_PREFIX}`)
                                ? collapseTypographyProperty(property)
                                : property;
                            const variant = [fileVariant, getExportVariant(exportName)].filter(Boolean).join('.');
                            const usageId = `${variant}|${path.join('.')}|${usageProperty}|${via.join('>')}`;

                            byToken[key] = byToken[key] || [];

                            if (seenUsages.has(`${key}|${filePath}|${usageId}`)) {
                                return;
                            }

                            seenUsages.add(`${key}|${filePath}|${usageId}`);

                            byToken[key].push({
                                component,
                                variant,
                                variation,
                                value: variationValue,
                                property: usageProperty,
                                via,
                            });

                            components.add(component);

                            usages += 1;
                        },
                    );
                });
            });
        });
    });

    const tokenKeys = Object.keys(cssVarsByToken).sort();
    const usedTokenKeys = Object.keys(byToken).sort();

    return {
        byToken,
        cssVarsByToken: tokenKeys.reduce((acc, key) => {
            acc[key] = Array.from(cssVarsByToken[key]).sort();
            return acc;
        }, {} as Record<string, string[]>),
        tokenKeys,
        usedTokenKeys,
        stats: {
            components: components.size,
            tokens: tokenKeys.length,
            usedTokens: usedTokenKeys.length,
            usages,
        },
    };
};

const normalize = (value: string) => value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

export const getUsageCount = (index: TokenUsageIndex, token: string) => index.byToken[token]?.length || 0;

/**
 * Поиск по всей теме, неиспользуемые токены в конце.
 */
export const searchTokens = (index: TokenUsageIndex, query: string) => {
    const search = normalize(query);

    if (query.trim() && !search) {
        return [];
    }

    const rank = (key: string) => {
        if (!search) {
            return 0;
        }

        const candidates = [normalize(key), ...(index.cssVarsByToken[key] || []).map(normalize)];

        if (candidates.some((candidate) => candidate === search)) {
            return -1;
        }

        return candidates.reduce((acc, candidate) => {
            const found = candidate.indexOf(search);
            return found === -1 ? acc : Math.min(acc, found);
        }, Infinity);
    };

    return index.tokenKeys
        .map((key) => ({ key, rank: rank(key), usages: getUsageCount(index, key) }))
        .filter((item) => item.rank !== Infinity)
        .sort(
            (a, b) =>
                Number(b.usages > 0) - Number(a.usages > 0) ||
                a.rank - b.rank ||
                b.usages - a.usages ||
                a.key.localeCompare(b.key),
        )
        .map((item) => item.key);
};

export const groupUsagesByComponent = (usages: TokenUsageEntry[]) => {
    const grouped = usages.reduce((acc, usage) => {
        acc[usage.component] = acc[usage.component] || [];
        acc[usage.component].push(usage);
        return acc;
    }, {} as Record<string, TokenUsageEntry[]>);

    return Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b));
};

export const groupUsagesByVariation = (usages: TokenUsageEntry[]) => {
    const grouped = usages.reduce((acc, usage) => {
        const variation = usage.variation === 'base' ? usage.value : `${usage.variation} = ${usage.value}`;
        const key = usage.variant ? `${usage.variant} · ${variation}` : variation;

        acc[key] = acc[key] || [];
        acc[key].push(usage);

        return acc;
    }, {} as Record<string, TokenUsageEntry[]>);

    return Object.entries(grouped);
};

export type TokenKind = 'color' | 'typography' | 'shadow' | 'number' | 'other';

export const getTokenKind = (cssVar?: string): TokenKind => {
    if (!cssVar) {
        return 'other';
    }

    if (cssVar.startsWith('--plasma-typo-')) {
        return 'typography';
    }

    if (cssVar.startsWith('--shadow-')) {
        return 'shadow';
    }

    if (cssVar.startsWith('--spacing-') || cssVar.startsWith('--border-radius-')) {
        return 'number';
    }

    return 'color';
};

const TYPO_CSS_PROPS: Record<string, string> = {
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-style': 'fontStyle',
    'font-weight': 'fontWeight',
    'letter-spacing': 'letterSpacing',
    'line-height': 'lineHeight',
};

export const getTypographyStyle = (cssVars: string[] = []) =>
    cssVars.reduce((acc, cssVar) => {
        const prop = Object.keys(TYPO_CSS_PROPS).find((item) => cssVar.endsWith(`-${item}`));

        if (prop) {
            acc[TYPO_CSS_PROPS[prop]] = `var(${cssVar})`;
        }

        return acc;
    }, {} as Record<string, string>);

/** `plural(2, ['токен', 'токена', 'токенов'])` -> `токена` */
export const plural = (count: number, forms: [string, string, string]) => {
    const tens = Math.abs(count) % 100;
    const ones = count % 10;

    if (tens > 10 && tens < 20) {
        return forms[2];
    }

    if (ones > 1 && ones < 5) {
        return forms[1];
    }

    return ones === 1 ? forms[0] : forms[2];
};

export const getComputedTokenValue = (cssVar: string | undefined, themeTokens: ThemeTokens) => {
    if (!cssVar) {
        return undefined;
    }

    const computed =
        typeof window === 'undefined'
            ? ''
            : window.getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
    const value = computed || themeTokens[cssVar.replace(/^--/, '')];

    return value?.startsWith('var(') ? undefined : value;
};

export const getTokenInfo = (index: TokenUsageIndex, themeTokens: ThemeTokens, token: string) => {
    const cssVars = index.cssVarsByToken[token] || [];
    const kind = getTokenKind(cssVars[0]);

    return { cssVars, kind, value: getComputedTokenValue(cssVars[0], themeTokens) };
};
