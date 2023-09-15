import { DESIGN_SYSTEM_PREFIX } from '../constants';
import { Shadow } from '../types';

/**
 * В строковых значениях токенов встречаются нежелательные символы,
 * их нужно очищать перед размещением в CSS Var или JSON.
 * @param {string|number} value
 * @return {string|number}
 */
export const escapeValue = <T = string | number>(value: T) => {
    if (typeof value === 'string') {
        return value.replace(/\s+/g, ' ');
    }
    return value;
};

export const toKebab = (k: string) => k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

export const join = (...args: (string | undefined)[]) => args.filter(Boolean).join('-');

export const getCSSVariableName = (key: string, withDesignPrefix = true, withKebabCase = false) => {
    const variable = withKebabCase ? toKebab(key) : key;
    return withDesignPrefix ? `--${DESIGN_SYSTEM_PREFIX}-${variable}` : `--${variable}`;
};

export const getBoxShadow = (shadows: Array<Shadow>) => shadows.map(({ origin }) => origin);
