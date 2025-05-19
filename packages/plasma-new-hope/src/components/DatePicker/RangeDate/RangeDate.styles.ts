import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component, mergeConfig } from '../../../engines';
import { rangeConfig, rangeTokens } from '../../Range';
import { classes, tokens } from '../DatePicker.tokens';
import { popoverConfig } from '../../Popover';

const mergedRangeConfig = mergeConfig(rangeConfig);
const Range = component(mergedRangeConfig);

const mergedPopoverConfig = mergeConfig(popoverConfig);
const Popover = component(mergedPopoverConfig);

export const StyledPopover = styled(Popover)``;

// NOTE: переопределение токенов Range
export const StyledRange = styled(Range)`
    ${rangeTokens.background}: var(${tokens.background});
    ${rangeTokens.backgroundError}: var(${tokens.backgroundError});
    ${rangeTokens.backgroundSuccess}: var(${tokens.backgroundSuccess});

    ${rangeTokens.borderColor}: var(${tokens.borderColor});
    ${rangeTokens.borderColorError}: var(${tokens.borderColorError});
    ${rangeTokens.borderColorSuccess}: var(${tokens.borderColorSuccess});

    ${rangeTokens.borderWidth}: var(${tokens.textFieldBorderWidth});

    ${rangeTokens.dividerColor}: var(${tokens.dividerColor});
    ${rangeTokens.labelColor}: var(${tokens.labelColor});
    ${rangeTokens.leftHelperColor}: var(${tokens.leftHelperColor});

    ${rangeTokens.textFieldColor}: var(${tokens.textFieldColor});
    ${rangeTokens.textFieldPlaceholderColor}: var(${tokens.textFieldPlaceholderColor});
    ${rangeTokens.textFieldPlaceholderColorFocus}: var(${tokens.textFieldPlaceholderColorFocus});
    ${rangeTokens.textFieldCaretColor}: var(${tokens.textFieldCaretColor});

    ${rangeTokens.textFieldBackgroundColorFocus}: var(${tokens.textFieldBackgroundColorFocus});
    ${rangeTokens.textFieldBackgroundErrorColor}: var(${tokens.textFieldBackgroundErrorColor});
    ${rangeTokens.textFieldBackgroundErrorColorFocus}: var(${tokens.textFieldBackgroundErrorColorFocus});
    ${rangeTokens.textFieldBackgroundSuccessColor}: var(${tokens.textFieldBackgroundSuccessColor});
    ${rangeTokens.textFieldBackgroundSuccessColorFocus}: var(${tokens.textFieldBackgroundSuccessColorFocus});

    ${rangeTokens.textFieldBorderWidth}: var(${tokens.textFieldBorderWidth});
    ${rangeTokens.textFieldBorderColorFocus}: var(${tokens.textFieldBorderColorFocus});
    ${rangeTokens.textFieldBorderColorError}: var(${tokens.textFieldBorderColorError});
    ${rangeTokens.textFieldBorderColorErrorFocus}: var(${tokens.textFieldBorderColorErrorFocus});
    ${rangeTokens.textFieldBorderColorSuccess}: var(${tokens.textFieldBorderColorSuccess});
    ${rangeTokens.textFieldBorderColorSuccessFocus}: var(${tokens.textFieldBorderColorSuccessFocus});

    ${rangeTokens.textFieldTextBeforeColor}: var(${tokens.textFieldTextBeforeColor});
    ${rangeTokens.textFieldTextAfterColor}: var(${tokens.textFieldTextAfterColor});

    ${rangeTokens.focusColor}: var(${tokens.focusColor});

    ${rangeTokens.borderRadius}: var(${tokens.borderRadius});

    ${rangeTokens.dividerPadding}: var(${tokens.dividerPadding});
    ${rangeTokens.dividerFontFamily}: var(${tokens.dividerFontFamily});
    ${rangeTokens.dividerFontStyle}: var(${tokens.dividerFontStyle});
    ${rangeTokens.dividerFontSize}: var(${tokens.dividerFontSize});
    ${rangeTokens.dividerFontWeight}: var(${tokens.dividerFontWeight});
    ${rangeTokens.dividerLetterSpacing}: var(${tokens.dividerLetterSpacing});
    ${rangeTokens.dividerLineHeight}: var(${tokens.dividerLineHeight});

    ${rangeTokens.leftContentMargin}: var(${tokens.leftContentMargin});
    ${rangeTokens.rightContentMargin}: var(${tokens.rightContentMargin});

    ${rangeTokens.labelOffset}: var(${tokens.labelOffset});

    ${rangeTokens.labelFontFamily}: var(${tokens.labelFontFamily});
    ${rangeTokens.labelFontStyle}: var(${tokens.labelFontStyle});
    ${rangeTokens.labelFontSize}: var(${tokens.labelFontSize});
    ${rangeTokens.labelFontWeight}: var(${tokens.labelFontWeight});
    ${rangeTokens.labelLetterSpacing}: var(${tokens.labelLetterSpacing});
    ${rangeTokens.labelLineHeight}: var(${tokens.labelLineHeight});

    ${rangeTokens.indicatorColor}: var(${tokens.indicatorColor});
    ${rangeTokens.indicatorSize}: var(${tokens.indicatorSize});
    ${rangeTokens.indicatorSizeOuter}: var(${tokens.indicatorSizeOuter});
    ${rangeTokens.indicatorPlacement}: var(${tokens.indicatorPlacement});
    ${rangeTokens.indicatorOuterPlacement}: var(${tokens.indicatorOuterPlacement});
    ${rangeTokens.indicatorPlacementRight}: var(${tokens.indicatorPlacementRight});
    ${rangeTokens.indicatorOuterPlacementRight}: var(${tokens.indicatorOuterPlacementRight});

    ${rangeTokens.textFieldHeight}: var(${tokens.textFieldHeight});
    ${rangeTokens.textFieldBorderRadius}: var(${tokens.textFieldBorderRadius});
    ${rangeTokens.textFieldPadding}: var(${tokens.textFieldPadding});
    ${rangeTokens.textFieldFontFamily}: var(${tokens.textFieldFontFamily});
    ${rangeTokens.textFieldFontStyle}: var(${tokens.textFieldFontStyle});
    ${rangeTokens.textFieldFontSize}: var(${tokens.textFieldFontSize});
    ${rangeTokens.textFieldFontWeight}: var(${tokens.textFieldFontWeight});
    ${rangeTokens.textFieldLetterSpacing}: var(${tokens.textFieldLetterSpacing});
    ${rangeTokens.textFieldLineHeight}: var(${tokens.textFieldLineHeight});

    ${rangeTokens.leftHelperOffset}: var(${tokens.leftHelperOffset});
    ${rangeTokens.leftHelperFontFamily}: var(${tokens.leftHelperFontFamily});
    ${rangeTokens.leftHelperFontStyle}: var(${tokens.leftHelperFontStyle});
    ${rangeTokens.leftHelperFontSize}: var(${tokens.leftHelperFontSize});
    ${rangeTokens.leftHelperFontWeight}: var(${tokens.leftHelperFontWeight});
    ${rangeTokens.leftHelperLetterSpacing}: var(${tokens.leftHelperLetterSpacing});
    ${rangeTokens.leftHelperLineHeight}: var(${tokens.leftHelperLineHeight});

    ${rangeTokens.textFieldLeftContentMargin}: var(${tokens.textFieldLeftContentMargin});
    ${rangeTokens.textFieldRightContentMargin}: var(${tokens.textFieldRightContentMargin});
    ${rangeTokens.textFieldTextBeforeMargin}: var(${tokens.textFieldTextBeforeMargin});
    ${rangeTokens.textFieldTextAfterMargin}: var(${tokens.textFieldTextAfterMargin});

    ${rangeTokens.backgroundReadOnly}: var(${tokens.backgroundReadOnly});
    ${rangeTokens.labelColorReadOnly}: var(${tokens.labelColorReadOnly});
    ${rangeTokens.leftHelperColorReadOnly}: var(${tokens.leftHelperColorReadOnly});
    ${rangeTokens.dividerColorReadOnly}: var(${tokens.dividerColorReadOnly});

    ${rangeTokens.textFieldColorReadOnly}: var(${tokens.textFieldColorReadOnly});
    ${rangeTokens.textFieldBackgroundColorReadOnly}: var(${tokens.textFieldBackgroundColorReadOnly});
    ${rangeTokens.textFieldPlaceholderColorReadOnly}: var(${tokens.textFieldPlaceholderColorReadOnly});
`;

export const base = css`
    display: inline-block;
`;

export const LeftHelper = styled.div`
    color: var(${tokens.leftHelperColor});

    &.${classes.datePickerError} {
        color: var(${tokens.leftHelperColorError});
    }

    &.${classes.datePickerSuccess} {
        color: var(${tokens.leftHelperColorSuccess});
    }
`;
