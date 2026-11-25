import { composeOf, webAdapter } from '@sddsjs/design-system-builder-generator/web-mapping';

import { toCoreCssVariables } from '../cssVariables';
import type { PreviewPropertyValue, PreviewStyle, ResolvedRelatedComponent } from '../protocol';

import { resolveComponentParams } from './properties';
import type { ResolveContext } from './properties';
import { pathKey } from './warnings';

/** Записи `styles` одного связанного компонента, разложенные по вариациям. */
export interface RelatedStyles {
    /** Вариация → имя стиля по умолчанию (`default: true`). */
    defaults: Record<string, string>;
    /** Вариация → имя стиля → идентификатор записи `styles`. */
    variations: Record<string, Record<string, string>>;
    /** Идентификаторы записей инвариантов. */
    invariants: string[];
}

/**
 * Связанные компоненты из `styles`: записи с `variation` и `name` — стили вариаций, с `invariant: true` — инварианты.
 * Записи без этих полей — вложенные стили для `styleRef`, они сюда не входят. Порядок — порядок записей.
 */
export const groupRelatedStyles = (styles: Record<string, PreviewStyle>): Map<string, RelatedStyles> => {
    const groups = new Map<string, RelatedStyles>();
    const groupOf = (component: string) => {
        const group = groups.get(component) ?? { defaults: {}, variations: {}, invariants: [] };
        groups.set(component, group);
        return group;
    };
    for (const [styleId, style] of Object.entries(styles)) {
        if (style.invariant) {
            groupOf(style.component).invariants.push(styleId);
        } else if (style.variation && style.name) {
            const group = groupOf(style.component);
            group.variations[style.variation] = { ...group.variations[style.variation], [style.name]: styleId };
            if (style.default) group.defaults[style.variation] = style.name;
        }
    }
    return groups;
};

/** CSS-переменные ядра компонента по свойствам одной или нескольких записей `styles` (поздняя перекрывает раннюю). */
const stylesToCssVariables = (
    component: string,
    styleIds: string[],
    styles: Record<string, PreviewStyle>,
    ctx: ResolveContext,
): Record<string, string> =>
    styleIds.reduce<Record<string, string>>((acc, styleId) => {
        const properties: Record<string, PreviewPropertyValue> = styles[styleId]?.properties ?? {};
        const params = resolveComponentParams(component, properties, ctx, `$.styles${pathKey(styleId)}.properties`);
        return { ...acc, ...toCoreCssVariables(component, params) };
    }, {});

/**
 * Конфиги связанных компонентов для пропса story `relatedComponents`, как `createThemeConfig` прежнего клиента:
 * стиль по умолчанию каждой вариации, CSS-переменные ядра по каждому стилю каждой вариации и по инвариантам.
 * Родители по `compose` (`Tabs` у `TabItem`) в конфиги не входят: от них нужны только общие переменные.
 */
export const resolveRelatedComponents = (
    component: string,
    groups: Map<string, RelatedStyles>,
    styles: Record<string, PreviewStyle>,
    ctx: ResolveContext,
): Record<string, ResolvedRelatedComponent> =>
    Object.fromEntries(
        [...groups]
            .filter(([related]) => !composeParents(component).includes(related))
            .map(([component, group]): [string, ResolvedRelatedComponent] => [
                component,
                {
                    defaults: { ...group.defaults },
                    variations: Object.fromEntries(
                        Object.entries(group.variations).map(([variation, byName]) => [
                            variation,
                            Object.fromEntries(
                                Object.entries(byName).map(([name, styleId]) => [
                                    name,
                                    stylesToCssVariables(component, [styleId], styles, ctx),
                                ]),
                            ),
                        ]),
                    ),
                    invariants: stylesToCssVariables(component, group.invariants, styles, ctx),
                },
            ]),
    );

/**
 * Зависимости `compose` дизайн-системы (`component_deps.type = compose`): дочерний компонент живёт внутри родителя и
 * делит с ним CSS-переменные ядра (`Tabs` → `TabItem` на `tabsTokens`). В `styles` тип зависимости не передаётся,
 * поэтому пары берутся из `compose` записей `web-adapter.json` пакета генератора.
 */
export const composeDependencies: Record<string, string[]> = Object.fromEntries(
    webAdapter
        .filter((entry) => entry.compose?.length)
        .map((entry) => [entry.name, composeOf(entry, webAdapter).map((child) => child.name)]),
);

/** Родители выбранного компонента по `compose`. */
export const composeParents = (component: string): string[] =>
    Object.entries(composeDependencies)
        .filter(([, children]) => children.includes(component))
        .map(([parent]) => parent);

/** Связанные `compose` выбранного компонента в обе стороны: сначала дочерние, затем родители. */
export const composeRelatives = (component: string): string[] => [
    ...(composeDependencies[component] ?? []),
    ...composeParents(component),
];

/**
 * Общие CSS-переменные зависимостей `compose`, правило `createRelatedComponentVars` прежнего клиента: у связанного
 * компонента выбираются его стили по умолчанию, а в вариации с тем же именем, что у выбранного компонента, — стиль
 * с тем же именем, что выбран у него. Значения выбранных стилей (в порядке вариаций), затем инвариантов переводятся
 * в CSS-переменные ядра связанного компонента; следующий связанный перекрывает предыдущий.
 * Для зависимостей `reuse` переменные не задаются: им story передаёт полный конфиг через `relatedComponents`.
 */
export const resolveComposeVariables = (
    component: string,
    selected: Record<string, string>,
    groups: Map<string, RelatedStyles>,
    styles: Record<string, PreviewStyle>,
    ctx: ResolveContext,
): Record<string, string> =>
    composeRelatives(component).reduce<Record<string, string>>((acc, relative) => {
        const group = groups.get(relative);
        if (!group) return acc;

        const args: Record<string, string> = { ...group.defaults };
        for (const [variation, styleName] of Object.entries(selected)) {
            if (group.variations[variation]?.[styleName]) args[variation] = styleName;
        }
        const styleIds = [
            ...Object.entries(args).flatMap(([variation, name]) => group.variations[variation]?.[name] ?? []),
            ...group.invariants,
        ];
        return { ...acc, ...stylesToCssVariables(relative, styleIds, styles, ctx) };
    }, {});
