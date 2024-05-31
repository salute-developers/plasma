import { styled } from '@linaria/react';

import { applyEllipsis } from '../../../../../../mixins';
import { IconChevronDown } from '../../../../../_Icon';
import { component, mergeConfig } from '../../../../../../engines';
import { buttonConfig, buttonTokens } from '../../../../../Button';
import { tokens, classes, constants } from '../../../../SelectNew.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const StyledButton = styled(Button)`
    ${buttonTokens.buttonColor}: var(${tokens.targetColor});
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.targetButtonBackgroundColor});
    ${buttonTokens.buttonColorHover}: var(${tokens.targetColor});
    ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.targetButtonBackgroundColorHover});
    ${buttonTokens.buttonColorActive}: var(${tokens.targetColor});
    ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.targetButtonBackgroundColorActive});
    ${buttonTokens.buttonHeight}: var(${tokens.targetHeight});
    ${buttonTokens.buttonWidth}: 100%;
    ${buttonTokens.buttonPadding}: var(${tokens.targetButtonPadding});
    ${buttonTokens.buttonRadius}: var(${tokens.borderRadius});
    ${buttonTokens.buttonFontFamily}: var(${tokens.fontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.fontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.fontStyle});
    ${buttonTokens.buttonFontWeight}: 600;
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.fontLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.fontLineHeight});
    ${buttonTokens.buttonDisabledOpacity}: 0.4;
    ${buttonTokens.buttonFocusColor}: var(${constants.focusColor});
`;

export const IconArrowWrapper = styled.div`
    line-height: 0;
    color: var(${tokens.targetArrowColor});

    &:hover {
        color: var(${tokens.targetArrowColorHover});
    }
`;

export const StyledArrow = styled(IconChevronDown)`
    transition: color 0.3s ease-in, transform 0.15s ease-in;
    pointer-events: none;
    user-select: none;
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
