import { styled } from '@linaria/react';

import { classes, tokens, constants } from '../../../../SelectNew.tokens';
import { addFocus, applyEllipsis } from '../../../../../../mixins';
import { component, mergeConfig } from '../../../../../../engines';
import { checkboxConfig } from '../../../../../Checkbox';
import { indicatorConfig, indicatorTokens } from '../../../../../Indicator';

const mergedCheckboxConfig = mergeConfig(checkboxConfig);
const Checkbox = component(mergedCheckboxConfig);

export const StyledCheckbox = styled(Checkbox)`
    --plasma-checkbox-trigger-size: var(${tokens.checkboxTriggerSize});
    --plasma-checkbox-trigger-border-radius: var(${tokens.checkboxTriggerBorderRadius});
    --plasma-checkbox-fill-color: var(${tokens.checkboxFillColor});
    --plasma-checkbox-icon-color: var(${tokens.checkboxIconColor});
    --plasma-checkbox-trigger-border-color: var(${tokens.checkboxTriggerBorderColor});
`;

const mergedIndicatorConfig = mergeConfig(indicatorConfig);
const Indicator = component(mergedIndicatorConfig);

export const StyledIndicator = styled(Indicator)`
    ${indicatorTokens.size}: var(${tokens.indicatorSize});
    ${indicatorTokens.color}: var(${tokens.checkboxFillColor});
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
    color: var(${constants.disclosureIconColor});

    &:hover {
        color: var(${constants.disclosureIconColorHover});
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(${tokens.itemIconSize});
    height: var(${tokens.itemIconSize});
    margin: var(${tokens.itemIconMargin});
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
    min-height: var(${tokens.itemHeight});
    margin: 0;
    box-sizing: content-box;
    padding: var(${tokens.itemPadding});
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
    background: var(${constants.itemBackground});
    color: var(--text-primary);
    border-radius: var(${tokens.itemBorderRadius});
    user-select: none;

    &:hover:not(.${classes.dropdownItemIsDisabled}) {
        cursor: pointer;
        background: var(${constants.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsActive} {
        background: var(${constants.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsDisabled} {
        opacity: 0.4;
        cursor: not-allowed;
    }

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineSize: '0.0625rem',
        outlineOffset: '0',
        outlineColor: `var(${constants.focusColor})`,
        outlineRadius: `var(${tokens.itemBorderRadius})`,
        hasTransition: false,
        customFocusRules: `
            &.${classes.dropdownItemIsFocused}:before {
                outline: none;
                box-shadow: 0 0 0 0.0625rem var(${constants.focusColor});
            }
        `,
    })};
`;
