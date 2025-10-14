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
     * Отступы скроллбара
     */
    offset?: string | number;
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

export interface ScrollbarState {
    isVisible: boolean;
    thumbHeight: number;
    thumbPosition: number;
    isDragging: boolean;
}

export interface ParsedOffset {
    top: string;
    right: string;
    bottom: string;
    left: string;
}
