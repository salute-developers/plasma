import { styled } from '@linaria/react';

import { component } from '../../../../engines';
import { popoverConfig } from '../../../Popover';

const Popover = component(popoverConfig);

export const StyledPopover = styled(Popover)``;

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
