import { DERIVED_STATE_TOKEN_SUFFIX } from '@sddsjs/design-system-builder-generator/web-mapping';

import { resolveCoreTemplates } from '../cssVariables';
import type { JsonValue, PreviewPropertySource, PreviewPropertyValue } from '../protocol';

import { stateParamFor } from './meta';
import type { ApiMetaParam, MetaIndex } from './meta';
import { applyTemplate, templateFor } from './templates';
import type { TemplateIndex } from './templates';
import { toCssColor, toRem, tokenToCss } from './tokens';
import type { ThemeTokens } from './tokens';
import { typographyPartFor, typographyValues } from './typography';
import type { TypographyValues } from './typography';
import { pathKey } from './warnings';
import type { WarningSink } from './warnings';

export interface ResolveContext {
    meta: MetaIndex;
    templates: TemplateIndex;
    theme: ThemeTokens;
    warnings: WarningSink;
}

/** Разрешённый источник: литерал (переводится по типу параметра), CSS-значение токена или типографика. */
type ResolvedSource =
    | { kind: 'literal'; value: JsonValue; alpha?: number }
    | { kind: 'css'; value: string; tokenType: string }
    | { kind: 'typography'; values: TypographyValues };

const isNumeric = (value: JsonValue): value is number | string =>
    (typeof value === 'number' && Number.isFinite(value)) ||
    (typeof value === 'string' && value.trim() !== '' && Number.isFinite(Number(value)));

/**
 * Литерал в CSS по типу параметра меты:
 * - `dimension`, `shape` — число px → `rem`; нечисловая строка (`auto`) — как есть;
 * - `color` — `#RRGGBBAA` с `alpha`, прочие строки (`transparent`) — как есть;
 * - `float`, `value` и остальные — строкой, без преобразований.
 * Пустая строка значения не даёт (как `createWebToken` прежнего клиента).
 */
const literalToCss = (value: JsonValue, type: string, alpha?: number): string | undefined => {
    if (value === null || typeof value === 'object') return undefined;
    if (value === '') return undefined;
    if ((type === 'dimension' || type === 'shape') && isNumeric(value)) return toRem(Number(value));
    if (type === 'color' && typeof value === 'string') return toCssColor(value, alpha);
    return String(value);
};

const resolveSource = (
    source: PreviewPropertySource,
    ctx: ResolveContext,
    path: string,
): ResolvedSource | undefined => {
    if (source.type === 'literal') {
        if (typeof source.value !== 'string' || !source.value.includes('${')) {
            return { kind: 'literal', value: source.value, alpha: source.alpha };
        }
        // Выражения ядра хранятся с шаблоном токенов (`var(${avatarTokens.avatarSize})`): в CSS он недействителен.
        const { value, unresolved } = resolveCoreTemplates(source.value);
        unresolved.forEach((template) =>
            ctx.warnings.add('incompatible_value', `Core template ${template} is not resolved`, path),
        );
        return { kind: 'literal', value, alpha: source.alpha };
    }
    if (source.type === 'tokenRef') {
        const token = ctx.theme[source.tokenId];
        if (!token) {
            ctx.warnings.add('missing_token', `Theme token ${source.tokenId} is missing`, path);
            return undefined;
        }
        if (token.type === 'typography') return { kind: 'typography', values: typographyValues(token, ctx.theme) };
        const value = tokenToCss(source.tokenId, token, ctx.theme, source.alpha);
        return value === undefined ? undefined : { kind: 'css', value, tokenType: token.type };
    }
    ctx.warnings.add('unsupported_source', `Source ${source.type} is not supported by the web preview plugin`, path);
    return undefined;
};

/** Значение источника для одного параметра ядра; шаблон `web-adapter.json` применяется к значению. */
const valueForParam = (
    resolved: ResolvedSource,
    param: ApiMetaParam,
    component: string,
    property: string,
    ctx: ResolveContext,
    path: string,
): string | undefined => {
    if (param.type === 'typography') {
        const part = typographyPartFor(param.paramName, param.part);
        if (resolved.kind === 'typography') return part ? resolved.values[part] : undefined;
        if (resolved.kind === 'css' && resolved.tokenType === 'fontFamily') {
            return part === 'fontFamily' ? resolved.value : undefined;
        }
        if (resolved.kind === 'literal' && typeof resolved.value === 'string' && resolved.value) return resolved.value;
        ctx.warnings.add('incompatible_value', `Property ${property} of ${component} needs a typography token`, path);
        return undefined;
    }
    if (resolved.kind === 'typography') {
        ctx.warnings.add(
            'incompatible_value',
            `Property ${property} of ${component} does not accept a typography token`,
            path,
        );
        return undefined;
    }
    const value = resolved.kind === 'css' ? resolved.value : literalToCss(resolved.value, param.type, resolved.alpha);
    if (value === undefined) {
        if (resolved.kind === 'literal' && resolved.value !== '') {
            ctx.warnings.add('incompatible_value', `Literal of ${property} of ${component} has no CSS value`, path);
        }
        return undefined;
    }
    const template = templateFor(ctx.templates, component, property, param.paramName);
    return template ? applyTemplate(template, [value]) : value;
};

