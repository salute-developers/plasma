const cssVariableRegExp = /^\s*var\(\s*(--[\w-]+)/;

/**
 * Возвращает цвет для состояния (hover, active) на основе переданного цвета.
 * Для токена вида `var(--surface-accent, ...)` вернёт `var(--surface-accent-hover, var(--surface-accent, ...))`,
 * для остальных значений вернёт сам цвет.
 */
export const getStateColor = (color: string | undefined, state: 'hover' | 'active') => {
    if (!color) {
        return undefined;
    }

    const match = color.match(cssVariableRegExp);

    if (!match) {
        return color;
    }

    return `var(${match[1]}-${state}, ${color})`;
};
