import 'focus-visible';

export type FocusProps = {
    /**
     * Размер фокусной рамки
     */
    outlineSize?: string;
    /**
     * Отступ фокусной рамки от родителя.
     * Отрицательное значение — рамка снаружи элемента, положительное — внутри.
     * Семантика аналогична CSS-свойству top/left/right/bottom у псевдоэлемента.
     */
    outlineOffset?: string;
    /**
     * Цвет фокусной рамки
     */
    outlineColor?: string;
    /**
     * Радиус фокусной рамки
     */
    outlineRadius?: string;
    /**
     * Применять анимации для отрисовки фокуса
     */
    hasTransition?: boolean;
    /**
     * Уникальные css свойства для псевдо-элемента before при фокусе
     */
    customFocusRules?: string;
};

/**
 * Миксин для добавления фокусной рамки к элементу через псевдоэлемент before.
 *
 * Псевдоэлемент позиционируется через inset: 0 (всегда в пределах родителя),
 * а визуальный отступ рамки реализуется через outline-offset. Это исключает влияние ::before на
 * scroll-область контейнера при любых значениях outlineOffset.
 *
 * @example
 * // Фокусная рамка снаружи элемента с отступом 2em, скруглением 5em, цветом 'rebeccapurple'.
 * addFocus({
 *  outlineSize: '2em',
 *  outlineOffset: '2em',
 *  outlineRadius: '5em',
 *  outlineColor: 'rebeccapurple',
 * });
 * @example
 * // Фокусная рамка без отступа, цветом 'greenyellow'.
 * addFocus({
 *  outlineSize: '4em',
 *  outlineOffset: '0',
 *  outlineRadius: '10em 1em',
 *  outlineColor: 'greenyellow',
 * });
 */
export const addFocus = (args: FocusProps) => {
    const {
        customFocusRules,
        outlineSize = '0.125rem',
        outlineOffset = '0.125rem',
        outlineColor = 'var(--plasma-colors-button-focused, var(--text-accent))',
        outlineRadius = '30px',
        hasTransition = true,
    } = args;

    return `
        position: relative;

        &::before {
            content: '';

            position: absolute;
            inset: 0;
            z-index: 1;

            border-radius: ${outlineRadius};

            outline: ${outlineSize} solid transparent;
            outline-offset: ${outlineOffset};

            transition: ${hasTransition ? 'outline-color 0.2s ease-in-out' : 'none'};

            pointer-events: none;
        }

        ${getCustomFocusStyle(outlineColor, customFocusRules)}
    `;
};

const getCustomFocusStyle = (outlineColor: string, customFocusRules?: string) => {
    if (!customFocusRules) {
        return `
            &.focus-visible:focus,
            &[data-focus-visible-added] {
                &::before {
                    outline-color: ${outlineColor};
                }
            }
        `;
    }

    return customFocusRules;
};
