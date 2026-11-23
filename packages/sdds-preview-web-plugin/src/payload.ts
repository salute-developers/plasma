import { PREVIEW_PROTOCOL_VERSION } from './protocol';
import type {
    JsonValue,
    PreviewAsset,
    PreviewPayload,
    PreviewPropertySource,
    PreviewPropertyValue,
    PreviewStyle,
    PreviewTokenValue,
    WebPreviewRequest,
} from './protocol';
import { findPreconvertedCss, resolvePayload } from './resolve';
import { pathKey } from './resolve/warnings';

export type PayloadParseResult =
    | { ok: true; request: WebPreviewRequest }
    | { ok: false; requestId: string; code: string; message: string; path?: string };

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

const isStringRecord = (value: unknown): value is Record<string, string> =>
    isRecord(value) && Object.values(value).every((item) => typeof item === 'string');

const isNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

const HEX8 = /^#[0-9A-Fa-f]{8}$/;

class PayloadError extends Error {
    readonly path: string;

    readonly code: string;

    constructor(message: string, path: string, code = 'invalid_payload') {
        super(message);
        this.path = path;
        this.code = code;
    }
}

const fail = (message: string, path: string, code?: string): never => {
    throw new PayloadError(message, path, code);
};

const parseAlpha = (value: unknown, path: string) => {
    if (value !== undefined && (!isNumber(value) || value < 0 || value > 1)) {
        fail('alpha must be a number between 0 and 1', path);
    }
};

const parseSource = (value: unknown, path: string): PreviewPropertySource => {
    if (!isRecord(value)) return fail('Property source must be an object', path);
    switch (value.type) {
        case 'literal':
            if (!('value' in value)) fail('Literal source must contain value', `${path}.value`);
            parseAlpha(value.alpha, `${path}.alpha`);
            return value as PreviewPropertySource;
        case 'tokenRef':
            if (typeof value.tokenId !== 'string' || !value.tokenId) {
                fail('tokenRef must contain tokenId', `${path}.tokenId`);
            }
            parseAlpha(value.alpha, `${path}.alpha`);
            return value as PreviewPropertySource;
        case 'styleRef':
            if (typeof value.styleId !== 'string' || !value.styleId) {
                fail('styleRef must contain styleId', `${path}.styleId`);
            }
            return value as PreviewPropertySource;
        case 'assetRef':
            if (typeof value.assetId !== 'string' || !value.assetId) {
                fail('assetRef must contain assetId', `${path}.assetId`);
            }
            return value as PreviewPropertySource;
        default:
            return fail(`Unknown property source type ${String(value.type)}`, `${path}.type`);
    }
};

const parseProperties = (value: unknown, path: string): Record<string, PreviewPropertyValue> => {
    if (value === undefined) return {};
    if (!isRecord(value)) return fail('properties must be an object', path);
    const result: Record<string, PreviewPropertyValue> = {};
    for (const [name, property] of Object.entries(value)) {
        const propertyPath = `${path}${pathKey(name)}`;
        if (!isRecord(property)) fail(`Property ${name} must be an object`, propertyPath);
        const record = property as Record<string, unknown>;
        const base = parseSource(record.base, `${propertyPath}.base`);
        if (record.states !== undefined && !Array.isArray(record.states)) {
            fail('states must be an array', `${propertyPath}.states`);
        }
        const states = ((record.states as unknown[] | undefined) ?? []).map((entry, index) => {
            const entryPath = `${propertyPath}.states[${index}]`;
            if (!isRecord(entry)) return fail('State entry must be an object', entryPath);
            if (
                !Array.isArray(entry.when) ||
                !entry.when.length ||
                !entry.when.every((item) => typeof item === 'string' && item)
            ) {
                fail('when must be a non-empty array of state names', `${entryPath}.when`);
            }
            return { when: entry.when as string[], source: parseSource(entry.source, `${entryPath}.source`) };
        });
        result[name] = { base, ...(states.length ? { states } : {}) };
    }
    return result;
};

