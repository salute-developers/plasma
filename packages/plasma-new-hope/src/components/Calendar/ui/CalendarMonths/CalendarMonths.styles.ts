import { styled } from '@linaria/react';
import type { FocusProps } from '@salutejs/plasma-core';

import { flexCenter, selectedMixin } from '../../shared/mixins';
import type { MonthsProps } from '../../shared/types';
import { addFocus, bodyS } from '../../../../mixins';

export const StyledCalendarMonths = styled.div`
    padding: 0.5rem 1.5rem 1.5rem;
    box-sizing: border-box;
`;

export const StyledFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledMonth = styled.div`
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

export const StyledMonthRoot = styled.div<MonthsProps & FocusProps>`
    ${bodyS()};

    position: relative;
    box-sizing: border-box;

    min-height: 3.5rem;

    border-radius: 0.5rem;

    flex: 1;

    ${flexCenter()};
    ${selectable()};
`;
