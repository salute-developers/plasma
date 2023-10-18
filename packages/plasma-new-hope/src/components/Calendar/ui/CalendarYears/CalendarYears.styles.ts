import { styled } from '@linaria/react';

import { flexCenter, selectedMixin } from '../../shared/mixins';
import { addFocus, bodyS } from '../../../../mixins';

export const StyledCalendarYears = styled.div`
    padding: 0.5rem 1.5rem 1.5rem;
    box-sizing: border-box;
`;

export const StyledFlex = styled.div`
    ${flexCenter()};
`;

export const StyledYear = styled.div`
    border-radius: 0.438rem;

    ${flexCenter()};
`;

const selectable = () => `
    --add-focus-outline-offset: 0.063rem;
    --add-focus-outline-size: 0.063rem;
    --add-focus-outline-radius: 0.563rem;
    --add-focus-outline-transition: box-shadow 0.2s ease-in-out;
    --add-focus-outline-color: var(--plasma-colors-button-focused);
    --selected-min-width: 5.25rem;
    --selected-min-height: 3.25rem;
    ${selectedMixin()};
    ${addFocus()};
`;

export const StyledYearRoot = styled.div`
    ${bodyS()};

    position: relative;
    box-sizing: border-box;

    min-height: 3.5rem;

    border-radius: 0.5rem;

    flex: 1;

    ${flexCenter()};

    ${selectable()};
`;
