import { styled } from '@linaria/react';

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

export const StyledArrow = styled(IconChevronDown)`
    transition: color 0.3s ease-in, transform 0.15s ease-in;
    pointer-events: none;
    user-select: none;
    color: var(${tokens.targetArrowColor});
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
    width: 100%;
    display: flex;
    gap: 0.25rem;
    overflow-x: scroll;
`;

export const TextfieldWrapper = styled.div<any>`
    display: inline;

    .${classes.textfieldTarget} {
        background: ${({ opened }) =>
            opened
                ? `var(${tokens.targetTextfieldBackgroundColorOpened})`
                : `var(${tokens.targetTextfieldBackgroundColor})`};
    }
`;
