import { afterShortWord, dash, quotes, withProtectedUrls } from './rules';

export { afterShortWord, applyQuotes, dash, quotes } from './rules';
export type { QuotesState } from './rules';

export type TypographRule = (text: string) => string;

export interface TypographProps {
    /**
     * `true` или не передан — дефолтные правила и правила из `addTypographRule`.
     * `false` — без обработки. Массив — полный пайплайн только для этого компонента.
     */
    typograph?: boolean | TypographRule[];
}

export const cyrillicTypographRules: TypographRule[] = [quotes, afterShortWord, dash];

export const latinTypographRules: TypographRule[] = [quotes, dash];

export const defaultTypographRules: TypographRule[] = [...cyrillicTypographRules];

const DEFAULT_LOCALE = 'ru';

let typographLocale = DEFAULT_LOCALE;
let activeRules: TypographRule[] = [...defaultTypographRules];
let extraRules: TypographRule[] = [];

const getTypographRules = (): TypographRule[] => [...activeRules, ...extraRules];

const isLatinLocale = (locale: string): boolean => locale.split(/[-_]/)[0].toLowerCase() === 'en';

const rulesForLocale = (locale: string): TypographRule[] =>
    isLatinLocale(locale) ? latinTypographRules : cyrillicTypographRules;

export const getTypographLocale = (): string => typographLocale;

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
 * Снимает встроенные преобразования: NBSP → пробел, ёлочки и лапки → прямые кавычки.
 * Кастомные правила и тире не откатывает.
 */
export const detypograph = (text: string): string => text.replace(/\u00A0/g, ' ').replace(/[«»„“]/g, '"');

/**
 * Добавляет правило в конец пайплайна для компонентов, обёрнутых в `withTypograph`.
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

/**
 * Выбирает пресет по локали: `en` и `en-*` — без висячих предлогов,
 * остальные языки — кириллический набор. Сбрасывает правила из `addTypographRule`.
 * Вызывать на бутстрапе приложения.
 */
export const setTypographLocale = (locale: string): void => {
    typographLocale = locale;
    setTypographRules(rulesForLocale(locale));
};
