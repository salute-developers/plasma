import { css } from '@linaria/core';

import { addFocus } from '../../../../mixins';
import { classes, tokens } from '../../Checkbox.tokens';

/**
 * INFO: на 36 строке нет возможности использвать .${classes.checkboxTrigger},
 * потому что линтер правит селектор и он применяется некорректно
 */

export const base = css`
    .${classes.checkboxTrigger} {
        ${addFocus({
            outlineOffset: '0',
            outlineSize: '0.125rem',
            outlineRadius: `var(${tokens.triggerBorderRadius})`,
            outlineColor: 'transparent',
        })}
    }

    input[data-focus-visible-added] + label .${classes.checkboxTrigger} {
        border-color: transparent;
        ${addFocus({
            outlineOffset: '-0.125rem',
            outlineSize: '0.125rem',
            outlineRadius: `var(${tokens.triggerBorderRadius})`,
            outlineColor: `var(${tokens.focusColor})`,
            customFocusRules: `
                &::before {
                    box-shadow: 0 0 0 0.125rem var(${tokens.focusColor});
                }
            `,
        })}
    }

    input[data-focus-visible-added]:checked + label .checkbox-trigger,
    input[type='checkbox'][data-focus-visible-added]:indeterminate + label .${classes.checkboxTrigger} {
        ${addFocus({
            outlineOffset: '-0.125rem',
            outlineSize: '0.063rem',
            outlineRadius: `calc(var(${tokens.triggerBorderRadius}) + 0.125rem)`,
            outlineColor: `var(${tokens.focusColor})`,
            customFocusRules: `
                &::before {
                    box-shadow: 0 0 0 0.063rem var(${tokens.focusColor});
                }
            `,
        })}
    }
`;
