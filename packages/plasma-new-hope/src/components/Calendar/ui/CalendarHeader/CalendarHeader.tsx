import React, { useCallback, useMemo } from 'react';

import { IconDisclosureLeft, IconDisclosureRight } from '../../../_Icon';
import { CalendarState } from '../../store/types';
import { getCalendarType, MONTH_NAMES, YEAR_RENDER_COUNT } from '../../shared/utils';
import type { DateObject } from '../../shared/types';

import type { CalendarHeaderProps } from './CalendarHeader.types';
import {
    StyledArrow,
    StyledArrows,
    StyledCalendarHeader,
    StyledHeader,
    StyledHeaderDouble,
    StyledNavigation,
} from './CalendarHeader.styles';

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
            <StyledArrow
                type="button"
                aria-label={`Предыдущий ${currentCalendarType}`}
                tabIndex={0}
                onClick={() => onPrev()}
            >
                <IconDisclosureLeft />
            </StyledArrow>
        ),
        [currentCalendarType, onPrev],
    );

    const NextButton = useMemo(
        () => (
            <StyledArrow
                type="button"
                aria-label={`Следующий ${currentCalendarType}`}
                tabIndex={0}
                onClick={() => onNext()}
            >
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
                    <StyledHeader
                        type="button"
                        aria-live="polite"
                        id="id-grid-label"
                        onClick={handleCalendarState}
                        tabIndex={0}
                    >
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
