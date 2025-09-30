import React, { forwardRef, useRef, useState, useEffect, useCallback } from 'react';
import cls from 'classnames';
import type { ChangeEvent, MouseEvent, KeyboardEvent } from 'react';
import type { RootProps } from 'src/engines';
import { getPlacements } from 'src/utils';

import { range, processTimeInput, animateScrollTo, delimiter } from './utils';
import { TimePickerProps } from './TimePicker.types';
import { base, StyledInput, StyledPopover, StyledTimePicker } from './TimePicker.styles';
import { classes } from './TimePicker.tokens';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { base as readonlyCSS } from './variations/_readonly/base';
import { useKeyNavigation } from './hooks/useKeyboardNavigation';
import { renderTimeColumn } from './ui/TimeColumn/TimeColumn';

interface ActiveTime {
    hours: number | null;
    minutes: number | null;
    seconds: number | null;
    currentColumn: 'hours' | 'minutes' | 'seconds' | null;
}

interface ScrollbarState {
    isVisible: boolean;
    thumbHeight: number;
    thumbPosition: number;
    isDragging: boolean;
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

            const hoursScrollbarRef = useRef<HTMLDivElement>(null);
            const minutesScrollbarRef = useRef<HTMLDivElement>(null);
            const secondsScrollbarRef = useRef<HTMLDivElement>(null);
            const hoursThumbRef = useRef<HTMLDivElement>(null);
            const minutesThumbRef = useRef<HTMLDivElement>(null);
            const secondsThumbRef = useRef<HTMLDivElement>(null);

            const hoursHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
            const minutesHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
            const secondsHideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

            const [hoursScrollbar, setHoursScrollbar] = useState<ScrollbarState>({
                isVisible: false,
                thumbHeight: 0,
                thumbPosition: 0,
                isDragging: false,
            });
            const [minutesScrollbar, setMinutesScrollbar] = useState<ScrollbarState>({
                isVisible: false,
                thumbHeight: 0,
                thumbPosition: 0,
                isDragging: false,
            });
            const [secondsScrollbar, setSecondsScrollbar] = useState<ScrollbarState>({
                isVisible: false,
                thumbHeight: 0,
                thumbPosition: 0,
                isDragging: false,
            });

            const viewValue = outerValue ?? innerTime;

            const format = columnsQuantity === 3 ? 'HH:mm:ss' : 'HH:mm';
            const hours = range(24);
            const minutes = range(60);
            const seconds = range(60);

            const minScrollbarTrackHeight = 20;

            const calculateScrollbar = useCallback((columnRef: React.RefObject<HTMLDivElement>) => {
                if (!columnRef.current) return { thumbHeight: 0, thumbPosition: 0 };

                const { scrollTop, scrollHeight, clientHeight } = columnRef.current;
                const trackHeight = clientHeight;
                const thumbHeight = Math.max((trackHeight / scrollHeight) * trackHeight, minScrollbarTrackHeight);
                const maxScroll = scrollHeight - clientHeight;
                const thumbPosition = maxScroll > 0 ? (scrollTop / maxScroll) * (trackHeight - thumbHeight) : 0;

                return { thumbHeight, thumbPosition };
            }, []);

