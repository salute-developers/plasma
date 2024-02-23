import {
    css,
    textFieldTokens as tokens,
    textField_labelPlacement_inner as labelPlacement_inner,
    textField_labelPlacement_outer as labelPlacement_outer,
} from '@salutejs/plasma-new-hope/styled-components';

/**
 * LEGACY TOKENS:
 *  --plasma-colors-input-border
 *  --plasma-colors-input-border-hover
 *  --plasma-colors-input-border-focus
 *
 *  --plasma-input-placeholder-color
 *  --plasma-input-label-color
 *
 *  --plasma-input-l-height
 *  --plasma-input-m-height
 *  --plasma-input-s-height
 *
 *  --plasma-input-border-radius
 *  --plasma-field-content-margin
 *
 *  --plasma-input-l-padding-x
 *  --plasma-input-l-has-content-padding-left
 *
 *  --plasma-input-font-* // text
 *  --plasma-field-font-* // outerLabel
 *  --plasma-input-label-font-* // innerLabel
 *  --plasma-field-helper-text-font-* // caption
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--plasma-colors-primary);
                ${tokens.backgroundColor}: var(--plasma-colors-surface-liquid01);
                ${tokens.backgroundColorFocus}: var(--plasma-colors-surface-liquid02);
                ${tokens.caretColor}: var(--plasma-colors-accent);
                ${tokens.placeholderColor}: var(--plasma-colors-tertiary);
                ${tokens.leftHelperColor}: var(--plasma-colors-secondary);
                ${tokens.contentColor}: var(--plasma-colors-secondary);
                ${tokens.borderColor}: var(--plasma-colors-input-border, var(--plasma-colors-tertiary));
                ${tokens.borderColorHover}: var(--plasma-colors-input-border-hover, var(--plasma-colors-secondary));
                ${tokens.borderColorFocus}: var(--plasma-colors-input-border-focus, var(--plasma-colors-accent));
            `,

            positive: css`
                ${tokens.color}: var(--plasma-colors-success); 
                /* ${tokens.backgroundColor}: var(--plasma-colors-button-success); &:before { opacity: 0.3 } */
                ${tokens.backgroundColor}: rgba(33, 160, 56, .3);
                /* HOW to mix rgba(33, 160, 56, .3) & --plasma-colors-surface-liquid02 ( rgba(255,255,255,0.12) )  */
                ${tokens.backgroundColorFocus}: #345436;
                ${tokens.caretColor}: var(--plasma-colors-success);
                ${tokens.placeholderColor}: var(--plasma-colors-tertiary);
                ${tokens.leftHelperColor}: var(--plasma-colors-success);
                ${tokens.contentColor}: var(--plasma-colors-success);
            `,

            warning: css`
                ${tokens.color}: var(--plasma-colors-warning);
                /* ${tokens.backgroundColor}: var(--plasma-button-warning); &:before { opacity: 0.3 } */
                ${tokens.backgroundColor}: rgba(227, 85, 2, .3);
                /* HOW to mix rgba(227, 85, 2, .3) & --plasma-colors-surface-liquid02 ( rgba(255,255,255,0.12) )  */
                ${tokens.backgroundColorFocus}: #693e2e;
                ${tokens.leftHelperColor}: var(--plasma-colors-warning);
                ${tokens.placeholderColor}: var(--plasma-colors-tertiary);
                ${tokens.leftHelperColor}: var(--plasma-colors-warning);
                ${tokens.contentColor}: var(--plasma-colors-warning);
            `,

            negative: css`
                ${tokens.color}: var(--plasma-colors-critical);
                /* ${tokens.backgroundColor}: var(--plasma-colors-button-critical); &:before { opacity: 0.3 }  */
                ${tokens.backgroundColor}: rgba(255, 46, 67, .3);
                /* HOW to mix rgba(255, 46, 67, .3) & --plasma-colors-surface-liquid02 ( rgba(255,255,255,0.12) )  */
                ${tokens.backgroundColorFocus}: #723639;
                ${tokens.leftHelperColor}: var(--plasma-colors-critical);
                ${tokens.placeholderColor}: var(--plasma-colors-tertiary);
                ${tokens.leftHelperColor}: var(--plasma-colors-critical);
                ${tokens.contentColor}: var(--plasma-colors-critical);
            `,
        },
        size: {
            l: css`
                ${tokens.height}: 3.5rem;
                ${tokens.padding}: 1.125rem;
                ${tokens.paddingWithContent}: 1rem;
                ${tokens.contentOffset}: 0.5rem;

                ${tokens.borderRadius}: 0.875rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.labelOffset}: 0.75rem;
                --label_inner-offset: 0.5625rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                ${tokens.height}: 3rem;
                ${tokens.padding}: 1rem;
                ${tokens.paddingWithContent}: 0.875rem;
                ${tokens.contentOffset}: 0.375rem;

                ${tokens.borderRadius}: 0.75rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.labelOffset}: 0.625rem;
                --label_inner-offset: 0.375rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,

            s: css`
                ${tokens.height}: 2.5rem;
                ${tokens.padding}: 0.875rem;
                ${tokens.paddingWithContent}: 0.75rem;
                ${tokens.contentOffset}: 0.25rem;

                ${tokens.borderRadius}: 0.625rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.labelOffset}: 0.5rem;
                --label_inner-offset: 0.3125rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                --labelInnerFontFamily: var(--plasma-typo-body-xxs-font-family);
                --labelInnerFontSize: var(--plasma-typo-body-xxs-font-size);
                --labelInnerFontStyle: var(--plasma-typo-body-xxs-font-style);
                --labelInnerFontWeight: var(--plasma-typo-body-xxs-font-weight);
                --labelInnerLetterSpacing: var(--plasma-typo-body-xxs-letter-spacing);
                --labelInnerLineHeight: var(--plasma-typo-body-xxs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,

            xs: css`
                ${tokens.height}: 2rem;
                ${tokens.padding}: 0.625rem;
                ${tokens.paddingWithContent}: 0.5rem;
                ${tokens.contentOffset}: 0.25rem;

                ${tokens.borderRadius}: 0.5rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelOffset}: 0.375rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        labelPlacement: {
            inner: [
                labelPlacement_inner,
                // TODO: intersections
                css`
                    &.${labelPlacement_inner} {
                        ${tokens.labelOffset}: var(--label_inner-offset, 0.3125rem);
                        ${tokens.placeholderColor}: var(--plasma-colors-tertiary);

                        ${tokens.labelInnerFontFamily}: var(--labelInnerFontFamily, var(--plasma-typo-body-xs-font-family));
                        ${tokens.labelInnerFontSize}: var(--labelInnerFontSize, var(--plasma-typo-body-xs-font-size));
                        ${tokens.labelInnerFontStyle}: var(--labelInnerFontStyle, var(--plasma-typo-body-xs-font-style));
                        ${tokens.labelInnerFontWeight}: var(--labelInnerFontWeight, var(--plasma-typo-body-xs-font-weight));
                        ${tokens.labelInnerLetterSpacing}: var(--labelInnerLetterSpacing, var(--plasma-typo-body-xs-letter-spacing));
                        ${tokens.labelInnerLineHeight}: var(--labelInnerLineHeight, var(--plasma-typo-body-xs-line-height));
                    }
                `,
            ],
            outer: [
                labelPlacement_outer,
                css`
                    &.${labelPlacement_outer} {
                    }
                `,
            ],
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
