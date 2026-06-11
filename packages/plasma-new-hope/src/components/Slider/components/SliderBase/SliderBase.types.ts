import type { ReactNode } from 'react';

/** @deprecated */
export type SliderSettings = Partial<{
    indent?: number;
    fontSizeMultiplier?: number;
    backgroundColor?: string;
    fillColor?: string;
}>;

/** @deprecated */
export interface SliderInternalProps {
    settings?: SliderSettings;
}

/**
 * Общие пропсы для SingleSlider и DoubleSlider.
 */
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
     * Подпись к слайдеру
     */
    label?: string;
    /**
     * Слот под контент слева от подписи (например, иконку)
     */
    labelContentLeft?: ReactNode;
    /**
     * Компонент неактивен
     */
    disabled?: boolean;
    /**
     * Шаг ползунка.
     * @default 1
     */
    step?: number;
    /**
     * Размер увеличенного шага (клавиши PageUp / PageDown).
     * Указывает процентное отношение от диапазона [min, max].
     * Например, значение 10 при диапазоне 0–100 даёт шаг 10.
     * @default 10
     */
    multipleStepSize?: number;
    /**
     * Вид контрола
     */
    view?: string;
    /**
     * Размер контрола
     */
    size?: string;
    /**
     * Размер ползунка
     * @default 'small'
     */
    pointerSize?: 'small' | 'large' | 'none';
}
