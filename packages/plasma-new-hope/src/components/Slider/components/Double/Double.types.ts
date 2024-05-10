import type { HTMLAttributes, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

import type { SliderBaseProps, SliderInternalProps } from '../SliderBase/SliderBase.types';

export interface DoubleSliderProps
    extends SliderBaseProps,
        SliderInternalProps,
        Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Текущее значение
     */
    value: number[];
    /**
     * Вызывается при отпускании ползунка
     */
    onChangeCommitted?: (value: number[]) => void;
    /**
     * Вызывается при перемещении ползунка
     */
    onChange?: (value: number[]) => void;
    /**
     * Вызывается при изменении TextField
     */
    onChangeTextField?: (value: number[], event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Вызывается при анфокусе TextField
     */
    onBlurTextField?: (value: number[], event: FocusEvent<HTMLInputElement>) => void;
    /**
     * Вызывается при нажатии на клавишу в TextField
     */
    onKeyDownTextField?: (value: number[], event: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Расположение значений минимума и максимума интервала.
     */
    rangeValuesPlacement?: never;
    /**
     * Отображать ли текущее значение.
     */
    showCurrentValue?: never;
    /**
     * Отображать ли значения минимума и максимума интервала.
     */
    showRangeValues?: never;
    /**
     * Разница между текущим значением и минимальным, при котором минимальное будет скрыто.
     */
    hideMinValueDiff?: never;
    /**
     * Разница между текущим значением и максимальным, при котором максимальное будет скрыто.
     */
    hideMaxValueDiff?: never;
    /**
     * Расположение подписи.
     */
    labelPlacement?: never;
    /**
     * Ярлык, определяющий назначение ползунка, например «Минимальная цена» [a11y].
     */
    ariaLabel?: string[];
    /**
     * Размера увеличенного шага (для клавиш PageUp, PageDown).
     * Указывает процентное отношение от максимально возможного значения.
     * Указав значение 20 при максимуме в 100, получим 20%.
     */
    multipleStepSize?: number;

    view?: string;
    size?: 's' | 'm' | 'l';
}
