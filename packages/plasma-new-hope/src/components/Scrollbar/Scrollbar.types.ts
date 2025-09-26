import type { CSSProperties } from 'react';

export interface ScrollBarProps {
    /**
     * Дополнительный класс name
     */
    className?: string;
    /**
     * Стиль компонента
     */
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Расположение скроллбара
     */
    placement?: 'left' | 'right';
    /**
     * Отступ скроллбара от краев
     */
    offset?: number;
    /**
     * Вертикальный отступ скроллбара
     */
    verticalOffset?: number;
    /**
     * Автоматически скрывать скроллбар
     */
    autoHide?: boolean;
    /**
     * Задержка перед скрытием скроллбара (мс)
     */
    autoHideDelay?: number;
    /**
     * Дополнительные стили
     */
    style?: CSSProperties;
    /**
     * Дочерние элементы
     */
    children?: React.ReactNode;
}
