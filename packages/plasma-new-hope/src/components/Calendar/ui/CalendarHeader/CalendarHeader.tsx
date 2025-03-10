import React from 'react';
import type { MouseEvent } from 'react';

import { IconDisclosureLeft, IconDisclosureRight } from '../../../_Icon';
import { CalendarState } from '../../store/types';
import { getCalendarType, MONTH_NAMES, YEAR_RENDER_COUNT, I18N } from '../../utils';
import type { DateObject } from '../../Calendar.types';
import { classes } from '../../Calendar.tokens';
import { sizeMap } from '../../store/reducer';
import { cx } from '../../../../utils';

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
    StyledHeaderArrow,
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
    locale,
}) => {
    const handleCalendarState = () => {
        const newSize: [number, number] = isDouble ? sizeMap.Months.double : sizeMap.Months.single;

        if (type === CalendarState.Days) {
            onUpdateCalendarState?.(CalendarState.Months, newSize);
        }

        if (type === CalendarState.Months || type === CalendarState.Quarters) {
            onUpdateCalendarState?.(CalendarState.Years, newSize);
        }
    };

    const handlePrev = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (startYear <= 0) {
            return;
        }
        onPrev();
    };

    const handleNext = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        onNext();
    };

    const getHeaderContent = (date?: DateObject, secondPart?: boolean) => {
        if (!date) {
            return '';
        }

        if (type === CalendarState.Days) {
            return (
                <>
                    <StyledHeaderDate>{MONTH_NAMES[locale][date.monthIndex]}</StyledHeaderDate>
                    <StyledHeaderDate>
                        {date.year}
                        <StyledHeaderArrow color="inherit" size={size === 'xs' ? 'xs' : 's'} />
                    </StyledHeaderDate>
                </>
            );
        }

        if (type === CalendarState.Months || type === CalendarState.Quarters) {
            return (
                <StyledHeaderDate>
                    {date.year}
                    <StyledHeaderArrow color="inherit" size={size === 'xs' ? 'xs' : 's'} />
                </StyledHeaderDate>
            );
        }

        if (type === CalendarState.Years) {
            const yearValue = secondPart ? startYear + 12 : startYear;

            return (
                <StyledHeaderDate>
                    {yearValue}—{yearValue + YEAR_RENDER_COUNT - 1}
                    <StyledHeaderArrow color="inherit" size={size === 'xs' ? 'xs' : 's'} />
                </StyledHeaderDate>
            );
        }

        return '';
    };

    const currentCalendarType = getCalendarType(type, locale);

    const PreviousButton = () => (
        <StyledArrow
            className={cx(startYear <= 0 && classes.disabledPrevButton)}
            aria-label={`${I18N.previous[locale]} ${currentCalendarType}`}
            onClick={handlePrev}
        >
            <IconDisclosureLeft color="inherit" size={size === 'xs' ? 'xs' : 's'} />
        </StyledArrow>
    );

    const NextButton = () => (
        <StyledArrow aria-label={`${I18N.next[locale]} ${currentCalendarType}`} onClick={handleNext}>
            <IconDisclosureRight color="inherit" size={size === 'xs' ? 'xs' : 's'} />
        </StyledArrow>
    );

    return (
        <StyledCalendarHeader>
            {isDouble ? (
                <StyledNavigation>
                    <StyledDoubleHeaderWrapper>
                        <PreviousButton />
                        <StyledHeaderDouble onClick={handleCalendarState} aria-live="polite">
                            {getHeaderContent(firstDate)}
                        </StyledHeaderDouble>
                    </StyledDoubleHeaderWrapper>
                    <StyledDoubleHeaderWrapper className={classes.doubleHeaderLastDateWrapper}>
                        <StyledHeaderDouble onClick={handleCalendarState} aria-live="polite">
                            {getHeaderContent(secondDate, true)}
                        </StyledHeaderDouble>
                        <NextButton />
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
                        <PreviousButton />
                        <NextButton />
                    </StyledArrows>
                </>
            )}
        </StyledCalendarHeader>
    );
};
