import 'focus-visible';

export type FocusProps = {
    /**
     * Размер фокусной рамки
     */
    outlineSize?: string;
    /**
     * Отступ фокусной рамки от родителя
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
     * Уникальные css свойства для псевдо-элемента before при фокусе
     */
    customFocusRules?: string;
};

/**
 * Миксин для добавления фокусной рамки к элементу через псевдоэлемент before
 * @param {FocusProps} props
 * @example
 * // Выведет фокусную рамку размером 2em, скруглением 5em, отступом 2em и цветом 'rebeccapurple'.
 * addFocus({
 *  outlineSize: '2em',
 *  outlineOffset: '2em',
 *  outlineRadius: '5em',
 *  outlineColor: 'rebeccapurple',
 * });
 * @example
 * // Выведет outline размером 4em, скруглением 10px 1px, без отступа и цветом 'greenyellow'.
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
        outlineOffset = '-0.125rem',
        outlineColor = 'var(--plasma-colors-button-focused, var(--text-accent))',
        outlineRadius = 0,
    } = args;

    return `
        position: relative;

        &::before {
            content: '';

            position: absolute;
            top: ${outlineOffset};
            left: ${outlineOffset};
            right: ${outlineOffset};
            bottom: ${outlineOffset};

            display: block;
            box-sizing: content-box;

            border: ${outlineSize} solid transparent;
            border-radius: ${outlineRadius};

            transition: box-shadow 0.2s ease-in-out;

            pointer-events: none;
        }

        ${getCustomFocusStyle(outlineSize, outlineColor, customFocusRules)}
    `;
};

const getCustomFocusStyle = (outlineSize: string, outlineColor: string, customFocusRules?: string) => {
    if (!customFocusRules) {
        return `
            &.focus-visible:focus,
            &[data-focus-visible-added] {
                &::before {
                    outline: none;
                    box-shadow: 0 0 0 ${outlineSize} ${outlineColor};
                }
            }
        `;
    }

    return customFocusRules;
};
