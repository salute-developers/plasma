import type { HTMLAttributes, ReactNode } from 'react';

export type RatingInputProps = {
    /**
     * Выбранная оценка в управляемом режиме.
     */
    value?: number | null;
    /**
     * Начальная оценка в неуправляемом режиме.
     */
    defaultValue?: number | null;
    /**
     * Имя поля для отправки выбранной оценки в составе формы.
     */
    name?: string;
    /**
     * Обработчик изменения выбранной оценки. При сбросе оценки передается null.
     */
    onChange?: (value: number | null) => void;
    /**
     * Обработчик изменения предварительной оценки при наведении.
     * При уходе указателя со шкалы передается null.
     */
    onHoverChange?: (value: number | null) => void;
    /**
     * Разрешить сброс оценки повторным нажатием на выбранное значение.
     * @default false
     */
    allowClear?: boolean;
    /**
     * Отобразить выбранное значение.
     */
    hasValue?: boolean;
    /**
     * Функция отображения выбранного значения при hasValue.
     * Получает текущую оценку или null, если оценка не выбрана.
     * Если не задана, отображается выбранное числовое значение.
     */
    renderValue?: (value: number | null) => ReactNode;
    /**
     * Функция, возвращающая доступное название каждой оценки для скринридера.
     * Например, «3 из 5 — хорошо».
     */
    getLabelText?: (value: number) => string;
    /**
     * Положение значения относительно звезд.
     * @default 'bottom'
     */
    valuePlacement?: 'top' | 'bottom';
    /**
     * Выравнивание значения относительно звезд.
     * @default 'center'
     */
    valueAlign?: 'start' | 'center';
    /**
     * Размер предустановленной иконки.
     * @default 'm'
     */
    iconSize?: 's' | 'm' | 'l';
    /**
     * Слот для отображения иконки вместо закрашенной звезды по умолчанию.
     */
    iconSlot?: ReactNode;
    /**
     * Слот для отображения иконки вместо outline-иконки звезды по умолчанию.
     */
    iconSlotOutline?: ReactNode;
    /**
     * Количество равных частей одной звезды. Целое число не меньше 1.
     * Шаг выбора равен 1 / fractions: 2 — половины, 3 — трети, 4 — четверти.
     * Для стандартных звезд при заполнении на 1/2 автоматически используется
     * предустановленная половинная иконка при любом четном fractions.
     * Кастомные иконки для дробей, включая 1/2, задаются через renderFractionIcon.
     * @default 1
     */
    fractions?: number;
    /**
     * Функция отображения частично закрашенной иконки.
     * filledFractions — количество заполненных частей от 1 до fractions - 1.
     * fractions — количество равных частей звезды.
     * Например, аргументы (3, 4) соответствуют заполнению на 3/4.
     * Если возвращает undefined, используется предустановленная половинная иконка
     * для стандартной звезды при заполнении на 1/2 или пропорциональное заполнение
     * iconSlot поверх iconSlotOutline.
     * Для пустой и полной иконок используются iconSlotOutline и iconSlot.
     */
    renderFractionIcon?: (filledFractions: number, fractions: number) => ReactNode;
    /**
     * Количество звезд.
     * @default 5
     */
    iconQuantity?: number;
    /**
     * Отобразить подписи минимальной и максимальной оценок.
     * @default false
     */
    hasLimitLabels?: boolean;
    /**
     * Подпись минимальной оценки.
     */
    minLabel?: string;
    /**
     * Подпись максимальной оценки.
     */
    maxLabel?: string;
    /**
     * Положение подписей минимальной и максимальной оценок.
     * @default 'side'
     */
    limitLabelsPlacement?: 'side' | 'bottom';
    /**
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>;
