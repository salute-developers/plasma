import { useEffect, useRef } from 'react';

import { PickerSize } from './types';

interface PickerItemScale {
    /**
     * Размер (transform: scale) при slot = 0, 1, 2.
     */
    scale: number[];
    /**
     * Коэффициент смещения по oY.
     */
    offset: number;
    /**
     * Высота элемента.
     */
    height: number;
}

const sizes: Record<PickerSize, PickerItemScale> = {
    l: {
        scale: [1, 0.8, 0.8],
        offset: -0.15,
        height: 5,
    },
    s: {
        scale: [1, 0.75, 0.5],
        offset: 0.35,
        height: 2.875,
    },
    xs: {
        scale: [1, 0.8334, 0.5834],
        offset: 0.35,
        height: 2.05,
    },
};

const round = (n: number) => Math.round(n * 100) / 100;

// 0 - Infinity
const MAX_SLOT = 3;
// 0 - 1
const FULL_OPACITY = 1;
const NONE_OPACITY = 0;

export function getOpacity(slot: number) {
    const absoluteSlot = Math.abs(slot);
    const ceilSlot = Math.ceil(absoluteSlot) || 1; // Ячейка, в которую перемещается элемент

    // Сколько осталось от размера ячкейки, чтобы элемент занял ее полностью (от 1 до 0)
    const progSlot = ceilSlot - absoluteSlot;

    if (absoluteSlot <= 1) {
        const opacityRangeSize = FULL_OPACITY - NONE_OPACITY;
        const opacity = NONE_OPACITY + progSlot * opacityRangeSize;
        return round(opacity);
    }
    return NONE_OPACITY;
}

export function getOffset(slot: number, size: PickerSize) {
    const absoluteSlot = Math.abs(slot);
    const ceilSlot = Math.ceil(absoluteSlot) || 1; // Ячейка, в которую перемещается элемент

    // Сколько осталось от размера ячейки, чтобы элемент занял ее полностью (от 1 до 0)
    const progSlot = ceilSlot - absoluteSlot;

    const shift = (sizes[size].offset * sizes[size].height) / 2;

    // От середины до 1 ячейки
    if (absoluteSlot <= 1) {
        return round(slot * shift) || 0;
    }

    // От 1 ячейки до 2
    if (absoluteSlot <= 2) {
        return round(progSlot * shift * Math.sign(slot));
    }

    // От 2 ячейки
    return round(((absoluteSlot - 2) / (ceilSlot - 2)) * Math.sign(slot) * -1 * Math.abs(sizes[size].height));
}

export function getScale(slot: number, size: PickerSize) {
    const absoluteSlot = Math.abs(slot);
    const ceilSlot = Math.ceil(absoluteSlot) || 1; // Ячейка, в которую перемещается элемент

    // Сколько осталось от размера ячкейки, чтобы элемент занял ее полностью (от 1 до 0)
    const progSlot = ceilSlot - absoluteSlot;

    // От середины до 1 ячейки
    if (absoluteSlot <= 1) {
        return round(progSlot * (sizes[size].scale[0] - sizes[size].scale[1]) + sizes[size].scale[1]);
    }

    // От 1 ячейки до 2
    if (absoluteSlot <= 2) {
        return round(progSlot * (sizes[size].scale[1] - sizes[size].scale[2]) + sizes[size].scale[2]);
    }

    // От 2 ячейки
    return round(progSlot * sizes[size].scale[2]);
}

/**
 * Абстрактный просчет стилей в зависимости от слота,
 * не основываясь на реальном элементе списка.
 */
export const getStyles = (slot: number, size: PickerSize) => {
    const normalizedSlot = Math.min(Math.abs(slot), MAX_SLOT) * Math.sign(slot);
    const opacity = getOpacity(normalizedSlot);
    const offset = getOffset(normalizedSlot, size);
    const scale = getScale(normalizedSlot, size);

    return {
        wrapper: {
            /*
             * Размер плавно уменьшается с увеличением значения slot
             */
            transform: `scale(${scale}) translate3d(0,${offset}rem,0)`,
        },
        text: {
            /*
             * Непрозрачность уменьшается с увеличением значения slot
             */
            opacity: `${1 - opacity}`,
        },
        whiteText: {
            /*
             * Непрозрачность увеличивается с увеличением значения slot
             */
            opacity: `${opacity}`,
        },
    };
};

/**
 * Малый размер => большой размер
 * Серый текст => белый текст
 */
function scaleCallback(size: PickerSize) {
    return (itemEl: HTMLElement, slot: number) => {
        const styles = getStyles(slot, size);

        const transformable = itemEl.querySelector<HTMLElement>('[data-picker-item="transformable"]');
        const greyText = itemEl.querySelector<HTMLElement>('[data-picker-item="grey-text"]');
        const whiteText = itemEl.querySelector<HTMLElement>('[data-picker-item="white-text"]');

        if (transformable) {
            transformable.style.transform = styles.wrapper.transform;
        }

        /**
         * Серый текст
         */
        if (greyText) {
            greyText.style.opacity = styles.text.opacity;
        }
        /**
         * Белый текст
         */
        if (whiteText) {
            whiteText.style.opacity = styles.whiteText.opacity;
        }
    };
}

