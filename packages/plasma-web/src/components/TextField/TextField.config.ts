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
        size: 'l',
        labelPlacement: 'outer',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--plasma-colors-primary);
                ${tokens.backgroundColor}: var(--plasma-colors-background);
                ${tokens.caretColor}: var(--plasma-colors-accent);
                ${tokens.placeholderColor}: var(--plasma-input-placeholder-color, var(--plasma-colors-secondary));
                ${tokens.leftHelperColor}: var(--plasma-colors-secondary);
                ${tokens.contentColor}: var(--plasma-colors-secondary);
                ${tokens.borderColor}: var(--plasma-colors-input-border, var(--plasma-colors-tertiary));
                ${tokens.borderColorHover}: var(--plasma-colors-input-border-hover, var(--plasma-colors-secondary));
                ${tokens.borderColorFocus}: var(--plasma-colors-input-border-focus, var(--plasma-colors-accent));
            `,

            positive: css`
                ${tokens.color}: var(--plasma-colors-primary);
                ${tokens.backgroundColor}: var(--plasma-colors-transparent);
                ${tokens.caretColor}: var(--plasma-colors-black-primary);
                ${tokens.placeholderColor}: var(--plasma-input-placeholder-color, var(--plasma-colors-secondary));
                ${tokens.leftHelperColor}: var(--plasma-colors-success);
                ${tokens.contentColor}: var(--plasma-colors-success);
                ${tokens.borderColor}: var(--plasma-colors-success);
                ${tokens.borderColorHover}: var(--plasma-colors-success);
                ${tokens.borderColorFocus}: var(--plasma-colors-input-border-focus, var(--plasma-colors-accent));
            `,

            warning: css`
                ${tokens.color}: var(--plasma-colors-primary);
                ${tokens.backgroundColor}: var(--plasma-colors-transparent);
                ${tokens.caretColor}: var(--plasma-colors-black-primary);
                ${tokens.placeholderColor}: var(--plasma-input-placeholder-color, var(--plasma-colors-secondary));
                ${tokens.leftHelperColor}: var(--plasma-colors-warning);
                ${tokens.contentColor}: var(--plasma-colors-warning);
                ${tokens.borderColor}: var(--plasma-colors-warning);
                ${tokens.borderColorHover}: var(--plasma-colors-warning);
                ${tokens.borderColorFocus}: var(--plasma-colors-input-border-focus, var(--plasma-colors-accent));
            `,

            negative: css`
                ${tokens.color}: var(--plasma-colors-primary);
                ${tokens.backgroundColor}: var(--plasma-colors-transparent);
                ${tokens.caretColor}: var(--plasma-colors-black-primary);
                ${tokens.placeholderColor}: var(--plasma-input-placeholder-color, var(--plasma-colors-secondary));
                ${tokens.leftHelperColor}: var(--plasma-colors-critical);
                ${tokens.contentColor}: var(--plasma-colors-critical);
                ${tokens.borderColor}: var(--plasma-colors-critical);
                ${tokens.borderColorHover}: var(--plasma-colors-critical);
                ${tokens.borderColorFocus}: var(--plasma-colors-input-border-focus, var(--plasma-colors-accent));
            `,
        },
        size: {
            l: css`
                ${tokens.height}: var(--plasma-input-l-height, 3rem);
                ${tokens.padding}: var(--plasma-input-l-padding-x, 1rem);
                ${tokens.paddingWithContent}: var(--plasma-field-content-margin, 0.75rem);
                ${tokens.borderWidth}: 0.0625rem;
                ${tokens.borderRadius}: var(--plasma-input-border-radius, 0.5rem);
                ${tokens.contentOffset}: calc(var(--plasma-input-l-has-content-padding-left, 1.5rem) - 1.5rem  - var(--plasma-field-content-margin, -0.25rem));

                ${tokens.fontFamily}: var(--plasma-input-font-family, var(--plasma-typo-body-m-font-family));
                ${tokens.fontSize}: var(--plasma-input-font-size, var(--plasma-typo-body-m-font-size));
                ${tokens.fontStyle}: var(--plasma-input-font-style, var(--plasma-typo-body-m-font-style));
                ${tokens.fontWeight}: var(--plasma-input-font-weight, var(--plasma-typo-body-m-font-weight));
                ${tokens.letterSpacing}: var(--plasma-input-letter-spacing, var(--plasma-typo-body-m-letter-spacing));
                ${tokens.lineHeight}: var(--plasma-input-line-height, var(--plasma-typo-body-m-line-height));

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelFontFamily}: var(--plasma-field-font-family, var(--plasma-typo-body-m-font-family));
                ${tokens.labelFontSize}: var(--plasma-field-font-size, var(--plasma-typo-body-m-font-size));
                ${tokens.labelFontStyle}: var(--plasma-field-font-style, var(--plasma-typo-body-m-font-style));
                ${tokens.labelFontWeight}: var(--plasma-field-font-weight, var(--plasma-typo-body-m-font-weight));
                ${tokens.labelLetterSpacing}: var(--plasma-field-letter-spacing, var(--plasma-typo-body-m-letter-spacing));
                ${tokens.labelLineHeight}: var(--plasma-field-line-height, var(--plasma-typo-body-m-line-height));

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-field-helper-text-font-family, var(--plasma-typo-body-xs-font-family));
                ${tokens.leftHelperFontSize}: var(--plasma-field-helper-text-font-size, var(--plasma-typo-body-xs-font-size));
                ${tokens.leftHelperFontStyle}: var(--plasma-field-helper-text-font-style, var(--plasma-typo-body-xs-font-style));
                ${tokens.leftHelperFontWeight}: var(--plasma-field-helper-text-font-weight, var(--plasma-typo-body-xs-font-weight));
                ${tokens.leftHelperLetterSpacing}: var(--plasma-field-helper-text-letter-spacing, var(--plasma-typo-body-xs-letter-spacing));
                ${tokens.leftHelperLineHeight}: var(--plasma-field-helper-text-line-height, var(--plasma-typo-body-xs-line-height));
            `,

            m: css`
                ${tokens.height}: var(--plasma-input-m-height, 2.5rem);
                ${tokens.padding}: var(--plasma-input-l-padding-x, 1rem);
                ${tokens.paddingWithContent}: var(--plasma-field-content-margin, 0.75rem);
                ${tokens.borderWidth}: 0.0625rem;
                ${tokens.borderRadius}: var(--plasma-input-border-radius, 0.5rem);
                ${tokens.contentOffset}: calc(var(--plasma-input-l-has-content-padding-left, 1.5rem) - 1.5rem  - var(--plasma-field-content-margin, -0.25rem));

                ${tokens.fontFamily}: var(--plasma-input-font-family, var(--plasma-typo-body-m-font-family));
                ${tokens.fontSize}: var(--plasma-input-font-size, var(--plasma-typo-body-m-font-size));
                ${tokens.fontStyle}: var(--plasma-input-font-style, var(--plasma-typo-body-m-font-style));
                ${tokens.fontWeight}: var(--plasma-input-font-weight, var(--plasma-typo-body-m-font-weight));
                ${tokens.letterSpacing}: var(--plasma-input-letter-spacing, var(--plasma-typo-body-m-letter-spacing));
                ${tokens.lineHeight}: var(--plasma-input-line-height, var(--plasma-typo-body-m-line-height));

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelFontFamily}: var(--plasma-field-font-family, var(--plasma-typo-body-m-font-family));
                ${tokens.labelFontSize}: var(--plasma-field-font-size, var(--plasma-typo-body-m-font-size));
                ${tokens.labelFontStyle}: var(--plasma-field-font-style, var(--plasma-typo-body-m-font-style));
                ${tokens.labelFontWeight}: var(--plasma-field-font-weight, var(--plasma-typo-body-m-font-weight));
                ${tokens.labelLetterSpacing}: var(--plasma-field-letter-spacing, var(--plasma-typo-body-m-letter-spacing));
                ${tokens.labelLineHeight}: var(--plasma-field-line-height, var(--plasma-typo-body-m-line-height));

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-field-helper-text-font-family, var(--plasma-typo-body-xs-font-family));
                ${tokens.leftHelperFontSize}: var(--plasma-field-helper-text-font-size, var(--plasma-typo-body-xs-font-size));
                ${tokens.leftHelperFontStyle}: var(--plasma-field-helper-text-font-style, var(--plasma-typo-body-xs-font-style));
                ${tokens.leftHelperFontWeight}: var(--plasma-field-helper-text-font-weight, var(--plasma-typo-body-xs-font-weight));
                ${tokens.leftHelperLetterSpacing}: var(--plasma-field-helper-text-letter-spacing, var(--plasma-typo-body-xs-letter-spacing));
                ${tokens.leftHelperLineHeight}: var(--plasma-field-helper-text-line-height, var(--plasma-typo-body-xs-line-height));
            `,

            s: css`
                ${tokens.height}: var(--plasma-input-s-height, 2rem);
                ${tokens.padding}: var(--plasma-input-l-padding-x, 1rem);
                ${tokens.paddingWithContent}: var(--plasma-field-content-margin, 0.75rem);
                ${tokens.borderWidth}: 0.0625rem;
                ${tokens.borderRadius}: var(--plasma-input-border-radius, 0.5rem);
                ${tokens.contentOffset}: calc(var(--plasma-input-l-has-content-padding-left, 1.5rem) - 1.5rem  - var(--plasma-field-content-margin, -0.25rem));

                ${tokens.fontFamily}: var(--plasma-input-font-family, var(--plasma-typo-body-m-font-family));
                ${tokens.fontSize}: var(--plasma-input-font-size, var(--plasma-typo-body-m-font-size));
                ${tokens.fontStyle}: var(--plasma-input-font-style, var(--plasma-typo-body-m-font-style));
                ${tokens.fontWeight}: var(--plasma-input-font-weight, var(--plasma-typo-body-m-font-weight));
                ${tokens.letterSpacing}: var(--plasma-input-letter-spacing, var(--plasma-typo-body-m-letter-spacing));
                ${tokens.lineHeight}: var(--plasma-input-line-height, var(--plasma-typo-body-m-line-height));

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelFontFamily}: var(--plasma-field-font-family, var(--plasma-typo-body-m-font-family));
                ${tokens.labelFontSize}: var(--plasma-field-font-size, var(--plasma-typo-body-m-font-size));
                ${tokens.labelFontStyle}: var(--plasma-field-font-style, var(--plasma-typo-body-m-font-style));
                ${tokens.labelFontWeight}: var(--plasma-field-font-weight, var(--plasma-typo-body-m-font-weight));
                ${tokens.labelLetterSpacing}: var(--plasma-field-letter-spacing, var(--plasma-typo-body-m-letter-spacing));
                ${tokens.labelLineHeight}: var(--plasma-field-line-height, var(--plasma-typo-body-m-line-height));

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-field-helper-text-font-family, var(--plasma-typo-body-xs-font-family));
                ${tokens.leftHelperFontSize}: var(--plasma-field-helper-text-font-size, var(--plasma-typo-body-xs-font-size));
                ${tokens.leftHelperFontStyle}: var(--plasma-field-helper-text-font-style, var(--plasma-typo-body-xs-font-style));
                ${tokens.leftHelperFontWeight}: var(--plasma-field-helper-text-font-weight, var(--plasma-typo-body-xs-font-weight));
                ${tokens.leftHelperLetterSpacing}: var(--plasma-field-helper-text-letter-spacing, var(--plasma-typo-body-xs-letter-spacing));
                ${tokens.leftHelperLineHeight}: var(--plasma-field-helper-text-line-height, var(--plasma-typo-body-xs-line-height));
            `,
        },
        labelPlacement: {
            inner: [
                labelPlacement_inner,
                css`
                    &.${labelPlacement_inner} {
                        ${tokens.labelOffset}: 0.3125rem;
                        ${tokens.placeholderColor}: var(--plasma-input-label-color, var(--plasma-input-placeholder-color, var(--plasma-colors-secondary)));
                        ${tokens.labelInnerFontFamily}: var(--plasma-input-label-font-family, var(--plasma-typo-body-xs-font-family));
                        ${tokens.labelInnerFontSize}: var(--plasma-input-label-font-size, var(--plasma-typo-body-xs-font-size));
                        ${tokens.labelInnerFontStyle}: var(--plasma-input-label-font-style, var(--plasma-typo-body-xs-font-style));
                        ${tokens.labelInnerFontWeight}: var(--plasma-input-label-font-weight, var(--plasma-typo-body-xs-font-weight));
                        ${tokens.labelInnerLetterSpacing}: var(--plasma-input-label-letter-spacing, var(--plasma-typo-body-xs-letter-spacing));
                        ${tokens.labelInnerLineHeight}: var(--plasma-input-label-line-height, var(--plasma-typo-body-xs-line-height));
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
