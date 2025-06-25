import { ReactNode, CSSProperties } from 'react';

export interface TourStep {
    /**
     * Ссылка на объект
     */
    target: string | React.RefObject<HTMLElement> | HTMLElement | ReactNode;
    /**
     * Карточка шага
     */
    renderItem: () => JSX.Element;
    /**
     * Позиционирование карточки
     */
    placement?: string;
    /**
     * Скругление углов
     */
    borderRadius?: 'auto' | CSSProperties['borderRadius'];
}

export interface TourProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Список шагов.
     */
    steps: TourStep[];
    /**
     * Индекс активного шага
     */
    current?: number;
    /**
     * Активный шаг по-умолчанию
     */
    defaultCurrent?: number;
    /**
     * Флаг открытия тура
     */
    open?: boolean;
    /**
     * Флаг открытия тура по-умолчанию
     */
    defaultOpen?: boolean;
    /**
     * Callback при смене шага
     */
    onChange?: (current: number) => void;
    /**
     * Callback при закрытии тура
     */
    onClose?: () => void;
    /**
     * Флаг на наличие фона у тура
     */
    withOverlay?: boolean;
    /**
     * Флаг на наличие фона у тура
     */
    zIndex?: CSSProperties['zIndex'];
    /**
     * Вид тура
     */
    view?: string;
    /**
     * Размер тура
     */
    size?: string;
    /**
     * Отступ окна относительно элемента, по основной оси
     */
    offset?: [number, number];
    /**
     * Отступ высветленного блока
     */
    highlightOffset?: number;
    /**
     * Цвет фона у тура
     */
    overlayColor?: CSSProperties['color'];
    /**
     * Кастомный Overlay
     */
    overlay?: ReactNode;
}