const parseToken = (value: unknown, path: string): PreviewTokenValue => {
    if (!isRecord(value)) return fail('Theme token must be an object', path);
    const invalid = (field: string) => fail(`Invalid ${String(value.type)} token: ${field}`, `${path}.${field}`);
    switch (value.type) {
        case 'color':
            if (typeof value.value !== 'string' || !HEX8.test(value.value)) invalid('value');
            break;
        case 'dimension':
            if (!isNumber(value.value)) invalid('value');
            break;
        case 'shape':
            if (
                !Array.isArray(value.cornerRadii) ||
                value.cornerRadii.length !== 4 ||
                !value.cornerRadii.every(isNumber)
            ) {
                invalid('cornerRadii');
            }
            break;
        case 'shadow':
            if (
                !Array.isArray(value.layers) ||
                !value.layers.every(
                    (layer) =>
                        isRecord(layer) &&
                        [layer.x, layer.y, layer.blur, layer.spread].every(isNumber) &&
                        typeof layer.color === 'string',
                )
            ) {
                invalid('layers');
            }
            break;
        case 'gradient':
            if (
                !Array.isArray(value.layers) ||
                !value.layers.length ||
                !value.layers.every(
                    (layer) =>
                        isRecord(layer) &&
                        layer.kind === 'linear' &&
                        isNumber(layer.angle) &&
                        Array.isArray(layer.stops) &&
                        layer.stops.every(
                            (stop) => isRecord(stop) && typeof stop.color === 'string' && isNumber(stop.position),
                        ),
                )
            ) {
                invalid('layers');
            }
            break;
        case 'fontFamily':
            if (
                !Array.isArray(value.faces) ||
                !value.faces.every(
                    (face) => isRecord(face) && typeof face.assetId === 'string' && isNumber(face.weight),
                )
            ) {
                invalid('faces');
            }
            if (value.family !== undefined && (typeof value.family !== 'string' || !value.family)) invalid('family');
            break;
        case 'typography':
            if (typeof value.fontFamilyTokenId !== 'string') invalid('fontFamilyTokenId');
            for (const field of ['fontSize', 'lineHeight', 'letterSpacing', 'weight']) {
                if (!isNumber(value[field])) invalid(field);
            }
            break;
        default:
            fail(`Unknown theme token type ${String(value.type)}`, `${path}.type`);
    }
    return value as PreviewTokenValue;
};

const parseAssets = (value: unknown): PreviewAsset[] => {
    if (value === undefined) return [];
    if (!Array.isArray(value)) return fail('assets must be an array', '$.assets');
    return value.map((asset, index) => {
        if (
            !isRecord(asset) ||
            typeof asset.id !== 'string' ||
            typeof asset.type !== 'string' ||
            typeof asset.url !== 'string'
        ) {
            return fail('Asset must contain id, type and url', `$.assets[${index}]`);
        }
        return (asset as unknown) as PreviewAsset;
    });
};

const parseStyles = (value: unknown): Record<string, PreviewStyle> => {
    if (value === undefined) return {};
    if (!isRecord(value)) return fail('styles must be an object', '$.styles');
    const result: Record<string, PreviewStyle> = {};
    for (const [styleId, style] of Object.entries(value)) {
        const path = `$.styles${pathKey(styleId)}`;
        if (!isRecord(style)) fail(`Style ${styleId} must be an object`, path);
        const record = style as Record<string, unknown>;
        if (typeof record.component !== 'string' || !record.component) {
            fail('Style must contain component', `${path}.component`);
        }
        for (const field of ['variation', 'name'] as const) {
            if (record[field] !== undefined && (typeof record[field] !== 'string' || !record[field])) {
                fail(`${field} must be a non-empty string`, `${path}.${field}`);
            }
        }
        for (const field of ['default', 'invariant'] as const) {
            if (record[field] !== undefined && typeof record[field] !== 'boolean') {
                fail(`${field} must be a boolean`, `${path}.${field}`);
            }
        }
        result[styleId] = {
            ...((record as unknown) as PreviewStyle),
            properties: parseProperties(record.properties ?? {}, `${path}.properties`),
        };
    }
    return result;
};

/** Ссылки `styleRef`: неизвестный стиль — `unknown_style_ref`, цикл — `style_ref_cycle` (правило схемы о `styles`). */
const checkStyleRefs = (component: Record<string, PreviewPropertyValue>, styles: Record<string, PreviewStyle>) => {
    const refsOf = (properties: Record<string, PreviewPropertyValue>, path: string) =>
        Object.entries(properties).flatMap(([name, property]) =>
            [property.base, ...(property.states ?? []).map((entry) => entry.source)].flatMap((source) =>
                source.type === 'styleRef' ? [{ styleId: source.styleId, path: `${path}${pathKey(name)}` }] : [],
            ),
        );
    const visit = (styleId: string, path: string, chain: string[]) => {
        if (!styles[styleId]) fail(`Unknown style ${styleId}`, path, 'unknown_style_ref');
        if (chain.includes(styleId)) {
            fail(`Style reference cycle: ${[...chain, styleId].join(' -> ')}`, path, 'style_ref_cycle');
        }
        for (const ref of refsOf(styles[styleId].properties, `$.styles${pathKey(styleId)}.properties`)) {
            visit(ref.styleId, ref.path, [...chain, styleId]);
        }
    };
    for (const ref of refsOf(component, '$.component.properties')) visit(ref.styleId, ref.path, []);
    for (const styleId of Object.keys(styles)) visit(styleId, `$.styles${pathKey(styleId)}`, []);
};

