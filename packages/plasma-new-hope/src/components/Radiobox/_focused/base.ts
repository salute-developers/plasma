import { css } from '@linaria/core';

// TODO: перенести в mixin
const addFocus = (outlineOffset: string, outlineSize: string, outlineRadius: string, outlineColor = '') => {
    return `&::before {
        content: '';
        position: absolute;
        inset: ${outlineOffset};
        display: block;
        box-sizing: content-box;
        border-radius: ${outlineRadius};
        border: ${outlineSize} solid transparent;
        box-shadow: 0 0 0 ${outlineSize} ${outlineColor};
        pointer-events: none;
        transition: box-shadow 0.2s ease-in-out;
    }`;
};

export const base = css`
    .radiobox-trigger {
        ${addFocus('0', '0.125rem', 'var(--plasma-radiobox-trigger-border-radius)', 'transparent')}
    }

    input[data-focus-visible-added] + label .radiobox-trigger {
        border-color: transparent;
        ${addFocus(
            '-0.188rem',
            '0.125rem',
            'var(--plasma-radiobox-trigger-border-radius)',
            'var(--plasma-radiobox-focus-color)',
        )}
    }

    input[data-focus-visible-added]:checked + label .radiobox-trigger {
        ${addFocus(
            '-0.125rem',
            '0.063rem',
            'calc(var(--plasma-radiobox-trigger-border-radius) + 0.125rem)',
            'var(--plasma-radiobox-focus-color)',
        )}
    }
`;
