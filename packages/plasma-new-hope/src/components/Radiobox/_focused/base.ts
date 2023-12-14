import { css } from '@linaria/core';

import { addFocus } from '../../../mixins';

export const base = css`
    .radiobox-trigger {
        ${addFocus({
            outlineOffset: '0',
            outlineSize: '0.125rem',
            outlineRadius: 'var(--plasma-radiobox-trigger-border-radius)',
            outlineColor: 'transparent',
        })}
    }

    input[data-focus-visible-added] + label .radiobox-trigger {
        border-color: transparent;
        ${addFocus({
            outlineOffset: '-0.188rem',
            outlineSize: '0.125rem',
            outlineRadius: 'var(--plasma-radiobox-trigger-border-radius)',
            outlineColor: 'var(--plasma-radiobox-focus-color)',
            customFocusRules: `
                &::before {
                    box-shadow: 0 0 0 0.125rem var(--plasma-radiobox-focus-color);
                }
            `,
        })}
    }

    input[data-focus-visible-added]:checked + label .radiobox-trigger {
        ${addFocus({
            outlineOffset: '-0.125rem',
            outlineSize: '0.063rem',
            outlineRadius: 'calc(var(--plasma-radiobox-trigger-border-radius) + 0.125rem)',
            outlineColor: 'var(--plasma-radiobox-focus-color)',
            customFocusRules: `
                &::before {
                    box-shadow: 0 0 0 0.063rem var(--plasma-radiobox-focus-color);
                }
            `,
        })}
    }
`;
