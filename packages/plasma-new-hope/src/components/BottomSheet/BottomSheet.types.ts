import type { ReactNode, HTMLAttributes } from 'react';

export interface BottomSheetProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * Обработчик закрытия шторки. Вызывается при клике по оверлею, по кнопке закрытия или свайпом вниз.
     */
    onClose: () => void;

    /**
     * Состояние шторки, открыта или скрыта.
     */
    opened?: boolean;

    /**
     * Заголовок шторки.
     */
    title?: ReactNode;

    /**
     * Изображение/баннер. Отображается на всю ширину шторки выше заголовка и контента.
     */
    image?: ReactNode;

    /**
     * Контент шторки.
     */
    children?: ReactNode;

    /**
     * Кнопки в нижней части шторки.
     */
    buttons?: ReactNode;

    /**
     * Отображать ли кнопку закрытия.
     * @default true
     */
    hasClose?: boolean;

    /**
     * Показывать ли ручку
     */
    hasHandle?: boolean;

    /**
     * Наличие оверлея шторки. Если включен, то контент под шторкой перекрывается оверлеем, при нажатии на
     * который шторка закрывается.
     * @default true
     */
    withOverlay?: boolean;

    /**
     * Нужно ли применять blur для оверлея.
     * @default false
     */
    withBlur?: boolean;

    /**
     * Наличие состояния анимации/перехода.
     * @default true
     */
    withTransition?: boolean;

    /**
     * Вид шторки.
     */
    view?: string;

    /**
     * Размер шторки.
     */
    size?: string;
}
