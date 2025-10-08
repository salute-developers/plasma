import React from 'react';
import type { DateInfo } from 'src/components/Calendar/Calendar.types';

import type { CalendarProps } from '../../DateTimePicker.types';

import { StyledCalendar, StyledCalendarDouble } from './CalendarGrid.styles';

type CalendarGridProps = {
    handleCalendarPick: (date: Date, quarterInfo?: DateInfo | undefined) => void;
    value?: Date;
    calendarContainerWidth?: number | string;
    calendarContainerHeight?: number | string;
} & CalendarProps;

export const CalendarGrid = ({
    isDouble,
    value,
    lang,
    calendarContainerWidth,
    calendarContainerHeight,
    handleCalendarPick,

    ...rest
}: CalendarGridProps) => {
    if (isDouble) {
        return (
            <StyledCalendarDouble
                value={value}
                locale={lang}
                innerHeight={calendarContainerHeight}
                innerWidth={calendarContainerWidth}
                onChangeValue={handleCalendarPick}
                {...rest}
            />
        );
    }

    return (
        <StyledCalendar
            value={value}
            locale={lang}
            innerHeight={calendarContainerHeight}
            innerWidth={calendarContainerWidth}
            onChangeValue={handleCalendarPick}
            {...rest}
        />
    );
};
