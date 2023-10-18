import { styled } from '@linaria/react';

import { buttonFocus, flexCenter } from '../../shared/mixins';
import { h4Bold } from '../../../../mixins';

export const StyledCalendarHeader = styled.div`
    ${h4Bold()};
    padding: 1rem 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledHeader = styled(buttonFocus)`
    ${h4Bold()};

    color: var(--plasma-colors-primary);
    cursor: pointer;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledHeaderDouble = styled.h4`
    ${h4Bold()};

    margin-top: 0;
    margin-bottom: 0;
    padding: 0.5rem 0;
    flex: 1;

    ${flexCenter()};

    &:first-of-type {
        margin-right: 3rem;
    }

    &:last-of-type {
        margin-left: 3rem;
    }
`;

export const StyledArrows = styled.div`
    padding: 0.5rem 0;
    width: 5.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledArrow = styled(buttonFocus)`
    display: flex;
    cursor: pointer;
`;

export const StyledNavigation = styled.div`
    width: 100%;

    ${flexCenter()};
`;
