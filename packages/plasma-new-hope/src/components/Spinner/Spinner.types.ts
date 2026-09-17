import { HTMLAttributes } from 'react';

export type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * Размер спиннера.
     * Числовое значение устарело — задавайте размер через `style`.
     */
    size?: string | number;
    /**
     * Цвет спиннера
     */
    view?: string;
    /**
     * Толщина дуги
     */
    strokeSize?: number;
    /**
     * Кастомная ширина спиннера
     * @deprecated Задавайте размер через `style`
     */
    width?: string | number;
    /**
     * Кастомная высота спиннера
     * @deprecated Задавайте размер через `style`
     */
    height?: string | number;
    /**
     * Цвет спиннера
     * @deprecated Используйте `view` или `style`
     */
    color?: string;
    /**
     * @deprecated Не используется
     */
    deviceScale?: number;
};
