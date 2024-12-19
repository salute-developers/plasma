import { css, dropzoneTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${dropzoneTokens.background}: var(--surface-solid-card);
                ${dropzoneTokens.backgroundHover}: var(--surface-solid-card-hover);
                ${dropzoneTokens.overlayColorActive}: var(--overlay-soft);
                ${dropzoneTokens.borderColor}: var(--outline-solid-secondary);
                ${dropzoneTokens.borderColorHover}: var(--outline-solid-secondary-hover);
                ${dropzoneTokens.borderColorActive}: var(--outline-accent);
                ${dropzoneTokens.titleColor}: var(--text-primary);
                ${dropzoneTokens.descriptionColor}: var(--text-secondary);
            `,
        },
        size: {
            m: css`
                ${dropzoneTokens.padding}: 1.5rem;
                ${dropzoneTokens.borderRadius}: 1.25rem;
                ${dropzoneTokens.contentWrapperGap}: 0.75rem;
                ${dropzoneTokens.contentGap}: 0.375rem;
                ${dropzoneTokens.contentColumnGap}: 0.5rem;

                ${dropzoneTokens.titleFontFamily}: var(--plasma-typo-h4-font-family);
                ${dropzoneTokens.titleFontSize}: var(--plasma-typo-h4-font-size);
                ${dropzoneTokens.titleFontStyle}: var(--plasma-typo-h4-font-style);
                ${dropzoneTokens.titleFontWeight}: var(--plasma-typo-h4-bold-font-weight);
                ${dropzoneTokens.titleLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${dropzoneTokens.titleLineHeight}: var(--plasma-typo-h4-line-height);

                ${dropzoneTokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${dropzoneTokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${dropzoneTokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${dropzoneTokens.descriptionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${dropzoneTokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${dropzoneTokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        disabled: {
            true: css`
                ${dropzoneTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
