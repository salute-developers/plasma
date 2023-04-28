import type { DataObject } from '../types';

import { escapeValue, join, getCSSVariableName } from './other';

/**
 * Преобразовать объект токенов в плоский объект,
 * где ключом выступает название CSS переменной, значением - значение переменной.
 * @param {object} obj
 * @param {string} prefix
 * @param {boolean?} withPrefixDesign
 * @return {object}
 */
export const objectToCSSVariables = (obj: DataObject, prefix = '', withPrefixDesign?: boolean) =>
    Object.keys(obj)
        .filter((key) => key !== 'modes' && key !== 'comment')
        .reduce((vars, key) => {
            const name = join(prefix, key);
            const value = obj[key] || '';

            if (typeof value !== 'object' || 'origin' in value) {
                const newValue = typeof value === 'object' && value.origin ? value.origin : value;

                vars[getCSSVariableName(name, withPrefixDesign)] = escapeValue(newValue as string);

                return vars;
            }

            vars = {
                ...vars,
                ...objectToCSSVariables(value, name, withPrefixDesign),
            };

            return vars;
        }, {} as Record<string, string | number>);
