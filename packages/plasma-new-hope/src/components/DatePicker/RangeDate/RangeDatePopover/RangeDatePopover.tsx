import React, { useRef } from 'react';
import cls from 'classnames';
import type { MouseEvent, RefObject, SyntheticEvent } from 'react';
import { getSizeValueFromProp } from 'src/utils';

import { classes } from '../../DatePicker.tokens';
import { StyledShortcutList } from '../../ui';
import { FloatingPopover } from '../../FloatingPopover';
import { StyledCalendarContent } from '../../DatePickerBase.styles';

import type { RangeDatePopoverProps } from './RangeDatePopover.types';
import { StyledCalendar, StyledCalendarDouble } from './RangeDatePopover.styles';

export const RangeDatePopover = ({
    rootWrapper: Root,
    target,

    opened,
    isDoubleCalendar,

    calendarValue,
    calendarFocusedDate,
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
    closeOnEsc = true,
    offset,
    disableFlip,

    calendarContainerWidth,
    calendarContainerHeight,
    stretched,

    type,
    size,
    lang = 'ru',

    disabled,
    readOnly,

    dateShortcuts,
    dateShortcutsPlacement = 'left',
    dateShortcutsWidth,
    onShortcutDateSelect,

    setIsInnerOpen,
    onChangeValue,
    onChangeStartOfRange,

    onToggle,
}: RangeDatePopoverProps) => {
    const innerIsOpen = Boolean(opened);

    const calendarRootRef = useRef<HTMLDivElement | null>(null);
    const doubleCalendarRootRef = useRef<HTMLDivElement | null>(null);
    const floatingPopoverRef = useRef<HTMLDivElement | null>(null);

    const calendarContainerWidthValue = calendarContainerWidth
        ? getSizeValueFromProp(calendarContainerWidth, 'rem')
        : undefined;
    const calendarContainerHeightValue = calendarContainerHeight
        ? getSizeValueFromProp(calendarContainerHeight, 'rem')
        : undefined;

    const handleToggle = (isOpen: boolean, event?: SyntheticEvent | Event) => {
        setIsInnerOpen(isOpen);
        onToggle?.(isOpen, event);
    };

    const handleCalendarRootClick = (event: MouseEvent<HTMLDivElement>) => {
        if (disabled || readOnly) {
            return;
        }

        const isRootClicked =
            event.target === calendarRootRef?.current || event.target === doubleCalendarRootRef?.current;

        if (innerIsOpen && stretched && isRootClicked) {
            handleToggle(false, event);
        }
    };

    if (isDoubleCalendar) {
        return (
            <FloatingPopover
                ref={floatingPopoverRef}
                opened={innerIsOpen}
                onToggle={handleToggle}
                offset={offset}
                zIndex={zIndex}
                placement={placement}
                disableFlip={disableFlip}
                closeOnOverlayClick={closeOnOverlayClick}
                closeOnEsc={closeOnEsc}
                portal={usePortal && frame !== 'document' ? (frame as string | RefObject<HTMLElement>) : undefined}
                target={target}
            >
                <Root
                    ref={doubleCalendarRootRef}
                    className={cls(classes.datePickerRoot, { [classes.datePickerstretched]: stretched })}
                    onClick={handleCalendarRootClick}
                >
                    <StyledCalendarContent
                        innerWidth={calendarContainerWidthValue}
                        innerHeight={calendarContainerHeightValue}
                    >
                        {dateShortcuts?.length && onShortcutDateSelect ? (
                            <StyledShortcutList
                                items={dateShortcuts}
                                setShortcutDate={onShortcutDateSelect}
                                dateShortcutsWidth={dateShortcutsWidth}
                                calendarContainerHeight={calendarContainerHeight}
                                dateShortcutsPlacement={dateShortcutsPlacement}
                            />
                        ) : null}

                        <StyledCalendarDouble
                            className={cls({ [classes.datePickerCalendarstretched]: stretched })}
                            innerWidth={calendarContainerWidthValue}
                            innerHeight={calendarContainerHeightValue}
                            size={size}
                            value={calendarValue}
                            focusedDate={calendarFocusedDate}
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
                    </StyledCalendarContent>
                </Root>
            </FloatingPopover>
        );
    }

    return (
        <FloatingPopover
            ref={floatingPopoverRef}
            opened={innerIsOpen}
            onToggle={handleToggle}
            offset={offset}
            zIndex={zIndex}
            placement={placement}
            disableFlip={disableFlip}
            closeOnOverlayClick={closeOnOverlayClick}
            closeOnEsc={closeOnEsc}
            portal={usePortal && frame !== 'document' ? (frame as string | RefObject<HTMLElement>) : undefined}
            target={target}
        >
            <Root
                ref={calendarRootRef}
                className={cls(classes.datePickerRoot, { [classes.datePickerstretched]: stretched })}
                onClick={handleCalendarRootClick}
            >
                <StyledCalendarContent
                    innerWidth={calendarContainerWidthValue}
                    innerHeight={calendarContainerHeightValue}
                >
                    {dateShortcuts?.length && onShortcutDateSelect ? (
                        <StyledShortcutList
                            items={dateShortcuts}
                            setShortcutDate={onShortcutDateSelect}
                            dateShortcutsWidth={dateShortcutsWidth}
                            calendarContainerHeight={calendarContainerHeight}
                            dateShortcutsPlacement={dateShortcutsPlacement}
                        />
                    ) : null}

                    <StyledCalendar
                        className={cls({ [classes.datePickerCalendarstretched]: stretched })}
                        innerWidth={calendarContainerWidthValue}
                        innerHeight={calendarContainerHeightValue}
                        size={size}
                        value={calendarValue}
                        focusedDate={calendarFocusedDate}
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
                </StyledCalendarContent>
            </Root>
        </FloatingPopover>
    );
};
