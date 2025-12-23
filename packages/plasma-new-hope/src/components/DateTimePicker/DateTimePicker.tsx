import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { MouseEvent, SyntheticEvent, KeyboardEvent } from 'react';
import cls from 'classnames';
import { useForkRef } from '@salutejs/plasma-core';
import type { RootProps } from 'src/engines';

import type { DateTimePickerProps, DateTimePickerRootProps } from './DateTimePicker.types';
import { base, CalendarContainerOverlay, LeftHelper } from './DateTimePicker.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as eventTooltipSizeCSS } from './variations/_tooltip-size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readOnlyCSS } from './variations/_readonly/base';
import { CalendarGrid, DateShortcutList, Input, Popover, StyledSeparator, TimeGrid } from './ui';
import { classes } from './DateTimePicker.tokens';
import { useDateTimePicker } from './hooks/useDateTimePicker';
import { useKeyNavigation } from './hooks/useKeyboardNavigation';

// changes to start tests
export const dateTimePickerRoot = (Root: RootProps<HTMLDivElement, DateTimePickerRootProps>) =>
    forwardRef<HTMLInputElement, DateTimePickerProps>(
        (
            {
                className,

                value: outerValue,
                defaultDate = '',

                // variation props
                size,
                view,
                readOnly = false,
                disabled = false,

                // popover props
                opened = false,
                placement = ['top', 'bottom'],
                offset,
                frame = 'document',
                zIndex,
                closeOnOverlayClick = true,
                closeOnEsc = true,
                usePortal = false,

                // calendar props
                type = 'Days',
                lang = 'ru',
                dateFormat = 'DD.MM.YYYY',
                timeFormat = 'HH:mm:ss',
                dateTimeSeparator = ' ',
                maskWithFormat,
                min,
                max,
                renderFromDate,
                includeEdgeDates,
                isDouble,
                dateOnTimeSelectOnly,

                dateShortcuts,
                dateShortcutsPlacement = 'left',
                dateShortcutsWidth,

                eventTooltipOptions,
                eventList,
                disabledList,
                eventMonthList,
                disabledMonthList,
                eventQuarterList,
                disabledQuarterList,
                eventYearList,
                disabledYearList,

                calendarContainerWidth,
                calendarContainerHeight,
                stretched,

                // input props
                label,
                labelPlacement = 'outer',
                keepPlaceholder,
                requiredPlacement = 'right',
                required = false,
                hasRequiredIndicator = false,
                preserveInvalidOnBlur,
                placeholder,
                valueError,
                valueSuccess,
                leftHelper,
                contentLeft,
                contentRight,
                textBefore,
                textAfter,
                autoComplete,

                // callbacks
                onChangeValue,
                onCommitDate,
                onToggle,
                onFocus,
                onBlur,

                ...rest
            },
            ref,
        ) => {
            const inputRef = useRef<HTMLInputElement | null>(null);
            const inputInnerRef = useForkRef(inputRef, ref);

            const calendarOverlayRef = useRef<HTMLDivElement | null>(null);
            const [isInnerOpen, setIsInnerOpen] = useState(opened);

            const {
                format,
                dateVisibleValue,
                calendarGridValue,
                inputValue,
                timeVisibleValue,
                timeColumnsCount,
                errorClass,
                successClass,
                handleChangeValue,
                handleSearch,
                handleBlur,
                handleCalendarPick,
                handleTimePick,
                updateExternalDate,
                isDateEqualEdge,
            } = useDateTimePicker({
                inputRef,
                outerValue,
                valueError,
                valueSuccess,
                type,
                lang,
                disabled,
                readOnly,
                maskWithFormat,
                dateTimeSeparator,
                dateFormat,
                timeFormat,
                max,
                min,
                includeEdgeDates,
                dateOnTimeSelectOnly,

                onChangeValue,
                onCommitDate,
                onBlur,
            });

            const handleCalendarOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
                if (disabled || readOnly) {
                    return;
                }

                event.stopPropagation();

                if (isInnerOpen && stretched && event.target === calendarOverlayRef?.current) {
                    setIsInnerOpen(false);

                    if (onToggle) {
                        onToggle(false, event);
                    }
                }
            };

            const handleToggle = (innerOpened: boolean, event?: SyntheticEvent | Event) => {
                if (disabled || readOnly) {
                    return;
                }

                const isCalendarOpen =
                    event?.target === inputRef?.current && (event as KeyboardEvent<HTMLInputElement>).code !== 'Escape'
                        ? true
                        : innerOpened;

                if (onToggle) {
                    onToggle(isCalendarOpen, event);

                    return;
                }

                setIsInnerOpen(isCalendarOpen);
            };

            const { onKeyDown } = useKeyNavigation({
                opened: isInnerOpen,
                closeOnEsc,
                onToggle: handleToggle,
            });

            useEffect(() => {
                if (disabled || readOnly) {
                    setIsInnerOpen(false);
                    return;
                }

                setIsInnerOpen((prevOpen) => prevOpen !== opened && opened);
            }, [opened, disabled, readOnly]);

            useLayoutEffect(() => {
                if (!dateVisibleValue) {
                    updateExternalDate(defaultDate);
                }
            }, [defaultDate, format, lang]);

            return (
                <Root
                    view={view}
                    size={size}
                    className={cls(classes.root, className, {
                        [classes.stretched]: stretched,
                    })}
                    disabled={disabled}
                    readOnly={!disabled && readOnly}
                    eventTooltipSize={eventTooltipOptions?.size}
                >
                    <Popover
                        target={
                            <Input
                                ref={inputInnerRef}
                                className={cls(errorClass, successClass)}
                                value={inputValue}
                                label={label}
                                labelPlacement={labelPlacement}
                                keepPlaceholder={keepPlaceholder}
                                requiredPlacement={requiredPlacement}
                                required={required}
                                hasRequiredIndicator={hasRequiredIndicator}
                                preserveInvalidOnBlur={preserveInvalidOnBlur}
                                placeholder={placeholder}
                                valueError={valueError}
                                valueSuccess={valueSuccess}
                                contentLeft={contentLeft}
                                contentRight={contentRight}
                                textBefore={textBefore}
                                textAfter={textAfter}
                                autoComplete={autoComplete}
                                readOnly={readOnly}
                                disabled={disabled}
                                onChange={handleChangeValue}
                                onSearch={(e) => handleSearch(e?.currentTarget?.value)}
                                onFocus={onFocus}
                                onBlur={handleBlur}
                                onKeyDown={onKeyDown}
                                {...rest}
                            />
                        }
                        opened={isInnerOpen}
                        usePortal={usePortal}
                        frame={frame}
                        offset={offset}
                        placement={placement}
                        closeOnOverlayClick={closeOnOverlayClick}
                        closeOnEsc={closeOnEsc}
                        zIndex={zIndex}
                        calendarContainerWidth={calendarContainerWidth}
                        calendarContainerHeight={calendarContainerHeight}
                        onToggle={handleToggle}
                    >
                        <CalendarContainerOverlay ref={calendarOverlayRef} onClick={handleCalendarOverlayClick} />

                        <Root
                            view={view}
                            size={size}
                            className={cls(classes.root, className, {
                                [classes.stretched]: stretched,
                            })}
                            disabled={disabled}
                            readOnly={!disabled && readOnly}
                        >
                            {dateShortcuts?.length ? (
                                <DateShortcutList
                                    items={dateShortcuts}
                                    setShortcutDate={updateExternalDate}
                                    dateShortcutsWidth={dateShortcutsWidth}
                                    calendarContainerHeight={calendarContainerHeight}
                                    dateShortcutsPlacement={dateShortcutsPlacement}
                                />
                            ) : null}

                            <CalendarGrid
                                value={calendarGridValue}
                                isDouble={isDouble}
                                calendarContainerWidth={calendarContainerWidth}
                                calendarContainerHeight={calendarContainerHeight}
                                type={type}
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
                                includeEdgeDates={includeEdgeDates}
                                lang={lang}
                                handleCalendarPick={handleCalendarPick}
                            />

                            <StyledSeparator />

                            <TimeGrid
                                value={timeVisibleValue}
                                format={timeFormat}
                                columns={timeColumnsCount}
                                calendarContainerWidth={calendarContainerWidth}
                                calendarContainerHeight={calendarContainerHeight}
                                dropdownHeight={calendarContainerHeight}
                                onChange={handleTimePick}
                                {...(isDateEqualEdge(min) && { min })}
                                {...(isDateEqualEdge(max) && { max })}
                            />
                        </Root>
                    </Popover>
                    {leftHelper && <LeftHelper className={cls(errorClass, successClass)}>{leftHelper}</LeftHelper>}
                </Root>
            );
        },
    );

export const dateTimePickerConfig = {
    name: 'DateTimePicker',
    tag: 'div',
    layout: dateTimePickerRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        eventTooltipSize: {
            css: eventTooltipSizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        readOnly: {
            css: readOnlyCSS,
            attrs: true,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
    },
};
