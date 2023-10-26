import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                --plasma-calendar-background: transparent;
                --plasma-calendar-selected-item-background: var(--plasma-colors-primary);
                --plasma-calendar-selected-item-color: var(--plasma-colors-background-primary);
                --plasma-calendar-selecable-item-bg-hover: var(--plasma-colors-surface-liquid02);
                --plasma-calendar-current-item-border-color: var(--plasma-colors-primary);
                --plasma-calendar-current-item-bg-hover: transparent;
                --plasma-calendar-current-item-color-hover: var(--plasma-colors-primary);
                --plasma-calendar-current-item-child-bg-hover: var(--plasma-colors-surface-liquid02);
                --plasma-calendar-active-item-bg: var(--plasma-colors-primary);
                --plasma-calendar-active-item-color: var(--plasma-colors-surface-solid03);
                --plasma-calendar-hovered-item-bg: var(--plasma-colors-accent);
                --plasma-calendar-hovered-item-color: var(--plasma-colors-background-primary);
                --plasma-calendar-range-background: var(--plasma-colors-surface-liquid02);
                --plasma-calendar-outline-focus-color: var(--plasma-colors-button-focused);
                --plasma-calendar-content-primary-color: var(--plasma-colors-primary);
                --plasma-calendar-content-secondary-color: var(--plasma-colors-secondary);
            `,
        },
        size: {
            m: css`
                --plasma-calendar-arrow-container-width: 5.5rem;
                --plasma-calendar-item-border-radius: 0.5rem;
            `,
        },
    },
};
