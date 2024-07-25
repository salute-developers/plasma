import React, { forwardRef, memo } from 'react';

import { cx } from '../../../../utils';
import { classes } from '../../Calendar.tokens';

import type { DateStructureItemProps } from './DateStructureItem.types';
import { StyledItem, StyledItemRoot, StyledEvent, StyledEvents } from './DateStructureItem.styles';

/**
 * Компонент элемента даты в сетке календаря.
 */
export const DateStructureItem = memo(
    forwardRef<HTMLDivElement, DateStructureItemProps>(
        (
            {
                children,
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
            const selectedClass = isDayInCurrentMonth && isSelected ? classes.selectedItem : undefined;
            const currentClass = isDayInCurrentMonth && isCurrent ? classes.currentItem : undefined;
            const hoveredClass = isDayInCurrentMonth && isHovered ? classes.hoveredItem : undefined;
            const dayOfWeekClass = dayOfWeek ? classes.dayOfWeek : undefined;
            const dayInCurrentMonthClass = isDayInCurrentMonth ? classes.dayInCurrentMonth : undefined;
            const disabledClass = disabled && !isCurrent ? classes.disabled : undefined;
            const disabledCurrentClass = disabled && isCurrent ? classes.disabledCurrent : undefined;
            const sideInRangeLeft = isDayInCurrentMonth && sideInRange === 'left' ? classes.sideLeft : undefined;
            const sideInRangeRight = isDayInCurrentMonth && sideInRange === 'right' ? classes.sideRight : undefined;
            const sideInRangeClass = isDayInCurrentMonth && sideInRange ? classes.sideInRange : undefined;
            const inRangeStyle = isDayInCurrentMonth && inRange ? classes.inRange : undefined;
            const sideOffset = !isSelected && isCurrent ? -1 : 0;

            return (
                <StyledItemRoot
                    ref={outerRef}
                    className={cx(
                        dayOfWeekClass,
                        selectableClass,
                        selectedClass,
                        currentClass,
                        disabledClass,
                        disabledCurrentClass,
                        hoveredClass,
                        dayInCurrentMonthClass,
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
                    <StyledItem
                        className={cx(sideInRangeClass, sideInRangeLeft, sideInRangeRight, inRangeStyle)}
                        offset={sideOffset}
                    >
                        {children}
                    </StyledItem>
                    <StyledEvents aria-hidden>
                        {[eventList[0], eventList[1], eventList[2]].map(
                            (event, i) => event && <StyledEvent key={`${event.date}-${i}`} {...event} />,
                        )}
                    </StyledEvents>
                </StyledItemRoot>
            );
        },
    ),
);
