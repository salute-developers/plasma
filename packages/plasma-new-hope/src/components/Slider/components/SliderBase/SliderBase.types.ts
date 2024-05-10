import type { ReactNode } from 'react';
import type { DraggableData } from 'react-draggable';

export type SliderSettings = Partial<{
    indent?: number;
    fontSizeMultiplier?: number;
    backgroundColor?: string;
    fillColor?: string;
}>;

export interface SliderBaseProps {
    /**
     * Минимальное значение
     */
    min: number;
    /**
     * Максимальное значение
     */
    max: number;
    /**
     * подпись к слайдеру
     */
    label?: string;
    /**
     * Слот под контент слева от подписи (например иконку)
     */
    labelContentLeft?: ReactNode;
    /**
     * Компонент неактивен
     */
    disabled?: boolean;
    labelPlacement?: string;
    rangeValuesPlacement?: string;
}

export interface SliderInternalProps {
    /**
     * Настройки внешнего вида slider
     */
    settings?: SliderSettings;
}

export interface SliderViewProps extends SliderBaseProps, SliderInternalProps {
    railFillWidth: number;
    setStepSize(stepSize: number): void;
    railFillXPosition?: number;
    onChange?(value: number, data: DraggableData): void;
}
