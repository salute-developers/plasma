import { TextSkeletonProps } from '@salutejs/plasma-ui';

import { CardSkeletonProps } from '../../Card/CardSkeleton/CardSkeleton';

export interface GallerySkeletonProps {
    /** Количество галерей */
    galleries: number;
    /**
     * Количество скелетонов карточек в галереи.
     * Для разрешений XL и M используется только, если не указаны `columnXL` и `columnM` соответственно
     */
    items?: number;
    /** Количество колонок при разрешении XL */
    columnXL?: number;
    /** Количество колонок при разрешении M */
    columnM?: number;
    /** Количество колонок при разрешении S */
    columnS?: number;
    /** Флаг, определяющий наличие заголовка */
    hasTitle?: boolean;
    /** Свойства скелетона заголовка */
    titleProps?: TextSkeletonProps;
    /** Свойства скелетона карточки */
    cardProps?: CardSkeletonProps;
}
