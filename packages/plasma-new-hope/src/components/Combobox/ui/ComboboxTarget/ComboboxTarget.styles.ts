import { styled } from '@linaria/react';

import { IconChevronDown } from '../../../_Icon';
import { addFocus, applyEllipsis } from '../../../../mixins';
import { classes, tokens } from '../../Combobox.tokens';

const {
    hasChips,
    innerLabelUp,
    arrowInverse,
    comboboxTargetArrow,
    comboboxTargeText,
    comboboxTargetInput,
    comboboxTargetLabel,
} = classes;

export const StyledComboboxTarget = styled.div<{
    opened?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
}>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    box-sizing: border-box;

    height: var(${tokens.targetHeight});
    width: var(${tokens.targetWidth});
    overflow: hidden;
    border-radius: var(${tokens.targetRadius});
    font-family: var(${tokens.targetFontFamily});
    font-size: var(${tokens.targetFontStyle});
    font-weight: var(${tokens.targetFontWeight});
    letter-spacing: var(${tokens.targetLetterSpacing});
    line-height: var(${tokens.targetLineHeight});

    color: var(${tokens.targetColor});

    background-color: ${({ opened }) =>
        opened ? `var(${tokens.targetBackgroundColorOpen})` : `var(${tokens.targetBackgroundColor})`};

    box-shadow: inset 0 0 0 0.0625rem
        ${({ opened }) => (opened ? `var(${tokens.targetBorderColorOpen})` : `var(${tokens.targetBorderColor})`)};

    &:hover:not([disabled]):not([readonly]) {
        background-color: ${({ opened }) =>
            opened ? `var(${tokens.targetBackgroundColorOpen})` : `var(${tokens.targetBackgroundColorHover})`};

        box-shadow: inset 0 0 0 0.0625rem
            ${({ opened }) =>
                opened ? `var(${tokens.targetBorderColorOpen})` : `var(${tokens.targetBorderColorHover})`};
    }

    &:active:not([disabled]):not([readonly]) {
        background-color: ${({ opened }) =>
            opened ? `var(${tokens.targetBackgroundColorOpen})` : `var(${tokens.targetBackgroundColorActive})`};

        box-shadow: inset 0 0 0 0.0625rem
            ${({ opened }) =>
                opened ? `var(${tokens.targetBorderColorOpen})` : `var(${tokens.targetBorderColorActive})`};
    }

    padding: var(${tokens.targetPaddingWithInput});

    display: flex;
    justify-content: flex-start;

    &[disabled] {
        cursor: not-allowed;

        opacity: var(${tokens.disabledOpacity});
    }

    &[readonly] {
        cursor: default;

        .${String(comboboxTargetArrow)} {
            opacity: 0.4;
        }
    }

    .${String(arrowInverse)} {
        transform: rotate(-180deg);
    }

    &.${String(hasChips)} {
        padding: var(${tokens.targetPaddingHasChips});
    }

    &.${String(innerLabelUp)} {
        .${String(comboboxTargetInput)}, .${String(comboboxTargeText)} {
            top: var(${tokens.targetInnerTop});
        }

        .${String(comboboxTargetLabel)} {
            top: var(${tokens.targetLabelInnerTop});
            font-family: var(${tokens.targetLabelInnerFontFamily});
            font-size: var(${tokens.targetLabelInnerFontSize});
            font-style: var(${tokens.targetLabelInnerFontStyle});
            font-weight: var(${tokens.targetLabelInnerFontWeight});
            letter-spacing: var(${tokens.targetLabelInnerLetterSpacing});
            line-height: var(${tokens.targetLabelInnerLineHeight});
        }
    }

    overflow: visible;

    --plasma_private-combobox-focus-size: 0.0625rem;

    ${addFocus({
        hasTransition: false,
        outlineOffset: 'calc(-1 * var(--plasma_private-combobox-focus-size))',
        outlineRadius: `calc(var(${tokens.targetRadius}) + var(--plasma_private-combobox-focus-size))`,
        outlineSize: 'var(--plasma_private-combobox-focus-size)',
        customFocusRules: `
            &:focus-within {
                box-shadow: none;
                background-color: var(${tokens.targetBackgroundColorOpen});

                &::before {
                    box-shadow: inset 0 0 0 var(--plasma_private-combobox-focus-size) var(${tokens.targetBorderColorOpen});
                }
            }
        `,
    })}
`;

export const StyledArrow = styled(IconChevronDown)`
    transition: color 0.3s ease-in, transform 0.15s ease-in;
    pointer-events: none;
    user-select: none;

    position: absolute;
    right: var(${tokens.targetArrowRight});
    color: var(${tokens.targetArrowColor});
`;

export const StyledContent = styled.div`
    &.${String(hasChips)} {
        border-radius: var(${tokens.chipBorderRadius});
    }

    font-family: var(${tokens.targetFontFamily});
    font-size: var(${tokens.targetFontSize});
    font-style: var(${tokens.targetFontStyle});
    font-weight: var(${tokens.targetFontWeight});
    letter-spacing: var(${tokens.targetLetterSpacing});
    line-height: var(${tokens.targetLineHeight});

    overflow: scroll;
    position: relative;
    width: 100%;
    height: var(${tokens.chipHeight});
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    ::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    overscroll-behavior: contain;
`;

export const StyledComboboxInput = styled.input`
    position: relative;
    color: var(${tokens.targetColor});

    border: none;
    outline: none;
    caret-color: var(${tokens.focusColor});
    margin: 0;
    padding: 0;
    background: transparent;

    flex: 1;

    min-width: 50%;

    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;

    &::placeholder {
        color: var(${tokens.targetLabelColor});
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const StyledComboboxInputHelper = styled.div`
    position: absolute;

    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;

    white-space: pre-wrap;
    visibility: hidden;
    overflow: hidden;
`;

export const StyledText = styled.span`
    white-space: nowrap;

    position: relative;
    user-select: none;

    color: var(${tokens.targetColor});
`;

export const StyledChips = styled.div`
    display: flex;
    gap: var(${tokens.chipGap});

    user-select: none;
`;

export const StyledLabel = styled.label`
    ${applyEllipsis()};

    box-sizing: border-box;
    position: absolute;
    pointer-events: none;
    display: inline-flex;
    align-items: center;

    transition: all 0.1s ease-in-out;
    transform-origin: top left;

    width: 100%;
    height: auto;

    color: var(${tokens.targetLabelColor});

    font-family: var(${tokens.targetFontFamily});
    font-size: var(${tokens.targetFontSize});
    font-style: var(${tokens.targetFontStyle});
    font-weight: var(${tokens.targetFontWeight});
    letter-spacing: var(${tokens.targetLetterSpacing});
    line-height: var(${tokens.targetLineHeight});
`;
