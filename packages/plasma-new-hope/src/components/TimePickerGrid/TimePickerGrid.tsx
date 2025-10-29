import React, { forwardRef, useRef, useState, useEffect, useCallback, useMemo, KeyboardEvent } from 'react';
import type { RootProps } from 'src/engines';

import { animateScrollTo, getColumnsFromFormat, parseTimeString, buildTimeString, isTimeDisabled } from './utils';
import { TimePickerGridChangeEvent, TimePickerGridProps } from './TimePickerGrid.types';
import { base, StyledTimePicker } from './TimePickerGrid.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { renderTimeColumn } from './ui/TimeColumn/TimeColumn';
import { TimeColumnType, TimeItemKeyDownHandler } from './ui/TimeColumn/TimeColumn.types';

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

export const timePickerGridRoot = (
    Root: RootProps<HTMLDivElement, Omit<TimePickerGridProps, 'defaultValue' | 'onChange'>>,
) =>
    forwardRef<HTMLDivElement, TimePickerGridProps>(
        (
            {
                value: outerValue,
                view,
                size,
                disabled = false,
                dropdownWidth,
                dropdownHeight,
                format = 'HH:mm',
                min,
                max,
                columnsQuantity,
                disabledValues,
                onChange,
                ...rest
            },
            ref,
        ) => {
            const actualFormat = format || (columnsQuantity === 3 ? 'HH:mm:ss' : 'HH:mm');
            const columnsConfig = useMemo(() => getColumnsFromFormat(actualFormat), [actualFormat]);

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

            useEffect(() => {
                if (activeTime.currentColumn && activeTime[activeTime.currentColumn] !== null) {
                    const column = activeTime.currentColumn;
                    const value = activeTime[activeTime.currentColumn]?.toString().padStart(2, '0');
                    const element = timeItemRefs.current[`${column}-${value}`];

                    setTimeout(() => {
                        if (element) {
                            element.focus();
                        }
                    }, 0);
                }
            }, [activeTime]);

            const getDisabledValuesForColumn = useCallback(
                (columnType: 'hours' | 'minutes' | 'seconds') => {
                    let disabledFromProps;
                    if (columnType === 'hours') {
                        disabledFromProps = disabledValues?.hour || [];
                    } else if (columnType === 'minutes') {
                        disabledFromProps = disabledValues?.minute || [];
                    } else {
                        disabledFromProps = disabledValues?.second || [];
                    }

                    const disabledFromMinMax: number[] = [];

                    if (min || max) {
                        const timeValues = parseTimeString(viewValue || '00:00:00', actualFormat);

                        for (let i = 0; i < (columnType === 'hours' ? 24 : 60); i++) {
                            const testValues = { ...timeValues };
                            if (columnType === 'hours') {
                                testValues.hh = i;
                            } else if (columnType === 'minutes') {
                                testValues.mm = i;
                            } else {
                                testValues.ss = i;
                            }

                            const completeTimeValues = getCompleteTimeValues(testValues, actualFormat);
                            if (isTimeDisabled(completeTimeValues, min, max, format)) {
                                disabledFromMinMax.push(i);
                            }
                        }
                    }

                    const normalizedDisabledFromProps = disabledFromProps.map((val) =>
                        typeof val === 'string' ? parseInt(val, 10) : val,
                    );

                    return [...new Set([...normalizedDisabledFromProps, ...disabledFromMinMax])];
                },
                [disabledValues, min, max, viewValue, actualFormat],
            );

            const getCompleteTimeValues = useCallback((timeValues: any, format: string) => {
                const completeValues = { hh: 0, mm: 0, ss: 0 };

                if (format.includes('HH')) {
                    completeValues.hh = timeValues.hh !== null ? timeValues.hh : 0;
                }
                if (format.includes('mm')) {
                    completeValues.mm = timeValues.mm !== null ? timeValues.mm : 0;
                }
                if (format.includes('ss')) {
                    completeValues.ss = timeValues.ss !== null ? timeValues.ss : 0;
                }

                return completeValues;
            }, []);

            const getNextAvailableValue = useCallback(
                (
                    currentIndex: number,
                    values: string[],
                    disabledValuesForColumn: (string | number)[],
                    direction: 'up' | 'down',
                ) => {
                    let newIndex = currentIndex;
                    let iterations = 0;
                    const maxIterations = values.length;

                    do {
                        newIndex =
                            direction === 'up'
                                ? (newIndex - 1 + values.length) % values.length
                                : (newIndex + 1) % values.length;
                        iterations++;
                    } while (
                        iterations < maxIterations &&
                        disabledValuesForColumn.includes(parseInt(values[newIndex], 10)) &&
                        newIndex !== currentIndex
                    );

                    return iterations < maxIterations &&
                        !disabledValuesForColumn.includes(parseInt(values[newIndex], 10))
                        ? newIndex
                        : currentIndex;
                },
                [],
            );

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

                    const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
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
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);

                        setScrollbar((prev) => ({
                            ...prev,
                            isDragging: false,
                        }));

                        showScrollbarWithDelay(setScrollbar, timeoutRef, columnRef);
                    };

                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                },
                [showScrollbarWithDelay],
            );

            useEffect(() => {
                if (viewValue && columnsConfig.length > 0) {
                    const timeValues = parseTimeString(viewValue, actualFormat);
                    setActiveTime((prev) => ({
                        ...prev,
                        hours: timeValues.hh,
                        minutes: timeValues.mm,
                        seconds: timeValues.ss,
                    }));
                }
            }, [viewValue, columnsConfig, actualFormat]);

            const handleContainerFocus = useCallback(() => {
                if (activeTime.currentColumn === null && columnsConfig.length > 0) {
                    const firstColumn = columnsConfig[0].type;
                    setActiveTime((prev) => ({
                        ...prev,
                        currentColumn: firstColumn,
                    }));
                }
            }, [activeTime.currentColumn, columnsConfig]);

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
                if (Object.keys(timeItemRefs.current).length > 0) {
                    const firstItem = Object.values(timeItemRefs.current)[0];

                    if (firstItem) {
                        setItemHeight(firstItem.offsetHeight);
                    }
                }
                if (hoursColumnRef.current) {
                    const computedStyle = getComputedStyle(hoursColumnRef.current);
                    const gapValue = parseFloat(computedStyle.gap || '0');
                    setGap(gapValue);
                }
            }, [outerValue]);

            useEffect(() => {
                setTimeout(() => {
                    updateScrollbar(hoursColumnRef, setHoursScrollbar);
                    updateScrollbar(minutesColumnRef, setMinutesScrollbar);
                    if (columnsQuantity === 3) {
                        updateScrollbar(secondsColumnRef, setSecondsScrollbar);
                    }
                }, 100);
            }, [columnsQuantity, updateScrollbar]);

            useEffect(() => {
                if (itemHeight === 0) return;

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
            }, [activeTime, itemHeight, gap, updateScrollbar]);

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
            }, []);

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
            }, []);

            const handleTimeItemClick = (
                value: string,
                column: 'hours' | 'minutes' | 'seconds',
                isNextColumn = true,
            ) => {
                const currentTimeValues = parseTimeString(innerTime, actualFormat);
                const newTimeValues = { ...currentTimeValues };

                switch (column) {
                    case 'hours':
                        newTimeValues.hh = parseInt(value, 10);
                        break;
                    case 'minutes':
                        newTimeValues.mm = parseInt(value, 10);
                        break;
                    case 'seconds':
                        newTimeValues.ss = parseInt(value, 10);
                        break;
                    default:
                }

                const getFirstAvailableValue = (columnType: 'hours' | 'minutes' | 'seconds'): number => {
                    const disabledValuesForColumn = getDisabledValuesForColumn(columnType);
                    const maxValue = columnType === 'hours' ? 23 : 59;

                    for (let i = 0; i <= maxValue; i++) {
                        if (!disabledValuesForColumn.includes(i)) {
                            return i;
                        }
                    }
                    return 0;
                };

                if (newTimeValues.hh === null && actualFormat.includes('HH')) {
                    newTimeValues.hh = getFirstAvailableValue('hours');
                }
                if (newTimeValues.mm === null && actualFormat.includes('mm')) {
                    newTimeValues.mm = getFirstAvailableValue('minutes');
                }
                if (newTimeValues.ss === null && actualFormat.includes('ss')) {
                    newTimeValues.ss = getFirstAvailableValue('seconds');
                }

                const completeTimeValues = getCompleteTimeValues(newTimeValues, actualFormat);
                if (isTimeDisabled(completeTimeValues, min, max)) {
                    return;
                }

                const newTimeString = buildTimeString(newTimeValues, actualFormat);
                setInnerTime(newTimeString);

                let nextColumn: 'hours' | 'minutes' | 'seconds' | null = null;
                const currentIndex = columnsConfig.findIndex((col) => col.type === column);
                if (currentIndex !== -1 && isNextColumn && currentIndex < columnsConfig.length - 1) {
                    nextColumn = columnsConfig[currentIndex + 1].type;
                }

                const newActiveTime: ActiveTime = {
                    hours: newTimeValues.hh,
                    minutes: newTimeValues.mm,
                    seconds: newTimeValues.ss,
                    currentColumn: nextColumn || column,
                };
                setActiveTime(newActiveTime);

                onChange?.({
                    value: newTimeString,
                    timeValues: {
                        hour: newTimeValues.hh || undefined,
                        minute: newTimeValues.mm || undefined,
                        second: newTimeValues.ss || undefined,
                    },
                } as TimePickerGridChangeEvent);
            };

            const handleTimeItemKeyDown: TimeItemKeyDownHandler = (
                event: KeyboardEvent<HTMLDivElement>,
                column: TimeColumnType,
                value: string,
            ) => {
                const disabledValuesForColumn = getDisabledValuesForColumn(column);
                const currentIndex = parseInt(value, 10);
                let newIndex: number | null = null;
                let newColumn = column;
                const currentIndexInColumns = columnsConfig.findIndex((col) => col.type === column);

                switch (event.key) {
                    case 'ArrowUp':
                        event.preventDefault();
                        newIndex = getNextAvailableValue(
                            currentIndex,
                            column === 'hours'
                                ? Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
                                : Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')),
                            disabledValuesForColumn,
                            'up',
                        );
                        if (newIndex !== null) {
                            const newValue = newIndex.toString().padStart(2, '0');
                            handleTimeItemClick(newValue, column, false);
                        }
                        break;
                    case 'ArrowDown':
                        event.preventDefault();
                        newIndex = getNextAvailableValue(
                            currentIndex,
                            column === 'hours'
                                ? Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
                                : Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')),
                            disabledValuesForColumn,
                            'down',
                        );
                        if (newIndex !== null) {
                            const newValue = newIndex.toString().padStart(2, '0');
                            handleTimeItemClick(newValue, column, false);
                        }
                        break;
                    case 'ArrowRight':
                        event.preventDefault();
                        if (column === 'hours') {
                            newColumn = 'minutes';
                        } else if (column === 'minutes' && actualFormat.includes('ss')) {
                            newColumn = 'seconds';
                        }
                        if (newColumn !== column) {
                            setActiveTime((prev) => ({
                                ...prev,
                                currentColumn: newColumn,
                            }));
                        }
                        break;
                    case 'ArrowLeft':
                        event.preventDefault();
                        if (column === 'minutes') {
                            newColumn = 'hours';
                        } else if (column === 'seconds') {
                            newColumn = 'minutes';
                        }
                        if (newColumn !== column) {
                            setActiveTime((prev) => ({
                                ...prev,
                                currentColumn: newColumn,
                            }));
                        }
                        break;
                    case 'Enter':
                    case ' ':
                        event.preventDefault();
                        handleTimeItemClick(value, column);
                        break;
                    case 'Home':
                        event.preventDefault();
                        newIndex = 0;
                        while (
                            disabledValuesForColumn.includes(newIndex) &&
                            newIndex < (column === 'hours' ? 24 : 60)
                        ) {
                            newIndex++;
                        }
                        if (newIndex < (column === 'hours' ? 24 : 60)) {
                            handleTimeItemClick(newIndex.toString().padStart(2, '0'), column, false);
                        }
                        break;
                    case 'End':
                        event.preventDefault();
                        newIndex = column === 'hours' ? 23 : 59;
                        while (disabledValuesForColumn.includes(newIndex) && newIndex >= 0) {
                            newIndex--;
                        }
                        if (newIndex >= 0) {
                            handleTimeItemClick(newIndex.toString().padStart(2, '0'), column, false);
                        }
                        break;
                    case 'Tab':
                        if (currentIndexInColumns === columnsConfig.length - 1) {
                            break;
                        }
                        event.preventDefault();
                        if (event.shiftKey) {
                            if (column === 'minutes') {
                                newColumn = 'hours';
                            } else if (column === 'seconds') {
                                newColumn = 'minutes';
                            }
                        } else if (column === 'hours') {
                            newColumn = 'minutes';
                        } else if (column === 'minutes' && actualFormat.includes('ss')) {
                            newColumn = 'seconds';
                        }
                        if (newColumn !== column) {
                            setActiveTime((prev) => ({
                                ...prev,
                                currentColumn: newColumn,
                            }));
                        }
                        break;
                    default:
                        if (/^[0-9]$/.test(event.key)) {
                            event.preventDefault();
                            const inputNumber = parseInt(event.key, 10);

                            if (column === 'hours') {
                                if (inputNumber <= 2) {
                                    const tens = inputNumber;
                                    const handleSecondInput = (e: globalThis.KeyboardEvent) => {
                                        if (/^[0-9]$/.test(e.key)) {
                                            const units = parseInt(e.key, 10);
                                            const total = tens * 10 + units;
                                            if (total < 24 && !disabledValuesForColumn.includes(total)) {
                                                handleTimeItemClick(total.toString().padStart(2, '0'), column);
                                            }
                                            document.removeEventListener('keydown', handleSecondInput);
                                        }
                                    };
                                    document.addEventListener('keydown', handleSecondInput);
                                    setTimeout(() => {
                                        document.removeEventListener('keydown', handleSecondInput);
                                    }, 1000);
                                } else if (inputNumber <= 9) {
                                    if (!disabledValuesForColumn.includes(inputNumber)) {
                                        handleTimeItemClick(inputNumber.toString().padStart(2, '0'), column);
                                    }
                                }
                            } else if (inputNumber <= 5) {
                                const tens = inputNumber;
                                const handleSecondInput = (e: globalThis.KeyboardEvent) => {
                                    if (/^[0-9]$/.test(e.key)) {
                                        const units = parseInt(e.key, 10);
                                        const total = tens * 10 + units;
                                        if (total < 60 && !disabledValuesForColumn.includes(total)) {
                                            handleTimeItemClick(total.toString().padStart(2, '0'), column);
                                        }
                                        document.removeEventListener('keydown', handleSecondInput);
                                    }
                                };
                                document.addEventListener('keydown', handleSecondInput);
                                setTimeout(() => {
                                    document.removeEventListener('keydown', handleSecondInput);
                                }, 1000);
                            } else if (inputNumber <= 9) {
                                if (!disabledValuesForColumn.includes(inputNumber)) {
                                    handleTimeItemClick(inputNumber.toString().padStart(2, '0'), column);
                                }
                            }
                        }
                }
            };

            return (
                <Root ref={ref} view={view} size={size} disabled={disabled} onFocus={handleContainerFocus} {...rest}>
                    <StyledTimePicker width={dropdownWidth} tabIndex={-1}>
                        {columnsConfig.map((columnConfig) => {
                            const { type, values } = columnConfig;

                            let columnRef;
                            let scrollbarState;
                            let setScrollbar;
                            let scrollbarRef;
                            let thumbRef;
                            let timeoutRef;

                            switch (type) {
                                case 'hours':
                                    columnRef = hoursColumnRef;
                                    scrollbarState = hoursScrollbar;
                                    setScrollbar = setHoursScrollbar;
                                    scrollbarRef = hoursScrollbarRef;
                                    thumbRef = hoursThumbRef;
                                    timeoutRef = hoursHideTimeoutRef;
                                    break;
                                case 'minutes':
                                    columnRef = minutesColumnRef;
                                    scrollbarState = minutesScrollbar;
                                    setScrollbar = setMinutesScrollbar;
                                    scrollbarRef = minutesScrollbarRef;
                                    thumbRef = minutesThumbRef;
                                    timeoutRef = minutesHideTimeoutRef;
                                    break;
                                case 'seconds':
                                    columnRef = secondsColumnRef;
                                    scrollbarState = secondsScrollbar;
                                    setScrollbar = setSecondsScrollbar;
                                    scrollbarRef = secondsScrollbarRef;
                                    thumbRef = secondsThumbRef;
                                    timeoutRef = secondsHideTimeoutRef;
                                    break;
                                default:
                                    return null;
                            }

                            return renderTimeColumn({
                                values,
                                disabledValues: getDisabledValuesForColumn(type),
                                dropdownHeight,
                                column: type,
                                activeTime,
                                handleTimeItemClick,
                                handleTimeItemKeyDown,
                                createScrollbarDragHandler,
                                setScrollbar,
                                columnRef,
                                scrollbarState,
                                scrollbarRef,
                                thumbRef,
                                timeoutRef,
                                timeItemRefs,
                            });
                        })}
                    </StyledTimePicker>
                </Root>
            );
        },
    );

export const timePickerGridConfig = {
    name: 'TimePickerGrid',
    tag: 'div',
    layout: timePickerGridRoot,
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
    },
    defaults: {
        size: 'm',
        view: 'default',
    },
};
