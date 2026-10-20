import styled from 'styled-components';
import { component, mergeConfig } from 'src/engines';

import { buttonConfig, buttonTokens } from '../../../Button';
import { tokens } from '../../ColorPicker.tokens';

const mergedConfig = mergeConfig(buttonConfig);
const Button = component(mergedConfig);

const buttonBackgroundColorVar = '--plasma-button-background-color';
const buttonTextColorVar = '--plasma-button-text-color';

/* Активная вкладка: фон и текст берут разные токены, иначе текст сливается с фоном. */
const activeTabBackgroundColor = `var(${tokens.activeTabColor}, var(${buttonBackgroundColorVar}))`;
const activeTabTextColor = `var(${tokens.activeTabTextColor}, var(${tokens.buttonColor}))`;

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

    ${buttonTextColorVar}: ${(props) => (props.$active ? activeTabTextColor : `var(${tokens.buttonColor})`)};

    background-color: ${(props) =>
        props.$active ? activeTabBackgroundColor : `var(${tokens.buttonBackgroundColor}, transparent)`};

    /* Выбранная вкладка не подсвечивается на наведении. */
    &:hover {
        ${buttonTextColorVar}: ${(props) =>
    props.$active ? activeTabTextColor : `var(${tokens.buttonColorHover}, var(${tokens.buttonColor}))`};

        background-color: ${(props) =>
            props.$active
                ? activeTabBackgroundColor
                : `var(${tokens.buttonBackgroundColorHover}, var(${tokens.buttonBackgroundColor}, transparent))`};
    }
`;