            const showScrollbarWithDelay = useCallback(
                (
                    setScrollbar: React.Dispatch<React.SetStateAction<ScrollbarState>>,
                    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
                    columnRef: React.RefObject<HTMLDivElement>,
                ) => {
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }

                    updateScrollbar(columnRef, setScrollbar, true);

                    timeoutRef.current = (setTimeout(() => {
                        setScrollbar((prev) => ({ ...prev, isVisible: false }));
                        timeoutRef.current = null;
                    }, 2000) as unknown) as NodeJS.Timeout;
                },
                [],
            );

            const updateScrollbar = useCallback(
                (
                    columnRef: React.RefObject<HTMLDivElement>,
                    setScrollbar: React.Dispatch<React.SetStateAction<ScrollbarState>>,
                    show = false,
                ) => {
                    if (!columnRef.current) return;

                    const { thumbHeight, thumbPosition } = calculateScrollbar(columnRef);
                    setScrollbar((prev) => ({
                        ...prev,
                        thumbHeight,
                        thumbPosition,
                        isVisible: show || prev.isVisible,
                    }));
                },
                [calculateScrollbar],
            );

            const handleColumnScroll = useCallback(
                (
                    columnRef: React.RefObject<HTMLDivElement>,
                    setScrollbar: React.Dispatch<React.SetStateAction<ScrollbarState>>,
                    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
                ) => {
                    showScrollbarWithDelay(setScrollbar, timeoutRef, columnRef);
                },
                [showScrollbarWithDelay],
            );

            const createScrollbarDragHandler = useCallback(
                (
                    columnRef: React.RefObject<HTMLDivElement>,
                    setScrollbar: React.Dispatch<React.SetStateAction<ScrollbarState>>,
                    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
                ) => (e: React.MouseEvent<HTMLDivElement>) => {
                    e.preventDefault();

                    const thumb = e.currentTarget as HTMLDivElement;
                    const track = thumb.parentElement as HTMLDivElement;
                    if (!columnRef.current || !track) return;

                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                    }

                    const startY = e.clientY;
                    const startThumbPosition = parseFloat(thumb.style.top || '0');
                    const trackRect = track.getBoundingClientRect();
                    const trackHeight = trackRect.height;
                    const thumbHeight = thumb.offsetHeight;

                    const { scrollHeight, clientHeight } = columnRef.current;
                    const maxScroll = scrollHeight - clientHeight;

                    const handleMouseMove = (moveEvent: MouseEvent) => {
                        const deltaY = moveEvent.clientY - startY;
                        const newThumbPosition = Math.max(
                            0,
                            Math.min(trackHeight - thumbHeight, startThumbPosition + deltaY),
                        );

                        const scrollPercentage = newThumbPosition / (trackHeight - thumbHeight);
                        const newScrollTop = scrollPercentage * maxScroll;

                        if (columnRef.current) {
                            columnRef.current.scrollTop = newScrollTop;
                        }

                        setScrollbar((prev) => ({
                            ...prev,
                            thumbPosition: newThumbPosition,
                            isDragging: true,
                            isVisible: true,
                        }));
                    };

                    const handleMouseUp = () => {
                        document.removeEventListener('mousemove', handleMouseMove as any);
                        document.removeEventListener('mouseup', handleMouseUp);

                        setScrollbar((prev) => ({
                            ...prev,
                            isDragging: false,
                        }));

                        showScrollbarWithDelay(setScrollbar, timeoutRef, columnRef);
                    };

                    document.addEventListener('mousemove', handleMouseMove as any);
                    document.addEventListener('mouseup', handleMouseUp);
                },
                [showScrollbarWithDelay],
            );

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
                if (!isInnerOpen) {
                    return;
                }

                setTimeout(() => {
                    updateScrollbar(hoursColumnRef, setHoursScrollbar);
                    updateScrollbar(minutesColumnRef, setMinutesScrollbar);
                    if (columnsQuantity === 3) {
                        updateScrollbar(secondsColumnRef, setSecondsScrollbar);
                    }
                }, 100);
            }, [isInnerOpen, columnsQuantity, updateScrollbar]);

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
                        setTimeout(() => {
                            updateScrollbar(columnRef, setHoursScrollbar);
                        }, 300);
                    }
                };

                scrollToActiveItem(hoursColumnRef, activeTime.hours);
                scrollToActiveItem(minutesColumnRef, activeTime.minutes);
                scrollToActiveItem(secondsColumnRef, activeTime.seconds);
            }, [activeTime, isInnerOpen, itemHeight, gap, updateScrollbar]);

            useEffect(() => {
                const hoursColumn = hoursColumnRef.current;
                const minutesColumn = minutesColumnRef.current;
                const secondsColumn = secondsColumnRef.current;

                const handleHoursScroll = () =>
                    handleColumnScroll(hoursColumnRef, setHoursScrollbar, hoursHideTimeoutRef);
                const handleMinutesScroll = () =>
                    handleColumnScroll(minutesColumnRef, setMinutesScrollbar, minutesHideTimeoutRef);
                const handleSecondsScroll = () =>
                    handleColumnScroll(secondsColumnRef, setSecondsScrollbar, secondsHideTimeoutRef);

                if (hoursColumn) {
                    hoursColumn.addEventListener('scroll', handleHoursScroll);
                }
                if (minutesColumn) {
                    minutesColumn.addEventListener('scroll', handleMinutesScroll);
                }
                if (secondsColumn) {
                    secondsColumn.addEventListener('scroll', handleSecondsScroll);
                }

                return () => {
                    if (hoursColumn) {
                        hoursColumn.removeEventListener('scroll', handleHoursScroll);
                    }
                    if (minutesColumn) {
                        minutesColumn.removeEventListener('scroll', handleMinutesScroll);
                    }
                    if (secondsColumn) {
                        secondsColumn.removeEventListener('scroll', handleSecondsScroll);
                    }
                };
            }, [isInnerOpen, handleColumnScroll]);

            useEffect(() => {
                const hoursColumn = hoursColumnRef.current;
                const minutesColumn = minutesColumnRef.current;
                const secondsColumn = secondsColumnRef.current;

                const handleHoursMouseEnter = () =>
                    showScrollbarWithDelay(setHoursScrollbar, hoursHideTimeoutRef, hoursColumnRef);
                const handleMinutesMouseEnter = () =>
                    showScrollbarWithDelay(setMinutesScrollbar, minutesHideTimeoutRef, minutesColumnRef);
                const handleSecondsMouseEnter = () =>
                    showScrollbarWithDelay(setSecondsScrollbar, secondsHideTimeoutRef, secondsColumnRef);

                if (hoursColumn) {
                    hoursColumn.addEventListener('mouseenter', handleHoursMouseEnter);
                }
                if (minutesColumn) {
                    minutesColumn.addEventListener('mouseenter', handleMinutesMouseEnter);
                }
                if (secondsColumn) {
                    secondsColumn.addEventListener('mouseenter', handleSecondsMouseEnter);
                }

                return () => {
                    if (hoursColumn) {
                        hoursColumn.removeEventListener('mouseenter', handleHoursMouseEnter);
                    }
                    if (minutesColumn) {
                        minutesColumn.removeEventListener('mouseenter', handleMinutesMouseEnter);
                    }
                    if (secondsColumn) {
                        secondsColumn.removeEventListener('mouseenter', handleSecondsMouseEnter);
                    }
                };
            }, [isInnerOpen, showScrollbarWithDelay]);

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
                const currentTime = innerTime.split(delimiter);
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
                        if (format === 'HH:mm:ss' && !currentTime[2]) {
                            newTime[2] = '00';
                        }
                        break;
                    case 'minutes':
                        newTime[1] = value;

                        if (!currentTime[0]) {
                            newTime[0] = '00';
                        }

                        if (format === 'HH:mm:ss' && !currentTime[2]) {
                            newTime[2] = '00';
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

                const newTimeString = newTime.join(delimiter);
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
                    return;
                }

                if (!isInnerOpen) {
                    return;
                }

                const { currentColumn } = activeTime;
                if (!currentColumn) {
                    return;
                }

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
                        if (currentColumn === 'minutes') {
                            newColumn = 'hours';
                        } else if (currentColumn === 'seconds') {
                            newColumn = 'minutes';
                        }
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
                            className={dropdownAlign === 'right' ? classes.timePickerPlacementRight : ''}
                            stretched={stretched}
                        >
                            <StyledTimePicker width={dropdownWidth}>
                                {renderTimeColumn({
                                    values: hours,
                                    dropdownHeight,
                                    column: 'hours',
                                    columnRef: hoursColumnRef,
                                    scrollbarState: hoursScrollbar,
                                    setScrollbar: setHoursScrollbar,
                                    scrollbarRef: hoursScrollbarRef,
                                    thumbRef: hoursThumbRef,
                                    timeoutRef: hoursHideTimeoutRef,
                                    timeItemRefs,
                                    activeTime,
                                    handleTimeItemClick,
                                    handleTimeItemKeyDown,
                                    createScrollbarDragHandler,
                                })}
                                {renderTimeColumn({
                                    values: minutes,
                                    dropdownHeight,
                                    column: 'minutes',
                                    columnRef: minutesColumnRef,
                                    scrollbarState: minutesScrollbar,
                                    setScrollbar: setMinutesScrollbar,
                                    scrollbarRef: minutesScrollbarRef,
                                    thumbRef: minutesThumbRef,
                                    timeoutRef: minutesHideTimeoutRef,
                                    timeItemRefs,
                                    activeTime,
                                    handleTimeItemClick,
                                    handleTimeItemKeyDown,
                                    createScrollbarDragHandler,
                                })}
                                {columnsQuantity === 3 &&
                                    renderTimeColumn({
                                        values: seconds,
                                        dropdownHeight,
                                        column: 'seconds',
                                        columnRef: secondsColumnRef,
                                        scrollbarState: secondsScrollbar,
                                        setScrollbar: setSecondsScrollbar,
                                        scrollbarRef: secondsScrollbarRef,
                                        thumbRef: secondsThumbRef,
                                        timeoutRef: secondsHideTimeoutRef,
                                        timeItemRefs,
                                        activeTime,
                                        handleTimeItemClick,
                                        handleTimeItemKeyDown,
                                        createScrollbarDragHandler,
                                    })}
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
