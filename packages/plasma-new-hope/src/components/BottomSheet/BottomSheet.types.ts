import type { ReactNode, HTMLAttributes, CSSProperties } from 'react';

export type BottomSheetSnapPoint = number | string;
export type BottomSheetSnapPoints = string[] | number[];

export interface BottomSheetProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Состояние шторки, открыта или скрыта.
     * @default false
     */
    opened?: boolean;
    /**
     * Слот для основного контента.
     */
    children?: ReactNode;
    /**
     * Слот для контента перед Header.
     */
    contentBeforeHeader?: ReactNode;
    /**
     * Слот для Header.
     */
    contentHeader?: ReactNode;
    /**
     * Слот для Footer.
     */
    contentFooter?: ReactNode;
    /**
     * Расположение ручки скрытия.
     * @default inner
     */
    handlePlacement?: 'inner' | 'outer';
    /**
     * Отображать ли кнопку закрытия.
     * @default true
     */
    hasClose?: boolean;
    /**
     * Показывать ли ручку.
     * @default true
     */
    hasHandle?: boolean;
    /**
     * Наличие оверлея шторки.
     * Если включен, то контент под шторкой перекрывается оверлеем, при нажатии на который шторка закрывается.
     * @default true
     */
    withOverlay?: boolean;
    /**
     * Нужно ли применять blur для оверлея.
     * @default true
     */
    withBlur?: boolean;
    /**
     * Наличие состояния анимации/перехода.
     * @default true
     */
    withTransition?: boolean;
    /**
     * Максимальная высота раскрытия шторки.
     * @default 66dvh
     */
    maxHeight?: CSSProperties['maxHeight'];
    /**
     * Значение z-index для подложки. Шторка располагается на слой выше.
     * @default 1000
     */
    zIndex?: CSSProperties['zIndex'];
    /**
     * Обработчик закрытия шторки. Вызывается по кнопке закрытия или свайпом вниз,
     * при клике по оверлею (если не передан onOverlayClick)
     * и при нажатии ESC (если не передан onEscKeyDown).
     */
    onClose?: () => void;
    /**
     * Точки остановки шторки.
     * Числа в диапазоне `0..1` — доля высоты viewport, строки — CSS-размеры ('320px', '50%', '40dvh').
     * Если не передано или массив пуст — snap-points отключены.
     */
    snapPoints?: BottomSheetSnapPoints;
    /**
     * Начальная точка остановки.
     * По умолчанию — первая из `snapPoints`.
     */
    initialSnapPoint?: BottomSheetSnapPoint;
    /**
     * Обработчик смены активной точки остановки.
     */
    onSnapPointChange?: (snapPoint: BottomSheetSnapPoint) => void;

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
     * Вид компонента.
     */
    view?: string;
    /**
     * Размер компонента.
     */
    size?: string;
}
