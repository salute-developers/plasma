import { DraggableData } from 'react-draggable';

import type { Thumb } from './ThumbBase';

export interface ThumbProp {
    thumb: Thumb;
}

export interface HandleProps extends ThumbProp {
    stepSize: number;
    min: number;
    max: number;
    side?: 'left' | 'right';
    bounds?: number[];
    xPosition?: number;
    zIndex?: number;
    disabled?: boolean;
    value?: number;
    ariaLabel?: string;
    ariaValueMin?: number;
    multipleStepSize: number;
    hasHoverAnimation?: boolean;
    onChangeCommitted(value: number, data: DraggableData): void;
    onChange?(value: number, data: DraggableData): void;
}

export interface ThumbProps extends Omit<HandleProps, 'side' | 'bounds' | 'zIndex' | 'onChange'> {
    tabIndex: number;
    bounds: Record<'left' | 'right', number>;
    hasHoverAnimation?: boolean;
}

export type SliderSettings = Partial<{
    indent: number;
    fontSizeMultiplier: number;
    backgroundColor: string;
    fillColor: string;
}>;

interface SliderBaseProps {
    /**
     * Минимальное значение
     */
    min: number;
    /**
     * Максимальное значение
     */
    max: number;
    /**
     * Компонент неактивен
     */
    disabled?: boolean;
}

export interface SliderInternalProps extends ThumbProp {
    /**
     * Настройки внешнего вида slider
     */
    settings?: SliderSettings;
}

export interface SliderViewProps extends SliderBaseProps, Omit<SliderInternalProps, 'thumb'> {
    railFillWidth: number;
    railFillXPosition?: number;
    setStepSize(stepSize: number): void;
    onChange?(value: number, data: DraggableData): void;
}

export interface SingleSliderProps extends SliderBaseProps {
    /**
     * Текущее значение
     */
    value: number;
    /**
     * Ярлык, определяющий назначение ползунка, например «Минимальная цена» [a11y].
     */
    ariaLabel?: string;
    /**
     * Размера увеличенного шага (для клавиш PageUp, PageDown).
     * Указывает процентное отношение от максимально возможного значения.
     * Указав значение 20 при максимуме в 100, получим 20%.
     */
    multipleStepSize?: number;
    /**
     * Вызывается при перемещении ползунка
     */
    onChangeCommitted(value: number): void;
    /**
     * Вызывается при отпускании ползунка
     */
    onChange?(value: number): void;
}

export interface DoubleSliderProps extends SliderBaseProps {
    /**
     * Текущее значение
     */
    value: number[];
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
    /**
     * Вызывается при отпускании ползунка
     */
    onChangeCommitted(value: number[]): void;
    /**
     * Вызывается при перемещении ползунка
     */
    onChange?(value: number[]): void;
}

export type SliderProps = SingleSliderProps | DoubleSliderProps;
