import { classes, tokens } from '../TextArea.tokens';

const {
    innerPlaceholderUp,
    hidePlaceHolder,
    focusedOuterPlaceholderColor,
    styledTextArea,
    styledTextAreaWrapper,
    styledPlaceholder,
    hasHeaderSlot,
    styledContentWrapper,
} = classes;

export const applyDynamicLabel = `
    .${innerPlaceholderUp} {
        .${styledTextArea} {
            height: calc(var(--plasma_private-textarea-input-actual-height) - var(${tokens.labelInnerTop}) - var(${tokens.labelInnerTopHelper}, 0px));
        }

        .${styledTextAreaWrapper} {
            padding-top: calc(calc(var(${tokens.labelInnerTop}) + var(${tokens.labelInnerFontSize})) + var(${tokens.labelInnerMarginBottom}));
        }
            
        .${hasHeaderSlot} {
            padding-top: unset;

            .${styledContentWrapper} {
                padding-top: calc(calc(var(${tokens.labelInnerTop}) + var(${tokens.labelInnerFontSize})) + var(${tokens.labelInnerMarginBottom}));
            }
        }

        .${styledPlaceholder} {
            font-family: var(${tokens.labelInnerFontFamily});
            font-size: var(${tokens.labelInnerFontSize});
            font-style: var(${tokens.labelInnerFontStyle});
            font-weight: var(${tokens.labelInnerFontWeight});
            letter-spacing: var(${tokens.labelInnerLetterSpacing});
            line-height: var(${tokens.labelInnerLineHeight});
            top: var(${tokens.labelInnerTop});
        }
    }

    .${hidePlaceHolder} .${styledPlaceholder} {
        display: none;
    }

    .${focusedOuterPlaceholderColor} .${styledPlaceholder} {
        color: var(${tokens.placeholderColorFocus});
    }
`;
