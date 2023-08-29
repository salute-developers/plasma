import type { DataObject, DataValue } from '../types';

import { escapeValue, join, getCSSVariableName } from './other';

const getNormalizedValue = (value: DataValue): string => {
    if (Array.isArray(value)) {
        return value.map((val) => val.origin).join(', ');
    }

    if (typeof value === 'object') {
        return value.origin as string;
    }

    return value as string;
};

/**
 * Преобразовать объект токенов в плоский объект,
 * где ключом выступает название CSS переменной, значением - значение переменной.
 * @param {object} obj
 * @param {string} prefix
 * @param {boolean?} withPrefixDesign
 * @param {boolean?} withKebabCase
 * @return {object}
 */
export const objectToCSSVariables = (
    obj: DataObject,
    prefix = '',
    withPrefixDesign?: boolean,
    withKebabCase?: boolean,
) =>
    Object.keys(obj)
        .filter((key) => key !== 'modes' && key !== 'comment')
        .reduce((vars, key) => {
            const name = join(prefix, key);
            const value = obj[key] || '';

            if (typeof value !== 'object' || 'origin' in value || Array.isArray(value)) {
                const newValue = getNormalizedValue(value);

                vars[getCSSVariableName(name, withPrefixDesign, withKebabCase)] = escapeValue(newValue);

                return vars;
            }

            vars = {
                ...vars,
                ...objectToCSSVariables(value, name, withPrefixDesign),
            };

            return vars;
        }, {} as Record<string, string | number>);
