import { css } from '@linaria/core';

export const base = css`
    height: var(--plasma-button-height);
    /* TODO: #714 move these calc's to plasma-mapping | ds-generator and add Math.round() */
    padding: 0 var(--plasma-button-padding, calc(var(--plasma-button-height) * 1.618 / 4));

    --plasma_private-btn-br: var(--plasma-button-radius, calc(var(--plasma-button-height) / 4));
    border-radius: var(--plasma_private-btn-br);

    font-family: var(--plasma-button-font-family);
    font-size: var(--plasma-button-font-size);
    font-style: var(--plasma-button-font-style);
    font-weight: var(--plasma-button-font-weight);
    letter-spacing: var(--plasma-button-letter-spacing);
    line-height: var(--plasma-button-line-height);

    /* TODO: #710 make it token API ? */
    --plasma_private-btn-outline-size: var(--plasma-button-outline-size, 0.125rem);

    ::before {
        border-radius: calc(var(--plasma_private-btn-br) + var(--plasma_private-btn-outline-size));
    }
`;
