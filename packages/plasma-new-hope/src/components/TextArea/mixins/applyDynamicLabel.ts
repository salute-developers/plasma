import { classes, tokens } from '../TextArea.tokens';

const {
    innerPlaceholderUp,
    hidePlaceHolder,
    focusedOuterPlaceholderColor,
    styledTextArea,
    styledTextAreaWrapper,
    styledPlaceholder,
} = classes;

export const applyDynamicLabel = `
    .${String(innerPlaceholderUp)} {
        .${String(styledTextArea)} {
            height: calc(var(--plasma_private-textarea-input-actual-height) - var(${tokens.labelInnerTop}));
        }

        .${String(styledTextAreaWrapper)} {
            padding-top: calc(calc(var(${tokens.labelInnerTop}) + var(${tokens.labelInnerFontSize})) + var(${
    tokens.labelInnerMarginBottom
}));
        }

        .${String(styledPlaceholder)} {
            font-family: var(${tokens.labelInnerFontFamily});
            font-size: var(${tokens.labelInnerFontSize});
            font-style: var(${tokens.labelInnerFontStyle});
            font-weight: var(${tokens.labelInnerFontWeight});
            letter-spacing: var(${tokens.labelInnerLetterSpacing});
            line-height: var(${tokens.labelInnerLineHeight});
            top: var(${tokens.labelInnerTop});
        }
    }

    .${String(hidePlaceHolder)} {
        .${String(styledPlaceholder)} {
            display: none;
        }
    }

    .${String(focusedOuterPlaceholderColor)} {
        .${String(styledPlaceholder)} {
            color: var(${tokens.placeholderColorFocus});
        }
    }
`;
