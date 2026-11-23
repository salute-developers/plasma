import { css } from '@salutejs/plasma-new-hope/styled-components';

import type { ResolvedRelatedComponent } from './protocol';

/**
 * CSS-блок из CSS-переменных, как `toCSS` в `createThemeConfig` клиента
 * клиента DS Builder: `css` вызывается с массивом-шаблоном из одной строки.
 */
const toCSS = (vars: Record<string, string>) => {
    const entries = Object.entries(vars);

    if (entries.length === 0) {
        return css``;
    }

    const text = entries.map(([name, value]) => `${name}: ${value};`).join('\n');
    const template = (Object.assign([text], { raw: [text] }) as unknown) as TemplateStringsArray;

    return css(template);
};

const mapValues = <T, R>(record: Record<string, T>, map: (value: T) => R): Record<string, R> =>
    Object.fromEntries(Object.entries(record).map(([key, value]) => [key, map(value)]));

/**
 * Конфиг темы связанного компонента из CSS-переменных ядра (`resolvePayload` → `relatedComponents`), как
 * `createThemeConfig` прежнего клиента: стили по умолчанию, CSS по каждому стилю каждой вариации и CSS инвариантов.
 */
export const createThemeConfig = (values: ResolvedRelatedComponent) => ({
    defaults: { ...values.defaults },
    variations: mapValues(values.variations, (styles) => mapValues(styles, (styleValues) => toCSS(styleValues))),
    invariants: toCSS(values.invariants),
});
