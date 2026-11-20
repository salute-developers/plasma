import { css } from 'styled-components';

import { carouselNewTokens as tokens } from '../../../components/Carousel';

const baseControlView = `
    ${tokens.controlIconButtonColor}: var(--text-primary);
    ${tokens.controlIconButtonColorHover}: var(--text-primary);
    ${tokens.controlIconButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
    ${tokens.controlIconButtonColorActive}: var(--text-primary);
    ${tokens.controlIconButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);
`;

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.paginationDotBackground}: var(--surface-transparent-tertiary);
                ${tokens.paginationDotActiveBackground}: var(--surface-solid-default);
            `,
        },
        controlArrowsPlacement: {
            inner: css`
                ${baseControlView}
                ${tokens.controlIconButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${tokens.controlIconButtonOffset}: 0.75rem;
            `,
            outer: css`
                ${baseControlView}
                ${tokens.controlIconButtonBackgroundColor}: var(--surface-clear);
                ${tokens.controlIconButtonOffset}: 0.75rem;
            `,
        },
        size: {
            s: css`
                ${tokens.controlIconButtonWidth}: 2.5rem;
                ${tokens.controlIconButtonHeight}: 2.5rem;
                ${tokens.controlIconButtonPadding}: 1rem;
                ${tokens.controlIconButtonRadius}: 100%;
            `,
        },
    },
};
