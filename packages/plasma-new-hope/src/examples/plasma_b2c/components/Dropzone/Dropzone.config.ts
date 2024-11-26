import { css } from '@linaria/core';

import { dropzoneTokens } from '../../../../components/Dropzone';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${dropzoneTokens.background}: var(--surface-solid-card);
                ${dropzoneTokens.overlayColorActive}: var(--overlay-soft);
                ${dropzoneTokens.border}: 0.063rem dashed var(--outline-secondary);
                ${dropzoneTokens.borderColorHover}: var(--outline-secondary);
                ${dropzoneTokens.borderColorActive}: var(--outline-accent);
                ${dropzoneTokens.titleColor}: var(--text-primary);
                ${dropzoneTokens.descriptionColor}: var(--text-secondary);
            `,
        },
        size: {
            m: css`
                ${dropzoneTokens.padding}: 1.5rem;
                ${dropzoneTokens.borderRadius}: 1.25rem;
                ${dropzoneTokens.contentGap}: 0.75rem;
                ${dropzoneTokens.titleWrapperGap}: 0.375rem;
                ${dropzoneTokens.titleWrapperGapColumn}: 0.5rem;

                ${dropzoneTokens.titleFontFamily}: var(--plasma-typo-body-h4-font-family);
                ${dropzoneTokens.titleFontSize}: var(--plasma-typo-body-h4-font-size);
                ${dropzoneTokens.titleFontStyle}: var(--plasma-typo-body-h4-font-style);
                ${dropzoneTokens.titleFontWeight}: var(--plasma-typo-body-h4-bold-font-weight);
                ${dropzoneTokens.titleLetterSpacing}: var(--plasma-typo-body-h4-letter-spacing);
                ${dropzoneTokens.titleLineHeight}: var(--plasma-typo-body-h4-line-height);

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
