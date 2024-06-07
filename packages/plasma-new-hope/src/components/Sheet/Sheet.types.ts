import { ReactNode } from 'react';

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Состояние шторки, открыта или скрыта
     */
    isOpen: boolean;

    /**
     * Обработчик закрытия шторки. Вызывается при клике по оверлею или смахиванию шторки вниз
     */
    onClose: () => void;

    /**
     * Слот для контента в заголовке
     */
    contentHeader?: ReactNode;

    /**
     * Является ли заголовок фиксированным
     */
    isHeaderFixed?: boolean;

    /**
     * Слот для контента в нижней части
     */
    contentFooter?: ReactNode;

    /**
     * Является ли нижняя часть фиксированной
     */
    isFooterFixed?: boolean;

    /**
     * Наличие ручки у шторки
     */
    hasHandle?: boolean;

    /**
     * Наличие оверлея шторки. Если включен, то контент под шторкой перекрывается оверлеем, при нажатии на
     * который шторка закрывается.
     */
    withOverlay?: boolean;

    /**
     * Нужно ли применять blur для подложки.
     */
    withBlur?: boolean;

    children?: ReactNode;

    /**
     * Наличие состояния анимации/перехода, по-умолчанию true.
     */
    withTransition?: boolean;

    /**
     * Throttling внутренних обработчиков события onScroll
     */
    throttleMs?: number;
    view?: string;
}

export type CommonProps = Pick<SheetProps, 'withTransition' | 'isOpen'>;

export type SheetHookArgs = Pick<SheetProps, 'isOpen'>;
