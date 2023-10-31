import React, { KeyboardEvent, useCallback, useLayoutEffect, useRef, useState } from 'react';

import type { DaysMetaDescription, KeyboardArrowKey, UseKeyNavigationProps } from '../Calendar.types';
import { Keys } from '../Calendar.types';
import { ROW_STEP } from '../utils';

/**
 * Метод для получения стороны двойного календаря.
 */
const getDoubleCalendarSide = (currentIndexWeek: number) => {
    if (currentIndexWeek >= 0 && currentIndexWeek < ROW_STEP) {
        return 'first';
    }

    if (currentIndexWeek >= ROW_STEP && currentIndexWeek < ROW_STEP * 2) {
        return 'second';
    }

    return '';
};

const isOutOfBound = ([rowIndex, columnIndex]: number[], rowSize: number, columnSize: number) =>
    columnIndex === -1 || columnIndex === columnSize + 1 || rowIndex === -1 || rowIndex === rowSize + 1;

const isVisible = (refs: React.MutableRefObject<HTMLDivElement[][]>, row: number, column: number) =>
    refs.current?.[row]?.[column];

const isAriaDisableItem = (item: HTMLDivElement) => item?.getAttribute('aria-disabled') === 'true';

const hasDisabledArrowKey = ({
    refs,
    payload,
    key,
}: {
    refs: React.MutableRefObject<HTMLDivElement[][]>;
    payload: number[];
    key: KeyboardArrowKey;
}) => {
    const [previousRowIndex, previousColumnIndex] = payload;

    const disabledArrowKey = refs.current?.[previousRowIndex]?.[previousColumnIndex]?.dataset.disabledArrowKey;

    return Boolean(disabledArrowKey?.includes(key));
};

const hasDisabledMonths = ({ item, key }: { item: HTMLDivElement; key: 'previous' | 'next' }) => {
    return item?.dataset?.disabledMonths ? item?.dataset?.disabledMonths.includes(key) : false;
};

const getNextCorrectPosition = ({
    refs,
    rowSize,
    newRowIndex,
    newColumnIndex,
    columnSize,
    minColumnIndex,
    defaultState = [],
}: DaysMetaDescription): number[] => {
    let item = refs.current?.[newRowIndex]?.[newColumnIndex];

    while (isAriaDisableItem(item) && newColumnIndex <= columnSize) {
        newColumnIndex++;

        if (newColumnIndex > columnSize && newRowIndex < rowSize) {
            newRowIndex++;
            newColumnIndex = minColumnIndex;
        }

        item = refs.current?.[newRowIndex]?.[newColumnIndex];

        if (item) {
            const isDisabledArrowDown = hasDisabledArrowKey({
                refs,
                payload: [newRowIndex, newColumnIndex],
                key: 'down',
            });

            const isDisabledArrowRight = hasDisabledArrowKey({
                refs,
                payload: [newRowIndex, newColumnIndex],
                key: 'right',
            });

            if (isDisabledArrowDown || isDisabledArrowRight) {
                return defaultState;
            }
        }
    }

    return [newRowIndex, newColumnIndex];
};

const getPreviousCorrectPosition = ({
    refs,
    rowSize,
    newRowIndex,
    newColumnIndex,
    columnSize,
    minColumnIndex,
    defaultState = [],
}: DaysMetaDescription): number[] => {
    let item = refs.current?.[newRowIndex]?.[newColumnIndex];

    while (isAriaDisableItem(item) && newColumnIndex >= minColumnIndex) {
        newColumnIndex--;

        if (newColumnIndex < minColumnIndex && newRowIndex <= rowSize) {
            newRowIndex--;
            newColumnIndex = columnSize;
        }

        item = refs.current?.[newRowIndex]?.[newColumnIndex];

        if (item && item.dataset.day === '1') {
            const isDisabledArrowUp = hasDisabledArrowKey({
                refs,
                payload: [newRowIndex, newColumnIndex],
                key: 'up',
            });

            const isDisabledArrowLeft = hasDisabledArrowKey({
                refs,
                payload: [newRowIndex, newColumnIndex],
                key: 'left',
            });

            if (isDisabledArrowUp || isDisabledArrowLeft) {
                return defaultState;
            }
        }
    }

    return [newRowIndex, newColumnIndex];
};

