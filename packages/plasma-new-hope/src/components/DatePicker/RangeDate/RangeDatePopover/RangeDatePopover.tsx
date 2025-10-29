import React, { useRef } from 'react';
import cls from 'classnames';
import type { MouseEvent } from 'react';
import { getPlacements, getSizeValueFromProp } from 'src/utils';

import { StyledPopover } from '../RangeDate.styles';
import { classes } from '../../DatePicker.tokens';

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
    eventTooltipOptions,
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
    zIndex,
    placement = ['top', 'bottom'],
    closeOnOverlayClick = true,
    closeOnEsc,
    offset,

    calendarContainerWidth,
    calendarContainerHeight,
    stretched,

    type,
    size,
    lang = 'ru',

    disabled,
    readOnly,

    setIsInnerOpen,
    onChangeValue,
    onChangeStartOfRange,

    onToggle,
}: RangeDatePopoverProps) => {
    const innerIsOpen = Boolean(isOpen || opened);

    const calendarRootRef = useRef<HTMLDivElement | null>(null);
    const doubleCalendarRootRef = useRef<HTMLDivElement | null>(null);

    const calendarContainerWidthValue = calendarContainerWidth
        ? getSizeValueFromProp(calendarContainerWidth, 'rem')
        : undefined;
    const calendarContainerHeightValue = calendarContainerHeight
        ? getSizeValueFromProp(calendarContainerHeight, 'rem')
        : undefined;

    const handleCalendarRootClick = (event: MouseEvent<HTMLDivElement>) => {
        if (disabled || readOnly) {
            return;
        }

        const isRootClicked =
            event.target === calendarRootRef?.current || event.target === doubleCalendarRootRef?.current;

        if (innerIsOpen && stretched && isRootClicked) {
            setIsInnerOpen(false);

            if (onToggle) {
                onToggle(false, event);
            }
        }
    };

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
                zIndex={zIndex}
            >
                <Root
                    ref={doubleCalendarRootRef}
                    className={cls(classes.datePickerRoot, { [classes.datePickerstretched]: stretched })}
                    onClick={handleCalendarRootClick}
                >
                    <StyledCalendarDouble
                        className={cls({ [classes.datePickerCalendarstretched]: stretched })}
                        innerWidth={calendarContainerWidthValue}
                        innerHeight={calendarContainerHeightValue}
                        size={size}
                        value={calendarValue}
                        eventTooltipOptions={eventTooltipOptions}
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
            zIndex={zIndex}
        >
            <Root
                ref={calendarRootRef}
                className={cls(classes.datePickerRoot, { [classes.datePickerstretched]: stretched })}
                onClick={handleCalendarRootClick}
            >
                <StyledCalendar
                    className={cls({ [classes.datePickerCalendarstretched]: stretched })}
                    innerWidth={calendarContainerWidthValue}
                    innerHeight={calendarContainerHeightValue}
                    size={size}
                    value={calendarValue}
                    eventTooltipOptions={eventTooltipOptions}
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
