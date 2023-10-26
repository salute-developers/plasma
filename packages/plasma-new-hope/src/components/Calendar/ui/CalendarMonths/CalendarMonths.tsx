import React, { useCallback, useEffect, useRef } from 'react';

import { cx } from '../../../../utils';
import { useMonths } from '../../shared/hooks';
import { classes } from '../../shared/tokens';

import type { CalendarMonthsProps } from './CalendarMonths.types';
import { StyledCalendarMonths, StyledFlex, StyledMonth, StyledMonthRoot } from './CalendarMonths.styles';

/**
 * Компонент месяцев в календаре.
 */
export const CalendarMonths: React.FC<CalendarMonthsProps> = ({
    date: currentDate,
    selectIndexes,
    outerRefs,
    onChangeMonth,
    onSetSelected,
    onKeyDown,
}) => {
    const [months, selected] = useMonths(currentDate);
    const selectedRef = useRef(selected);
    const onSetSelectedRef = useRef(onSetSelected);

    const handleOnChangeMonth = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            /**
             * нужно вызвать stopImmediatePropagation для случаев, когда
             * обработчик события onClick навешивается снаружи.
             * Как, например, в компоненте Popup
             */
            event.nativeEvent.stopImmediatePropagation();

            const { monthIndex } = event.currentTarget.dataset;
            onChangeMonth(Number(monthIndex));
        },
        [onChangeMonth],
    );

    const getRefs = useCallback(
        (element: HTMLDivElement, i: number, j: number) => {
            outerRefs.current[i][j] = element;
        },
        [outerRefs],
    );

    useEffect(() => {
        if (selectedRef.current) {
            onSetSelectedRef.current?.(selectedRef.current);
        }
    }, []);

    return (
        <StyledCalendarMonths role="grid" aria-labelledby="id-grid-label" onKeyDown={onKeyDown}>
            {months.map((month, i) => (
                <StyledFlex role="row" key={i}>
                    {month.map(({ monthName, monthIndex, isSelected, isCurrent, monthFullName }, j) => {
                        const selectedClass = isSelected ? classes.selectedItem : undefined;
                        const currentClass = !isSelected && isCurrent ? classes.currentItem : undefined;

                        return (
                            <StyledMonthRoot
                                id={`month-test-${i}-${j}`}
                                className={cx(selectedClass, currentClass, classes.selectableItem)}
                                ref={(element: HTMLDivElement) => getRefs(element, i, j)}
                                tabIndex={i === selectIndexes?.[0] && j === selectIndexes?.[1] ? 0 : -1}
                                onClick={handleOnChangeMonth}
                                data-month-index={monthIndex}
                                aria-selected={isSelected}
                                role="gridcell"
                                key={`StyledMonth-${i}-${j}`}
                                aria-label={monthFullName}
                            >
                                <StyledMonth>{monthName}</StyledMonth>
                            </StyledMonthRoot>
                        );
                    })}
                </StyledFlex>
            ))}
        </StyledCalendarMonths>
    );
};
