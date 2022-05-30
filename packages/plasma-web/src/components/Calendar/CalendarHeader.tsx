import React, { useCallback } from 'react';
import styled from 'styled-components';
import { h4Bold } from '@salutejs/plasma-typo';
import { IconDisclosureLeft, IconDisclosureRight } from '@salutejs/plasma-icons';

import { CalendarState } from './types';
import type { CalendarStateType, DateObject } from './types';
import { MONTH_NAMES, YEAR_RENDER_COUNT } from './utils';

export interface CalendarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    type: CalendarStateType;
    startYear: number;
    date: DateObject;
    onPrev: () => void;
    onNext: () => void;
    onCalendarStateChange: React.Dispatch<React.SetStateAction<CalendarStateType>>;
}

const StyledCalendarHeader = styled.div`
    ${h4Bold};

    padding: 1rem 1.5rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledHeader = styled.div`
    cursor: pointer;
    padding: 0.5rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledArrows = styled.div`
    padding: 0.5rem 0;
    width: 5.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledArrow = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;

    display: flex;
    cursor: pointer;
`;
/**
 * Компонент шапки календаря.
 */
export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
    type,
    startYear,
    date: currentDate,
    onCalendarStateChange,
    onPrev,
    onNext,
}) => {
    const handleCalendarState = useCallback(() => {
        if (type === CalendarState.Days) {
            onCalendarStateChange(CalendarState.Months);
        }

        if (type === CalendarState.Months) {
            onCalendarStateChange(CalendarState.Years);
        }
    }, [type]);

    const getHeaderContent = useCallback(() => {
        if (type === CalendarState.Days) {
            return `${MONTH_NAMES[currentDate.monthIndex]} ${currentDate.year}`;
        }

        if (type === CalendarState.Months) {
            return `${currentDate.year}`;
        }

        if (type === CalendarState.Years) {
            return `${startYear}—${startYear + YEAR_RENDER_COUNT - 1}`;
        }

        return '';
    }, [type, currentDate, startYear]);

    return (
        <StyledCalendarHeader>
            <StyledHeader onClick={handleCalendarState} tabIndex={0}>
                {getHeaderContent()}
            </StyledHeader>
            <StyledArrows>
                <StyledArrow tabIndex={0} onClick={onPrev}>
                    <IconDisclosureLeft />
                </StyledArrow>
                <StyledArrow tabIndex={0} onClick={onNext}>
                    <IconDisclosureRight />
                </StyledArrow>
            </StyledArrows>
        </StyledCalendarHeader>
    );
};
