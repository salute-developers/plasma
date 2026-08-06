import type { ReactNode, HTMLAttributes } from 'react';

export interface SheetProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Состояние шторки, открыта или скрыта
     */
    opened?: boolean;

    /**
     * Обработчик закрытия шторки. Вызывается при смахивании шторки вниз,
     * при клике по оверлею (если не передан onOverlayClick)
     * и при нажатии ESC (если не передан onEscKeyDown).
     */
    onClose: () => void;

    /**
     * Обработчик клика по оверлею (если не передан, используется onClose).
     */
    onOverlayClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

    /**
     * Закрывать шторку при нажатии на ESC.
     * @default true
     */
    closeOnEsc?: boolean;

    /**
     * Обработчик нажатия ESC (если не передан, используется onClose).
     */
    onEscKeyDown?: (event: KeyboardEvent) => void;

    /**
     * Слот для контента в заголовке
     */
    contentHeader?: ReactNode;

    /**
     * Является ли заголовок фиксированным
     * @default
     * false
     */
    isHeaderFixed?: boolean;

    /**
     * Слот для контента в нижней части
     */
    contentFooter?: ReactNode;

    /**
     * Является ли нижняя часть фиксированной
     * @default
     * false
     */
    isFooterFixed?: boolean;

    /**
     * Наличие ручки у шторки
     * @default
     * true
     */
    hasHandle?: boolean;

    /**
     * Позиция шторки относительно подложки
     */
    handlePlacement?: string;

    /**
     * Наличие оверлея шторки. Если включен, то контент под шторкой перекрывается оверлеем, при нажатии на
     * который шторка закрывается.
     * @default
     * true
     */
    withOverlay?: boolean;

    /**
     * Нужно ли применять blur для подложки.
     * @default
     * false
     */
    withBlur?: boolean;

    children?: ReactNode;

    /**
     * Наличие состояния анимации/перехода
     * @default
     * true
     */
    withTransition?: boolean;

    /**
     * Throttling внутренних обработчиков события onScroll
     */
    throttleMs?: number;
    /**
     * Наличие событий скролла
     * @default
     * true
     */
    hasScrollEvents?: boolean;
    view?: string;
}

export type CommonProps = Pick<SheetProps, 'withTransition' | 'opened'>;

export type SheetHookArgs = Pick<SheetProps, 'opened'>;
