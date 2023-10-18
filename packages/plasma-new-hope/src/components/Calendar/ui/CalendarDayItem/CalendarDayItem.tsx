import React, { forwardRef, memo } from 'react';

import { cx } from '../../../../utils';

import type { CalendarDayItemProps } from './CalendarDayItem.types';
import { StyledDay, StyledDayRoot, StyledEvent, StyledEvents } from './CalendarDayItem.styles';

/**
 * Компонент дня в календаре.
 */
export const CalendarDayItem = memo(
    forwardRef<HTMLDivElement, CalendarDayItemProps>(
        (
            {
                isFocused,
                dayOfWeek,
                disabled,
                isCurrent,
                isSelected,
                isDayInCurrentMonth,
                isDouble,
                inRange,
                isHovered,
                sideInRange,
                eventList = [],
                day,
                monthIndex,
                year,
                onClick,
                onMouseOver,
                onFocus,
                disabledArrowKey,
                disabledMonths,
                ...rest
            },
            outerRef,
        ) => {
            const selectableClass = !dayOfWeek && !disabled ? 'selectable' : undefined;
            const selectedClass = isSelected ? 'selected' : undefined;
            const hoveredClass = isHovered ? 'hovered' : undefined;
            const dayOfWeekClass = dayOfWeek ? 'day-of-week' : undefined;
            const disabledClass = disabled && !isCurrent ? 'disabled' : undefined;
            const disabledCurrentClass = disabled && isCurrent ? 'disabled-current' : undefined;
            const sideInRangeLeft = sideInRange === 'left' ? 'left' : undefined;
            const sideInRangeRight = sideInRange === 'right' ? 'right' : undefined;
            const sideInRangeClass = sideInRange ? 'side-in-range' : undefined;
            const inRangeStyle = inRange ? 'in-range' : undefined;
            const sideOffset = !isSelected && isCurrent ? -1 : 0;

            return (
                <StyledDayRoot
                    ref={outerRef}
                    className={cx(
                        dayOfWeekClass,
                        selectableClass,
                        selectedClass,
                        disabledClass,
                        disabledCurrentClass,
                        hoveredClass,
                    )}
                    tabIndex={isFocused ? 0 : -1}
                    dayOfWeek={dayOfWeek}
                    isCurrent={isCurrent}
                    isSelected={isSelected}
                    isDayInCurrentMonth={isDayInCurrentMonth}
                    isDouble={isDouble}
                    isHovered={isHovered}
                    sideInRange={sideInRange}
                    onClick={disabled ? undefined : onClick}
                    onMouseOver={onMouseOver}
                    onFocus={onFocus}
                    data-day={day}
                    data-month-index={monthIndex}
                    data-year={year}
                    data-disabled-arrow-key={disabledArrowKey || undefined}
                    data-disabled-months={disabledMonths || undefined}
                    aria-selected={isSelected}
                    aria-disabled={disabled}
                    aria-describedby={disabled ? 'withShift' : undefined}
                    {...rest}
                >
                    <StyledDay
                        className={cx(sideInRangeClass, sideInRangeLeft, sideInRangeRight, inRangeStyle)}
                        offset={sideOffset}
                    >
                        {day}
                    </StyledDay>
                    <StyledEvents aria-hidden>
                        {[eventList[0], eventList[1], eventList[2]].map(
                            (event, i) => event && <StyledEvent key={`${event.date}-${i}`} {...event} />,
                        )}
                    </StyledEvents>
                </StyledDayRoot>
            );
        },
    ),
);
