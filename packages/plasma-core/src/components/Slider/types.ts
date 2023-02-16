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
     * Компонент неактивен
     */
    disabled?: boolean;

    /**
     * Настройки внешнего вида slider
     */
    settings?: SliderSettings;
}
