import { styled } from '@linaria/react';

import { isEmpty } from '../../../../../../utils';
import { applyEllipsis, addFocus } from '../../../../../../mixins';
import { IconDisclosureDownCentered } from '../../../../../_Icon';
import { component, mergeConfig } from '../../../../../../engines';
import { buttonConfig, buttonTokens } from '../../../../../Button';
import { tokens, classes, constants } from '../../../../Select.tokens';
import type { SelectProps } from '../../../../Select.types';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const TextfieldWrapper = styled.div<{ opened: boolean; value: SelectProps['value'] }>`
    display: inline;

    .${classes.textfieldTarget} {
        transition: 100ms;
        background: ${({ opened }) =>
            opened
                ? `var(${tokens.targetTextfieldBackgroundColorOpened})`
                : `var(${tokens.targetTextfieldBackgroundColor})`};
        padding: ${({ value }) =>
            Array.isArray(value) && !isEmpty(value)
                ? `0 var(${tokens.targetTextfieldChipPadding})`
                : `0 var(${tokens.targetTextfieldPadding})`};
        border: ${({ opened }) =>
            opened
                ? `var(${tokens.targetTextfieldBorderSize}) solid var(${tokens.targetTextfieldBorderOpenedColor})`
                : `var(${tokens.targetTextfieldBorderSize}) solid var(${tokens.targetTextfieldBorderColor})`};
    }

    .${classes.textfieldTarget}:hover {
        transition: 100ms;
        border: ${({ opened }) =>
            opened
                ? `var(${tokens.targetTextfieldBorderSize}) solid var(${tokens.targetTextfieldBorderOpenedColor})`
                : `var(${tokens.targetTextfieldBorderSize}) solid var(${tokens.targetTextfieldBorderColorHover})`};
    }

    .${classes.selectWithoutBoxShadow}::before {
        box-shadow: none !important;
    }
`;

export const StyledButton = styled(Button)<{ renderTarget: boolean }>`
    ${buttonTokens.buttonColor}: var(${constants.textfieldTargetColor});
    ${buttonTokens.buttonColorHover}: var(${constants.textfieldTargetColor});
    ${buttonTokens.buttonColorActive}: var(${constants.textfieldTargetColor});
    ${buttonTokens.buttonHeight}: ${({ renderTarget }) => (renderTarget ? 'auto' : `var(${tokens.targetHeight})`)};
    ${buttonTokens.buttonWidth}: 100%;
    ${buttonTokens.buttonPadding}: var(${tokens.targetTextfieldPadding});
    ${buttonTokens.buttonRadius}: var(${tokens.borderRadius});
    ${buttonTokens.buttonFontFamily}: var(${tokens.fontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.fontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.fontStyle});
    ${buttonTokens.buttonFontWeight}:var(${tokens.fontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.fontLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.fontLineHeight});
    ${buttonTokens.buttonDisabledOpacity}: ${constants.opacity};
    ${buttonTokens.buttonFocusColor}: var(${constants.focusColor});
    box-shadow: inset 0 0 0 ${tokens.targetTextfieldBorderSize} var(${tokens.targetTextfieldBorderColor});
    text-align: left;

    ${addFocus({
        outlineOffset: tokens.targetTextfieldBorderSize,
        outlineSize: constants.focusSize,
        outlineRadius: `calc(var(${tokens.borderRadius}) - ${tokens.targetTextfieldBorderSize})`,
        outlineColor: `var(${constants.focusColor})`,
    })}
`;

export const StyledArrow = styled(IconDisclosureDownCentered)``;

export const IconArrowWrapper = styled.div`
    line-height: 0;
    margin: var(${tokens.targetTextfieldArrowMargin});
    color: var(${tokens.targetTextfieldArrowColor});

    &:hover {
        color: var(${tokens.targetTextfieldArrowColorHover});
    }

    &:active {
        color: var(${tokens.targetTextfieldArrowColorActive});
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

export const ChipWrapper = styled.div<{ multiselect: SelectProps['multiselect']; value: SelectProps['value'] }>`
    width: 100%;
    display: flex;
    min-width: 0;
    padding: ${({ multiselect, value }) =>
        `calc(${constants.focusSize} + ${
            multiselect && value && value.length > 0 ? `var(${tokens.focusOffset})` : 0
        })`};
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

export const Label = styled.label`
    color: var(${constants.textfieldInnerLabelColor});
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
`;

export const Placeholder = styled.div`
    color: var(${constants.textfieldPlaceholderColor});
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
`;

export const InnerLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: var(${tokens.innerLabelGap});
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
`;

export const InnerLabel = styled.label`
    color: var(${constants.textfieldInnerLabelColor});
    font-family: var(${constants.fontFamily});
    font-size: var(${constants.fontSize});
    font-style: var(${constants.fontStyle});
    font-weight: var(${constants.fontWeight});
    letter-spacing: var(${constants.fontLetterSpacing});
    line-height: var(${constants.fontLineHeight});
    text-align: left;
`;

export const ContentLeftWrapper = styled.div`
    flex: none;
    margin-left: -0.125rem;
    margin-right: 0.375rem;
    line-height: 0;
`;

export const Value = styled.span`
    ${applyEllipsis()}
`;
