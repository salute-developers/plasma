import { css } from '@linaria/core';

import { addFocus } from '../../../../mixins';
import { classes, tokens } from '../../Radiobox.tokens';

export const base = css`
    .${classes.radioboxTrigger} {
        ${addFocus({
            outlineOffset: '0',
            outlineSize: '0.125rem',
            outlineRadius: `var(${tokens.triggerBorderRadius})`,
            outlineColor: 'transparent',
        })}
    }

    input[data-focus-visible-added] + label .${classes.radioboxTrigger} {
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

    input[data-focus-visible-added]:checked + label .${classes.radioboxTrigger} {
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
