import type { SyntheticEvent, InputHTMLAttributes, ReactNode, HTMLAttributes } from 'react';

type SegmentationProps =
    | {
          /**
           * Форма границ компонента.
           */
          segmentation?: 'clear';
          /**
           * Фон поля ввода.
           */
          inputBackgroundType?: never;
      }
    | {
          segmentation?: string;
          inputBackgroundType?: string;
      };

export type NumberInputProps = {
    /**
     * Числовое значение.
     */
    value?: string | number;
    /**
     * Минимальное значение.
     */
    min?: number;
    /**
     * Максимальное значение.
     */
    max?: number;
    /**
     * Шаг изменения значения.
     * @default 1
     */
    step?: number;
    /**
     * Количество знаков после запятой.
     * @default 2
     */
    precision?: number;
    /**
     * Контрол в состоянии загрузки.
     */
    isLoading?: boolean;
    /**
     * Слот для контента загрузки.
     */
    loader?: ReactNode;
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * view применяется с clear-токенами
     */
    clear?: boolean;
    /**
     * Форма контрола.
     */
    shape?: string;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Слот для вспомогательного текста слева.
     */
    textBefore?: string;
    /**
     * Слот для вспомогательного текста справа.
     */
    textAfter?: string;
    /**
     * Пользовательская кнопка увеличения.
     */
    customIncrementButton?: ReactNode;
    /**
     * Иконка кнопки увеличения.
     */
    incrementIcon?: ReactNode;
    /**
     * Пользовательская кнопка уменьшения.
     */
    customDecrementButton?: ReactNode;
    /**
     * Иконка кнопки уменьшения.
     */
    decrementIcon?: ReactNode;
    /**
     * Доступность ввода значения вручную.
     */
    isManualInput?: boolean;
    /**
     * Вызывается при изменении значения.
     */
    onChange?: (event: SyntheticEvent<HTMLInputElement> | null, value: number | string | undefined) => void;
    /**
     * Вызывается при нажатии на кнопку увеличения значения.
     */
    onIncrement?: (value: number) => void;
    /**
     * Вызывается при нажатии на кнопку уменьшения значения.
     */
    onDecrement?: (value: number) => void;
} & SegmentationProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'>;

export type NumberInputRootProps = {
    size?: string;
    view?: string;
    shape?: string;
    segmentation?: string;
    clear?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
} & HTMLAttributes<HTMLDivElement>;