const parse = (value: Record<string, unknown>, requestId: string): WebPreviewRequest => {
    if (!requestId) fail('Preview payload must contain a non-empty requestId', '$.requestId');
    if (value.protocolVersion !== PREVIEW_PROTOCOL_VERSION) {
        fail(`Unsupported protocolVersion ${String(value.protocolVersion)}`, '$.protocolVersion');
    }
    if (value.platform !== 'WEB') {
        fail(`Web preview plugin accepts only platform WEB, got ${String(value.platform)}`, '$.platform');
    }
    // Старый формат WEB: значения в CSS-строках и окружение в корневом поле `web`. Общая схема его не знает.
    if ('web' in value && value.web !== undefined) {
        fail('Field web is not part of the preview payload: platform WEB uses the common payload format', '$.web');
    }

    const { component } = value;
    if (!isRecord(component) || typeof component.id !== 'string' || !component.id.trim()) {
        fail('Preview payload must contain component.id', '$.component.id');
    }
    const componentRecord = component as Record<string, unknown>;
    const variations = componentRecord.variations ?? {};
    if (!isStringRecord(variations)) {
        fail('component.variations must map variation names to style names', '$.component.variations');
    }
    const properties = parseProperties(componentRecord.properties, '$.component.properties');

    const { example } = value;
    if (!isRecord(example) || typeof example.id !== 'string' || !example.id.trim()) {
        fail('Preview payload must contain example.id', '$.example.id');
    }
    const exampleRecord = example as Record<string, unknown>;
    const props = exampleRecord.props ?? {};
    if (!isRecord(props)) fail('example.props must be an object', '$.example.props');

    const rawTheme = value.theme ?? {};
    if (!isRecord(rawTheme)) fail('theme must map token ids to token values', '$.theme');
    const theme = Object.fromEntries(
        Object.entries(rawTheme as Record<string, unknown>).map(([tokenId, token]) => [
            tokenId,
            parseToken(token, `$.theme${pathKey(tokenId)}`),
        ]),
    );

    const { surface } = value;
    if (
        surface !== undefined &&
        (!isRecord(surface) || (surface.background !== undefined && typeof surface.background !== 'string'))
    ) {
        fail('surface.background must be a string', '$.surface');
    }
    const { defaults } = value;
    if (defaults !== undefined && !isRecord(defaults)) fail('defaults must be an object', '$.defaults');

    const styles = parseStyles(value.styles);
    checkStyleRefs(properties, styles);

    const payload: PreviewPayload = {
        protocolVersion: PREVIEW_PROTOCOL_VERSION,
        requestId,
        platform: 'WEB',
        assets: parseAssets(value.assets),
        theme,
        component: {
            id: (component as { id: string }).id,
            variations: variations as Record<string, string>,
            properties,
        },
        example: { id: (example as { id: string }).id, props: props as Record<string, JsonValue> },
        ...(surface !== undefined ? { surface: surface as PreviewPayload['surface'] } : {}),
        styles,
        ...(defaults !== undefined ? { defaults: defaults as PreviewPayload['defaults'] } : {}),
    };

    const preconverted = findPreconvertedCss(payload);
    if (preconverted) {
        fail(
            'Property values must be literals or token references in protocol units, not CSS strings converted by the client',
            preconverted,
        );
    }

    const resolved = resolvePayload(payload);
    return {
        requestId,
        componentId: payload.component.id,
        variations: payload.component.variations,
        example: payload.example,
        payload,
        resolved,
        warnings: resolved.warnings,
    };
};

/**
 * Проверка payload платформы `WEB` общего формата (схема контракта Preview Protocol DS Builder, тот же формат,
 * что `COMPOSE`):
 * свойства по каноническим именам с источниками `literal`/`tokenRef`/`styleRef`/`assetRef` и `states`, токены `theme`
 * в единицах протокола, `styles`, `surface`, `assets`. Затем payload разрешается в CSS (`resolvePayload`).
 * Старый формат — корневое поле `web` или значения, заранее переведённые в CSS, — отклоняется `invalid_payload`.
 */
export const parseWebPayload = (value: unknown): PayloadParseResult => {
    if (!isRecord(value)) {
        return {
            ok: false,
            requestId: '',
            code: 'invalid_payload',
            message: 'Preview payload must be an object',
            path: '$',
        };
    }
    const requestId = typeof value.requestId === 'string' ? value.requestId : '';
    try {
        return { ok: true, request: parse(value, requestId) };
    } catch (error) {
        if (error instanceof PayloadError) {
            return { ok: false, requestId, code: error.code, message: error.message, path: error.path };
        }
        throw error;
    }
};
