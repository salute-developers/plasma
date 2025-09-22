import React, { forwardRef, useRef, useState, useEffect } from 'react';
import cls from 'classnames';
import type { ChangeEvent, MouseEvent, KeyboardEvent } from 'react';
import type { RootProps } from 'src/engines';
import { getPlacements } from 'src/utils';

import { range, processTimeInput, animateScrollTo } from './utils';
import { TimePickerProps } from './TimePicker.types';
import {
    base,
    StyledInput,
    StyledPopover,
    StyledTimeColumn,
    StyledTimeItem,
    StyledTimePicker,
} from './TimePicker.styles';
import { classes } from './TimePicker.tokens';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readonlyCSS } from './variations/_readonly/base';
import { useKeyNavigation } from './hooks/useKeyboardNavigation';

interface ActiveTime {
    hours: number | null;
    minutes: number | null;
    seconds: number | null;
    currentColumn: 'hours' | 'minutes' | 'seconds' | null;
}

export const timePickerRoot = (
    Root: RootProps<HTMLDivElement, Omit<TimePickerProps, 'opened' | 'defaultValue' | 'onChange'>>,
) =>
    forwardRef<HTMLInputElement, TimePickerProps>(
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
                hasRequiredIndicator = true,
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
            const timeSelectRootRef = useRef<HTMLDivElement | null>(null);
            const hoursColumnRef = useRef<HTMLDivElement>(null);
            const minutesColumnRef = useRef<HTMLDivElement>(null);
            const secondsColumnRef = useRef<HTMLDivElement>(null);
            const timeItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
            const [isInnerOpen, setIsInnerOpen] = useState(opened);
            const [innerTime, setInnerTime] = useState(outerValue || '');
            const [activeTime, setActiveTime] = useState<ActiveTime>({
                hours: null,
                minutes: null,
                seconds: null,
                currentColumn: null,
            });
            const [itemHeight, setItemHeight] = useState(0);
            const [gap, setGap] = useState(0);

            const viewValue = outerValue ?? innerTime;

            const format = columnsQuantity === 3 ? 'HH:mm:ss' : 'HH:mm';
            const hours = range(24);
            const minutes = range(60);
            const seconds = range(60);

            useEffect(() => {
                if (viewValue) {
                    let timeString = viewValue;
                    if (format === 'HH:mm' && viewValue.length > 5) {
                        timeString = viewValue.substring(0, 5);
                    }
                    setInnerTime(viewValue);
                    const [hh, mm, ss] = timeString.split(':').map(Number);
                    setActiveTime({
                        hours: !Number.isNaN(hh) ? hh : null,
                        minutes: !Number.isNaN(mm) ? mm : null,
                        seconds: format === 'HH:mm:ss' && !Number.isNaN(ss) ? ss : null,
                        currentColumn: null,
                    });
                }
            }, [outerValue, format]);

            useEffect(() => {
                if (isInnerOpen && (disabled || readonly)) {
                    setIsInnerOpen(false);
                }
            }, [disabled, readonly]);

            useEffect(() => {
                if (isInnerOpen && Object.keys(timeItemRefs.current).length > 0) {
                    const firstItem = Object.values(timeItemRefs.current)[0];

                    if (firstItem) {
                        setItemHeight(firstItem.offsetHeight);
                    }
                }
                if (isInnerOpen && hoursColumnRef.current) {
                    const computedStyle = getComputedStyle(hoursColumnRef.current);
                    const gapValue = parseFloat(computedStyle.gap || '0');
                    setGap(gapValue);
                }
            }, [isInnerOpen]);

            useEffect(() => {
                if (!isInnerOpen || itemHeight === 0) return;

                const scrollToActiveItem = (columnRef: React.RefObject<HTMLDivElement>, index: number | null) => {
                    if (columnRef.current && index !== null) {
                        const scrollPosition = index * (itemHeight + gap);
                        animateScrollTo(columnRef.current, scrollPosition);
                    }
                };

                scrollToActiveItem(hoursColumnRef, activeTime.hours);
                scrollToActiveItem(minutesColumnRef, activeTime.minutes);
                scrollToActiveItem(secondsColumnRef, activeTime.seconds);
            }, [activeTime, isInnerOpen, itemHeight]);

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

            const handleCalendarRootClick = (event: MouseEvent<HTMLDivElement>) => {
                if (disabled || readonly) return;
                if (isInnerOpen && stretched && event.target === timeSelectRootRef?.current) {
                    setIsInnerOpen(false);
                    onToggle?.(false);
                }
            };

            const handleTimeItemClick = (
                value: string,
                column: 'hours' | 'minutes' | 'seconds',
                isNextColumn = true,
            ) => {
                const currentTime = innerTime.split(':');
                let newTime = [];
                if (format === 'HH:mm:ss') {
                    newTime = [...currentTime];
                    while (newTime.length < 3) {
                        newTime.push('00');
                    }
                } else {
                    newTime = [...currentTime];
                    while (newTime.length < 2) {
                        newTime.push('00');
                    }
                    newTime = newTime.slice(0, 2);
                }

                switch (column) {
                    case 'hours':
                        newTime[0] = value;

                        if (!currentTime[1]) {
                            newTime[1] = '00';
                        }
                        if (format === 'HH:mm:ss') {
                            if (!currentTime[2]) {
                                newTime[2] = '00';
                            }
                        }
                        break;
                    case 'minutes':
                        newTime[1] = value;

                        if (!currentTime[0]) {
                            newTime[0] = '00';
                        }

                        if (format === 'HH:mm:ss') {
                            if (!currentTime[2]) {
                                newTime[2] = '00';
                            }
                        }
                        break;
                    case 'seconds':
                        if (format === 'HH:mm:ss') {
                            newTime[2] = value;

                            if (!currentTime[0]) {
                                newTime[0] = '00';
                            }
                            if (!currentTime[1]) {
                                newTime[1] = '00';
                            }
                        }
                        break;
                    default:
                        break;
                }

                const newTimeString = newTime.join(':');
                setInnerTime(newTimeString);

                let nextColumn: 'hours' | 'minutes' | 'seconds' | null = null;
                if (column === 'hours' && isNextColumn) {
                    nextColumn = 'minutes';
                } else if (column === 'minutes' && isNextColumn) {
                    nextColumn = format === 'HH:mm:ss' ? 'seconds' : null;
                } else {
                    nextColumn = activeTime.currentColumn;
                }

                const newActiveTime: ActiveTime = {
                    hours: column === 'hours' ? parseInt(value, 10) : activeTime.hours,
                    minutes: column === 'minutes' ? parseInt(value, 10) : activeTime.minutes,
                    seconds: column === 'seconds' ? parseInt(value, 10) : activeTime.seconds,
                    currentColumn: nextColumn,
                };
                setActiveTime(newActiveTime);

                onChange?.(({
                    value: newTimeString,
                    timeValues: {
                        hh: parseInt(newTime[0], 10),
                        mm: parseInt(newTime[1], 10),
                        ss: format === 'HH:mm:ss' ? parseInt(newTime[2] || '0', 10) : null,
                    },
                } as unknown) as ChangeEvent<HTMLInputElement>);
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

                onChange?.(({
                    ...event,
                    target: {
                        ...event.target,
                        value: innerString,
                        timeValues: values,
                    },
                } as unknown) as ChangeEvent<HTMLInputElement>);

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
                    return;
                }

                if (!isInnerOpen) return;

                const { currentColumn } = activeTime;
                if (!currentColumn) return;

                let newIndex: number | null = null;
                let newColumn = currentColumn;

                if (['ArrowUp', 'ArrowDown', 'Enter'].includes(event.key)) {
                    event.preventDefault();
                }

                if (['ArrowRight'].includes(event.key) && currentColumn !== 'seconds') {
                    event.preventDefault();
                }

                if (['ArrowLeft'].includes(event.key) && currentColumn !== 'hours') {
                    event.preventDefault();
                }

                switch (event.key) {
                    case 'ArrowUp':
                        newIndex = Math.max(0, (activeTime[currentColumn] ?? 0) - 1);
                        if (newIndex !== null) {
                            const value = newIndex.toString().padStart(2, '0');
                            handleTimeItemClick(value, currentColumn, false);
                        }
                        break;
                    case 'ArrowDown':
                    case 'Tab':
                        event.preventDefault();
                        newIndex = Math.min(currentColumn === 'hours' ? 23 : 59, (activeTime[currentColumn] ?? 0) + 1);
                        if (newIndex !== null) {
                            const value = newIndex.toString().padStart(2, '0');
                            handleTimeItemClick(value, currentColumn, false);
                        }
                        break;
                    case 'ArrowRight':
                    case 'Enter':
                        if (currentColumn === 'hours') newColumn = 'minutes';
                        else if (currentColumn === 'minutes' && format === 'HH:mm:ss') newColumn = 'seconds';
                        newIndex = activeTime[newColumn] ?? 0;
                        setActiveTime({
                            ...activeTime,
                            currentColumn: newColumn,
                            [newColumn]: newIndex,
                        });

                        if (
                            (currentColumn === 'seconds' && format === 'HH:mm:ss') ||
                            (currentColumn === 'minutes' && format === 'HH:mm')
                        ) {
                            setIsInnerOpen(false);
                        }
                        break;
                    case 'ArrowLeft':
                        if (currentColumn === 'minutes') newColumn = 'hours';
                        else if (currentColumn === 'seconds') newColumn = 'minutes';
                        newIndex = activeTime[newColumn] ?? 0;
                        setActiveTime({
                            ...activeTime,
                            currentColumn: newColumn,
                            [newColumn]: newIndex,
                        });
                        if (currentColumn === 'hours') {
                            setIsInnerOpen(false);
                        }
                        break;
                    // eslint-disable-next-line no-fallthrough
                    default:
                }
            };

            const handleTimeItemKeyDown = (
                event: KeyboardEvent<HTMLDivElement>,
                column: 'hours' | 'minutes' | 'seconds',
                value: string,
            ) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    handleTimeItemClick(value, column);
                }
            };

            const { onKeyDown: onKeyDownNavigation } = useKeyNavigation({
                isCalendarOpen: isInnerOpen,
                format,
                maskWithFormat: true,
                delimiter: ':',
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
                    onKeyDown={(e) => {
                        onKeyDownNavigation(e);
                        handleKeyDown(e);
                    }}
                    required={required}
                    requiredPlacement={requiredPlacement}
                    hasRequiredIndicator={hasRequiredIndicator}
                    label={label}
                    labelPlacement={labelPlacement}
                    keepPlaceholder={keepPlaceholder}
                />
            );

            const renderTimeColumn = (
                values: string[],
                column: 'hours' | 'minutes' | 'seconds',
                columnRef: React.RefObject<HTMLDivElement>,
            ) => (
                <StyledTimeColumn key={column} ref={columnRef} height={dropdownHeight}>
                    {values.map((value, index) => (
                        <StyledTimeItem
                            key={value}
                            ref={(el) => {
                                timeItemRefs.current[`${column}-${value}`] = el;
                            }}
                            className={cls({
                                [classes.timeItemActive]: activeTime[column] === index,
                            })}
                            onClick={() => handleTimeItemClick(value, column)}
                            onKeyDown={(e) => handleTimeItemKeyDown(e, column, value)}
                        >
                            {value}
                        </StyledTimeItem>
                    ))}
                </StyledTimeColumn>
            );

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
                    ref={ref}
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
                            ref={timeSelectRootRef}
                            view={view}
                            size={size}
                            disabled={disabled}
                            readonly={readonly}
                            onClick={handleCalendarRootClick}
                            stretched={stretched}
                        >
                            <StyledTimePicker width={dropdownWidth}>
                                {renderTimeColumn(hours, 'hours', hoursColumnRef)}
                                {renderTimeColumn(minutes, 'minutes', minutesColumnRef)}
                                {columnsQuantity === 3 && renderTimeColumn(seconds, 'seconds', secondsColumnRef)}
                            </StyledTimePicker>
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
