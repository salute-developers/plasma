import { styled } from '@linaria/react';

import { IconChevronDown } from '../../../_Icon';
import { applyEllipsis } from '../../../../mixins';
import { component, mergeConfig } from '../../../../engines';
import { buttonConfig, buttonTokens } from '../../../Button';
import { classes, tokens } from '../../Select.tokens';
import type { TargetType } from '../../Select.types';

const { hasChips, innerLabelUp, arrowInverse, selectTargetArrow, selectTargeText, selectTargetLabel } = classes;

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

// NOTE: Необходимое переопределение токенов из компонента Button т.к. используются его части
export const StyledSelectTarget = styled(Button)<{ target?: TargetType; isOpen?: boolean }>`
    ${buttonTokens.buttonDisabledOpacity}: var(${tokens.disabledOpacity});
    ${buttonTokens.buttonColor}: var(${tokens.targetColor});
    ${buttonTokens.buttonBackgroundColor}: ${({ isOpen }) =>
    isOpen ? `var(${tokens.targetBackgroundColorOpen})` : `var(${tokens.targetBackgroundColor})`};
    ${buttonTokens.buttonBackgroundColorHover}: ${({ isOpen }) =>
    isOpen ? `var(${tokens.targetBackgroundColorOpen})` : `var(${tokens.targetBackgroundColorHover})`};
    ${buttonTokens.buttonBackgroundColorActive}: ${({ isOpen }) =>
    isOpen ? `var(${tokens.targetBackgroundColorOpen})` : `var(${tokens.targetBackgroundColorActive})`};
    ${buttonTokens.buttonHeight}: var(${tokens.targetHeight});
    ${buttonTokens.buttonWidth}: var(${tokens.targetWidth});
    ${buttonTokens.buttonRadius}: var(${tokens.targetRadius});
    ${buttonTokens.buttonFontFamily}: var(${tokens.targetFontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.targetFontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.targetFontStyle});
    ${buttonTokens.buttonFontWeight}:var(${tokens.targetFontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.targetLetterSpacing});
    ${buttonTokens.buttonLineHeight}:  var(${tokens.targetLineHeight});

    box-shadow: inset 0 0 0 0.0625rem
        ${({ isOpen }) => (isOpen ? `var(${tokens.targetBorderColorOpen})` : `var(${tokens.targetBorderColor})`)};

    &:hover:not([disabled]):not([readonly]) {
        box-shadow: inset 0 0 0 0.0625rem
            ${({ isOpen }) =>
                isOpen ? `var(${tokens.targetBorderColorOpen})` : `var(${tokens.targetBorderColorHover})`};
    }

    &:active:not([disabled]):not([readonly]) {
        box-shadow: inset 0 0 0 0.0625rem
            ${({ isOpen }) =>
                isOpen ? `var(${tokens.targetBorderColorOpen})` : `var(${tokens.targetBorderColorActive})`};
    }

    padding: ${({ target }) =>
        target === 'textField-like' ? `var(${tokens.targetPaddingWithInput})` : `var(${tokens.targetPadding})`};

    display: flex;
    justify-content: flex-start;

    &[readonly] {
        cursor: default;

        .${String(selectTargetArrow)} {
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
        .${String(selectTargeText)} {
            top: var(${tokens.targetInnerTop});
        }

        .${String(selectTargetLabel)} {
            top: var(${tokens.targetLabelInnerTop});
            font-family: var(${tokens.targetLabelInnerFontFamily});
            font-size: var(${tokens.targetLabelInnerFontSize});
            font-style: var(${tokens.targetLabelInnerFontStyle});
            font-weight: var(${tokens.targetLabelInnerFontWeight});
            letter-spacing: var(${tokens.targetLabelInnerLetterSpacing});
            line-height: var(${tokens.targetLabelInnerLineHeight});
        }
    }
`;

export const StyledArrow = styled(IconChevronDown)`
    transition: color 0.3s ease-in, transform 0.15s ease-in;
    pointer-events: none;
    user-select: none;

    position: absolute;
    right: var(${tokens.targetArrowRight});
    color: var(${tokens.targetArrowColor});
`;

export const StyledText = styled.span`
    ${applyEllipsis()};

    position: relative;
    pointer-events: none;
    user-select: none;

    color: var(${tokens.targetColor});
`;

export const StyledChipsWrapper = styled.div`
    border-radius: var(${tokens.chipBorderRadius});

    overflow: scroll;
    position: relative;
    width: 100%;
    height: var(${tokens.chipHeight});
    display: flex;
    align-items: center;

    ::-webkit-scrollbar {
        display: none;
    }

    overscroll-behavior: contain;
`;

export const StyledChips = styled.div`
    overflow: hidden;
    display: flex;
    gap: var(${tokens.chipGap});

    position: absolute;
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
