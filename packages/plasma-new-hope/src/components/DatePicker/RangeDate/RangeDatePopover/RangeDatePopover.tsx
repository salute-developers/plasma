import React from 'react';

import { getPlacements } from '../../../../utils';
import { StyledPopover } from '../RangeDate.styles';

import type { RangeDatePopoverProps } from './RangeDatePopover.types';
import { StyledCalendar, StyledCalendarDouble } from './RangeDatePopover.styles';

export const RangeDatePopover = ({
    rootWrapper: Root,
    target,

    isOpen,
    opened,
    isDoubleCalendar,

    calendarValue,
    min,
    max,
    renderFromDate,
    includeEdgeDates,
    eventList,
    disabledList,
    eventMonthList,
    disabledMonthList,
    eventQuarterList,
    disabledQuarterList,
    eventYearList,
    disabledYearList,

    frame = 'document',
    usePortal = false,
    placement = ['top', 'bottom'],
    closeOnOverlayClick = true,
    closeOnEsc,
    offset,

    type,
    size,
    lang = 'ru',

    onChangeValue,
    onChangeStartOfRange,

    onToggle,
}: RangeDatePopoverProps) => {
    const innerIsOpen = Boolean(isOpen || opened);

    if (isDoubleCalendar) {
        return (
            <StyledPopover
                opened={innerIsOpen}
                frame={frame}
                usePortal={usePortal}
                onToggle={onToggle}
                offset={offset}
                placement={getPlacements(placement, false)}
                trigger="click"
                closeOnOverlayClick={closeOnOverlayClick}
                isFocusTrapped={false}
                target={target}
                preventOverflow={false}
            >
                <Root>
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
                        renderFromDate={renderFromDate}
                        type={type}
                        locale={lang}
                        includeEdgeDates={includeEdgeDates}
                        onChangeValue={onChangeValue}
                        onChangeStartOfRange={onChangeStartOfRange}
                    />
                </Root>
            </StyledPopover>
        );
    }

    return (
        <StyledPopover
            opened={innerIsOpen}
            frame={frame}
            usePortal={usePortal}
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
            <Root>
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
                    renderFromDate={renderFromDate}
                    min={min}
                    max={max}
                    type={type}
                    locale={lang}
                    includeEdgeDates={includeEdgeDates}
                    onChangeValue={onChangeValue}
                    onChangeStartOfRange={onChangeStartOfRange}
                />
            </Root>
        </StyledPopover>
    );
};
