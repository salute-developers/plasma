import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../../engines';
import { popoverConfig } from '../../../Popover';
import { indicatorConfig, indicatorTokens } from '../../../Indicator';

const Popover = component(popoverConfig);
export const StyledPopover = styled(Popover)``;

const mergedIndicatorConfig = mergeConfig(indicatorConfig);
const Indicator = component(mergedIndicatorConfig);
export const StyledIndicator = styled(Indicator)`
    position: absolute;
    top: 2%;
    right: 3%;
    ${indicatorTokens.size}: 0.375rem;
    ${indicatorTokens.color}: var(--surface-accent);
`;

export const ControlButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;

export const ThWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;

export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: #fff;
    padding: 0.5rem 1rem;
    border: 1px solid #dddddd;
`;

export const IconFilterWrapper = styled.span`
    position: relative;
`;
