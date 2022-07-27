import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FocusProps } from '@salutejs/plasma-core';
import { bodyS } from '@salutejs/plasma-typo';

import type { DateObject, MonthsProps } from './types';
import { useMonths } from './hooks';
import { flexCenter, selected as selectedMixin } from './mixins';

export interface CalendarMonthsProps extends React.HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    selectIndexes?: number[];
    outerRefs: React.MutableRefObject<HTMLDivElement[][]>;
    onChangeMonth: (month: number) => void;
    onSetRefs?: (refs: HTMLDivElement[][]) => void;
    onSetSelected?: (selected: number[]) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const StyledCalendarMonths = styled.div`
    padding: 0.5rem 1.5rem 1.5rem;
    box-sizing: border-box;
`;

const StyledFlex = styled.div`
    ${flexCenter};
`;

const StyledMonth = styled.div`
    border-radius: 0.438rem;

    ${flexCenter};
`;

const StyledMonthRoot = styled.div<MonthsProps & FocusProps>`
    ${bodyS};

    position: relative;
    box-sizing: border-box;

    min-height: 3.5rem;

    border-radius: 0.5rem;

    flex: 1;

    ${flexCenter};

    ${({ isSelected, isCurrent }) =>
        selectedMixin({
            StyledItem: StyledMonth,
            minWidth: 5.25,
            minHeight: 3.25,
            isSelected,
            isCurrent,
        })};
`;

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
        <StyledCalendarMonths onKeyDown={onKeyDown}>
            {months.map((month, i) => (
                <StyledFlex key={i}>
                    {month.map(({ monthName, monthIndex, isSelected, isCurrent }, j) => (
                        <StyledMonthRoot
                            id={`month-test-${i}-${j}`}
                            ref={(element: HTMLDivElement) => getRefs(element, i, j)}
                            tabIndex={i === selectIndexes?.[0] && j === selectIndexes?.[1] ? 0 : -1}
                            isCurrent={isCurrent}
                            isSelected={isSelected}
                            onClick={handleOnChangeMonth}
                            data-month-index={monthIndex}
                            key={`StyledMonth-${i}-${j}`}
                        >
                            <StyledMonth>{monthName}</StyledMonth>
                        </StyledMonthRoot>
                    ))}
                </StyledFlex>
            ))}
        </StyledCalendarMonths>
    );
};
