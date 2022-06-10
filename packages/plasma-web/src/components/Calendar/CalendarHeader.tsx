import React, { useCallback } from 'react';
import styled from 'styled-components';
import { h4Bold } from '@salutejs/plasma-typo';
import { IconDisclosureLeft, IconDisclosureRight } from '@salutejs/plasma-icons';

import { CalendarState } from './types';
import type { CalendarStateType, DateObject } from './types';
import { MONTH_NAMES, YEAR_RENDER_COUNT } from './utils';
import { flexCenter, flexSpaceBetween } from './mixins';

export interface CalendarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    firstDate: DateObject;
    secondDate?: DateObject;
    startYear?: number;
    type?: CalendarStateType;
    isDouble?: boolean;
    onPrev: () => void;
    onNext: () => void;
    onCalendarStateChange?: React.Dispatch<React.SetStateAction<CalendarStateType>>;
}

const StyledCalendarHeader = styled.div`
    ${h4Bold};

    padding: 1rem 1.5rem 0;

    ${flexSpaceBetween};
`;

const StyledHeader = styled.div`
    cursor: pointer;
    padding: 0.5rem 0;

    ${flexSpaceBetween};
`;

const StyledHeaderDouble = styled.div`
    padding: 0.5rem 0;
    flex: 1;

    ${flexCenter};

    &:first-of-type {
        margin-right: 3rem;
    }

    &:last-of-type {
        margin-left: 3rem;
    }
`;

const StyledArrows = styled.div`
    padding: 0.5rem 0;
    width: 5.5rem;

    ${flexSpaceBetween};
`;

const StyledArrow = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;

    display: flex;
    cursor: pointer;
`;

const StyledNavigation = styled.div`
    width: 100%;

    ${flexCenter};
`;

/**
 * Компонент шапки календаря.
 */
export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
    type = 'Days',
    startYear = 0,
    firstDate,
    secondDate,
    isDouble,
    onCalendarStateChange,
    onPrev,
    onNext,
}) => {
    const handleCalendarState = useCallback(() => {
        if (type === CalendarState.Days) {
            onCalendarStateChange?.(CalendarState.Months);
        }

        if (type === CalendarState.Months) {
            onCalendarStateChange?.(CalendarState.Years);
        }
    }, [type, onCalendarStateChange]);

    const getHeaderContent = useCallback(
        (date?: DateObject) => {
            if (!date) {
                return '';
            }

            if (type === CalendarState.Days) {
                return `${MONTH_NAMES[date.monthIndex]} ${date.year}`;
            }

            if (type === CalendarState.Months) {
                return `${date.year}`;
            }

            if (type === CalendarState.Years) {
                return `${startYear}—${startYear + YEAR_RENDER_COUNT - 1}`;
            }

            return '';
        },
        [type, startYear],
    );

    return (
        <StyledCalendarHeader>
            {isDouble ? (
                <StyledNavigation>
                    <StyledArrow tabIndex={0} onClick={onPrev}>
                        <IconDisclosureLeft />
                    </StyledArrow>
                    <StyledHeaderDouble>{getHeaderContent(firstDate)}</StyledHeaderDouble>
                    <StyledHeaderDouble>{getHeaderContent(secondDate)}</StyledHeaderDouble>
                    <StyledArrow tabIndex={0} onClick={onNext}>
                        <IconDisclosureRight />
                    </StyledArrow>
                </StyledNavigation>
            ) : (
                <>
                    <StyledHeader onClick={handleCalendarState} tabIndex={0}>
                        {getHeaderContent(firstDate)}
                    </StyledHeader>
                    <StyledArrows>
                        <StyledArrow tabIndex={0} onClick={onPrev}>
                            <IconDisclosureLeft />
                        </StyledArrow>
                        <StyledArrow tabIndex={0} onClick={onNext}>
                            <IconDisclosureRight />
                        </StyledArrow>
                    </StyledArrows>
                </>
            )}
        </StyledCalendarHeader>
    );
};
