import React, { forwardRef, memo } from 'react';

import { cx } from '../../../../utils';
import { classes } from '../../shared/tokens';

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
            const selectableClass = !dayOfWeek && !disabled ? classes.selectableItem : undefined;
            const selectedClass = isSelected ? classes.selectedItem : undefined;
            const currentClass = isCurrent ? classes.currentItem : undefined;
            const hoveredClass = isHovered ? classes.hoveredItem : undefined;
            const dayOfWeekClass = dayOfWeek ? classes.dayOfWeek : undefined;
            const disabledClass = disabled && !isCurrent ? classes.dayDisabled : undefined;
            const disabledCurrentClass = disabled && isCurrent ? classes.dayDisabledCurrent : undefined;
            const sideInRangeLeft = sideInRange === 'left' ? classes.daySideLeft : undefined;
            const sideInRangeRight = sideInRange === 'right' ? classes.daySideRight : undefined;
            const sideInRangeClass = sideInRange ? classes.daySideInRange : undefined;
            const inRangeStyle = inRange ? classes.dayInRange : undefined;
            const sideOffset = !isSelected && isCurrent ? -1 : 0;

            return (
                <StyledDayRoot
                    ref={outerRef}
                    className={cx(
                        dayOfWeekClass,
                        selectableClass,
                        selectedClass,
                        currentClass,
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
