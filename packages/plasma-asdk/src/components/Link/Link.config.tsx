import { css, linkTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        focused: 'true',
    },
    variations: {
        // TODO сгенерировать корректные токены
        view: {
            default: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}: var(--text-primary);
                ${tokens.linkColorHover}: var(--text-primary);
                ${tokens.linkColorActive}: var(--text-primary);
                ${tokens.linkColorVisited}: var(--text-primary);
                ${tokens.linkColorVisitedHover}: var(--text-primary);
                ${tokens.linkColorVisitedActive}: var(--text-primary);
                ${tokens.linkUnderlineBorder}: 0.063rem;
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}: var(--text-primary);
                ${tokens.linkColorHover}: var(--text-primary);
                ${tokens.linkColorActive}: var(--text-primary);
                ${tokens.linkColorVisited}: var(--text-primary);
                ${tokens.linkColorVisitedHover}: var(--text-primary);
                ${tokens.linkColorVisitedActive}: var(--text-primary);
                ${tokens.linkUnderlineBorder}: 0.063rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.linkDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${tokens.linkColorFocus}: var(--text-primary);
            `,
        },
    },
};
