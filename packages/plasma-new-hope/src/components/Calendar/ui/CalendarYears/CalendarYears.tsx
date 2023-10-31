import React, { useCallback, useEffect, useRef } from 'react';

import { cx } from '../../../../utils';
import { useYears } from '../../hooks';
import { classes } from '../../Calendar.tokens';

import type { CalendarYearsProps } from './CalendarYears.types';
import { StyledCalendarYears, StyledFlex, StyledYear, StyledYearRoot } from './CalendarYears.styles';

/**
 * Компонент годов в календаре.
 */
export const CalendarYears: React.FC<CalendarYearsProps> = ({
    date: currentDate,
    startYear,
    selectIndexes,
    outerRefs,
    onChangeYear,
    onSetSelected,
    onKeyDown,
}) => {
    const [years, selected] = useYears(currentDate, startYear);
    const selectedRef = useRef(selected);
    const onSetSelectedRef = useRef(onSetSelected);

    const handleOnChangeYear = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            /**
             * нужно вызвать stopImmediatePropagation для случаев, когда
             * обработчик события onClick навешивается снаружи.
             * Как, например, в компоненте Popup
             */
            event.nativeEvent.stopImmediatePropagation();

            const { year } = event.currentTarget.dataset;
            onChangeYear(Number(year));
        },
        [onChangeYear],
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
        <StyledCalendarYears role="grid" aria-labelledby="id-grid-label" onKeyDown={onKeyDown}>
            {years.map((year, i) => (
                <StyledFlex role="row" key={i}>
                    {year.map(({ yearValue, isSelected, isCurrent }, j) => {
                        const selectedClass = isSelected ? classes.selectedItem : undefined;
                        const currentClass = !isSelected && isCurrent ? classes.currentItem : undefined;

                        return (
                            <StyledYearRoot
                                className={cx(selectedClass, currentClass, classes.selectableItem)}
                                ref={(element: HTMLDivElement) => getRefs(element, i, j)}
                                tabIndex={i === selectIndexes?.[0] && j === selectIndexes?.[1] ? 0 : -1}
                                onClick={handleOnChangeYear}
                                data-year={yearValue}
                                aria-selected={isSelected}
                                role="gridcell"
                                key={`StyledYear-${i}-${j}`}
                                aria-label={String(yearValue)}
                            >
                                <StyledYear>{yearValue}</StyledYear>
                            </StyledYearRoot>
                        );
                    })}
                </StyledFlex>
            ))}
        </StyledCalendarYears>
    );
};