/**
 * Метод для нахождения стартового индекса дня в следующем/предыдущем месяце
 */
function getCorrectColumnIndex({
    refs,
    rowSize,
    isNext,
}: {
    refs: HTMLDivElement[][];
    rowSize: number;
    isNext: boolean;
}): number {
    if (isNext) {
        let index = refs[rowSize].filter(Boolean).length;

        if (!index) {
            index = refs[rowSize - 1].filter(Boolean).length;
        }

        return index;
    }

    // Смещение влево - начинаем поиск первого не-nullable элемента в первой строке
    return refs[0].findIndex((item) => item) - 1;
}

const getCorrectIndexes = (
    refs: React.MutableRefObject<HTMLDivElement[][]>,
    [rowIndex, columnIndex]: number[],
    rowSize: number,
    columnSize: number,
    withShift: boolean,
    defaultState: number[],
) => {
    let newRowIndex = rowIndex;
    let newColumnIndex = columnIndex;

    const minRowIndex = newRowIndex + 1;
    const maxRowIndex = newRowIndex - 1;

    const minColumnIndex = 0;
    const maxColumnIndex = columnSize;

    if (newColumnIndex === minColumnIndex - 1) {
        newColumnIndex += 1;

        while (newColumnIndex < maxColumnIndex && !isVisible(refs, newRowIndex, newColumnIndex)) {
            newColumnIndex++;
        }
    }

    if (newColumnIndex === columnSize + 1) {
        newColumnIndex -= 1;

        while (newColumnIndex > minColumnIndex && !isVisible(refs, newRowIndex, newColumnIndex)) {
            newColumnIndex--;
        }
    }

    if (newRowIndex === minColumnIndex - 1) {
        newRowIndex = ROW_STEP - 1;

        while (newRowIndex > minRowIndex && !isVisible(refs, newRowIndex, newColumnIndex)) {
            newRowIndex--;
        }
    }

    if (newRowIndex === rowSize + 1) {
        newRowIndex = rowSize + 1 - ROW_STEP;

        while (newRowIndex <= maxRowIndex && !isVisible(refs, newRowIndex, newColumnIndex)) {
            newRowIndex++;
        }
    }

    // INFO: Логика для получения правильной позиции дня, когда переключились на другой месяц
    // INFO: и ставим указатель на первый доступный день. Только при зажатой клавиши Shift.
    if (isAriaDisableItem(refs.current?.[newRowIndex]?.[newColumnIndex]) && withShift) {
        const isNext = rowIndex === rowSize + 1;
        const isPrevious = rowIndex === minColumnIndex - 1;

        const state = { refs, rowSize, newColumnIndex, minColumnIndex, columnSize, newRowIndex, defaultState };

        if (isNext) {
            return getNextCorrectPosition(state);
        }

        if (isPrevious) {
            return getPreviousCorrectPosition(state);
        }
    }

    return [newRowIndex, newColumnIndex];
};

/**
 * Хук для осуществления возможности клавиатурной навигации по матрице.
 */
