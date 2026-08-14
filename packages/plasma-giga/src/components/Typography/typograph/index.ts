import { afterShortWord, dash, quotes, withProtectedUrls } from './rules';

export { afterShortWord, dash, quotes };

export type TypographRule = (text: string) => string;

export interface TypographProps {
    /**
     * `true` — дефолтные правила и правила из `addTypographRule`.
     * Массив — полный пайплайн только для этого компонента.
     */
    typograph?: boolean | TypographRule[];
}

export const defaultTypographRules: TypographRule[] = [quotes, afterShortWord, dash];

let activeRules: TypographRule[] = [...defaultTypographRules];
let extraRules: TypographRule[] = [];

const getTypographRules = (): TypographRule[] => [...activeRules, ...extraRules];

/**
 * Собирает пайплайн правил. URL на время обработки прячутся за плейсхолдеры.
 */
export const createTypograph = (rules: TypographRule[]): TypographRule =>
    withProtectedUrls((text) => rules.reduce((acc, rule) => rule(acc), text));

/**
 * Применяет типографику к строке.
 * Без второго аргумента используются текущие правила реестра.
 */
export const typograph = (text: string, rules: TypographRule[] = getTypographRules()): string =>
    createTypograph(rules)(text);

/**
 * Добавляет правило в конец пайплайна для `typograph={true}`.
 * Вызывать на бутстрапе приложения.
 */
export const addTypographRule = (rule: TypographRule): void => {
    extraRules = [...extraRules, rule];
};

/**
 * Полностью заменяет дефолтный набор правил и сбрасывает правила из `addTypographRule`.
 * Вызывать на бутстрапе приложения.
 */
export const setTypographRules = (rules: TypographRule[]): void => {
    activeRules = [...rules];
    extraRules = [];
};
