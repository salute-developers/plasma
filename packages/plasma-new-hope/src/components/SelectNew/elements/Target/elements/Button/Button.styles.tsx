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
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.targetBackgroundColor});
    ${buttonTokens.buttonColorHover}: var(${tokens.targetColor});
    ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.targetBackgroundColorHover});
    ${buttonTokens.buttonColorActive}: var(${tokens.targetColor});
    ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.targetBackgroundColorActive});
    ${buttonTokens.buttonHeight}: var(${tokens.targetHeight});
    ${buttonTokens.buttonWidth}: var(${tokens.targetWidth});
    ${buttonTokens.buttonPadding}: var(${tokens.targetButtonPadding});
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

export const ButtonWrapper = styled.div`
    display: inline;

    .${classes.selectWithoutBoxShadow}::before {
        box-shadow: none !important;
    }
`;

export const InnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .${classes.arrowInverse} {
        transform: rotate(-180deg);
    }
`;

export const Label = styled.div`
    width: 100%;
    text-align: left;

    ${applyEllipsis()}
`;
