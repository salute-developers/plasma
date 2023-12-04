import { css, headerTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        size: 's',
    },
    variations: {
        view: {
            primary: css`
                --plasma-button-color: var(--text-primary);
                --plasma-button-bg-color: var(--surface-clear);

                ${headerTokens.headerArrowTransition}: transform 0.15s ease-in-out;

                ${headerTokens.headerTitleColor}: var(--plasma-colors-primary);
                ${headerTokens.headerBigTitleColor}: var(--plasma-colors-primary);
                ${headerTokens.headerBiggerTitleColor}: var(--plasma-colors-primary);
                ${headerTokens.headerLabelColor}: var(--plasma-colors-secondary);
                ${headerTokens.headerSubTitleColor}: var(--plasma-colors-secondary);
                ${headerTokens.headerCaptionColor}: var(--plasma-colors-secondary);
            `,
        },
        size: {
            m: css`
                ${headerTokens.headerHeight}: 2.25rem;
                ${headerTokens.headerPaddingTop}: 1.625rem;
                ${headerTokens.headerPaddingBottom}: 0.625rem;

                ${headerTokens.headerLogoMarginRight}: 0.75rem;

                ${headerTokens.headerArrowMarginRight}: 1rem;
                ${headerTokens.headerArrowIconSize}: 1.5rem;

                ${headerTokens.headerTitleMargin}: 0.125rem 0;
                ${headerTokens.headerBigTitleMargin}: 0.5rem 0;
                ${headerTokens.headerBiggerTitleMargin}: 0.5rem 0;
                ${headerTokens.headerLabelMargin}: 0.375rem 0;
                ${headerTokens.headerSubTitleMargin}: 0.125rem 0;
                ${headerTokens.headerCaptionMargin}: 0.25rem 0;

                --plasma-button-height: 2.25rem;
                --plasma-button-padding: 0.5rem;
            `,
        },
    },
};
