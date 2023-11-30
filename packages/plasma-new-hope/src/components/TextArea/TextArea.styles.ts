import { styled } from '@linaria/react';

import { applyEllipsis } from '../../mixins';

import { tokens } from './TextArea.tokens';

export const StyledLabel = styled.div`
    margin-bottom: var(${tokens.labelMarginBottom});

    font-family: var(${tokens.inputFontFamily});
    font-size: var(${tokens.inputFontSize});
    font-style: var(${tokens.inputFontStyle});
    font-weight: var(${tokens.inputFontWeight});
    letter-spacing: var(${tokens.inputLetterSpacing});
    line-height: var(${tokens.inputLineHeight});
`;

export const StyledTextAreaWrapper = styled.div<{
    hasHelper: boolean;
}>`
    background-color: var(${tokens.inputBackgroundColor});

    padding-top: var(${tokens.inputPaddingTop});
    padding-bottom: ${({ hasHelper }) =>
        hasHelper ? `var(${tokens.inputPaddingBottomWithHelpers})` : `var(${tokens.inputPaddingBottom})`};

    border-radius: ${({ hasHelper }) =>
        hasHelper ? `var(${tokens.borderRadiusWithHelpers})` : `var(${tokens.borderRadius})`};
`;

export const StyledContent = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0;
    z-index: 1;

    top: var(${tokens.rightContentTop});
    right: var(${tokens.rightContentRight});

    height: var(${tokens.rightContentHeight});
`;

export const StyledContainer = styled.div<{ width: string }>`
    display: inline-flex;
    flex-direction: column;

    width: ${({ width }) => width};

    position: relative;
`;

export const StyledTextArea = styled.textarea<{
    hasHelper: boolean;
    hasContentRight: boolean;
    applyCustomWidth: boolean;
    width?: string | number;
    height?: string | number;
    resize?: string;
}>`
    display: block;
    box-sizing: border-box;
    outline: none;
    border: none;
    -webkit-appearance: none; /* для отображение рамок на iOS */
    background-color: transparent;

    color: var(${tokens.inputColor});
    caret-color: var(${tokens.inputCaretColor});

    resize: ${({ resize }) => resize || 'none'};

    --plasma_private-textarea-height: ${({ height }) =>
        !Number.isNaN(Number(height)) ? `calc(${height}rem - 0.875rem)` : height || `var(${tokens.inputHeight})`};

    --plasma_private-textarea-width: ${({ width }) =>
        !Number.isNaN(Number(width)) ? `${width}rem` : width || `var(${tokens.inputWidth})`};

    --plasma_private-textarea-computed-height: ${({ rows }) =>
        rows ? 'unset' : 'var(--plasma_private-textarea-height)'};
    --plasma_private-textarea-computed-width: ${({ cols }) =>
        cols ? 'unset' : 'var(--plasma_private-textarea-width)'};

    height: var(--plasma_private-textarea-computed-height);
    width: var(--plasma_private-textarea-computed-width);

    min-width: ${({ applyCustomWidth }) => (applyCustomWidth ? 'var(--plasma_private-textarea-width)' : 'auto')};
    max-width: ${({ applyCustomWidth }) => (applyCustomWidth ? 'var(--plasma_private-textarea-width)' : 'auto')};

    min-height: var(${tokens.inputMinHeight});

    padding-right: ${({ hasContentRight }) =>
        hasContentRight ? `var(${tokens.inputPaddingRightWithRightContent})` : `var(${tokens.inputPaddingRight})`};
    padding-left: var(${tokens.inputPaddingLeft});
    padding-top: 0;
    padding-bottom: 0;

    /* INFO: Высчитываем высоту блока с подсказками */
    --plasma_private-textarea-helpers-computed-height: calc(
        var(${tokens.helpersPaddingTop}) + var(${tokens.helpersPaddingBottom}) + var(${tokens.helpersLineHeight})
    );

    --plasma_private-textarea-input-with-helpers-height: calc(
        var(--plasma_private-textarea-height) - var(--plasma_private-textarea-helpers-computed-height) +
            var(${tokens.helpersOffset})
    );
    --plasma_private-textarea-input-without-helpers-height: calc(
        var(--plasma_private-textarea-computed-height) - var(${tokens.inputPaddingBottom})
    );

    --plasma_private-textarea-input-actual-height: ${({ hasHelper, rows }) =>
        hasHelper && !rows
            ? 'var(--plasma_private-textarea-input-with-helpers-height)'
            : 'var(--plasma_private-textarea-input-without-helpers-height)'};

    height: var(--plasma_private-textarea-input-actual-height);

    font-family: var(${tokens.inputFontFamily});
    font-size: var(${tokens.inputFontSize});
    font-style: var(${tokens.inputFontStyle});
    font-weight: var(${tokens.inputFontWeight});
    letter-spacing: var(${tokens.inputLetterSpacing});
    line-height: var(${tokens.inputLineHeight});

    &::placeholder {
        opacity: 0;
    }

    &:read-only {
        cursor: default;
    }

    &:focus:not(:disabled) {
        color: var(${tokens.inputColorFocus});
    }
`;

export const StyledHelpers = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    transition: background-color 0.1s ease-in-out;

    background-color: var(${tokens.helpersBackgroundColor});

    padding-top: var(${tokens.helpersPaddingTop});
    padding-right: var(${tokens.helpersPaddingRight});
    padding-bottom: var(${tokens.helpersPaddingBottom});
    padding-left: var(${tokens.helpersPaddingLeft});

    border-bottom-left-radius: var(${tokens.borderRadius});
    border-bottom-right-radius: var(${tokens.borderRadius});
`;

export const StyledLeftHelper = styled.span`
    ${applyEllipsis()};

    display: block;

    font-family: var(${tokens.helpersFontFamily});
    font-size: var(${tokens.helpersFontSize});
    font-style: var(${tokens.helpersFontStyle});
    font-weight: var(${tokens.helpersFontWeight});
    letter-spacing: var(${tokens.helpersLetterSpacing});
    line-height: var(${tokens.helpersLineHeight});

    color: var(${tokens.leftHelperColor});
`;

export const StyledRightHelper = styled(StyledLeftHelper)`
    color: var(${tokens.rightHelperColor});
    margin-left: auto;
`;

export const StyledPlaceholder = styled.label`
    ${applyEllipsis()}

    box-sizing: border-box;
    position: absolute;
    pointer-events: none;
    display: inline-flex;
    align-items: center;

    transition: all 0.1s ease-in-out;
    transform-origin: top left;

    color: var(${tokens.placeholderColor});

    width: 100%;
    height: auto;

    top: var(${tokens.inputPaddingTop});
    padding-left: var(${tokens.inputPaddingLeft});

    font-family: var(${tokens.inputFontFamily});
    font-size: var(${tokens.inputFontSize});
    font-style: var(${tokens.inputFontStyle});
    font-weight: var(${tokens.inputFontWeight});
    letter-spacing: var(${tokens.inputLetterSpacing});
    line-height: var(${tokens.inputLineHeight});
`;
