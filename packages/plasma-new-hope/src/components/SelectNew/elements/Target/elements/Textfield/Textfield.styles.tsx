import { styled } from '@linaria/react';

import { applyEllipsis } from '../../../../../../mixins';
import { IconChevronDown } from '../../../../../_Icon';
import { component, mergeConfig } from '../../../../../../engines';
import { buttonConfig, buttonTokens } from '../../../../../Button';
import { tokens, classes } from '../../../../SelectNew.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const StyledButton = styled(Button)`
    ${buttonTokens.buttonColor}: var(${tokens.targetColor});
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.targetTextfieldBackgroundColor});
    ${buttonTokens.buttonColorHover}: var(${tokens.targetColor});
    ${buttonTokens.buttonColorActive}: var(${tokens.targetColor});
    ${buttonTokens.buttonHeight}: var(${tokens.targetHeight});
    ${buttonTokens.buttonWidth}: var(${tokens.targetWidth});
    ${buttonTokens.buttonPadding}: var(${tokens.targetTextfieldPadding});
    ${buttonTokens.buttonRadius}: var(${tokens.targetRadius});
    ${buttonTokens.buttonFontFamily}: var(${tokens.targetFontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.targetFontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.targetFontStyle});
    ${buttonTokens.buttonFontWeight}:var(${tokens.targetFontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.targetLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.targetLineHeight});
    ${buttonTokens.buttonDisabledOpacity}: var(${tokens.disabledOpacity});
    ${buttonTokens.buttonFocusColor}: var(${tokens.focusColor});
`;

export const StyledArrow = styled(IconChevronDown)``;

export const IconArrowWrapper = styled.div`
    line-height: 0;
    margin: 0 0 0 var(${tokens.targetArrowMarginLeft});
    color: var(${tokens.targetArrowColor});

    &:hover {
        color: var(${tokens.targetArrowColorHover});
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .${classes.arrowInverse} {
        transform: rotate(-180deg);
    }
`;

export const ChipWrapper = styled.div`
    ${applyEllipsis()};

    width: 100%;
    display: flex;
    gap: 0.25rem;
    overflow-x: scroll;
    border-top-right-radius: var(${tokens.chipBorderRadius});
    border-bottom-right-radius: var(${tokens.chipBorderRadius});

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const TextfieldWrapper = styled.div<any>`
    display: inline;

    .${classes.textfieldTarget} {
        background: ${({ opened }) =>
            opened
                ? `var(${tokens.targetTextfieldBackgroundColorOpened})`
                : `var(${tokens.targetTextfieldBackgroundColor})`};
    }

    .${classes.selectWithoutBoxShadow}::before {
        box-shadow: none !important;
    }
`;

export const Label = styled.label`
    color: var(${tokens.innerLabelColor});
    font-family: var(${tokens.labelFontFamily});
    font-size: var(${tokens.labelFontSize});
    font-style: var(${tokens.labelFontStyle});
    font-weight: var(${tokens.labelFontWeight});
    letter-spacing: var(${tokens.labelLetterSpacing});
    line-height: var(${tokens.labelLineHeight});
`;

export const Placeholder = styled.div`
    color: var(${tokens.placeholderColor});
    font-family: var(${tokens.placeholderFontFamily});
    font-size: var(${tokens.placeholderFontSize});
    font-style: var(${tokens.placeholderFontStyle});
    font-weight: var(${tokens.placeholderFontWeight});
    letter-spacing: var(${tokens.placeholderLetterSpacing});
    line-height: var(${tokens.placeholderLineHeight});
`;

export const InnerLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: var(${tokens.innerLabelGap});
    font-family: var(${tokens.targetFontFamily});
    font-size: var(${tokens.targetFontSize});
    font-style: var(${tokens.targetFontStyle});
    font-weight: var(${tokens.targetFontWeight});
    letter-spacing: var(${tokens.targetLetterSpacing});
    line-height: var(${tokens.targetLineHeight});
`;

export const InnerLabel = styled.label`
    color: var(${tokens.innerLabelColor});
    font-family: var(${tokens.innerLabelFontFamily});
    font-size: var(${tokens.innerLabelFontSize});
    font-style: var(${tokens.innerLabelFontStyle});
    font-weight: var(${tokens.innerLabelFontWeight});
    letter-spacing: var(${tokens.innerLabelLetterSpacing});
    line-height: var(${tokens.innerLabelLineHeight});
    text-align: left;
`;
