import React, { useCallback, useMemo } from 'react';

import { IconDisclosureDownFill, IconDisclosureLeft, IconDisclosureRight } from '../../../_Icon';
import { CalendarState } from '../../store/types';
import { getCalendarType, MONTH_NAMES, YEAR_RENDER_COUNT } from '../../utils';
import type { DateObject } from '../../Calendar.types';
import { classes } from '../../Calendar.tokens';

import type { CalendarHeaderProps } from './CalendarHeader.types';
import {
    StyledArrow,
    StyledArrows,
    StyledCalendarHeader,
    StyledDoubleHeaderWrapper,
    StyledHeader,
    StyledHeaderDate,
    StyledHeaderDouble,
    StyledNavigation,
} from './CalendarHeader.styles';

/**
 * Компонент шапки календаря.
 */
export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
    type = 'Days',
    startYear = 0,
    size,
    firstDate,
    secondDate,
    isDouble,
    onPrev,
    onNext,
    onUpdateCalendarState,
}) => {
    const handleCalendarState = useCallback(() => {
        console.log('change');
        if (type === CalendarState.Days) {
            onUpdateCalendarState?.(CalendarState.Months, [3, 2]);
        }

        if (type === CalendarState.Months || type === CalendarState.Quarter) {
            onUpdateCalendarState?.(CalendarState.Years, [3, 2]);
        }
    }, [type, onUpdateCalendarState]);

    const getHeaderContent = useCallback(
        (date?: DateObject) => {
            if (!date) {
                return '';
            }

            if (type === CalendarState.Days) {
                return (
                    <>
                        <StyledHeaderDate>{MONTH_NAMES[date.monthIndex]}</StyledHeaderDate>
                        <StyledHeaderDate>
                            {date.year}
                            <IconDisclosureDownFill color="inherit" size={size === 'xs' ? 'xs' : 's'} />
                        </StyledHeaderDate>
                    </>
                );
            }

            if (type === CalendarState.Months || type === CalendarState.Quarter) {
                return (
                    <StyledHeaderDate>
                        {date.year}
                        <IconDisclosureDownFill color="inherit" size={size === 'xs' ? 'xs' : 's'} />
                    </StyledHeaderDate>
                );
            }

            if (type === CalendarState.Years) {
                return (
                    <StyledHeaderDate>
                        {startYear}—{startYear + YEAR_RENDER_COUNT - 1}
                        <IconDisclosureDownFill color="inherit" size={size === 'xs' ? 'xs' : 's'} />
                    </StyledHeaderDate>
                );
            }

            return '';
        },
        [type, startYear, size],
    );

    const currentCalendarType = getCalendarType(type);

    const PreviousButton = useMemo(
        () => (
            <StyledArrow aria-label={`Предыдущий ${currentCalendarType}`} onClick={() => onPrev()}>
                <IconDisclosureLeft color="inherit" size={size === 'xs' ? 'xs' : 's'} />
            </StyledArrow>
        ),
        [currentCalendarType, size, onPrev],
    );

    const NextButton = useMemo(
        () => (
            <StyledArrow aria-label={`Следующий ${currentCalendarType}`} onClick={() => onNext()}>
                <IconDisclosureRight color="inherit" size={size === 'xs' ? 'xs' : 's'} />
            </StyledArrow>
        ),
        [currentCalendarType, size, onNext],
    );

    return (
        <StyledCalendarHeader>
            {isDouble ? (
                <StyledNavigation>
                    <StyledDoubleHeaderWrapper>
                        {PreviousButton}
                        <StyledHeaderDouble onClick={handleCalendarState} aria-live="polite">
                            {getHeaderContent(firstDate)}
                        </StyledHeaderDouble>
                    </StyledDoubleHeaderWrapper>
                    <StyledDoubleHeaderWrapper className={classes.doubleHeaderLastDateWrapper}>
                        <StyledHeaderDouble onClick={handleCalendarState} aria-live="polite">
                            {getHeaderContent(secondDate)}
                        </StyledHeaderDouble>
                        {NextButton}
                    </StyledDoubleHeaderWrapper>
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
