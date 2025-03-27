import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../../../../engines';
import { popoverConfig } from '../../../../../Popover';
import { indicatorConfig, indicatorTokens } from '../../../../../Indicator';
import { tableTokens as tokens } from '../../../../Table.tokens';
import { StyledCheckbox as Checkbox, StyledDivider as Divider } from '../../../../Table.styles';

const Popover = component(popoverConfig);
export const StyledPopover = styled(Popover)``;

const mergedIndicatorConfig = mergeConfig(indicatorConfig);
const Indicator = component(mergedIndicatorConfig);

export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: var(${tokens.filterPopoverWidth});
    padding: var(${tokens.filterPopoverPadding});
    box-sizing: border-box;
    background: var(--surface-solid-card);
    border-radius: var(${tokens.filterPopoverBorderRadius});
`;

export const IconFilterWrapper = styled.span`
    position: relative;
    line-height: 0;
    cursor: pointer;
`;

export const StyledIndicator = styled(Indicator)`
    position: absolute;
    top: 2%;
    right: 3%;
    ${indicatorTokens.size}: 0.375rem;
    ${indicatorTokens.color}: var(--surface-accent);
`;

export const FilterList = styled.div``;

export const StyledCheckbox = styled(Checkbox)`
    padding: var(${tokens.filterCheckboxPadding});
`;

export const StyledDivider = styled(Divider)`
    margin: var(${tokens.filterDividerMargin});
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
