import { coreConfigExportName, coreTokensExportName } from '@sddsjs/design-system-builder-generator/web-mapping';
import type { CoreExportNames } from '@sddsjs/design-system-builder-generator/web-mapping';
import * as plasmaCore from '@salutejs/plasma-new-hope/styled-components';

import componentManifests from './generated/component-manifests.json';

/**
 * Имена CSS-переменных ядра по объектам токенов компонентов: `getCSSVariableName`/`toCSSVariables` бывшего
 * React-превью клиента. Объект токенов и базовый конфиг ядра компонента находятся по манифестам генератора
 * (`dsbuilder-web-generator manifests`, `src/generated/component-manifests.json`) теми же функциями, что у генератора:
 * `TabItem` → `tabsTokens`, `Skeleton` → `lineSkeletonConfig`, остальные — `<component>Tokens`/`<component>Config`.
 */

const manifests = componentManifests as Record<string, CoreExportNames>;

const coreExports = plasmaCore as Record<string, unknown>;

/** Объект токенов ядра компонента: экспорт из манифеста генератора или `<component>Tokens`. */
export const getCoreTokens = (componentName: string): Record<string, string> | undefined =>
    coreExports[coreTokensExportName(componentName, manifests[componentName])] as Record<string, string> | undefined;

/** Базовый конфиг компонента в ядре: экспорт из манифеста генератора или `<component>Config`. */
export const getCoreConfig = (componentName: string): unknown =>
    coreExports[coreConfigExportName(componentName, manifests[componentName])];

const upperFirstLetter = (value: string) => `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

/** `camelToKebab` клиента DS Builder: имена CSS-переменных совпадают с прежним React-превью. */
export const camelToKebab = (str?: string) => {
    if (!str) {
        return '';
    }

    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
        .toLowerCase();
};

/**
 * Имя CSS-переменной для ключа web-параметра. Сначала ищем её в объекте токенов ядра компонента: у части компонентов
 * имена переменных не выводятся из ключа. Если объекта нет или ключа в нём нет — строим имя по схеме
 * `--plasma-<component>-<key>` (`backgroundColorHover` → `--plasma-button-background-color-hover`).
 */
export const getCSSVariableName = (componentName: string, tokenKey: string, coreTokens?: Record<string, string>) => {
    const cssVariable = coreTokens?.[tokenKey];

    if (typeof cssVariable === 'string' && cssVariable.trim().startsWith('--')) {
        return cssVariable.trim();
    }

    const formatted = upperFirstLetter(tokenKey).startsWith(componentName)
        ? upperFirstLetter(tokenKey)
        : `${componentName}${upperFirstLetter(tokenKey)}`;

    return camelToKebab(`--plasma${formatted}`);
};

/** Значения по ключам web-параметров → значения по именам CSS-переменных ядра. */
export const toCSSVariables = (
    componentName: string,
    values: Record<string, string> | null | undefined,
    coreTokens?: Record<string, string>,
) =>
    Object.entries(values ?? {}).reduce<Record<string, string>>(
        (acc, [key, value]) => ({ ...acc, [getCSSVariableName(componentName, key, coreTokens)]: value }),
        {},
    );

/**
 * Web-параметры компонента (`component.properties`, связанные компоненты) → CSS-переменные ядра по его объекту
 * токенов.
 */
export const toCoreCssVariables = (componentName: string, properties: Record<string, string> | null | undefined) =>
    toCSSVariables(componentName, properties, getCoreTokens(componentName));

/**
 * Шаблоны ядра в значении свойства (`calc(var(${avatarTokens.avatarSize}) …)`) → имена CSS-переменных из экспорта ядра,
 * как при генерации пакета. Неизвестный объект или ключ остаётся как есть и попадает в `unresolved`.
 */
export const resolveCoreTemplates = (value: string) => {
    const unresolved: string[] = [];
    const resolved = value.replace(/\$\{(\w+)\.(\w+)\}/g, (template, objectName: string, key: string) => {
        const tokens = coreExports[objectName] as Record<string, unknown> | undefined;
        const name = tokens?.[key];
        if (typeof name === 'string') return name;
        unresolved.push(template);
        return template;
    });
    return { value: resolved, unresolved };
};
