import React, {
    useCallback,
    useMemo,
    useReducer,
    useState,
    KeyboardEvent,
    HTMLAttributes,
    forwardRef,
    useEffect,
    useRef,
    ReactNode,
    MutableRefObject,
} from 'react';
import cls from 'classnames';
import { useForkRef } from '@salutejs/plasma-core';

import type { Calendar, CalendarConfigProps, DateObject } from '../Calendar.types';
import { getInitialState, reducer, sizeMap } from '../store/reducer';
import { ActionType, CalendarState } from '../store/types';
import { I18N, isValueUpdate } from '../utils';
import { useKeyNavigation, useCalendarNavigation, useCalendarDateChange } from '../hooks';
import { CalendarDays, CalendarHeader, CalendarMonths, CalendarQuarters, CalendarYears, EventTooltip } from '../ui';
import { RootProps } from '../../../engines';
import { classes } from '../Calendar.tokens';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as eventTooltipSizeCSS } from './variations/_tooltip-size/base';
import { IsOutOfRange, StyledCalendar } from './CalendarBase.styles';

export type CalendarBaseProps = Calendar & CalendarConfigProps;

/**
 * Компонент календаря.
 */
export const calendarBaseRoot = (
    Root: RootProps<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { eventTooltipSize?: string }>,
) =>
    forwardRef<HTMLDivElement, CalendarBaseProps>(
        (
            {
                className,
                value: externalValue,
                min: minDate,
                max: maxDate,
                renderFromDate,
                includeEdgeDates,
                type = 'Days',
                eventTooltipOptions,
                eventList,
                disabledList,
                eventMonthList,
                disabledMonthList,
                eventQuarterList,
                disabledQuarterList,
                eventYearList,
                disabledYearList,
                locale = 'ru',
                stretched,
                onChangeValue,
                ...rest
            },
            outerRootRef,
        ) => {
            const [firstValue, secondValue] = useMemo(
                () => (Array.isArray(externalValue) ? externalValue : [externalValue]),
                [externalValue],
            );
            const value = secondValue || firstValue;

            const [hoveredItem, setHoveredItem] = useState<DateObject | undefined>();
            const [prevType, setPrevType] = useState(type);
            const [prevValue, setPrevValue] = useState(value);
            const [outOfRangeKey, setOutOfRangeKey] = useState<number>(0);

            const [eventNodes, setEventNodes] = useState<ReactNode[]>([]);
            const eventTooltipTargetRef = useRef<HTMLDivElement | null>(null);
            const rootRef = useRef<HTMLDivElement | null>(null);
            const innerRootRef = useForkRef(rootRef, outerRootRef);

            const min = minDate && new Date(minDate);
            const max = maxDate && new Date(maxDate);
            const renderFrom = renderFromDate && new Date(renderFromDate);

            const [state, dispatch] = useReducer(reducer, getInitialState(value, min, renderFrom, type));

            const { date, calendarState, startYear, size } = state;

            const { handleNext, handlePrev } = useCalendarNavigation({
                calendarState,
                date,
                dispatch,
            });

            const [selectIndexes, onKeyDown, onSelectIndexes, outerRefs, isOutOfRange] = useKeyNavigation({
                size,
                calendarState,
                onNext: handleNext,
                onPrev: handlePrev,
            });

            const {
                handleOnChangeDay,
                handleOnChangeMonth,
                handleOnChangeQuarter,
                handleOnChangeYear,
                handleUpdateCalendarState,
            } = useCalendarDateChange({ type, onChangeValue, onSelectIndexes, dispatch });

            // Изменяем ключ каждый раз как пытаемся перейти на даты которые находятся за пределами min/max ограничений.
            // Это необходимо для того чтобы screen-reader корректно озвучивал уведомление aria-live="assertive"
            // о том что нет доступных дат
            const handleKeyDown = useCallback(
                (event: KeyboardEvent<HTMLDivElement>) => {
                    setOutOfRangeKey((previousState) => Number(!previousState));

                    onKeyDown(event);
                },
                [onKeyDown],
            );

            const handleTriggerEventTooltip = (
                structureRef?: MutableRefObject<HTMLDivElement | null>,
                events?: ReactNode[],
            ) => {
                if (structureRef?.current && events?.length) {
                    eventTooltipTargetRef.current = structureRef.current;

                    setEventNodes(events);
                } else if (eventTooltipTargetRef.current !== null) {
                    eventTooltipTargetRef.current = null;

                    setEventNodes([]);
                }
            };

            const tooltipContent = () => {
                const TooltipBodyWrapper = eventTooltipOptions?.bodyWrapper;
                if (!TooltipBodyWrapper) {
                    return eventNodes;
                }

                return <TooltipBodyWrapper>{eventNodes}</TooltipBodyWrapper>;
            };

            useEffect(() => {
                if (prevType !== calendarState) {
                    dispatch({
                        type: ActionType.UPDATE_CALENDAR_STATE,
                        payload: { calendarState, size: sizeMap[calendarState].single },
                    });

                    setPrevType(calendarState);
                }
            }, [calendarState]);

            useEffect(() => {
                if (prevType !== type) {
                    dispatch({
                        type: ActionType.UPDATE_CALENDAR_STATE,
                        payload: { calendarState: type, size: sizeMap[type].single },
                    });

                    setPrevType(type);
                }
            }, [type]);

            useEffect(() => {
                if ((value && prevValue && isValueUpdate(value, prevValue)) || (value && !prevValue)) {
                    dispatch({
                        type: ActionType.UPDATE_DATE,
                        payload: { value },
                    });
                }

                if (!value && !prevValue) {
                    dispatch({
                        type: ActionType.UPDATE_DATE,
                        payload: { value: renderFrom || min || new Date() },
                    });
                }

                setPrevValue(value);
            }, [value]);

            return (
                <Root
                    ref={innerRootRef}
                    className={cls(className, { [classes.stretched]: stretched })}
                    aria-label={I18N.selectDate[locale]}
                    eventTooltipSize={eventTooltipOptions?.size}
                    {...rest}
                >
                    {isOutOfRange && (
                        <IsOutOfRange
                            key={outOfRangeKey}
                            aria-atomic="true"
                            role="alert"
                            aria-live="assertive"
                            aria-relevant="additions"
                        >
                            Далее нет доступных дат.
                        </IsOutOfRange>
                    )}
                    <CalendarHeader
                        size={rest.size}
                        firstDate={date}
                        startYear={startYear}
                        type={calendarState}
                        onPrev={handlePrev}
                        onNext={handleNext}
                        onUpdateCalendarState={handleUpdateCalendarState}
                        locale={locale}
                    />
                    {calendarState === CalendarState.Days && (
                        <CalendarDays
                            value={externalValue}
                            date={date}
                            min={min}
                            max={max}
                            eventList={eventList}
                            disabledList={disabledList}
                            includeEdgeDates={includeEdgeDates}
                            hoveredDay={hoveredItem}
                            selectIndexes={selectIndexes}
                            onChangeDay={handleOnChangeDay}
                            onSetSelected={onSelectIndexes}
                            onHoverDay={setHoveredItem}
                            onTriggerEventTooltip={handleTriggerEventTooltip}
                            onKeyDown={handleKeyDown}
                            outerRefs={outerRefs}
                            locale={locale}
                        />
                    )}
                    {calendarState === CalendarState.Months && (
                        <CalendarMonths
                            value={externalValue}
                            date={date}
                            min={min}
                            max={max}
                            eventList={eventMonthList}
                            disabledList={disabledMonthList}
                            hoveredMonth={hoveredItem}
                            selectIndexes={selectIndexes}
                            onChangeMonth={handleOnChangeMonth}
                            onSetSelected={onSelectIndexes}
                            onHoverMonth={setHoveredItem}
                            onTriggerEventTooltip={handleTriggerEventTooltip}
                            onKeyDown={onKeyDown}
                            outerRefs={outerRefs}
                            locale={locale}
                        />
                    )}
                    {calendarState === CalendarState.Quarters && (
                        <CalendarQuarters
                            value={externalValue}
                            date={date}
                            min={min}
                            max={max}
                            eventList={eventQuarterList}
                            disabledList={disabledQuarterList}
                            hoveredQuarter={hoveredItem}
                            selectIndexes={selectIndexes}
                            onChangeQuarter={handleOnChangeQuarter}
                            onSetSelected={onSelectIndexes}
                            onHoverQuarter={setHoveredItem}
                            onTriggerEventTooltip={handleTriggerEventTooltip}
                            onKeyDown={onKeyDown}
                            outerRefs={outerRefs}
                        />
                    )}
                    {calendarState === CalendarState.Years && (
                        <CalendarYears
                            value={externalValue}
                            date={date}
                            startYear={startYear}
                            selectIndexes={selectIndexes}
                            min={min}
                            max={max}
                            eventList={eventYearList}
                            disabledList={disabledYearList}
                            hoveredYear={hoveredItem}
                            onChangeYear={handleOnChangeYear}
                            onSetSelected={onSelectIndexes}
                            onHoverYear={setHoveredItem}
                            onTriggerEventTooltip={handleTriggerEventTooltip}
                            onKeyDown={onKeyDown}
                            outerRefs={outerRefs}
                        />
                    )}

                    {eventTooltipTargetRef.current && eventNodes?.length && (
                        <EventTooltip
                            opened={Boolean(eventNodes?.length)}
                            target={eventTooltipTargetRef}
                            frame={rootRef}
                            isFocusTrapped={false}
                            text={tooltipContent()}
                            trigger="hover"
                            {...eventTooltipOptions}
                        />
                    )}
                </Root>
            );
        },
    );

export const calendarBaseConfig = {
    name: 'CalendarBase',
    tag: 'div',
    layout: calendarBaseRoot,
    base: StyledCalendar,
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
    },
    defaults: {
        view: 'primary',
        size: 'm',
        eventTooltipSizeCSS: 'm',
    },
};
