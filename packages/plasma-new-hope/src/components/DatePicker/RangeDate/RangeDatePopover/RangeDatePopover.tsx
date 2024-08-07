import React from 'react';

import { getPlacements } from '../../../../utils';
import { StyledPopover } from '../RangeDate.styles';

import type { RangeDatePopoverProps } from './RangeDatePopover.types';
import { StyledCalendar, StyledCalendarDouble } from './RangeDatePopover.styles';

export const RangeDatePopover = ({
    target,

    isOpen,
    opened,
    isDoubleCalendar,

    calendarValue,
    min,
    max,
    includeEdgeDates,
    eventList,
    disabledList,
    eventMonthList,
    disabledMonthList,
    eventQuarterList,
    disabledQuarterList,
    eventYearList,
    disabledYearList,
    placement = ['top', 'bottom'],
    closeOnOverlayClick = true,
    closeOnEsc,
    offset,
    type,
    size,

    onChangeValue,
    onChangeStartOfRange,

    onToggle,
}: RangeDatePopoverProps) => {
    const innerIsOpen = Boolean(isOpen || opened);

    if (isDoubleCalendar) {
        return (
            <StyledPopover
                opened={innerIsOpen}
                usePortal={false}
                onToggle={onToggle}
                offset={offset}
                placement={getPlacements(placement)}
                trigger="click"
                closeOnOverlayClick={closeOnOverlayClick}
                isFocusTrapped={false}
                target={target}
                preventOverflow={false}
            >
                <StyledCalendarDouble
                    size={size}
                    value={calendarValue}
                    eventList={eventList}
                    disabledList={disabledList}
                    eventMonthList={eventMonthList}
                    disabledMonthList={disabledMonthList}
                    eventQuarterList={eventQuarterList}
                    disabledQuarterList={disabledQuarterList}
                    eventYearList={eventYearList}
                    disabledYearList={disabledYearList}
                    min={min}
                    max={max}
                    includeEdgeDates={includeEdgeDates}
                    onChangeValue={onChangeValue}
                    onChangeStartOfRange={onChangeStartOfRange}
                />
            </StyledPopover>
        );
    }

    return (
        <StyledPopover
            opened={innerIsOpen}
            usePortal={false}
            onToggle={onToggle}
            offset={offset}
            placement={getPlacements(placement)}
            trigger="click"
            closeOnOverlayClick={closeOnOverlayClick}
            isFocusTrapped={false}
            target={target}
            preventOverflow={false}
            closeOnEsc={closeOnEsc}
        >
            <StyledCalendar
                size={size}
                value={calendarValue}
                eventList={eventList}
                disabledList={disabledList}
                eventMonthList={eventMonthList}
                disabledMonthList={disabledMonthList}
                eventQuarterList={eventQuarterList}
                disabledQuarterList={disabledQuarterList}
                eventYearList={eventYearList}
                disabledYearList={disabledYearList}
                min={min}
                max={max}
                type={type}
                includeEdgeDates={includeEdgeDates}
                onChangeValue={onChangeValue}
                onChangeStartOfRange={onChangeStartOfRange}
            />
        </StyledPopover>
    );
};
