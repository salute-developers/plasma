import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FocusProps } from '@salutejs/plasma-core';
import { bodyS } from '@salutejs/plasma-typo';

import type { DateObject, YearsProps } from './types';
import { useYears } from './hooks';
import { flexCenter, selected } from './mixins';

export interface CalendarYearsProps extends React.HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    startYear: number;
    onChangeYear: (year: number) => void;
}

const StyledCalendarYears = styled.div`
    padding: 0.5rem 1.5rem 1.5rem;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(3, 5.5rem);
`;

const StyledYear = styled.div`
    border-radius: 0.438rem;

    ${flexCenter};
`;

const StyledYearRoot = styled.div<YearsProps & FocusProps>`
    ${bodyS};

    position: relative;
    box-sizing: border-box;

    min-height: 3.5rem;

    border-radius: 0.5rem;

    ${flexCenter};

    ${({ isSelected, isCurrent }) =>
        selected({
            StyledItem: StyledYear,
            minWidth: 5.25,
            minHeight: 3.25,
            isSelected,
            isCurrent,
        })};
`;

/**
 * Компонент годов в календаре.
 */
export const CalendarYears: React.FC<CalendarYearsProps> = ({ date: currentDate, startYear, onChangeYear }) => {
    const years = useYears(currentDate, startYear);

    const handleOnChangeYear = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const { year } = event.currentTarget.dataset;
            onChangeYear(Number(year));
        },
        [onChangeYear],
    );

    return (
        <StyledCalendarYears>
            {years.map(({ year, isSelected, isCurrent }, i) => (
                <StyledYearRoot
                    tabIndex={0}
                    isCurrent={isCurrent}
                    isSelected={isSelected}
                    onClick={handleOnChangeYear}
                    data-year={year}
                    key={`StyledYear-${i}`}
                >
                    <StyledYear>{year}</StyledYear>
                </StyledYearRoot>
            ))}
        </StyledCalendarYears>
    );
};
