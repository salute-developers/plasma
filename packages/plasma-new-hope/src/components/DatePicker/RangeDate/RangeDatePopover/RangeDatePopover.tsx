import React, { useRef } from 'react';
import cls from 'classnames';
import type { MouseEvent, RefObject, SyntheticEvent } from 'react';

import { classes } from '../../DatePicker.tokens';
import { StyledShortcutList } from '../../ui';
import { FloatingPopover } from '../../FloatingPopover';
import { StyledCalendarContent } from '../../DatePickerBase.styles';
import { getCalendarContainerSize, hasCustomCalendarContainerSize } from '../../utils';

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

    type = 'Days',
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
    onChangeSingleValue,
    onChangeVisibleDate,

    onToggle,
}: RangeDatePopoverProps) => {
    const innerIsOpen = Boolean(opened);

    const calendarRootRef = useRef<HTMLDivElement | null>(null);
    const doubleCalendarRootRef = useRef<HTMLDivElement | null>(null);
    const floatingPopoverRef = useRef<HTMLDivElement | null>(null);

    const calendarContainerWidthValue = getCalendarContainerSize(calendarContainerWidth, stretched);
    const calendarContainerHeightValue = getCalendarContainerSize(calendarContainerHeight, stretched);
    const isCalendarHeightStretched = Boolean(stretched && !hasCustomCalendarContainerSize(calendarContainerHeight));

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
                portal={usePortal ? (frame as string | RefObject<HTMLElement>) : undefined}
                target={target}
                innerWidth={calendarContainerWidthValue}
                innerHeight={calendarContainerHeightValue}
                stretchHeight={isCalendarHeightStretched}
            >
                <Root
                    ref={doubleCalendarRootRef}
                    className={cls(classes.datePickerRoot, {
                        [classes.datePickerstretched]: stretched,
                        [classes.datePickerCalendarstretched]: isCalendarHeightStretched,
                    })}
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
                                calendarContainerHeight={calendarContainerHeightValue}
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
                            onChangeSingleValue={onChangeSingleValue}
                            onChangeVisibleDate={onChangeVisibleDate}
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
            portal={usePortal ? (frame as string | RefObject<HTMLElement>) : undefined}
            target={target}
            innerWidth={calendarContainerWidthValue}
            innerHeight={calendarContainerHeightValue}
            stretchHeight={isCalendarHeightStretched}
        >
            <Root
                ref={calendarRootRef}
                className={cls(classes.datePickerRoot, {
                    [classes.datePickerstretched]: stretched,
                    [classes.datePickerCalendarstretched]: isCalendarHeightStretched,
                })}
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
                            calendarContainerHeight={calendarContainerHeightValue}
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
                        onChangeSingleValue={onChangeSingleValue}
                        onChangeVisibleDate={onChangeVisibleDate}
                    />
                </StyledCalendarContent>
            </Root>
        </FloatingPopover>
    );
};
