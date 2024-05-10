import type { HTMLAttributes } from 'react';

import type { SliderBaseProps, SliderInternalProps } from '../SliderBase/SliderBase.types';

export interface SingleSliderProps
    extends SliderBaseProps,
        SliderInternalProps,
        Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Текущее знaчение
     */
    value: number;
    /**
     * Вызывается при отпускании ползунка
     */
    onChangeCommitted?: (value: number) => void;
    /**
     * Вызывается при перемещении ползунка
     */
    onChange?: (value: number) => void;
    /**
     * Ярлык, определяющий назначение ползунка, например «Минимальная цена» [a11y].
     */
    ariaLabel?: string;
    /**
     * Отображать ли текущее значение.
     */
    showCurrentValue?: boolean;
    /**
     * Отображать ли значения минимума и максимума интервала.
     */
    showRangeValues?: boolean;
    /**
     * Разница между текущим значением и минимальным, при котором минимальное будет скрыто.
     */
    hideMinValueDiff?: number;
    /**
     * Разница между текущим значением и максимальным, при котором максимальное будет скрыто.
     */
    hideMaxValueDiff?: number;
    /**
     * Расположение значений минимума и максимума интервала.
     * @default `outer`
     */
    rangeValuesPlacement?: 'inner' | 'outer';
    /**
     * Расположение подписи.
     * @default `outer`
     */
    labelPlacement?: 'inner' | 'outer';
    /**
     * Размера увеличенного шага (для клавиш PageUp, PageDown).
     * Указывает процентное отношение от максимально возможного значения.
     * Указав значение 20 при максимуме в 100, получим 20%.
     */
    multipleStepSize?: number;

    view?: string;
    size?: 's' | 'm' | 'l';
}
