import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { tertiary, addFocus, FocusProps } from '@salutejs/plasma-core';
import { bodyS } from '@salutejs/plasma-typo';

import type { DateItem, DateObject, DayProps } from './types';
import { SHORT_DAY_NAMES } from './utils';
import { useDays } from './hooks';
import { flexCenter, selected, syntheticFocus } from './mixins';

export interface CalendarDaysProps extends React.HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    value: Date;
    onChangeDay: (date: DateObject) => void;
}

const StyledFlex = styled.div`
    ${flexCenter};
`;

const StyledCalendarDays = styled.div`
    padding: 0.5rem 1rem 1.5rem;
    box-sizing: border-box;
`;

const StyledDay = styled.div`
    border-radius: 0.438rem;

    ${flexCenter};
`;

const StyledDayRoot = styled.div<DayProps & FocusProps>`
    ${bodyS};

    position: relative;
    box-sizing: border-box;

    min-width: 2.5rem;
    min-height: 2rem;

    border-radius: 0.5rem;

    ${flexCenter};

    ${({ dayOfWeek }) =>
        dayOfWeek &&
        css`
            color: ${tertiary};
        `}

    ${({ isDayInCurrentMonth }) => css`
        opacity: ${isDayInCurrentMonth ? '1' : '0.4'};
    `}

    ${({ isSelected, isCurrent, dayOfWeek }) =>
        !dayOfWeek &&
        selected({
            StyledItem: StyledDay,
            minWidth: 2.25,
            minHeight: 1.75,
            isSelected,
            isCurrent,
        })};

    ${addFocus({
        synthesizeFocus: syntheticFocus,
        outlineRadius: '0.563rem',
        outlineSize: '0.063rem',
        outlineOffset: '0.063rem',
    })};
`;

/**
 * Компонент дней в календаре.
 */
export const CalendarDays: React.FC<CalendarDaysProps> = ({ date: currentDate, value, onChangeDay }) => {
    const days = useDays(currentDate, value);

    const handleOnChangeDay = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const { day, monthIndex, year } = event.currentTarget.dataset;

            if (!day || !monthIndex || !year) {
                return;
            }

            onChangeDay({
                day: Number(day),
                monthIndex: Number(monthIndex),
                year: Number(year),
            });
        },
        [onChangeDay],
    );

    return (
        <StyledCalendarDays>
            <StyledFlex>
                {SHORT_DAY_NAMES.map((name) => (
                    <StyledDayRoot key={name} dayOfWeek>
                        {name}
                    </StyledDayRoot>
                ))}
            </StyledFlex>
            {days.map((el: DateItem[], i) => (
                <StyledFlex key={i}>
                    {el.map(({ date, isSelected, isCurrent, isDayInCurrentMonth }: DateItem, j: number) => (
                        <StyledDayRoot
                            tabIndex={0}
                            isCurrent={isCurrent}
                            isSelected={isSelected}
                            isDayInCurrentMonth={isDayInCurrentMonth}
                            onClick={handleOnChangeDay}
                            data-day={date.day}
                            data-month-index={date.monthIndex}
                            data-year={date.year}
                            key={`StyledDay-${j}`}
                        >
                            <StyledDay>{date.day}</StyledDay>
                        </StyledDayRoot>
                    ))}
                </StyledFlex>
            ))}
        </StyledCalendarDays>
    );
};
