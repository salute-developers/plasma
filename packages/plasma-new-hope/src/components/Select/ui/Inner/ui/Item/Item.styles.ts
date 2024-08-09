import { styled } from '@linaria/react';

import { classes, tokens, constants } from '../../../../Select.tokens';
import { addFocus, applyEllipsis } from '../../../../../../mixins';
import { component, mergeConfig } from '../../../../../../engines';
import { checkboxConfig, checkboxTokens } from '../../../../../Checkbox';
import { indicatorConfig, indicatorTokens } from '../../../../../Indicator';
import type { SelectProps } from '../../../../Select.types';

const mergedCheckboxConfig = mergeConfig(checkboxConfig);
const Checkbox = component(mergedCheckboxConfig);

export const StyledCheckbox = styled(Checkbox)`
    ${checkboxTokens.triggerSize}: var(${tokens.checkboxTriggerSize});
    ${checkboxTokens.triggerBorderRadius}: var(${tokens.checkboxTriggerBorderRadius});
    ${checkboxTokens.fillColor}: var(${tokens.checkboxFillColor});
    ${checkboxTokens.iconColor}: var(${tokens.checkboxIconColor});
   ${checkboxTokens.triggerBorderColor}: var(${tokens.checkboxTriggerBorderColor});
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

export const IconWrapper = styled.div<{ variant: SelectProps['variant'] }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemIconSizeTight : tokens.itemIconSize})`};
    height: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemIconSizeTight : tokens.itemIconSize})`};
    margin: var(${tokens.itemIconMargin});
    line-height: 0;
    color: var(${tokens.checkboxFillColor});

    & .${classes.selectItemCheckbox} {
        --plasma-checkbox-trigger-size: ${({ variant }) =>
            `var(${variant === 'tight' ? tokens.checkboxTriggerSizeTight : tokens.checkboxTriggerSize})`};
        --plasma-checkbox-trigger-border-radius: ${({ variant }) =>
            `var(${
                variant === 'tight' ? tokens.checkboxTriggerBorderRadiusTight : tokens.checkboxTriggerBorderRadius
            })`};
    }
`;

export const StyledText = styled.div<{ color?: string }>`
    ${applyEllipsis()};
    flex: 1;
    color: ${({ color }) => color || 'inherit'};
`;

export const Wrapper = styled.li<{ variant: SelectProps['variant'] }>`
    display: flex;
    align-items: center;
    min-height: var(${tokens.itemHeight});
    margin: 0;
    box-sizing: content-box;
    padding: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemPaddingTight : tokens.itemPadding})`};
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
        opacity: ${constants.opacity};
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

export const StyledCheckboxWrapper = styled.span``;
