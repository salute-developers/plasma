import { styled } from '@linaria/react';

import { applyEllipsis } from '../../../../../../mixins';
import { IconDisclosureDownCentered } from '../../../../../_Icon';
import { component, mergeConfig } from '../../../../../../engines';
import { buttonConfig, buttonTokens } from '../../../../../Button';
import { tokens, classes, constants } from '../../../../Select.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const StyledButton = styled(Button)<{ renderTarget: boolean }>`
    ${buttonTokens.buttonColor}: var(${tokens.targetButtonColor});
    ${buttonTokens.buttonColorHover}: var(${tokens.targetButtonColorHover});
    ${buttonTokens.buttonColorActive}: var(${tokens.targetButtonColorActive});
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.targetButtonBackgroundColor});
    ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.targetButtonBackgroundColorHover});
    ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.targetButtonBackgroundColorActive});
    ${buttonTokens.buttonRightContentMargin}: var(${tokens.targetButtonArrowMargin});
    ${buttonTokens.buttonHeight}: ${({ renderTarget }) => (renderTarget ? 'auto' : `var(${tokens.targetHeight})`)};
    ${buttonTokens.buttonWidth}: 100%;
    ${buttonTokens.buttonPadding}: var(${tokens.targetButtonPadding});
    ${buttonTokens.buttonRadius}: var(${tokens.borderRadius});
    ${buttonTokens.buttonFontFamily}: var(${tokens.fontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.fontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.fontStyle});
    ${buttonTokens.buttonFontWeight}: 600;
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.fontLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.fontLineHeight});
    ${buttonTokens.buttonDisabledOpacity}: ${constants.opacity};
    ${buttonTokens.buttonFocusColor}: var(${constants.focusColor});
    text-align: left;
`;

export const IconArrowWrapper = styled.div`
    line-height: 0;
    color: var(${tokens.targetButtonArrowColor});

    &:hover {
        color: var(${tokens.targetButtonArrowColorHover});
    }

    &:active {
        color: var(${tokens.targetButtonArrowColorActive});
    }
`;

export const StyledArrow = styled(IconDisclosureDownCentered)`
    transition: color 0.3s ease-in, transform 0.15s ease-in;
    pointer-events: none;
    user-select: none;
`;

export const ButtonWrapper = styled.div`
    display: inline;

    .${classes.selectWithoutBoxShadow}::before {
        box-shadow: none !important;
    }

    .${classes.arrowInverse} {
        transform: rotate(-180deg);
    }
`;

export const Label = styled.div`
    display: inline;
    width: 100%;
    text-align: left;

    ${applyEllipsis()}
`;
