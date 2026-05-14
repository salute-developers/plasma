import { HTMLAttributes, ReactNode } from 'react';

import type { ImageProps } from '../../../Image';

export type TourCardProps = {
    /**
     * Ориентация карточки
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
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
