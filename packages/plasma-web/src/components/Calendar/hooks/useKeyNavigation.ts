import React, { useCallback, useLayoutEffect, useRef, useState, KeyboardEvent } from 'react';

import { Keys, UseKeyNavigationProps } from '../types';
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

const getCorrectIndexes = (
    refs: React.MutableRefObject<HTMLDivElement[][]>,
    [rowIndex, columnIndex]: number[],
    rowSize: number,
    columnSize: number,
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

    return [newRowIndex, newColumnIndex];
};

/**
 * Хук для осуществления возможности клавиатурной навигации по матрице.
 */
export const useKeyNavigation = ({ isDouble = false, size, onPrev, onNext }: UseKeyNavigationProps) => {
    const [rowSize, columnSize] = size;
    const [selectIndexes, setSelectIndexes] = useState<number[]>([0, 0]);

    const outerRefs = useRef(
        Array(rowSize + 1)
            .fill(0)
            .map(() => Array<HTMLDivElement>(columnSize + 1)),
    );

    useLayoutEffect(() => {
        if (!isOutOfBound(selectIndexes, rowSize, columnSize)) {
            return;
        }

        const [newRowIndex, newColumnIndex] = getCorrectIndexes(outerRefs, selectIndexes, rowSize, columnSize);

        /**
         * Изменение стейта необходимо сделать здесь, т.к.
         * требуется дождаться обновление DOM и outerRefs
         */
        setSelectIndexes([newRowIndex, newColumnIndex]);
    }, [selectIndexes, rowSize, columnSize]);

    useLayoutEffect(() => {
        const [rowIndex, columnIndex] = selectIndexes;

        const item = outerRefs?.current?.[rowIndex]?.[columnIndex];
        if (item) {
            item.focus();
        }
    }, [selectIndexes]);

    const onKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
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

            switch (keyCode) {
                case Keys.pageUp:
                    onPrev(withShift);
                    break;
                case Keys.pageDown: {
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

                    if (isVisible(outerRefs, newRowIndex, newColumnIndex)) {
                        break;
                    }

                    if (!isDouble || getDoubleCalendarSide(currentRowIndex) === 'first') {
                        onPrev();
                    }

                    newRowIndex = minRowIndex - 1;

                    break;
                }

                case Keys.right: {
                    newRowIndex = nextColumnIndex > columnSize ? nextRowIndex : currentRowIndex;
                    newColumnIndex = nextColumnIndex > columnSize ? minColumnIndex : nextColumnIndex;

                    if (isVisible(outerRefs, newRowIndex, newColumnIndex)) {
                        break;
                    }

                    if (!isDouble || getDoubleCalendarSide(currentRowIndex) === 'second') {
                        onNext();
                    }

                    newRowIndex = rowSize + 1;

                    break;
                }
                case Keys.up: {
                    newRowIndex = prevRowIndex < minRowIndex ? rowSize : prevRowIndex;

                    if (isVisible(outerRefs, newRowIndex, newColumnIndex)) {
                        break;
                    }

                    if (!isDouble || getDoubleCalendarSide(currentRowIndex) === 'first') {
                        onPrev();
                    }

                    newRowIndex = minRowIndex - 1;

                    break;
                }
                case Keys.down: {
                    newRowIndex = nextRowIndex > rowSize ? minRowIndex : nextRowIndex;

                    if (isVisible(outerRefs, newRowIndex, newColumnIndex)) {
                        break;
                    }

                    if (!isDouble || getDoubleCalendarSide(currentRowIndex) === 'second') {
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

            const item = outerRefs.current?.[newRowIndex]?.[newColumnIndex];
            const isItemDisabled = item?.getAttribute('disabled') === '';

            if (!isItemDisabled) {
                setSelectIndexes([newRowIndex, newColumnIndex]);
            }
        },
        [selectIndexes, outerRefs, rowSize, columnSize, onNext, onPrev, isDouble],
    );

    return [selectIndexes, onKeyDown, setSelectIndexes, outerRefs] as const;
};
