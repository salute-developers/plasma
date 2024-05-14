import { styled } from '@linaria/react';

import { classes, tokens } from '../../SelectNew.tokens';
import { addFocus, applyEllipsis } from '../../../../mixins';
import { component, mergeConfig } from '../../../../engines';
import { checkboxConfig } from '../../../Checkbox';
import { indicatorConfig, indicatorTokens } from '../../../Indicator';
import { selectNewTokens } from '../../index';

const mergedCheckboxConfig = mergeConfig(checkboxConfig);
const Checkbox = component(mergedCheckboxConfig);

export const StyledCheckbox = styled(Checkbox)`
    --plasma-checkbox-margin: var(${selectNewTokens.checkboxMargin});
    --plasma-checkbox-trigger-margin: var(${selectNewTokens.checkboxTriggerMargin});
    --plasma-checkbox-trigger-size: var(${selectNewTokens.checkboxTriggerSize});
    --plasma-checkbox-trigger-border-radius: var(${selectNewTokens.checkboxTriggerBorderRadius});
    --plasma-checkbox-fill-color: var(${selectNewTokens.checkboxFillColor});
    --plasma-checkbox-icon-color: var(${selectNewTokens.checkboxIconColor});
    --plasma-checkbox-trigger-border-color: var(${selectNewTokens.checkboxTriggerBorderColor});
`;

const mergedIndicatorConfig = mergeConfig(indicatorConfig);
const Indicator = component(mergedIndicatorConfig);

export const StyledIndicator = styled(Indicator)`
    ${indicatorTokens.size}: var(${selectNewTokens.indicatorSize});
    ${indicatorTokens.color}: var(${selectNewTokens.checkboxFillColor});
`;

export const StyledContentLeft = styled.div`
    display: inline-flex;
`;

export const StyledContentRight = styled.div`
    margin-left: auto;
    display: inline-flex;
`;

export const DisclosureIconWrapper = styled.div`
    line-height: 0;
    color: var(${tokens.disclosureIconColor});
`;

export const IconDoneWrapper = styled.div`
    line-height: 0;
    color: var(${tokens.checkboxFillColor});
`;

export const StyledText = styled.div`
    ${applyEllipsis()};
    flex: 1;
`;

export const Wrapper = styled.li`
    display: flex;
    align-items: center;
    margin: 0;
    box-sizing: content-box;
    padding-top: var(${tokens.itemPaddingTop});
    padding-right: var(${tokens.itemPaddingRight});
    padding-bottom: var(${tokens.itemPaddingBottom});
    padding-left: var(${tokens.itemPaddingLeft});
    font-family: var(${tokens.itemFontFamily});
    font-size: var(${tokens.itemFontSize});
    font-style: var(${tokens.itemFontStyle});
    font-weight: var(${tokens.itemFontWeightBold});
    letter-spacing: var(${tokens.itemFontLetterSpacing});
    line-height: var(${tokens.itemFontLineHeight});
    background: var(${tokens.itemBackground});
    color: var(${tokens.itemColor});
    border-radius: var(${tokens.itemBorderRadius});
    user-select: none;

    &:hover:not(.${classes.dropdownItemIsDisabled}) {
        cursor: pointer;
        background: var(${tokens.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsActive} {
        background: var(${tokens.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsDisabled} {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineSize: '0.0625rem',
        outlineOffset: '0',
        outlineColor: `var(${tokens.focusColor})`,
        outlineRadius: `var(${tokens.itemBorderRadius})`,
        hasTransition: false,
        customFocusRules: `
            &.${classes.dropdownItemIsFocused}:before {
                outline: none;
                box-shadow: 0 0 0 0.0625rem var(${tokens.focusColor});
            }
        `,
    })};
`;
