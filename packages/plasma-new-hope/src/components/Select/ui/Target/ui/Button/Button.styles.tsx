import { styled } from '@linaria/react';

import { IconDisclosureDownCentered } from '../../../../../_Icon';
import { component, mergeConfig } from '../../../../../../engines';
import { buttonConfig, buttonTokens } from '../../../../../Button';
import { applyEllipsis } from '../../../../../../mixins';
import { tokens, classes, constants } from '../../../../Select.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const StyledButton = styled(Button)`
    ${buttonTokens.buttonColor}: var(${tokens.buttonColor});
    ${buttonTokens.buttonColorHover}: var(${tokens.buttonColorHover});
    ${buttonTokens.buttonColorActive}: var(${tokens.buttonColorActive});
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.buttonBackgroundColor});
    ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.buttonBackgroundColorHover});
    ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.buttonBackgroundColorActive});
    ${buttonTokens.buttonRightContentMargin}: var(${tokens.buttonArrowMargin});
    ${buttonTokens.buttonHeight}: var(${tokens.targetHeight});
    ${buttonTokens.buttonWidth}: 100%;
    ${buttonTokens.buttonPadding}: var(${tokens.buttonPadding});
    ${buttonTokens.buttonRadius}: var(${tokens.borderRadius});
    ${buttonTokens.buttonFontFamily}: var(${tokens.fontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.fontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.fontStyle});
    ${buttonTokens.buttonFontWeight}: var(${tokens.fontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.fontLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.fontLineHeight});
    ${buttonTokens.buttonDisabledOpacity}: ${constants.opacity};
    ${buttonTokens.buttonFocusColor}: var(${constants.focusColor});
    text-align: left;
`;

export const IconArrowWrapper = styled.div`
    line-height: 0;
    color: var(${tokens.buttonArrowColor});

    &:hover {
        color: var(${tokens.buttonArrowColorHover});
    }

    &:active {
        color: var(${tokens.buttonArrowColorActive});
    }
`;

// TODO: Удалить после поддержки JS переменных в конфиге компонент
export const sizeMap: Record<string, string> = {
    xs: '1rem',
    s: '1.5rem',
};

export const StyledArrow = styled(IconDisclosureDownCentered)`
    transition: color 0.3s ease-in, transform 0.15s ease-in;
    pointer-events: none;
    user-select: none;

    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
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
