import { toCoreCssVariables } from '../cssVariables';
import type { PreviewPayload, PreviewPropertyValue, ResolvedPreview } from '../protocol';

import { apiMeta } from './api-meta';
import { indexMeta } from './meta';
import type { ApiMeta, MetaIndex } from './meta';
import { resolveComponentParams } from './properties';
import type { ResolveContext } from './properties';
import { groupRelatedStyles, resolveComposeVariables, resolveRelatedComponents } from './related';
import { indexTemplates, webAdapter } from './templates';
import type { WebAdapter } from './templates';
import { bodyFontFamily, fontFaces, surfaceBackground, themeVariables, uniqueFontFamilies } from './theme';
import { pathKey, WarningSink } from './warnings';

export type { ApiMeta, ApiMetaComponent, ApiMetaParam } from './meta';
export type { WebAdapter, WebAdapterEntry } from './templates';
export { apiMeta } from './api-meta';
export { indexMeta } from './meta';
export { webAdapter } from './templates';

/**
 * Перевод payload общего формата в стили web-библиотеки — чистая функция без DOM и React:
 * - свойства компонента по мете (`meta.ts`) → ключи ядра, значения — из литералов и токенов `theme`
 *   (`tokens.ts`, `typography.ts`) с шаблонами `web-adapter.json` (`templates.ts`), ключи → CSS-переменные ядра
 *   по объектам токенов (`cssVariables.ts`);
 * - окружение story: переменные цветов темы, фон, шрифт тела, `@font-face` (`theme.ts`);
 * - связанные компоненты из `styles` и общие переменные зависимостей `compose` (`related.ts`).
 * Порядок перекрытия `variables` — как у прежнего React-превью клиента: `compose`-зависимости, компонент, тема.
 */
export const resolvePayload = (
    source: PreviewPayload,
    meta: ApiMeta = apiMeta,
    adapter: WebAdapter = webAdapter,
): ResolvedPreview => {
    const payload = { ...source, theme: uniqueFontFamilies(source.theme, source.assets) };
    const warnings = new WarningSink();
    const ctx: ResolveContext = {
        meta: indexMeta(meta),
        templates: indexTemplates(adapter),
        theme: payload.theme,
        warnings,
    };
    const component = payload.component.id;

    const componentVariables = toCoreCssVariables(
        component,
        resolveComponentParams(component, payload.component.properties, ctx, '$.component.properties'),
    );
    const groups = groupRelatedStyles(payload.styles);
    const relatedVariables = resolveComposeVariables(
        component,
        payload.component.variations,
        groups,
        payload.styles,
        ctx,
    );
    const relatedComponents = resolveRelatedComponents(component, groups, payload.styles, ctx);
    const themeVars = themeVariables(payload.theme);
    const fontFamily = bodyFontFamily(payload);
    const background = surfaceBackground(payload);
    const fonts = fontFaces(payload, warnings);

    return {
        variables: { ...relatedVariables, ...componentVariables, ...themeVars },
        componentVariables,
        relatedVariables,
        themeVariables: themeVars,
        relatedComponents,
        fontFaces: fonts.rules,
        fontLoads: fonts.loads,
        ...(fontFamily ? { fontFamily } : {}),
        ...(background ? { background } : {}),
        warnings: warnings.list,
    };
};

/** CSS-значение в строке: единицы (`3rem`, `12px`) или функции CSS (`var(…)`, `calc(…)`, `rgba(…)`, градиенты). */
const CSS_STRING = /(^|[\s(,])-?\d*\.?\d+(rem|px|em|vh|vw)\b|\b(var|calc|rgba?|hsla?|linear-gradient|radial-gradient)\(/i;

/** Типы параметров меты, которые в payload — числа протокола: пользователь может задать их выражением CSS. */
const NUMERIC_PARAM_TYPES = new Set(['dimension', 'float', 'integer']);

/** Выражение CSS, введённое пользователем в числовое поле, а не число, переведённое клиентом (`3rem`). */
const CSS_EXPRESSION = /^(calc|var|min|max|clamp)\(/i;

/**
 * Значение свойства, заранее переведённое в CSS (старый формат `WEB`): строковый литерал с единицами или функциями
 * CSS у свойства, параметр которого в мете не `value`, или у свойства, названного ключом ядра компонента
 * (`buttonBackgroundColorHover`). У параметров типа `value` CSS-строка — нормальное значение (`0 0.5rem`, `auto`).
 * У свойства из меты с числовым параметром выражение (`calc(100% - 8px)`, `var(--chip-width)`) — тоже значение.
 * Возвращает путь первого такого значения.
 */
export const findPreconvertedCss = (payload: PreviewPayload, meta: ApiMeta = apiMeta): string | undefined => {
    const index: MetaIndex = indexMeta(meta);
    const check = (component: string, properties: Record<string, PreviewPropertyValue>, path: string) => {
        const componentMeta = index.get(component);
        for (const [name, value] of Object.entries(properties)) {
            const propertyMeta = componentMeta?.properties.get(name);
            const params = propertyMeta ? [...propertyMeta.base, ...[...propertyMeta.states.values()].flat()] : [];
            const expectsCss = propertyMeta
                ? params.some((param) => param.type === 'value')
                : !componentMeta?.paramNames.has(name);
            // eslint-disable-next-line no-continue
            if (expectsCss) continue;
            const acceptsExpression = params.some((param) => NUMERIC_PARAM_TYPES.has(param.type));
            const sources = [
                ['base', value.base] as const,
                ...(value.states ?? []).map((entry, i) => [`states[${i}].source`, entry.source] as const),
            ];
            for (const [suffix, source] of sources) {
                // eslint-disable-next-line no-continue
                if (source.type !== 'literal' || typeof source.value !== 'string') continue;
                // eslint-disable-next-line no-continue
                if (acceptsExpression && CSS_EXPRESSION.test(source.value.trim())) continue;
                if (CSS_STRING.test(source.value)) {
                    return `${path}${pathKey(name)}.${suffix}.value`;
                }
            }
        }
        return undefined;
    };

    return (
        check(payload.component.id, payload.component.properties, '$.component.properties') ??
        Object.entries(payload.styles)
            .map(([styleId, style]) =>
                check(style.component, style.properties, `$.styles${pathKey(styleId)}.properties`),
            )
            .find(Boolean)
    );
};
