import React, { forwardRef, useRef, useState, useEffect, useCallback, useMemo, KeyboardEvent } from 'react';
import type { RootProps } from 'src/engines';

import {
    animateScrollTo,
    getColumnsFromFormat,
    parseTimeString,
    buildTimeString,
    isTimeDisabled,
    roundToMultiplicity,
    parseTimeBoundary,
    toTotalSeconds,
    clampTimeToMin,
    clampTimeToMax,
    to12Hour,
    to24Hour,
    hours12Range,
    meridiemValues,
    range,
    isValueInDisabledList,
} from './utils';
import type { Meridiem } from './utils';
import { TimePickerGridChangeEvent, TimePickerGridProps } from './TimePickerGrid.types';
import { base, StyledTimePicker } from './TimePickerGrid.styles';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { renderTimeColumn } from './ui/TimeColumn/TimeColumn';
import { TimeColumnType, TimeItemKeyDownHandler } from './ui/TimeColumn/TimeColumn.types';

// changes to start tests

interface ActiveTime {
    hours: number | null;
    minutes: number | null;
    seconds: number | null;
    meridiem: Meridiem | null;
}

type CurrentColumn = TimeColumnType | null;
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
                use12Hours = false,
                disabledValues,
                multiplicityMinutes,
                multiplicitySeconds,
                onChange,
                ...rest
            },
            ref,
        ) => {
            const actualFormat = format || (columnsQuantity === 3 ? 'HH:mm:ss' : 'HH:mm');
            const columnsConfig = useMemo(
                () => getColumnsFromFormat(actualFormat, multiplicityMinutes, multiplicitySeconds, use12Hours),
                [actualFormat, multiplicityMinutes, multiplicitySeconds, use12Hours],
            );

            const hoursColumnRef = useRef<HTMLDivElement>(null);
            const minutesColumnRef = useRef<HTMLDivElement>(null);
            const secondsColumnRef = useRef<HTMLDivElement>(null);
            const meridiemColumnRef = useRef<HTMLDivElement>(null);
            const timeItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

            const itemHeight = Object.values(timeItemRefs.current)[0]?.offsetHeight || 0;

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

            const getActiveTime = () => {
                if (viewValue && columnsConfig.length > 0) {
                    const timeValues = parseTimeString(viewValue, actualFormat);
                    return {
                        hours: timeValues.hh,
                        minutes:
                            timeValues.mm !== null ? roundToMultiplicity(timeValues.mm, multiplicityMinutes) : null,
                        seconds:
                            timeValues.ss !== null ? roundToMultiplicity(timeValues.ss, multiplicitySeconds) : null,
                        meridiem: timeValues.hh !== null ? to12Hour(timeValues.hh).meridiem : null,
                    };
                }

                return {
                    hours: null,
                    minutes: null,
                    seconds: null,
                    meridiem: null,
                };
            };

            const activeTime: ActiveTime = getActiveTime();

            const displayTime: ActiveTime =
                use12Hours && activeTime.hours !== null
                    ? { ...activeTime, hours: to12Hour(activeTime.hours).hour12 }
                    : activeTime;

            const [currentColumn, setCurrentColumn] = useState<CurrentColumn>(null);

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
                            let isItemDisabled = false;

                            // last valid multiple for boundary checks (e.g. step=10 → 50, not 59)
                            const ssStep = multiplicitySeconds ?? 1;
                            const mmStep = multiplicityMinutes ?? 1;
                            const lastValidSS = Math.floor(59 / ssStep) * ssStep;
                            const lastValidMM = Math.floor(59 / mmStep) * mmStep;

                            if (columnType === 'hours') {
                                // hour i is disabled only if no selectable (i:mm:ss) exists in [min, max]
                                const latestInHour = getCompleteTimeValues(
                                    { hh: i, mm: lastValidMM, ss: lastValidSS },
                                    actualFormat,
                                );
                                const earliestInHour = getCompleteTimeValues({ hh: i, mm: 0, ss: 0 }, actualFormat);
                                if (isTimeDisabled(latestInHour, min, undefined, format)) {
                                    isItemDisabled = true;
                                } else if (isTimeDisabled(earliestInHour, undefined, max, format)) {
                                    isItemDisabled = true;
                                }
                            } else if (columnType === 'minutes') {
                                // minute i is disabled only if no selectable (hh:i:ss) exists in [min, max]
                                const currentHH = timeValues.hh ?? 0;
                                const latestInMinute = getCompleteTimeValues(
                                    { hh: currentHH, mm: i, ss: lastValidSS },
                                    actualFormat,
                                );
                                const earliestInMinute = getCompleteTimeValues(
                                    { hh: currentHH, mm: i, ss: 0 },
                                    actualFormat,
                                );
                                if (isTimeDisabled(latestInMinute, min, undefined, format)) {
                                    isItemDisabled = true;
                                } else if (isTimeDisabled(earliestInMinute, undefined, max, format)) {
                                    isItemDisabled = true;
                                }
                            } else {
                                // seconds: exact check against current hh:mm
                                const testValues = { ...timeValues, ss: i };
                                const completeTimeValues = getCompleteTimeValues(testValues, actualFormat);
                                isItemDisabled = isTimeDisabled(completeTimeValues, min, max, format);
                            }

                            if (isItemDisabled) {
                                disabledFromMinMax.push(i);
                            }
                        }
                    }

                    const normalizedDisabledFromProps = disabledFromProps.map((val) =>
                        typeof val === 'string' ? parseInt(val, 10) : val,
                    );

                    return [...new Set([...normalizedDisabledFromProps, ...disabledFromMinMax])];
                },
                [disabledValues, min, max, viewValue, actualFormat, multiplicityMinutes, multiplicitySeconds],
            );

            const getCompleteTimeValues = useCallback((timeValues: any, fmt: string) => {
                const completeValues = { hh: 0, mm: 0, ss: 0 };

                if (fmt.includes('HH')) {
                    completeValues.hh = timeValues.hh !== null ? timeValues.hh : 0;
                }
                if (fmt.includes('mm')) {
                    completeValues.mm = timeValues.mm !== null ? timeValues.mm : 0;
                }
                if (fmt.includes('ss')) {
                    completeValues.ss = timeValues.ss !== null ? timeValues.ss : 0;
                }

                return completeValues;
            }, []);

            const getDisabledValuesForDisplayColumn = useCallback(
                (columnType: TimeColumnType): (string | number)[] => {
                    if (columnType === 'meridiem') {
                        const disabledHours = getDisabledValuesForColumn('hours');
                        const isHalfDayDisabled = (offset: number) =>
                            Array.from({ length: 12 }, (_, i) => i + offset).every((hour) =>
                                disabledHours.includes(hour),
                            );

                        return [...(isHalfDayDisabled(0) ? ['AM'] : []), ...(isHalfDayDisabled(12) ? ['PM'] : [])];
                    }

                    if (columnType === 'hours' && use12Hours) {
                        const disabledHours = getDisabledValuesForColumn('hours');
                        const meridiem = activeTime.meridiem ?? 'AM';

                        return hours12Range
                            .map((value) => parseInt(value, 10))
                            .filter((hour12) => disabledHours.includes(to24Hour(hour12, meridiem)));
                    }

                    return getDisabledValuesForColumn(columnType);
                },
                [getDisabledValuesForColumn, use12Hours, activeTime.meridiem],
            );

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
                        isValueInDisabledList(values[newIndex], disabledValuesForColumn) &&
                        newIndex !== currentIndex
                    );

                    return iterations < maxIterations &&
                        !isValueInDisabledList(values[newIndex], disabledValuesForColumn)
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

            const handleContainerFocus = useCallback(() => {
                if (currentColumn === null && columnsConfig.length > 0) {
                    const firstColumn = columnsConfig[0].type;
                    setCurrentColumn((prev) => (prev !== currentColumn ? firstColumn : currentColumn));
                }
            }, [currentColumn, columnsConfig]);

            /**
             * Возвращает первое не отключённое значение из колонки с учётом кратности.
             * Итерируем по фактическим значениям колонки (columnsConfig), а не по 0..23/59.
             */
            const getFirstAvailableValue = useCallback(
                (columnType: 'hours' | 'minutes' | 'seconds'): number => {
                    const disabledForColumn = getDisabledValuesForColumn(columnType);

                    const columnValues =
                        columnType === 'hours' && use12Hours
                            ? range(24)
                            : columnsConfig.find((c) => c.type === columnType)?.values ?? [];

                    for (const val of columnValues) {
                        const num = parseInt(val, 10);
                        if (!disabledForColumn.includes(num)) {
                            return num;
                        }
                    }

                    return 0;
                },
                [getDisabledValuesForColumn, columnsConfig, use12Hours],
            );

            const handleTimeItemClick = (value: string, column: TimeColumnType) => {
                /**
                 * Применяем выбранное значение к соответствующей колонке
                 */
                const newTimeValues = { ...parseTimeString(viewValue, actualFormat) };
                const currentMeridiem: Meridiem = activeTime.meridiem ?? 'AM';

                switch (column) {
                    case 'hours':
                        newTimeValues.hh = use12Hours
                            ? to24Hour(parseInt(value, 10), currentMeridiem)
                            : parseInt(value, 10);
                        break;
                    case 'minutes':
                        newTimeValues.mm = parseInt(value, 10);
                        break;
                    case 'seconds':
                        newTimeValues.ss = parseInt(value, 10);
                        break;
                    case 'meridiem': {
                        /**
                         * Смена AM/PM сохраняет выбранный час и сдвигает его на половину суток.
                         * Если час ещё не выбран — берём первый доступный.
                         */
                        const baseHours = newTimeValues.hh ?? getFirstAvailableValue('hours');
                        newTimeValues.hh = to24Hour(to12Hour(baseHours).hour12, value as Meridiem);
                        break;
                    }
                    default:
                }

                /**
                 * Незаполненные колонки получают первое доступное значение с учётом кратности
                 */
                if (newTimeValues.hh === null && actualFormat.includes('HH')) {
                    newTimeValues.hh = getFirstAvailableValue('hours');
                }
                if (newTimeValues.mm === null && actualFormat.includes('mm')) {
                    newTimeValues.mm = getFirstAvailableValue('minutes');
                }
                if (newTimeValues.ss === null && actualFormat.includes('ss')) {
                    newTimeValues.ss = getFirstAvailableValue('seconds');
                }

                /**
                 * Автокоррекция зависимых колонок при выходе за границы min/max.
                 * Секунды не требуют коррекции — пользователь выбрал точное значение.
                 */
                if ((min || max) && column !== 'seconds') {
                    const minParsed = parseTimeBoundary(min, format || 'HH:mm:ss');
                    const maxParsed = parseTimeBoundary(max, format || 'HH:mm:ss');
                    const total = toTotalSeconds(newTimeValues);
                    /**
                     * Выбор AM/PM меняет час, поэтому клампится так же, как выбор часа.
                     */
                    const clampColumn = column === 'minutes' ? 'minutes' : 'hours';

                    if (minParsed && total < toTotalSeconds(minParsed)) {
                        Object.assign(
                            newTimeValues,
                            clampTimeToMin(
                                newTimeValues,
                                minParsed,
                                clampColumn,
                                actualFormat,
                                multiplicityMinutes ?? 1,
                                multiplicitySeconds ?? 1,
                            ),
                        );
                    } else if (maxParsed && total > toTotalSeconds(maxParsed)) {
                        Object.assign(
                            newTimeValues,
                            clampTimeToMax(
                                newTimeValues,
                                maxParsed,
                                clampColumn,
                                actualFormat,
                                multiplicityMinutes ?? 1,
                                multiplicitySeconds ?? 1,
                            ),
                        );
                    }
                }

                /**
                 * Если время всё равно вне диапазона — отклоняем клик
                 */
                if (isTimeDisabled(getCompleteTimeValues(newTimeValues, actualFormat), min, max)) {
                    return;
                }

                /**
                 * Фиксируем новое время
                 */
                const newTimeString = buildTimeString(newTimeValues, actualFormat);
                setInnerTime(newTimeString);

                onChange?.({
                    value: newTimeString,
                    timeValues: {
                        hour: newTimeValues.hh || undefined,
                        minute: newTimeValues.mm || undefined,
                        second: newTimeValues.ss || undefined,
                    },
                } as TimePickerGridChangeEvent);
            };

            const getActiveRefValue = (columnType: TimeColumnType): string => {
                if (columnType === 'meridiem') {
                    return displayTime.meridiem ?? 'AM';
                }

                return (displayTime[columnType] ?? 0).toString().padStart(2, '0');
            };

            const focusTimeItem = (columnType: TimeColumnType, value: string) => {
                const element = timeItemRefs.current[`${columnType}-${value}`];

                setTimeout(() => {
                    if (element) {
                        element.focus();
                    }
                }, 0);
            };

            const getNavigationValues = (columnType: TimeColumnType): string[] => {
                if (columnType === 'meridiem') {
                    return meridiemValues;
                }

                if (columnType === 'hours') {
                    return use12Hours ? hours12Range : range(24);
                }

                return range(60);
            };

            const handleTimeItemKeyDown: TimeItemKeyDownHandler = (
                event: KeyboardEvent<HTMLDivElement>,
                column: TimeColumnType,
                value: string,
            ) => {
                const disabledValuesForColumn = getDisabledValuesForDisplayColumn(column);
                const columnValues = getNavigationValues(column);
                const currentIndex = Math.max(columnValues.indexOf(value), 0);
                const columnIndex = columnsConfig.findIndex((columnConfig) => columnConfig.type === column);

                const focusIndex = (index: number) => {
                    const nextValue = columnValues[index];

                    if (nextValue !== undefined) {
                        focusTimeItem(column, nextValue);
                    }
                };

                const focusSiblingColumn = (offset: number) => {
                    const nextColumn = columnsConfig[columnIndex + offset]?.type;

                    if (!nextColumn || nextColumn === column) {
                        return;
                    }

                    setCurrentColumn(nextColumn);
                    focusTimeItem(nextColumn, getActiveRefValue(nextColumn));
                };

                switch (event.key) {
                    case 'ArrowUp':
                        event.preventDefault();
                        focusIndex(getNextAvailableValue(currentIndex, columnValues, disabledValuesForColumn, 'up'));
                        break;
                    case 'ArrowDown':
                        event.preventDefault();
                        focusIndex(getNextAvailableValue(currentIndex, columnValues, disabledValuesForColumn, 'down'));
                        break;
                    case 'ArrowRight':
                        event.preventDefault();
                        focusSiblingColumn(1);
                        break;
                    case 'ArrowLeft':
                        event.preventDefault();
                        focusSiblingColumn(-1);
                        break;
                    case 'Enter':
                    case ' ':
                        event.preventDefault();
                        handleTimeItemClick(value, column);
                        break;
                    case 'Home': {
                        event.preventDefault();
                        const firstIndex = columnValues.findIndex(
                            (item) => !isValueInDisabledList(item, disabledValuesForColumn),
                        );

                        if (firstIndex !== -1) {
                            focusIndex(firstIndex);
                        }
                        break;
                    }
                    case 'End': {
                        event.preventDefault();
                        for (let index = columnValues.length - 1; index >= 0; index--) {
                            if (!isValueInDisabledList(columnValues[index], disabledValuesForColumn)) {
                                focusIndex(index);
                                break;
                            }
                        }
                        break;
                    }
                    default:
                        break;
                }
            };

            useEffect(() => {
                if (!currentColumn) {
                    return;
                }

                const activeValue = currentColumn === 'meridiem' ? displayTime.meridiem : displayTime[currentColumn];

                if (activeValue !== null && activeValue !== undefined) {
                    focusTimeItem(currentColumn, getActiveRefValue(currentColumn));
                }
            }, [currentColumn]);

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
                if (hoursColumnRef.current) {
                    const computedStyle = getComputedStyle(hoursColumnRef.current);
                    const gapValue = parseFloat(computedStyle.gap || '0');
                    setGap(gapValue);
                }
            }, [hoursColumnRef.current]);

            useEffect(() => {
                setTimeout(() => {
                    updateScrollbar(hoursColumnRef, setHoursScrollbar);
                    updateScrollbar(minutesColumnRef, setMinutesScrollbar);
                    if (columnsQuantity === 3) {
                        updateScrollbar(secondsColumnRef, setSecondsScrollbar);
                    }
                }, 100);
            }, [columnsQuantity]);

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

                const minutesIndex =
                    activeTime.minutes !== null ? activeTime.minutes / (multiplicityMinutes ?? 1) : null;
                const secondsIndex =
                    activeTime.seconds !== null ? activeTime.seconds / (multiplicitySeconds ?? 1) : null;

                const getHoursIndex = () => {
                    if (activeTime.hours === null) {
                        return null;
                    }

                    return use12Hours ? to12Hour(activeTime.hours).hour12 : activeTime.hours;
                };

                scrollToActiveItem(hoursColumnRef, getHoursIndex());
                scrollToActiveItem(minutesColumnRef, minutesIndex);
                scrollToActiveItem(secondsColumnRef, secondsIndex);
            }, [
                activeTime.hours,
                activeTime.minutes,
                activeTime.seconds,
                itemHeight,
                gap,
                multiplicityMinutes,
                multiplicitySeconds,
                use12Hours,
            ]);

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

            return (
                <Root ref={ref} view={view} size={size} disabled={disabled} onFocus={handleContainerFocus} {...rest}>
                    <StyledTimePicker
                        width={dropdownWidth}
                        columns={use12Hours ? columnsConfig.length : undefined}
                        tabIndex={-1}
                    >
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
                                case 'meridiem':
                                    columnRef = meridiemColumnRef;
                                    break;
                                default:
                                    return null;
                            }

                            return renderTimeColumn({
                                values,
                                disabledValues: getDisabledValuesForDisplayColumn(type),
                                dropdownHeight,
                                column: type,
                                activeTime: displayTime,
                                currentColumn,
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