const writeSource = (
    target: Record<string, string>,
    params: ApiMetaParam[],
    source: PreviewPropertySource,
    component: string,
    property: string,
    ctx: ResolveContext,
    path: string,
) => {
    const resolved = resolveSource(source, ctx, path);
    if (!resolved) return;
    for (const param of params) {
        const value = valueForParam(resolved, param, component, property, ctx, path);
        if (value !== undefined) target[param.paramName] = value;
    }
};

/**
 * Производные токены состояний темы web (`DERIVED_STATE_TOKEN_SUFFIX`): у цвета `<токен>-hover` для наведения и
 * `<токен>-active` для нажатия.
 * Применяются, когда у свойства с базой `tokenRef` нет записи `states` для этого состояния, а токен есть в теме:
 * под тем же именем (`surface.default.accent-hover`) или среди цветов окружения с режимом
 * (`dark.surface.default.accent-hover`; в payload один режим).
 */
const findColorToken = (theme: ResolveContext['theme'], tokenId: string): string | undefined => {
    if (theme[tokenId]?.type === 'color') return tokenId;
    const depth = tokenId.split('.').length + 1;
    return Object.keys(theme).find(
        (id) => id.endsWith(`.${tokenId}`) && id.split('.').length === depth && theme[id]?.type === 'color',
    );
};

const derivedStateSources = (
    value: PreviewPropertyValue,
    ctx: ResolveContext,
): Array<{ state: string; source: PreviewPropertySource }> => {
    const { base } = value;
    if (base.type !== 'tokenRef' || ctx.theme[base.tokenId]?.type !== 'color') return [];
    const explicit = new Set(
        (value.states ?? []).filter((entry) => entry.when.length === 1).map((entry) => entry.when[0]),
    );
    return Object.entries(DERIVED_STATE_TOKEN_SUFFIX).flatMap(([state, suffix]) => {
        const tokenId = explicit.has(state) ? undefined : findColorToken(ctx.theme, `${base.tokenId}${suffix}`);
        return !tokenId
            ? []
            : [
                  {
                      state,
                      source: {
                          type: 'tokenRef' as const,
                          tokenId,
                          ...(base.alpha !== undefined ? { alpha: base.alpha } : {}),
                      },
                  },
              ];
    });
};

/**
 * Свойства компонента по каноническим именам → значения ключей ядра (`paramName` меты → CSS):
 * - базовое значение пишется во все параметры свойства без состояния;
 * - каждая запись `states` с одним состоянием — в параметры этого состояния (`stateParamFor`), более поздняя запись
 *   того же состояния перекрывает раннюю; комбинации состояний CSS-переменными ядра не выражаются и пропускаются
 *   с предупреждением;
 * - у цвета с базой `tokenRef` состояния `hovered`/`pressed` без записи `states` берутся из производных токенов темы
 *   (`<токен>-hover`/`-active`), если они есть; без параметра состояния в мете — молча пропускаются;
 * - свойство без параметров в мете компонента не пишется, предупреждение `unmapped_property`.
 * Свойства обходятся по имени, как `Props.getList()` прежнего клиента.
 */
export const resolveComponentParams = (
    component: string,
    properties: Record<string, PreviewPropertyValue>,
    ctx: ResolveContext,
    path: string,
): Record<string, string> => {
    const componentMeta = ctx.meta.get(component);
    const result: Record<string, string> = {};

    for (const name of Object.keys(properties).sort((a, b) => a.localeCompare(b))) {
        const value = properties[name];
        const propertyPath = `${path}${pathKey(name)}`;
        const propertyMeta = componentMeta?.properties.get(name);
        if (!propertyMeta) {
            ctx.warnings.add(
                'unmapped_property',
                `Property ${name} of ${component} has no web parameter in the API meta`,
                propertyPath,
            );
            // eslint-disable-next-line no-continue
            continue;
        }

        if (propertyMeta.base.length) {
            writeSource(result, propertyMeta.base, value.base, component, name, ctx, `${propertyPath}.base`);
        }

        (value.states ?? []).forEach((entry, index) => {
            const statePath = `${propertyPath}.states[${index}]`;
            if (entry.when.length !== 1) {
                ctx.warnings.add(
                    'unsupported_state',
                    `State combination ${entry.when.join('+')} of ${component}.${name} has no web parameter`,
                    statePath,
                );
                return;
            }
            const [state] = entry.when;
            const params = propertyMeta.base.length
                ? propertyMeta.base.flatMap((base) => stateParamFor(propertyMeta, base, state) ?? [])
                : propertyMeta.states.get(state) ?? [];
            if (!params.length) {
                ctx.warnings.add(
                    'unsupported_state',
                    `State ${state} of ${component}.${name} has no web parameter in the API meta`,
                    statePath,
                );
                return;
            }
            writeSource(result, params, entry.source, component, name, ctx, `${statePath}.source`);
        });

        if (propertyMeta.base.length) {
            for (const { state, source } of derivedStateSources(value, ctx)) {
                const params = propertyMeta.base.flatMap((base) => stateParamFor(propertyMeta, base, state) ?? []);
                if (params.length) writeSource(result, params, source, component, name, ctx, `${propertyPath}.base`);
            }
        }
    }

    return result;
};
