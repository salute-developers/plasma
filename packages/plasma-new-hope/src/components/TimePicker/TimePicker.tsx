import React, { forwardRef, useRef, useState, useEffect } from 'react';
import cls from 'classnames';
import type { ChangeEvent, KeyboardEvent, MouseEvent, MutableRefObject, RefObject } from 'react';
import type { RootProps } from 'src/engines';
import { useForkRef, useOutsideClick } from 'src/hooks';
import { getSizeValueFromProp } from 'src/utils';

import type { TimePickerGridChangeEvent } from '../TimePickerGrid/TimePickerGrid.types';

import { processTimeInput, delimiter } from './utils';
import { TimePickerProps } from './TimePicker.types';
import { base, LeftHelper, StyledInput, StyledTimePickerGrid } from './TimePicker.styles';
import { classes } from './TimePicker.tokens';
import { FloatingPopover } from './FloatingPopover';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as hintViewCSS } from './variations/_hint-view/base';
import { base as hintSizeCSS } from './variations/_hint-size/base';
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

                // controlled
                value: outerValue,
                opened = false,

                // variations

                view,
                size,
                disabled = false,
                readonly = false,
                stretched,
                appearance,
                hasClearDivider,

                valueError,
                valueSuccess,
                valueEdited,

                // layout
                label,
                labelPlacement = 'outer',
                keepPlaceholder,
                required = false,
                requiredPlacement = 'right',
                hasRequiredIndicator = false,
                placeholder,
                leftHelper,
                contentLeft,
                contentRight,
                textBefore,
                textAfter,
                autoComplete,

                // hint
                hintTrigger = 'hover',
                hintText,
                hintView = 'default',
                hintSize = 'm',
                hintTargetIcon,
                hintTargetPlacement = 'outer',
                hintPlacement = 'auto',
                hintHasArrow,
                hintOffset = [0, 0],
                hintWidth,
                hintContentLeft,

                // popover-container
                frame = 'document',
                usePortal = false,
                placement = 'bottom-start',
                closeOnOverlayClick = true,
                closeOnEsc = true,
                disableFlip,
                offset,
                zIndex = 1000,

                // dropdown
                dropdownAlign = 'left',
                dropdownWidth,
                dropdownHeight,
                columnsQuantity = 2,
                min,
                max,
                multiplicityMinutes,
                multiplicitySeconds,

                onToggle,
                onFocus,
                onChange,
                ...rest
            },
            ref,
        ) => {
            const inputRef = useRef<HTMLInputElement | null>(null);
            const timeGridRootRef = useRef<HTMLDivElement | null>(null);
            const floatingPopoverRef = useRef<HTMLDivElement | null>(null);

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

            const dropdownWidthValue = dropdownWidth ? getSizeValueFromProp(dropdownWidth, 'rem') : undefined;
            const dropdownHeightValue = dropdownHeight ? getSizeValueFromProp(dropdownHeight, 'rem') : undefined;

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
                if (rootRef.current) {
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

            useOutsideClick(() => {
                if (!isInnerOpen || !closeOnOverlayClick) {
                    return;
                }

                setIsInnerOpen(false);
                onToggle?.(false);
            }, [floatingPopoverRef, timeGridRootRef]);

            const handleOnChange = (formattedValues: TimePickerGridChangeEvent) => {
                if (!formattedValues) {
                    return;
                }

                let timeString = formattedValues.value;
                if (format === 'HH:mm' && viewValue.length > 5) {
                    timeString = viewValue.substring(0, 5);
                }
                setInnerTime(timeString ?? '');

                setActiveTime({
                    hours: !Number.isNaN(formattedValues.timeValues.hour) ? formattedValues.timeValues.hour : null,
                    minutes: !Number.isNaN(formattedValues.timeValues.minute)
                        ? formattedValues.timeValues.minute
                        : null,
                    seconds:
                        format === 'HH:mm:ss' && !Number.isNaN(formattedValues.timeValues.second)
                            ? formattedValues.timeValues.second
                            : null,
                    currentColumn: null,
                });

                if (onChange) {
                    onChange(formattedValues, formattedValues);
                }
            };

            const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
                const input = event.target.value;
                const cursorPos = event.target.selectionStart;

                const { innerString, values, newCursorPosition } = processTimeInput(input, format, cursorPos);

                const { hh: hours, mm: minutes, ss: seconds } = values;
                setInnerTime(innerString);
                setActiveTime((prev) => ({
                    ...prev,
                    hours,
                    minutes,
                    seconds,
                }));

                const formattedValues = {
                    value: innerString,
                    timeValues: {
                        hour: hours,
                        minute: minutes,
                        second: seconds,
                    },
                };

                if (onChange) {
                    onChange(
                        {
                            ...event,
                            target: {
                                ...event.target,
                                ...formattedValues,
                            },
                        },
                        formattedValues,
                    );
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

            const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
                onKeyDownNavigation(e);
                handleKeyDown(e);
            };

            const handleTimeGridRootClick = (event: MouseEvent<HTMLDivElement>) => {
                if (disabled || readonly) {
                    return;
                }

                if (isInnerOpen && event.target === timeGridRootRef?.current) {
                    setIsInnerOpen(false);

                    if (onToggle) {
                        onToggle(false, event);
                    }
                }
            };

            const { onKeyDown: onKeyDownNavigation } = useKeyNavigation({
                isCalendarOpen: isInnerOpen,
                format,
                maskWithFormat: true,
                delimiter,
                closeOnEsc,
                onToggle: handleToggle,
            });

            const getActualWidth = () => {
                if (!rootWidth) {
                    return 'fit-content';
                }

                if (dropdownWidthValue === 'fixed' || dropdownWidthValue === undefined) {
                    return undefined;
                }

                if (dropdownWidth === 'fullWidth') {
                    return `${rootWidth}px`;
                }

                if (String(dropdownWidth)?.includes('%') && typeof dropdownWidth === 'string') {
                    const widthValue = (rootWidth / 100) * parseFloat(dropdownWidth.replace('%', ''));
                    return `${widthValue}px`;
                }

                return String(dropdownWidth || 'fit-content');
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
                    {...(hintText && {
                        hintView,
                        hintSize,
                    })}
                    {...rest}
                >
                    <FloatingPopover
                        ref={floatingPopoverRef}
                        opened={isInnerOpen}
                        onToggle={handleToggle}
                        offset={offset}
                        placement={placement}
                        disableFlip={disableFlip}
                        portal={usePortal ? (frame as string | RefObject<HTMLElement>) : undefined}
                        zIndex={zIndex}
                        target={(referenceRef) => (
                            <StyledInput
                                ref={inputRef}
                                inputWrapperRef={referenceRef as MutableRefObject<HTMLDivElement>}
                                className={cls({
                                    [classes.timePickerError]: valueError,
                                    [classes.timePickerSuccess]: valueSuccess,
                                    [classes.timePickerEdited]: valueEdited,
                                })}
                                value={viewValue}
                                size={size}
                                disabled={disabled}
                                readOnly={readonly}
                                appearance={appearance}
                                hasDivider={appearance === 'clear' && hasClearDivider}
                                placeholder={placeholder}
                                contentLeft={contentLeft}
                                contentRight={contentRight}
                                textBefore={textBefore}
                                textAfter={textAfter}
                                autoComplete={autoComplete}
                                onChange={handleInputChange}
                                onFocus={onFocus}
                                onKeyDown={handleOnKeyDown}
                                required={required}
                                requiredPlacement={requiredPlacement}
                                hasRequiredIndicator={hasRequiredIndicator}
                                label={label}
                                labelPlacement={labelPlacement}
                                keepPlaceholder={keepPlaceholder}
                                {...(hintText
                                    ? {
                                          hintText,
                                          hintView,
                                          hintSize,
                                          hintTrigger,
                                          hintTargetIcon,
                                          hintPlacement,
                                          hintHasArrow,
                                          hintOffset,
                                          hintWidth,
                                          hintContentLeft,
                                          hintTargetPlacement,
                                      }
                                    : { hintText: undefined })}
                            />
                        )}
                    >
                        <Root
                            ref={timeGridRootRef}
                            stretched={stretched}
                            view={view}
                            size={size}
                            className={cls(classes.timePickerGridRoot, className, {
                                [classes.timePickerPlacementRight]: dropdownAlign === 'right',
                                [classes.timePickerFullWidth]: dropdownWidth === 'fullWidth',
                                [classes.timePickerFixed]: dropdownWidth !== 'fullWidth',
                            })}
                            disabled={disabled}
                            readonly={readonly}
                            onClick={handleTimeGridRootClick}
                        >
                            <StyledTimePickerGrid
                                view={view}
                                size={size}
                                format={format}
                                columns={columnsQuantity}
                                innerWidth={getActualWidth()}
                                innerHeight={dropdownHeightValue}
                                dropdownHeight="100%"
                                dropdownWidth="fullWidth"
                                value={viewValue}
                                onChange={handleOnChange}
                                disabled={disabled}
                                min={min}
                                max={max}
                                multiplicityMinutes={multiplicityMinutes}
                                multiplicitySeconds={multiplicitySeconds}
                            />
                        </Root>
                    </FloatingPopover>
                    {leftHelper && (
                        <LeftHelper
                            className={cls({
                                [classes.timePickerError]: valueError,
                                [classes.timePickerSuccess]: valueSuccess,
                                [classes.timePickerEdited]: valueEdited,
                            })}
                        >
                            {leftHelper}
                        </LeftHelper>
                    )}
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
        hintView: {
            css: hintViewCSS,
        },
        hintSize: {
            css: hintSizeCSS,
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
