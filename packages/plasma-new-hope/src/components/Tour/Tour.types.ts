import { CSSProperties } from 'react';
import type { Placement } from '@floating-ui/react';

export type TourHighlightProps = {
    /**
     * Координата left уже с учётом highlightOffset
     * */
    left: number;
    /**
     * Координата top уже с учётом highlightOffset
     * */
    top: number;
    /**
     *  Ширина уже с учётом highlightOffset
     * */
    width: number;
    /**
     * Высота уже с учётом highlightOffset
     */
    height: number;
    /**
     * Скругление для высветленного блока
     */
    borderRadius?: CSSProperties['borderRadius'];
};

export type TourStep = {
    /**
     * Ссылка на объект: CSS-селектор, React ref или DOM-элемент
     */
    target: string | React.RefObject<HTMLElement | null> | HTMLElement;
    /**
     * Отступ высветленного блока
     * @description Имеет приоритет над общим highlightOffset
     */
    highlightOffset?: number;
    /**
     * Скругление для высветленного блока
     * @description Имеет приоритет над общим highlightBorderRadius
     */
    highlightBorderRadius?: CSSProperties['borderRadius'];
    /**
     * Позиционирование карточки
     */
    placement?: Placement;
    /**
     * Название карточки
     */
    title?: string;
    /**
     * Описание карточки
     */
    description?: string;
};

export interface TourProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Список шагов.
     */
    steps: TourStep[];
    /**
     * Callback для отображения карточки. Требуется вернуть ReactNode.
     * Пятый аргумент `goToStep` позволяет перейти к произвольному шагу
     */
    renderStep: (
        current: number,
        length: number,
        last: boolean,
        step: TourStep,
        goToStep: (index: number) => void,
    ) => React.ReactNode;
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
     * Наличие overlay у тура
     */
    withOverlay?: boolean;
    /**
     * Значение z-index
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
     * Отступ карточки относительно целевого элемента
     * @default `[12, 12]`
     */
    offset?: [number, number];
    /**
     * Отступ высветленного блока
     * @default `4`
     */
    highlightOffset?: number;
    /**
     * Скругление для высветленного блока
     */
    highlightBorderRadius?: CSSProperties['borderRadius'];
    /**
     * Цвет фона у тура
     */
    overlayColor?: CSSProperties['color'];
    /**
     * Кастомный рендер подсветки целевого элемента.
     * Если не передан — используется дефолтный Highlight (box-shadow spotlight).
     */
    renderHighlight?: (props: TourHighlightProps) => React.ReactNode;
    /**
     * Включение стрелки у карточки тура
     * @default false
     */
    hasTail?: boolean;
    /**
     * Цвет стрелки
     */
    tailColor?: CSSProperties['color'];
    /**
     * Ширина стрелки
     * @default 20
     */
    tailWidth?: number;
    /**
     * Высота стрелки
     * @default 8
     */
    tailHeight?: number;
    /**
     * Callback при смене шага
     */
    onChange?: (current: number) => void;
    /**
     * Callback при закрытии тура
     */
    onClose?: () => void;
}

export type RootTourProps = Omit<TourProps, 'renderStep' | 'steps'>;