export const useKeyNavigation = ({ isDouble = false, size, onPrev, onNext }: UseKeyNavigationProps) => {
    const [rowSize, columnSize] = size;
    const [selectIndexes, setSelectIndexes] = useState<number[]>([0, 0]);
    const [isOutOfMinMaxRange, setIsOutOfMinMaxRange] = useState<boolean>(false);

    const withShiftState = useRef<boolean>(false);
    const currentIndexes = useRef<number[]>([0, 0]);

    const outerRefs = useRef(
        Array(rowSize + 1)
            .fill(0)
            .map(() => Array<HTMLDivElement>(columnSize + 1)),
    );

    useLayoutEffect(() => {
        if (!isOutOfBound(selectIndexes, rowSize, columnSize)) {
            return;
        }

        if (withShiftState.current) {
            const isNext = selectIndexes[0] === rowSize + 1;

            let refs = outerRefs.current;

            const isSecond = isDouble && isNext;
            const isFirst = isDouble && !isNext;

            // Определяем какую часть сдвоенного календаря взять
            if (isFirst) {
                refs = outerRefs.current.slice(0, 5);
            } else if (isSecond) {
                refs = outerRefs.current.slice(5, 12);
            }

            const refsList = refs?.flatMap((items) => items.filter(Boolean));

            // Если в месяце нет хотя бы одной none-disabled даты значит весь месяц выключен.
            const hasSomeEnabledDay = refsList.some((item) => !isAriaDisableItem(item));

            const isDisabledNextMonth = hasDisabledMonths({ item: refsList[refsList.length - 1], key: 'next' });
            const isDisabledPreviousMonth = hasDisabledMonths({ item: refsList[0], key: 'previous' });

            // Если следующий/предыдущий месяц находится за границами мин/макс, то переходить на него
            // с текущего выключенного, нет смысла.
            if (!hasSomeEnabledDay && (isDisabledNextMonth || isDisabledPreviousMonth)) {
                const inverseHandle = isNext ? onPrev : onNext;

                inverseHandle();

                setSelectIndexes(currentIndexes.current);

                // Если индексы равны, значит мы остались на текущей дате по причине, того
                // что в следующем(-их)/предыдущем(-их) месяце нет доступных дат
                setIsOutOfMinMaxRange(true);

                return;
            }

            if (!hasSomeEnabledDay) {
                const handle = isNext ? onNext : onPrev;

                const startColumnIndex = getCorrectColumnIndex({
                    refs,
                    rowSize: isDouble ? refs.length - 1 : rowSize,
                    isNext,
                });

                handle();

                setSelectIndexes([selectIndexes[0], startColumnIndex]);

                return;
            }
        }

        const [newRowIndex, newColumnIndex] = getCorrectIndexes(
            outerRefs,
            selectIndexes,
            rowSize,
            columnSize,
            withShiftState.current,
            currentIndexes.current,
        );

        /**
         * Изменение состояния необходимо сделать здесь, т.к.
         * требуется дождаться обновление DOM и outerRefs
         */
        setSelectIndexes([newRowIndex, newColumnIndex]);
    }, [onPrev, onNext, selectIndexes, rowSize, columnSize, withShiftState, currentIndexes, isDouble]);

    useLayoutEffect(() => {
        const [rowIndex, columnIndex] = selectIndexes;

        const item = outerRefs?.current?.[rowIndex]?.[columnIndex];

        if (item) {
            item.focus();
        }
    }, [selectIndexes]);

    const onKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            setIsOutOfMinMaxRange(false);

            const { keyCode, shiftKey: withShift } = event;

            const [currentRowIndex, currentColumnIndex] = selectIndexes;

            let newRowIndex = currentRowIndex;
            let newColumnIndex = currentColumnIndex;

            const minColumnIndex = 0;
            const minRowIndex = 0;

            const prevRowIndex = currentRowIndex - 1;
            const nextRowIndex = currentRowIndex + 1;

            const prevColumnIndex = currentColumnIndex - 1;
            const nextColumnIndex = currentColumnIndex + 1;

            currentIndexes.current = [currentRowIndex, currentColumnIndex];

            const positionState = {
                refs: outerRefs,
                rowSize,
                columnSize,
                minColumnIndex,
                defaultState: [currentRowIndex, currentColumnIndex],
            };

            switch (keyCode) {
                case Keys.pageUp: {
                    const isDisabledPreviousMonth = hasDisabledMonths({
                        item: outerRefs.current[currentRowIndex][currentColumnIndex],
                        key: 'previous',
                    });

                    if (isDisabledPreviousMonth) {
                        setIsOutOfMinMaxRange(true);

                        break;
                    }

                    onPrev(withShift);

                    break;
                }
                case Keys.pageDown: {
                    const isDisabledNextMonth = hasDisabledMonths({
                        item: outerRefs.current[currentRowIndex][currentColumnIndex],
                        key: 'next',
                    });

                    if (isDisabledNextMonth) {
                        setIsOutOfMinMaxRange(true);

                        break;
                    }

                    onNext(withShift);

                    break;
                }
                case Keys.home: {
                    newColumnIndex = minColumnIndex;

                    if (isVisible(outerRefs, newRowIndex, newColumnIndex)) {
                        break;
                    }

                    newColumnIndex = minColumnIndex - 1;

                    break;
                }
                case Keys.end: {
                    newColumnIndex = columnSize;

                    if (isVisible(outerRefs, newRowIndex, newColumnIndex)) {
                        break;
                    }

                    newColumnIndex = columnSize + 1;

                    break;
                }

                case Keys.left: {
                    newRowIndex = prevColumnIndex < minColumnIndex ? prevRowIndex : currentRowIndex;
                    newColumnIndex = prevColumnIndex < minColumnIndex ? columnSize : prevColumnIndex;

                    withShiftState.current = withShift;

                    const isCurrentDateDisabledArrowLeft = hasDisabledArrowKey({
                        refs: outerRefs,
                        payload: [currentRowIndex, currentColumnIndex],
                        key: 'left',
                    });

                    setIsOutOfMinMaxRange(isCurrentDateDisabledArrowLeft);

                    if (isCurrentDateDisabledArrowLeft) {
                        newRowIndex = currentRowIndex;
                        newColumnIndex = currentColumnIndex;

                        break;
                    }

                    // INFO: Для навигации только по доступным дням
                    if (withShift) {
                        const [rowIndex, columnIndex] = getPreviousCorrectPosition({
                            ...positionState,
                            newRowIndex,
                            newColumnIndex,
                        });

                        // Если индексы равны, значит мы остались на текущей дате по причине, того
                        // что в следующем(-их)/предыдущем(-их) месяце нет доступных дат
                        setIsOutOfMinMaxRange(rowIndex === currentRowIndex && currentColumnIndex === columnIndex);

                        newRowIndex = rowIndex;
                        newColumnIndex = columnIndex;
                    }

                    if (isVisible(outerRefs, newRowIndex, newColumnIndex)) {
                        break;
                    }

                    if (!isDouble || getDoubleCalendarSide(currentRowIndex) === 'first') {
                        if (isCurrentDateDisabledArrowLeft) {
                            newRowIndex = currentRowIndex;
                            newColumnIndex = currentColumnIndex;

                            break;
                        }

                        onPrev();
                    }

                    newRowIndex = minRowIndex - 1;

                    break;
                }
                case Keys.up: {
                    newRowIndex = prevRowIndex < minRowIndex ? rowSize : prevRowIndex;

                    withShiftState.current = withShift;

                    const isCurrentDateDisabledArrowUp = hasDisabledArrowKey({
                        refs: outerRefs,
                        payload: [currentRowIndex, currentColumnIndex],
                        key: 'up',
                    });

                    setIsOutOfMinMaxRange(isCurrentDateDisabledArrowUp);

                    if (isCurrentDateDisabledArrowUp) {
                        newRowIndex = currentRowIndex;
                        newColumnIndex = currentColumnIndex;

                        break;
                    }

                    if (withShift) {
                        const item = outerRefs.current[newRowIndex][newColumnIndex];

                        const isNextDateDisabledArrowUp =
                            !!item &&
                            hasDisabledArrowKey({
                                refs: outerRefs,
                                payload: [newRowIndex, newColumnIndex],
                                key: 'up',
                            });

                        const [rowIndex, columnIndex] = getPreviousCorrectPosition({
                            ...positionState,
                            newRowIndex,
                            newColumnIndex,
                        });

                        // Если индексы равны, значит мы остались на текущей дате по причине, того
                        // что в следующем(-их)/предыдущем(-их) месяце нет доступных дат
                        const haseCurrentPosition = rowIndex === currentRowIndex && currentColumnIndex === columnIndex;

                        setIsOutOfMinMaxRange(isNextDateDisabledArrowUp || haseCurrentPosition);

                        newRowIndex = rowIndex;
                        newColumnIndex = columnIndex;
                    }

                    if (isVisible(outerRefs, newRowIndex, newColumnIndex)) {
                        break;
                    }

                    if (!isDouble || getDoubleCalendarSide(currentRowIndex) === 'first') {
                        if (isCurrentDateDisabledArrowUp) {
                            newRowIndex = currentRowIndex;
                            newColumnIndex = currentColumnIndex;

                            break;
                        }

                        onPrev();
                    }

                    newRowIndex = minRowIndex - 1;

                    break;
                }

                case Keys.right: {
                    newRowIndex = nextColumnIndex > columnSize ? nextRowIndex : currentRowIndex;
                    newColumnIndex = nextColumnIndex > columnSize ? minColumnIndex : nextColumnIndex;

                    withShiftState.current = withShift;

                    const isCurrentDateDisabledArrowRight = hasDisabledArrowKey({
                        refs: outerRefs,
                        payload: [currentRowIndex, currentColumnIndex],
                        key: 'right',
                    });

                    setIsOutOfMinMaxRange(isCurrentDateDisabledArrowRight);

                    if (isCurrentDateDisabledArrowRight) {
                        newRowIndex = currentRowIndex;
                        newColumnIndex = currentColumnIndex;

                        break;
                    }

                    if (withShift) {
                        const [rowIndex, columnIndex] = getNextCorrectPosition({
                            ...positionState,
                            newRowIndex,
                            newColumnIndex,
                        });

                        // Если индексы равны, значит мы остались на текущей дате по причине, того
                        // что в следующем(-их)/предыдущем(-их) месяце нет доступных дат
                        setIsOutOfMinMaxRange(rowIndex === currentRowIndex && currentColumnIndex === columnIndex);

                        newRowIndex = rowIndex;
                        newColumnIndex = columnIndex;
                    }

                    if (isVisible(outerRefs, newRowIndex, newColumnIndex)) {
                        break;
                    }

                    if (!isDouble || getDoubleCalendarSide(currentRowIndex) === 'second') {
                        if (isCurrentDateDisabledArrowRight) {
                            newRowIndex = currentRowIndex;
                            newColumnIndex = currentColumnIndex;

                            break;
                        }

                        onNext();
                    }

                    newRowIndex = rowSize + 1;

                    break;
                }
                case Keys.down: {
                    newRowIndex = nextRowIndex > rowSize ? minRowIndex : nextRowIndex;

                    withShiftState.current = withShift;

                    const isCurrentDateDisabledArrowDown = hasDisabledArrowKey({
                        refs: outerRefs,
                        payload: [currentRowIndex, currentColumnIndex],
                        key: 'down',
                    });

                    setIsOutOfMinMaxRange(isCurrentDateDisabledArrowDown);

                    if (isCurrentDateDisabledArrowDown) {
                        newRowIndex = currentRowIndex;
                        newColumnIndex = currentColumnIndex;

                        break;
                    }

                    if (withShift) {
                        const item = outerRefs.current[newRowIndex][newColumnIndex];

                        const isNextDateDisabledArrowUp =
                            !!item &&
                            hasDisabledArrowKey({
                                refs: outerRefs,
                                payload: [newRowIndex, newColumnIndex],
                                key: 'down',
                            });

                        const [rowIndex, columnIndex] = getNextCorrectPosition({
                            ...positionState,
                            newRowIndex,
                            newColumnIndex,
                        });

                        // Если индексы равны, значит мы остались на текущей дате по причине, того
                        // что в следующем(-их)/предыдущем(-их) месяце нет доступных дат
                        const haseCurrentPosition = rowIndex === currentRowIndex && currentColumnIndex === columnIndex;

                        setIsOutOfMinMaxRange(isNextDateDisabledArrowUp || haseCurrentPosition);

                        newRowIndex = rowIndex;
                        newColumnIndex = columnIndex;
                    }

                    if (isVisible(outerRefs, newRowIndex, newColumnIndex)) {
                        break;
                    }

                    if (!isDouble || getDoubleCalendarSide(currentRowIndex) === 'second') {
                        if (isCurrentDateDisabledArrowDown) {
                            newRowIndex = currentRowIndex;
                            newColumnIndex = currentColumnIndex;

                            break;
                        }

                        onNext();
                    }

                    newRowIndex = rowSize + 1;

                    break;
                }
                case Keys.enter:
                case Keys.space: {
                    outerRefs.current?.[newRowIndex]?.[newColumnIndex].click();
                    break;
                }

                default:
                    return;
            }

            setSelectIndexes([newRowIndex, newColumnIndex]);
        },
        [selectIndexes, outerRefs, rowSize, columnSize, onNext, onPrev, isDouble],
    );

    return [selectIndexes, onKeyDown, setSelectIndexes, outerRefs, isOutOfMinMaxRange] as const;
};
