import type { WebAdapter } from '@sddsjs/design-system-builder-generator/web-mapping';

export { applyTemplate, webAdapter } from '@sddsjs/design-system-builder-generator/web-mapping';
export type { WebAdapter, WebAdapterEntry } from '@sddsjs/design-system-builder-generator/web-mapping';

/** Компонент → `свойство\0ключ ядра` → шаблон. */
export type TemplateIndex = Map<string, Map<string, string>>;

const templateKey = (property: string, param: string) => `${property}\u0000${param}`;

const indexCache = new WeakMap<WebAdapter, TemplateIndex>();

/**
 * Индекс шаблонов. Шаблон принадлежит конфигурации компонента, а плагин её не знает, поэтому берётся первый
 * найденный по конфигурациям в порядке файла — как `templateLookup` клиента, который шёл по конфигурациям компонента.
 */
export const indexTemplates = (adapter: WebAdapter): TemplateIndex => {
    const cached = indexCache.get(adapter);
    if (cached) return cached;

    const index: TemplateIndex = new Map();
    for (const entry of adapter) {
        const templates = index.get(entry.name) ?? new Map<string, string>();
        for (const style of Object.values(entry.styles ?? {})) {
            for (const [property, params] of Object.entries(style?.templates ?? {})) {
                for (const [param, template] of Object.entries(params)) {
                    const key = templateKey(property, param);
                    if (template && !templates.has(key)) templates.set(key, template);
                }
            }
        }
        if (templates.size) index.set(entry.name, templates);
    }
    indexCache.set(adapter, index);
    return index;
};

export const templateFor = (index: TemplateIndex, component: string, property: string, param: string) =>
    index.get(component)?.get(templateKey(property, param));
