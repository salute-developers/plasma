import { css } from '@linaria/core';

import { addFocus } from '../../../mixins';

export const base = css`
    .checkbox-trigger {
        ${addFocus({
            outlineOffset: '0',
            outlineSize: '0.125rem',
            outlineRadius: 'var(--plasma-checkbox-trigger-border-radius)',
            outlineColor: 'transparent',
        })}
    }

    input[data-focus-visible-added] + label .checkbox-trigger {
        border-color: transparent;
        ${addFocus({
            outlineOffset: '-0.188rem',
            outlineSize: '0.125rem',
            outlineRadius: 'var(--plasma-checkbox-trigger-border-radius)',
            outlineColor: 'var(--plasma-checkbox-focus-color)',
            customFocusRules: `
                &::before {
                    box-shadow: 0 0 0 0.125rem var(--plasma-checkbox-focus-color);
                }
            `,
        })}
    }

    input[data-focus-visible-added]:checked + label .checkbox-trigger,
    input[type='checkbox'][data-focus-visible-added]:indeterminate + label .checkbox-trigger {
        ${addFocus({
            outlineOffset: '-0.125rem',
            outlineSize: '0.063rem',
            outlineRadius: 'calc(var(--plasma-checkbox-trigger-border-radius) + 0.125rem)',
            outlineColor: 'var(--plasma-checkbox-focus-color)',
            customFocusRules: `
                &::before {
                    box-shadow: 0 0 0 0.063rem var(--plasma-checkbox-focus-color);
                }
            `,
        })}
    }
`;
