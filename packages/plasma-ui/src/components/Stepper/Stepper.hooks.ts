import { useCallback } from 'react';

export interface UseStepperProps {
    /**
     * Числовое значение
     */
    value: number;
    /**
     * Шаг изменения значения
     */
    step?: number;
    /**
     * Минимальное значение
     */
    min?: number;
    /**
     * Максимальное значение
     */
    max?: number;
    /**
     * Обработчик изменения значения счетчика
     */
    onChange?: (value: number, event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const useStepper = ({ value, step = 1, min = 0, max = Infinity, onChange }: UseStepperProps) => {
    const onLessClick = useCallback((event) => onChange?.(value - step, event), [value, step, onChange]);
    const onMoreClick = useCallback((event) => onChange?.(value + step, event), [value, step, onChange]);
    const isMin = value <= min;
    const isMax = value >= max;
    const isLessDisabled = isMin || value - step < min;
    const isMoreDisabled = isMax || value + step > max;

    return {
        onLessClick,
        onMoreClick,
        isMin,
        isMax,
        isLessDisabled,
        isMoreDisabled,
    };
};
