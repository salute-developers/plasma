import { HTMLAttributes, ReactNode } from 'react';

import type { ImageProps } from '../../../Image';

export type TourCardProps = {
    /**
     * Ориентация карточки
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Позиционирование содержимого карточки.
     * @description Применяется только при ориентации 'horizontal'
     * @default 'row-reverse'
     */
    contentDirection?: 'row-reverse' | 'row';
    /**
     * Название карточки
     */
    title?: string;
    /**
     * Описание карточки
     */
    description?: string;
    /**
     * Пропсы для изображения (src, alt, ratio, customRatio и др.)
     */
    image?: ImageProps;
    /**
     * Показывать пагинацию (точки)
     * @default true
     */
    showPagination?: boolean;
    /**
     * Количество отображаемых точек пагинации
     * @default 7
     */
    paginationVisibleItems?: number;
    /**
     * Вод пагинации
     * @default dot
     * @description 'compact' прменяется только если orientation = 'horizontal'
     */
    paginationType?: 'dot' | 'compact';
    /**
     * Индекс текущего шага
     */
    stepCurrent?: number;
    /**
     * Общее количество шагов
     */
    stepLength?: number;
    /**
     * Функция перехода к шагу по индексу
     */
    goToStep?: (index: number) => void;
    /**
     * Кнопки навигации по шагам
     * Например: «Далее» / «Готово» на последнем шаге
     */
    actionButtons?: ReactNode;
    /**
     * Кнопка пропуска
     */
    skipButton?: ReactNode;
    /**
     * Показывать кнопку закрытия
     * @default true
     */
    showClose?: boolean;
    /**
     * Обработчик закрытия тура
     */
    onClose?: () => void;

    /**
     * Вид карточки тура
     */
    view?: string;
    /**
     * Размер карточки тура
     */
    size?: string;
} & HTMLAttributes<HTMLDivElement>;

export type RootTourCardProps = {
    view?: string;
    size?: string;
} & HTMLAttributes<HTMLDivElement>;
