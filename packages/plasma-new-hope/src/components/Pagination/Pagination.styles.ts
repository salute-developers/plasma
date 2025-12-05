import { styled } from '@linaria/react';

import { buttonConfig, buttonTokens } from '../Button';
import { buttonGroupConfig, buttonGroupTokens } from '../ButtonGroup';
import { component, mergeConfig } from '../../engines';
import { addFocus, applyEllipsis } from '../../mixins';

import { classes, tokens } from './Pagination.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

const mergedButtonGroupConfig = mergeConfig(buttonGroupConfig);
const ButtonGroup = component(mergedButtonGroupConfig);

export const PaginationRoot = styled.div`
    display: flex;
    color: var(${tokens.paginationColor});

    &.${classes.compactType} {
        flex-direction: column;
        gap: var(${tokens.paginationCompactTypeGap});
        justify-content: flex-start;
    }
    &.${classes.defaultType} {
        width: 100%;
        justify-content: space-between;
        flex: 0 0 100%;
        gap: 1rem;
        flex-wrap: nowrap;
    }
`;

export const PaginationPages = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
`;

export const PaginationActions = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    gap: var(${tokens.paginationHelperTextGap});
    flex-shrink: 1;
    flex-direction: row;

    &.${classes.compactType} {
        width: 100%;
        flex-wrap: wrap;

        &.${classes.withHasPerPageSelect} {
            flex-direction: row-reverse;
        }

        &.${classes.withHasQuickJump} {
            flex-direction: row;
        }
    }
`;

export const PaginationSection = styled.div`
    display: flex;
    gap: 0.125rem;
`;

export const PaginationButtonGroup = styled(ButtonGroup)`
    ${buttonGroupTokens.buttonColor}: var(${tokens.buttonColor});
    ${buttonGroupTokens.buttonBackgroundColor}: var(${tokens.buttonBackgroundColor});

    ${buttonGroupTokens.buttonColorHover}: var(${tokens.buttonHoverColor});
    ${buttonGroupTokens.buttonBackgroundColorHover}: var(${tokens.buttonBackgroundColorHover});

    ${buttonGroupTokens.buttonColorActive}: var(${tokens.buttonActiveColor});
    ${buttonGroupTokens.buttonBackgroundColorActive}: var(${tokens.buttonBackgroundColorActive});

    ${buttonGroupTokens.buttonFontFamily}: var(${tokens.paginationFontFamily});
    ${buttonGroupTokens.buttonFontSize}: var(${tokens.paginationFontSize});
    ${buttonGroupTokens.buttonFontStyle}: var(${tokens.paginationFontStyle});
    ${buttonGroupTokens.buttonFontWeight}:var(${tokens.paginationFontWeight});
    ${buttonGroupTokens.buttonLetterSpacing}: var(${tokens.paginationLetterSpacing});
    ${buttonGroupTokens.buttonLineHeight}: var(${tokens.paginationLineHeight});

    ${buttonGroupTokens.buttonWidth}: var(${tokens.buttonWidth});
    ${buttonGroupTokens.buttonHeight}: var(${tokens.buttonHeight});

    ${buttonGroupTokens.buttonDefaultRadius}: var(${tokens.buttonRadius});
    ${buttonGroupTokens.buttonSideRadius}: var(${tokens.buttonRadius});
    ${buttonGroupTokens.buttonSegmentedRadius}: var(${tokens.buttonRadius});
    ${buttonGroupTokens.buttonRadiusCircle}: var(${tokens.buttonRadius});
`;

export const PaginationButton = styled(Button)`
    ${buttonTokens.buttonColor}: var(${tokens.buttonColor});
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.buttonBackgroundColor});

    ${buttonTokens.buttonColorHover}: var(${tokens.buttonHoverColor});
    ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.buttonBackgroundColorHover});

    ${buttonTokens.buttonColorActive}: var(${tokens.buttonActiveColor});
    ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.buttonBackgroundColorActive});


    ${buttonTokens.buttonFontFamily}: var(${tokens.paginationFontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.paginationFontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.paginationFontStyle});
    ${buttonTokens.buttonFontWeight}:var(${tokens.paginationFontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.paginationLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.paginationLineHeight});

    ${buttonTokens.buttonWidth}: var(${tokens.buttonWidth});
    ${buttonTokens.buttonHeight}: var(${tokens.buttonHeight});
    ${buttonTokens.buttonRadius}: var(${tokens.buttonRadius});

    ${buttonTokens.buttonDisabledOpacity}: var(${tokens.buttonDisabledOpacity});
    ${buttonTokens.buttonFocusColor}: var(${tokens.buttonFocusColor});

    &.${classes.paginationPageButtonActive} {
        ${buttonTokens.buttonColor}: var(${tokens.paginationCurrentButtonColor});
        ${buttonTokens.buttonBackgroundColor}: var(${tokens.paginationCurrentButtonBackgroundColor});

        ${buttonTokens.buttonColorHover}: var(${tokens.paginationCurrentButtonColor});
        ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.paginationCurrentButtonBackgroundColor});

        ${buttonTokens.buttonColorActive}: var(${tokens.paginationCurrentButtonColor});
        ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.paginationCurrentButtonBackgroundColor});

        cursor: default;
    }

    &.${classes.buttonDisabled} {
        ${buttonTokens.buttonColor}: var(${tokens.paginationDisabledButtonColor}, var(${tokens.buttonColor}));
        ${buttonTokens.buttonBackgroundColor}: var(${tokens.paginationDisabledButtonBackgroundColor}, var(${
    tokens.buttonBackgroundColor
}));
    }

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineOffset: 'calc(-1 * var(--plasma_private-btn-outline-size))',
        outlineSize: 'var(--plasma_private-btn-outline-size)',
        outlineRadius: 'var(--plasma_private-btn-br)',
        outlineColor: `var(${tokens.buttonFocusColor})`,
    })}
`;

export const PaginationShorter = styled(PaginationButton)`
    ${buttonTokens.buttonWidth}: var(${tokens.buttonWidthShorter});
    ${buttonTokens.buttonPadding}: 0;
`;

export const PaginationActionsLeft = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(${tokens.paginationHelperTextGap});

    .${classes.defaultType} & {
        min-width: 0;
        flex-wrap: nowrap;
        flex-shrink: 1;
    }
`;

export const PaginationHelperText = styled.div`
    color: var(${tokens.paginationHelperTextColor});

    &.${classes.defaultType} {
        min-width: 0;
        ${applyEllipsis()}
        flex-shrink: 1;
    }

    &.${classes.ellipsisText} {
        ${applyEllipsis()}
    }
`;
