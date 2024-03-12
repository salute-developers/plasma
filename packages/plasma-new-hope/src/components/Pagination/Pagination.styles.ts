import { styled } from '@linaria/react';

import { buttonConfig, buttonTokens } from '../Button';
import { buttonGroupConfig, buttonGroupTokens } from '../ButtonGroup';
import { component, mergeConfig } from '../../engines';

import { classes, tokens } from './Pagination.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

const mergedButtonGroupConfig = mergeConfig(buttonGroupConfig);
const ButtonGroup = component(mergedButtonGroupConfig);

export const PaginationRoot = styled.div`
    display: flex;

    &.${classes.compactType} {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    &.${classes.defaultType} {
        display: flex;
        justify-content: space-between;
        flex: 0 0 100%;
        gap: 1rem;
        flex-wrap: wrap;
    }
`;

export const PaginationPages = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0 auto;
`;

export const PaginationActions = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    gap: 10px;
    &.${classes.compactType} {
        flex-direction: row !important;
    }

    &.${classes.isPerPageSelect} {
        flex-direction: row-reverse;
    }

    &.${classes.isQuickJump} {
        flex-direction: row;
    }
`;

export const PaginationSection = styled.div`
    display: flex;
    gap: 3px;
`;

export const PaginationButtonGroup = styled(ButtonGroup)`
    ${buttonGroupTokens.buttonColor}: var(${tokens.paginationButtonColor});
    ${buttonGroupTokens.buttonBackgroundColor}: var(${tokens.paginationButtonBackgroundColor});

    ${buttonGroupTokens.buttonColorHover}: var(${tokens.paginationButtonHoverColor});
    ${buttonGroupTokens.buttonBackgroundColorHover}: var(${tokens.paginationButtonHoverBackgroundColor});

    ${buttonGroupTokens.buttonColorActive}: var(${tokens.paginationButtonActiveColor});
    ${buttonGroupTokens.buttonBackgroundColorActive}: var(${tokens.paginationButtonActiveBackgroundColor});

    ${buttonGroupTokens.buttonFontFamily}: var(${tokens.paginationFontFamily});
    ${buttonGroupTokens.buttonFontSize}: var(${tokens.paginationFontSize});
    ${buttonGroupTokens.buttonFontStyle}: var(${tokens.paginationFontStyle});
    ${buttonGroupTokens.buttonFontWeight}:var(${tokens.paginationFontWeight});

    ${buttonGroupTokens.buttonWidth}: var(${tokens.paginationButtonWidth});
    ${buttonGroupTokens.buttonHeight}: var(${tokens.paginationButtonHeight});

    ${buttonGroupTokens.buttonDefaultRadius}: var(${tokens.paginationButtonRadius});
    ${buttonGroupTokens.buttonSideRadius}: var(${tokens.paginationButtonRadius});
    ${buttonGroupTokens.buttonSegmentedRadius}: var(${tokens.paginationButtonRadius});
    ${buttonGroupTokens.buttonRadiusCircle}: var(${tokens.paginationButtonRadius});
    
`;

export const PaginationButton = styled(Button)`
    ${buttonTokens.buttonColor}: var(${tokens.paginationButtonColor});
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.paginationButtonBackgroundColor});

    ${buttonTokens.buttonColorHover}: var(${tokens.paginationButtonHoverColor});
    ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.paginationButtonHoverBackgroundColor});

    ${buttonTokens.buttonColorActive}: var(${tokens.paginationButtonActiveColor});
    ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.paginationButtonActiveBackgroundColor});


    ${buttonTokens.buttonFontFamily}: var(${tokens.paginationFontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.paginationFontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.paginationFontStyle});
    ${buttonTokens.buttonFontWeight}:var(${tokens.paginationFontWeight});

    ${buttonTokens.buttonWidth}: var(${tokens.paginationButtonWidth});
    ${buttonTokens.buttonHeight}: var(${tokens.paginationButtonHeight});
    ${buttonTokens.buttonRadius}: var(${tokens.paginationButtonRadius});

    ${buttonTokens.buttonDisabledOpacity}: var(${tokens.paginationButtonDisabledOpacity});

    &.${classes.paginationPageButtonActive} {
        ${buttonTokens.buttonColor}: var(${tokens.paginationCurrentButtonColor});
        ${buttonTokens.buttonBackgroundColor}: var(${tokens.paginationCurrentButtonBackgroundColor});

        ${buttonTokens.buttonColorHover}: var(${tokens.paginationCurrentButtonHoverColor});
        ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.paginationCurrentButtonHoverBackgroundColor});

        ${buttonTokens.buttonColorActive}: var(${tokens.paginationCurrentButtonActiveColor});
        ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.paginationCurrentButtonActiveBackgroundColor});
    }
`;
