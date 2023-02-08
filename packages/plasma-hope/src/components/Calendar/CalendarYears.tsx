import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FocusProps } from '@salutejs/plasma-core';
import { bodyS } from '@salutejs/plasma-typo';

import type { DateObject, YearsProps } from './types';
import { useYears } from './hooks';
import { flexCenter, selected as selectedMixin } from './mixins';

export interface CalendarYearsProps extends React.HTMLAttributes<HTMLDivElement> {
    date: DateObject;
    startYear: number;
    selectIndexes?: number[];
    outerRefs: React.MutableRefObject<HTMLDivElement[][]>;
    onChangeYear: (year: number) => void;
    onSetRefs?: (refs: HTMLDivElement[][]) => void;
    onSetSelected?: (selected: number[]) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

const StyledCalendarYears = styled.div`
    padding: 0.5rem 1.5rem 1.5rem;
    box-sizing: border-box;
`;

const StyledFlex = styled.div`
    ${flexCenter};
`;

const StyledYear = styled.div`
    border-radius: 0.438rem;

    ${flexCenter};
`;

const StyledYearRoot = styled.div<YearsProps & FocusProps>`
    ${bodyS};

    position: relative;
    box-sizing: border-box;

    min-height: 3.5rem;

    border-radius: 0.5rem;

    flex: 1;

    ${flexCenter};

    ${({ isSelected, isCurrent }) =>
        selectedMixin({
            StyledItem: StyledYear,
            minWidth: 5.25,
            minHeight: 3.25,
            isSelected,
            isCurrent,
        })};
`;

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
                    {year.map(({ yearValue, isSelected, isCurrent }, j) => (
                        <StyledYearRoot
                            ref={(element: HTMLDivElement) => getRefs(element, i, j)}
                            tabIndex={i === selectIndexes?.[0] && j === selectIndexes?.[1] ? 0 : -1}
                            isCurrent={isCurrent}
                            isSelected={isSelected}
                            onClick={handleOnChangeYear}
                            data-year={yearValue}
                            aria-selected={isSelected}
                            role="gridcell"
                            key={`StyledYear-${i}-${j}`}
                            aria-label={String(yearValue)}
                        >
                            <StyledYear>{yearValue}</StyledYear>
                        </StyledYearRoot>
                    ))}
                </StyledFlex>
            ))}
        </StyledCalendarYears>
    );
};
