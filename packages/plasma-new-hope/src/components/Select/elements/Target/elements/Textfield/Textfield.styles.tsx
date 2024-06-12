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
        background: ${({ opened }) =>
            opened
                ? `var(${tokens.targetTextfieldBackgroundColorOpened})`
                : `var(${tokens.targetTextfieldBackgroundColor})`};
        padding: ${({ value }) =>
            Array.isArray(value) && !isEmpty(value)
                ? `0 var(${tokens.targetTextfieldChipPadding})`
                : `0 var(${tokens.targetTextfieldPadding})`};
    }

    .${classes.selectWithoutBoxShadow}::before {
        box-shadow: none !important;
    }
`;

export const StyledButton = styled(Button)`
    ${buttonTokens.buttonColor}: var(${constants.textfieldTargetColor});
    ${buttonTokens.buttonColorHover}: var(${constants.textfieldTargetColor});
    ${buttonTokens.buttonColorActive}: var(${constants.textfieldTargetColor});
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.targetTextfieldBackgroundColor});
    ${buttonTokens.buttonHeight}: var(${tokens.targetHeight});
    ${buttonTokens.buttonWidth}: 100%;
    ${buttonTokens.buttonPadding}: var(${tokens.targetTextfieldPadding});
    ${buttonTokens.buttonRadius}: var(${tokens.borderRadius});
    ${buttonTokens.buttonFontFamily}: var(${tokens.fontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.fontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.fontStyle});
    ${buttonTokens.buttonFontWeight}:var(${tokens.fontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.fontLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.fontLineHeight});
    ${buttonTokens.buttonDisabledOpacity}: 0.4;
    ${buttonTokens.buttonFocusColor}: var(${constants.focusColor});

    ${addFocus({
        outlineOffset: `calc(var(${tokens.focusOffset}) * -1)`,
        outlineSize: constants.focusSize,
        outlineRadius: `calc(var(${tokens.borderRadius}) + var(${tokens.focusOffset}))`,
        outlineColor: constants.focusColor,
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

export const ChipWrapper = styled.div`
    width: 100%;
    display: flex;
    min-width: 0;
    padding: calc(${constants.focusSize} + var(${tokens.focusOffset}));
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
    font-family: var(--plasma-typo-body-xs-font-family);
    font-size: var(--plasma-typo-body-xs-font-size);
    font-style: var(--plasma-typo-body-xs-font-style);
    font-weight: var(--plasma-typo-body-xs-font-weight);
    letter-spacing: var(--plasma-typo-body-xs-letter-spacing);
    line-height: var(--plasma-typo-body-xs-line-height);
    text-align: left;
`;

export const ContentLeftWrapper = styled.div`
    flex: none;
    margin-left: -2px;
    margin-right: 6px;
`;

export const Value = styled.span`
    ${applyEllipsis()}
`;
