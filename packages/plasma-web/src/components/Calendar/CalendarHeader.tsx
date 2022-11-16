import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { h4Bold } from '@salutejs/plasma-typo';
import { IconDisclosureLeft, IconDisclosureRight } from '@salutejs/plasma-icons';
import { primary } from '@salutejs/plasma-core';

import { CalendarState } from './types';
import type { CalendarStateType, DateObject } from './types';
import { MONTH_NAMES, YEAR_RENDER_COUNT, getCalendarType } from './utils';
import { buttonFocus, flexCenter, flexSpaceBetween } from './mixins';

export interface CalendarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    firstDate: DateObject;
    secondDate?: DateObject;
    startYear?: number;
    type?: CalendarStateType;
    isDouble?: boolean;
    onPrev: () => void;
    onNext: () => void;
    onUpdateCalendarState?: (newType: CalendarStateType, newSize: [number, number]) => void;
}

const StyledCalendarHeader = styled.div`
    ${h4Bold};

    padding: 1rem 1.5rem 0;

    ${flexSpaceBetween};
`;

const StyledHeader = styled.button`
    ${h4Bold};

    ${buttonFocus};

    color: ${primary};
    cursor: pointer;
    padding: 0.5rem 0;

    ${flexSpaceBetween};
`;

const StyledHeaderDouble = styled.h4`
    ${h4Bold};

    margin-top: 0;
    margin-bottom: 0;
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

const StyledArrow = styled.button.attrs({
    type: 'button',
})`
    ${buttonFocus};

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
    onPrev,
    onNext,
    onUpdateCalendarState,
}) => {
    const handleCalendarState = useCallback(() => {
        if (type === CalendarState.Days) {
            onUpdateCalendarState?.(CalendarState.Months, [3, 2]);
        }

        if (type === CalendarState.Months) {
            onUpdateCalendarState?.(CalendarState.Years, [3, 2]);
        }
    }, [type, onUpdateCalendarState]);

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

    const currentCalendarType = getCalendarType(isDouble ? CalendarState.Days : type);

    const PreviousButton = useMemo(
        () => (
            <StyledArrow aria-label={`Предыдущий ${currentCalendarType}`} tabIndex={0} onClick={() => onPrev()}>
                <IconDisclosureLeft />
            </StyledArrow>
        ),
        [currentCalendarType, onPrev],
    );

    const NextButton = useMemo(
        () => (
            <StyledArrow aria-label={`Следующий ${currentCalendarType}`} tabIndex={0} onClick={() => onNext()}>
                <IconDisclosureRight />
            </StyledArrow>
        ),
        [currentCalendarType, onNext],
    );

    return (
        <StyledCalendarHeader>
            {isDouble ? (
                <StyledNavigation>
                    {PreviousButton}
                    <StyledHeaderDouble aria-live="polite">{getHeaderContent(firstDate)}</StyledHeaderDouble>
                    <StyledHeaderDouble aria-live="polite">{getHeaderContent(secondDate)}</StyledHeaderDouble>
                    {NextButton}
                </StyledNavigation>
            ) : (
                <>
                    <StyledHeader aria-live="polite" id="id-grid-label" onClick={handleCalendarState} tabIndex={0}>
                        {getHeaderContent(firstDate)}
                    </StyledHeader>
                    <StyledArrows>
                        {PreviousButton}
                        {NextButton}
                    </StyledArrows>
                </>
            )}
        </StyledCalendarHeader>
    );
};
