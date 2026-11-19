import { STATE_PARAM_SUFFIX } from '@sddsjs/design-system-builder-generator/web-mapping';
import type { ApiMeta, ApiMetaParam } from '@sddsjs/design-system-builder-generator/web-mapping';

export type { ApiMeta, ApiMetaComponent, ApiMetaParam } from '@sddsjs/design-system-builder-generator/web-mapping';

/** Параметры ядра одного свойства: без состояния и по каждому состоянию в порядке меты. */
export interface PropertyMeta {
    id: string;
    base: ApiMetaParam[];
    states: Map<string, ApiMetaParam[]>;
}

export interface ComponentMeta {
    properties: Map<string, PropertyMeta>;
    /** Все ключи ядра компонента: по ним узнаётся старый формат, где свойства назывались ключами ядра. */
    paramNames: Set<string>;
}

export type MetaIndex = Map<string, ComponentMeta>;

const indexCache = new WeakMap<ApiMeta, MetaIndex>();

/** Индекс меты: компонент → свойство → параметры ядра без состояния и по состояниям. */
export const indexMeta = (meta: ApiMeta): MetaIndex => {
    const cached = indexCache.get(meta);
    if (cached) return cached;

    const index: MetaIndex = new Map();
    for (const component of meta) {
        const properties = new Map<string, PropertyMeta>();
        const paramNames = new Set<string>();
        for (const param of component.params) {
            paramNames.add(param.paramName);
            const property: PropertyMeta = properties.get(param.id) ?? { id: param.id, base: [], states: new Map() };
            if (param.state) {
                property.states.set(param.state, [...(property.states.get(param.state) ?? []), param]);
            } else {
                property.base.push(param);
            }
            properties.set(param.id, property);
        }
        index.set(component.componentName, { properties, paramNames });
    }
    indexCache.set(meta, index);
    return index;
};

/**
 * Ключ ядра параметра `base` в состоянии `state`:
 * - параметр меты с этим состоянием и именем `<base>Hover`/`<base>Active`;
 * - единственный параметр меты с этим состоянием у свойства с одним параметром без состояния;
 * - у типографики — параметр состояния с тем же полем (`fontWeight` → `fontWeightSelected`);
 * - у цвета, если меты нет, — `<base>Hover`/`<base>Active`, как прежний клиент (`ColorProp` и
 *   `getAdditionalTokens`): состояния там были только у цветов.
 */
export const stateParamFor = (property: PropertyMeta, base: ApiMetaParam, state: string): ApiMetaParam | undefined => {
    const candidates = property.states.get(state) ?? [];
    const suffix = STATE_PARAM_SUFFIX[state];
    const exact = suffix ? candidates.find((item) => item.paramName === `${base.paramName}${suffix}`) : undefined;
    if (exact) return exact;
    if (property.base.length === 1 && candidates.length === 1) return candidates[0];
    if (base.part) {
        const samePart = candidates.find((item) => item.part === base.part);
        if (samePart) return samePart;
        return undefined;
    }
    if (suffix && base.type === 'color') {
        return { ...base, paramName: `${base.paramName}${suffix}`, state };
    }
    return undefined;
};