export const scaleCallbacks = {
    l: scaleCallback('l'),
    s: scaleCallback('s'),
    xs: scaleCallback('xs'),
};

/**
 * Сброс стилей
 */
export const scaleResetCallback = (itemEl: HTMLElement) => {
    const transformable = itemEl.querySelector<HTMLElement>('[data-picker-item="transformable"]');
    const greyText = itemEl.querySelector<HTMLElement>('[data-picker-item="grey-text"]');
    const whiteText = itemEl.querySelector<HTMLElement>('[data-picker-item="white-text"]');

    if (transformable) {
        transformable.style.transform = 'scale(0) translate3d(0px, 0px, 0px);';
    }

    /**
     * Серый текст
     */
    if (greyText) {
        greyText.style.opacity = String(FULL_OPACITY);
    }
    /**
     * Белый текст
     */
    if (whiteText) {
        whiteText.style.opacity = String(NONE_OPACITY);
    }
};

/**
 * Вернет новый объект даты.
 */
export const getNewDate = (value: Date, [hour, minutes, seconds]: readonly [number, number, number]) => {
    const newDate = new Date(value);
    newDate.setHours(hour);
    newDate.setMinutes(minutes);
    newDate.setSeconds(seconds);

    return newDate;
};

/**
 * Вернет массив с временными компонентами переданной даты.
 */
export const getTimeValues = (date: Date) => [date.getHours(), date.getMinutes(), date.getSeconds()] as const;

/**
 * Вернет массив компонентами даты.
 */
export const getDateValues = (date: Date) => [date.getFullYear(), date.getMonth(), date.getDate()] as const;

/**
 * Проверит, изменился ли массив
 */
export const isChanged = (oldValues: readonly number[], newValues: readonly number[]) => {
    if (oldValues === newValues) {
        return false;
    }

    if (oldValues.length !== newValues.length) {
        return true;
    }

    for (let i = 0; i < oldValues.length; i++) {
        if (oldValues[i] !== newValues[i]) {
            return true;
        }
    }

    return false;
};

/**
 * Вернёт нормализованные значения в заданных пределах
 */
export const getNormalizeValues = (
    getValues: (date: Date) => readonly [number, number, number],
    getSeconds: (values: readonly [number, number, number]) => number,
) => (current: Date, min: Date, max: Date) => {
    const curValues = getValues(current);
    const minValues = getValues(min);
    const maxValues = getValues(max);

    const curSeconds = getSeconds(curValues);
    const minSeconds = getSeconds(minValues);
    const maxSeconds = getSeconds(maxValues);

    if (curSeconds < minSeconds) {
        return minValues;
    }

    if (curSeconds > maxSeconds) {
        return maxValues;
    }

    return curValues;
};

/**
 * Сравнит число с массивом чисел и вернет значение массива,
 * максимальное близкое заданному числу.
 */
const getClosestValue = (range: number[], value: number) => {
    if (value === 0) {
        return range[0];
    }
    const weights = range.map((i) => (value <= i ? value / i : i / value));
    return range[weights.indexOf(Math.max(...weights))];
};

/**
 * Для того, чтобы значение не выпадало из диапозона,
 * надо выставить в соответствии с последним
 */
export const getValuesInRange = (
    [firstRange, secondRange, thirdRange]: number[][],
    firstSecondThird: readonly [number, number, number],
    value: Date,
) => {
    const [first, second, third] = firstSecondThird;
    if (firstRange.indexOf(first) === -1 || secondRange.indexOf(second) === -1 || thirdRange.indexOf(third) === -1) {
        const newFirst = firstRange.indexOf(first) === -1 ? getClosestValue(firstRange, first) : first;
        const newSecond = secondRange.indexOf(second) === -1 ? getClosestValue(secondRange, second) : second;
        const newThird = thirdRange.indexOf(third) === -1 ? getClosestValue(thirdRange, third) : third;

        // eslint-disable-next-line no-restricted-globals
        if (isNaN(newFirst) || isNaN(newSecond) || isNaN(newThird)) {
            throw new Error(`Passed value ${value} is out of range`);
        }

        return [newFirst, newSecond, newThird] as const;
    }

    return firstSecondThird;
};

/**
 * Вернет массив чисел от `from` до `to` с интервалом `step`.
 */
export const getRange = (from: number, to: number, step = 1) => {
    const range = [];
    for (let i = from; i <= to; i += step) {
        range.push(i);
    }
    return range;
};

/**
 * Хук для сохранения предыдущего значения
 */
export const usePreviousValue = <T extends string | number | Date>(value: T): T | undefined => {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};
