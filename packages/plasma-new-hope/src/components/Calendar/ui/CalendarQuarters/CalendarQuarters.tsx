import React, { useCallback, useEffect, useRef } from 'react';

import { useQuarters } from '../../hooks';
import { innerTokens, tokens } from '../../Calendar.tokens';
import { ROW_QUARTER_STEP, canSelectDate, getInRange, getSideInRange, isSameDay, isSelectProcess } from '../../utils';
import { DateStructureItem } from '../DateStructureItem/DateStructureItem';

import type { CalendarQuartersProps } from './CalendarQuarters.types';
import { StyledCalendarQuarters, StyledFlex } from './CalendarQuarters.styles';

/**
 * Компонент кварталов в календаре.
 */
export const CalendarQuarters: React.FC<CalendarQuartersProps> = ({
    date: currentDate,
    value,
    selectIndexes,
    eventList,
    disabledList,
    min,
    max,
    outerRefs,
    isDouble,
    isSecond,
    hoveredQuarter,
    onChangeQuarter,
    onHoverQuarter,
    onSetSelected,
    onKeyDown,
}) => {
    const [quarters, selected] = useQuarters({ date: currentDate, value, eventList, disabledList, min, max });
    const selectedRef = useRef(selected);
    const onSetSelectedRef = useRef(onSetSelected);

    const offset = isSecond ? ROW_QUARTER_STEP : 0;

    const quarterItemTokens = {
        [`${innerTokens.dateStructureFontFamily}`]: `var(${tokens.calendarQuarterFontFamily})`,
        [`${innerTokens.dateStructureFontSize}`]: `var(${tokens.calendarQuarterFontSize})`,
        [`${innerTokens.dateStructureFontWeight}`]: `var(${tokens.calendarQuarterFontWeight})`,
        [`${innerTokens.dateStructureFontLineHeight}`]: `var(${tokens.calendarQuarterFontLineHeight})`,
        [`${innerTokens.dateStructureFontLetterSpacing}`]: `var(${tokens.calendarQuarterFontLetterSpacing})`,
        [`${innerTokens.dateStructureFontStyle}`]: `var(${tokens.calendarQuarterFontStyle})`,
        [`${innerTokens.dateStructureSelectedFontWeight}`]: `var(${tokens.calendarQuarterSelectedFontWeight})`,
        [`${innerTokens.dateStructureWidth}`]: `var(${tokens.calendarQuarterItemWidth})`,
        [`${innerTokens.dateStructureHeight}`]: `var(${tokens.calendarQuarterItemHeight})`,
        [`${innerTokens.dateStructureBorderRadius}`]: `var(${tokens.calendarQuarterItemBorderRadius})`,
    };

    const getSelectedDate = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const { day, monthIndex, year } = event.currentTarget.dataset;

            const selectedDate = {
                day: Number(day),
                monthIndex: Number(monthIndex),
                year: Number(year),
            };

            if (!canSelectDate(selectedDate, value, disabledList)) {
                return;
            }

            return selectedDate;
        },
        [disabledList, value],
    );

    const handleOnChangeQuarter = useCallback(
        (i: number, j: number, quarterName: string) => (event: React.MouseEvent<HTMLDivElement>) => {
            /**
             * нужно вызвать stopImmediatePropagation для случаев, когда
             * обработчик события onClick навешивается снаружи.
             * Как, например, в компоненте Popup
             */
            event.nativeEvent.stopImmediatePropagation();

            const selectedDate = getSelectedDate(event);

            if (!selectedDate) {
                return;
            }

            onChangeQuarter(selectedDate, [i + offset, j], quarterName);

            if (isSelectProcess(value)) {
                onHoverQuarter?.(undefined);
            }
        },
        [getSelectedDate, onChangeQuarter, offset, value, onHoverQuarter],
    );

    const handleOnHoverQuarter = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const selectedDate = getSelectedDate(event);
            const isSelectedDone = Array.isArray(value) && value[0] && value[1];

            if (!selectedDate || !Array.isArray(value) || isSelectedDone) {
                return;
            }

            onHoverQuarter?.(selectedDate);
        },
        [getSelectedDate, onHoverQuarter, value],
    );

    const getRefs = useCallback(
        (element: HTMLDivElement, i: number, j: number) => {
            outerRefs.current[i + offset][j] = element;
        },
        [offset, outerRefs],
    );

    useEffect(() => {
        if (selectedRef.current) {
            onSetSelectedRef.current?.(selectedRef.current);
        }
    }, []);

    return (
        <StyledCalendarQuarters role="grid" aria-labelledby="id-grid-label" onKeyDown={onKeyDown}>
            {quarters.map((quarter, i) => (
                <StyledFlex role="row" key={i}>
                    {quarter.map(
                        (
                            {
                                quarterName,
                                isSelected,
                                isCurrent,
                                date,
                                events,
                                isOutOfMinMaxRange,
                                inRange,
                                disabled,
                                disabledArrowKey,
                                disabledDates,
                            },
                            j,
                        ) => {
                            return (
                                <DateStructureItem
                                    ref={(element: HTMLDivElement) => getRefs(element, i, j)}
                                    style={quarterItemTokens}
                                    eventList={events}
                                    disabled={disabled}
                                    day={date.day}
                                    year={date.year}
                                    monthIndex={date.monthIndex}
                                    isFocused={
                                        i + offset === selectIndexes?.[0] &&
                                        j === selectIndexes?.[1] &&
                                        !isOutOfMinMaxRange
                                    }
                                    isSelected={isSelected}
                                    isCurrent={isCurrent}
                                    isDouble={isDouble}
                                    isHovered={isSameDay(date, hoveredQuarter)}
                                    inRange={getInRange(value, date, hoveredQuarter, inRange)}
                                    sideInRange={getSideInRange(value, date, hoveredQuarter, isSelected)}
                                    onClick={disabled ? undefined : handleOnChangeQuarter(i, j, String(quarterName))}
                                    onMouseOver={disabled ? undefined : handleOnHoverQuarter}
                                    key={`StyledQuarter-${i}-${j}`}
                                    role="gridcell"
                                    aria-label={quarterName}
                                    disabledArrowKey={disabledArrowKey}
                                    disabledMonths={disabledDates}
                                    isDayInCurrentMonth
                                >
                                    {quarterName}
                                </DateStructureItem>
                            );
                        },
                    )}
                </StyledFlex>
            ))}
        </StyledCalendarQuarters>
    );
};
