import React, { forwardRef, useRef, useState, useEffect } from 'react';
import cls from 'classnames';
import type { ChangeEvent, KeyboardEvent } from 'react';
import type { RootProps } from 'src/engines';
import { useForkRef } from '@salutejs/plasma-core';
import { getPlacements } from 'src/utils';

import { TimePickerGridChangeEvent } from '../TimePickerGrid/TimePickerGrid.types';

import { processTimeInput, delimiter } from './utils';
import { TimePickerProps } from './TimePicker.types';
import { base, StyledInput, StyledTimePickerGrid, StyledPopover } from './TimePicker.styles';
import { classes } from './TimePicker.tokens';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readonlyCSS } from './variations/_readonly/base';
import { useKeyNavigation } from './hooks/useKeyboardNavigation';

// changes to start tests
interface ActiveTime {
    hours?: number | null;
    minutes?: number | null;
    seconds?: number | null;
    currentColumn?: 'hours' | 'minutes' | 'seconds' | null;
}

export const timePickerRoot = (
    Root: RootProps<HTMLDivElement, Omit<TimePickerProps, 'opened' | 'defaultValue' | 'onChange'>>,
) =>
    forwardRef<HTMLDivElement, TimePickerProps>(
        (
            {
                className,
                opened = false,
                value: outerValue,
                label,
                labelPlacement = 'outer',
                keepPlaceholder,
                required = false,
                requiredPlacement = 'right',
                hasRequiredIndicator = false,
                placeholder,
                contentLeft,
                contentRight,
                textBefore,
                textAfter,
                view,
                size,
                disabled = false,
                readonly = false,
                frame = 'document',
                usePortal = false,
                closeOnOverlayClick = true,
                closeOnEsc = true,
                offset,
                stretched,
                dropdownAlign = 'left',
                dropdownWidth,
                dropdownHeight,
                columnsQuantity = 2,
                onToggle,
                onFocus,
                onChange,
                ...rest
            },
            ref,
        ) => {
            const inputRef = useRef<HTMLInputElement | null>(null);
            const rootRef = useRef<HTMLDivElement | null>(null);
            const rootForkRef = useForkRef(rootRef, ref);

            const hoursHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
            const minutesHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
            const secondsHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

            const [isInnerOpen, setIsInnerOpen] = useState(opened);
            const [innerTime, setInnerTime] = useState(outerValue || '');
            const [rootWidth, setRootWidth] = useState<number | null>(null);
            const [, setActiveTime] = useState<ActiveTime>({
                hours: null,
                minutes: null,
                seconds: null,
                currentColumn: null,
            });

            const viewValue = outerValue ?? innerTime;

            const format = columnsQuantity === 3 ? 'HH:mm:ss' : 'HH:mm';

            useEffect(() => {
                return () => {
                    [hoursHideTimeoutRef, minutesHideTimeoutRef, secondsHideTimeoutRef].forEach((timeoutRef) => {
                        if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current);
                        }
                    });
                };
            }, []);

            useEffect(() => {
                if (!viewValue) {
                    return;
                }

                let timeString = viewValue;
                if (format === 'HH:mm' && viewValue.length > 5) {
                    timeString = viewValue.substring(0, 5);
                }
                setInnerTime(viewValue);
                const [hh, mm, ss] = timeString.split(delimiter).map(Number);
                setActiveTime({
                    hours: !Number.isNaN(hh) ? hh : null,
                    minutes: !Number.isNaN(mm) ? mm : null,
                    seconds: format === 'HH:mm:ss' && !Number.isNaN(ss) ? ss : null,
                    currentColumn: null,
                });
            }, [outerValue, format]);

            useEffect(() => {
                if (isInnerOpen && (disabled || readonly)) {
                    setIsInnerOpen(false);
                }
            }, [disabled, readonly]);

            useEffect(() => {
                if (dropdownWidth === 'fullWidth' && rootRef.current) {
                    const width = rootRef.current.offsetWidth;
                    setRootWidth(width);
                }
            }, [dropdownWidth, isInnerOpen]);

            const handleToggle = () => {
                if (disabled || readonly) return;
                const newState = !isInnerOpen;
                setIsInnerOpen(newState);

                if (newState) {
                    setActiveTime((prev) => ({
                        ...prev,
                        currentColumn: 'hours',
                    }));
                }

                onToggle?.(newState);
            };

            const handleOnChange = (event: TimePickerGridChangeEvent) => {
                if (!event) {
                    return;
                }

                let timeString = event.value;
                if (format === 'HH:mm' && viewValue.length > 5) {
                    timeString = viewValue.substring(0, 5);
                }
                setInnerTime(timeString ?? '');

                setActiveTime({
                    hours: !Number.isNaN(event.timeValues.hour) ? event.timeValues.hour : null,
                    minutes: !Number.isNaN(event.timeValues.minute) ? event.timeValues.minute : null,
                    seconds:
                        format === 'HH:mm:ss' && !Number.isNaN(event.timeValues.second)
                            ? event.timeValues.second
                            : null,
                    currentColumn: null,
                });

                onChange?.(event);
            };

            const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
                const input = event.target.value;
                const cursorPos = event.target.selectionStart;

                const { innerString, values, newCursorPosition } = processTimeInput(input, format, cursorPos);

                setInnerTime(innerString);
                setActiveTime((prev) => ({
                    ...prev,
                    hours: values.hh,
                    minutes: values.mm,
                    seconds: values.ss,
                }));

                if (onChange) {
                    onChange(({
                        ...event,
                        target: {
                            ...event.target,
                            value: innerString,
                            timeValues: values,
                        },
                    } as unknown) as ChangeEvent<HTMLInputElement>);
                }

                requestAnimationFrame(() => {
                    if (inputRef.current) {
                        inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
                    }
                });
            };

            const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
                if (event.key === 'Enter' && !isInnerOpen) {
                    event.preventDefault();
                    setIsInnerOpen(true);
                    setActiveTime((prev) => ({ ...prev, currentColumn: 'hours' }));
                    onToggle?.(true);
                }
            };

            const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
                onKeyDownNavigation(e);
                handleKeyDown(e);
            };

            const { onKeyDown: onKeyDownNavigation } = useKeyNavigation({
                isCalendarOpen: isInnerOpen,
                format,
                maskWithFormat: true,
                delimiter,
                closeOnEsc,
                onToggle: handleToggle,
            });

            const TimePickerInput = (
                <StyledInput
                    ref={inputRef}
                    value={viewValue}
                    size={size}
                    disabled={disabled}
                    readOnly={readonly}
                    placeholder={placeholder}
                    contentLeft={contentLeft}
                    contentRight={contentRight}
                    textBefore={textBefore}
                    textAfter={textAfter}
                    onChange={handleInputChange}
                    onFocus={onFocus}
                    onKeyDown={handleOnKeyDown}
                    required={required}
                    requiredPlacement={requiredPlacement}
                    hasRequiredIndicator={hasRequiredIndicator}
                    label={label}
                    labelPlacement={labelPlacement}
                    keepPlaceholder={keepPlaceholder}
                />
            );

            const getDropdownWidth = (): 'fixed' | 'fullWidth' | React.CSSProperties['width'] => {
                if (dropdownWidth === 'fixed' || dropdownWidth === undefined) {
                    return undefined;
                }
                if (dropdownWidth === 'fullWidth') {
                    return rootWidth !== null ? `${rootWidth}px` : 'fullWidth';
                }
                return dropdownWidth as React.CSSProperties['width'];
            };

            return (
                <Root
                    stretched={stretched}
                    view={view}
                    size={size}
                    className={cls(classes.timePickerRoot, className, {
                        [classes.timePickerstretched]: stretched,
                    })}
                    disabled={disabled}
                    readonly={readonly}
                    ref={rootForkRef}
                    {...rest}
                >
                    <StyledPopover
                        opened={isInnerOpen}
                        usePortal={usePortal}
                        frame={frame}
                        onToggle={handleToggle}
                        offset={offset}
                        placement={getPlacements(dropdownAlign === 'left' ? 'bottom-start' : 'bottom-end', false)}
                        trigger="click"
                        closeOnOverlayClick={closeOnOverlayClick}
                        isFocusTrapped={false}
                        target={TimePickerInput}
                        preventOverflow={false}
                        align={dropdownAlign}
                    >
                        <Root
                            stretched={stretched}
                            view={view}
                            size={size}
                            className={cls(classes.timePickerRoot, className, {
                                [classes.timePickerFullWidth]: dropdownWidth === 'fullWidth',
                                [classes.timePickerFixed]: dropdownWidth !== 'fullWidth',
                            })}
                            disabled={disabled}
                            readonly={readonly}
                            {...rest}
                        >
                            <StyledTimePickerGrid
                                value={viewValue}
                                onChange={handleOnChange}
                                dropdownHeight={dropdownHeight}
                                dropdownWidth={getDropdownWidth()}
                                format={format}
                                view={view}
                                size={size}
                                disabled={disabled}
                                width={getDropdownWidth()}
                            />
                        </Root>
                    </StyledPopover>
                </Root>
            );
        },
    );

export const timePickerConfig = {
    name: 'TimePicker',
    tag: 'div',
    layout: timePickerRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        readonly: {
            css: readonlyCSS,
            attrs: true,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
    },
};
