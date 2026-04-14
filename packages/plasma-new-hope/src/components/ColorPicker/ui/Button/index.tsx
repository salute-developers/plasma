import styled from 'styled-components';
import { component, mergeConfig } from 'src/engines';

import { buttonConfig, buttonTokens } from '../../../Button';
import { tokens } from '../../ColorPicker.tokens';

const mergedConfig = mergeConfig(buttonConfig);
const Button = component(mergedConfig);

const buttonBackgroundColor = `var(${tokens.activeTabTextColor}, var(--plasma-button-background-color))`;

export const StyledButton = styled(Button)<{
    $active?: boolean;
}>`
    ${buttonTokens.buttonColor}: var(${tokens.buttonColor});
    ${buttonTokens.buttonTextColor}: var(${tokens.buttonTextColor});
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.buttonBackgroundColor});
    ${buttonTokens.buttonColorHover}: var(${tokens.buttonColorHover});
    ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.buttonBackgroundColorHover});
    ${buttonTokens.buttonBorderColorHover}: var(${tokens.buttonBorderColorHover});
    ${buttonTokens.buttonColorActive}: var(${tokens.buttonColorActive});
    ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.buttonBackgroundColorActive});
    ${buttonTokens.buttonBorderColorActive}: var(${tokens.buttonBorderColorActive});
    ${buttonTokens.buttonHeight}: var(${tokens.buttonHeight});
    ${buttonTokens.buttonWidth}: var(${tokens.buttonWidth});
    ${buttonTokens.buttonFontFamily}: var(${tokens.buttonFontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.buttonFontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.buttonFontStyle});
    ${buttonTokens.buttonFontWeight}: var(${tokens.buttonFontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.buttonLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.buttonLineHeight});
    ${buttonTokens.buttonRadius}: var(${tokens.buttonRadius});

    --plasma-button-text-color: ${(props) => (props.$active ? buttonBackgroundColor : `var(${tokens.buttonColor})`)};

    background-color: ${(props) => (props.$active ? buttonBackgroundColor : 'var(--plasma-button-background-color)')};

    :is(:hover) {
        background-color: ${(props) =>
            props.$active ? buttonBackgroundColor : 'var(--plasma-button-background-color)'};

        --plasma-button-text-color: ${(props) =>
            props.$active
                ? `var(${tokens.activeTabTextColor}, var(--plasma-button-background-color))`
                : `var(${tokens.buttonColor})`};
    }
`;
