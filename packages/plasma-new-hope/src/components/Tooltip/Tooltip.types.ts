import { ReactNode } from 'react';

import { PopoverPlacement, PopoverPlacementBasic } from '../Popover';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Текст тултипа.
     */
    text: string;
    /**
     * Видимость тултипа.
     */
    isOpen: boolean;
    /**
     * Элемент, рядом с которым произойдет вызов всплывающего окна.
     */
    target?: ReactNode;
    /**
     * Направление раскрытия тултипа.
     */
    placement?: PopoverPlacement | Array<PopoverPlacementBasic>;
    /**
     * Видимость стрелки (хвоста).
     */
    hasArrow?: boolean;
    /**
     * Отступ окна относительно элемента, у которого оно вызвано.
     * @default
     * [0, 8]
     */
    offset?: [number, number];
    /**
     * В каком контейнере позиционируется(по умолчанию document), можно также указать id элемента или ref для него.
     */
    frame?: 'document' | string | React.RefObject<HTMLElement>;
    /**
     * Находится ли в портале.
     * @default
     * true
     */
    usePortal?: boolean;
    /**
     * Минимальная ширина окна (в rem).
     */
    minWidth?: number | string;
    /**
     * Максимальная ширина окна (в rem).
     */
    maxWidth?: number | string;
    /**
     * Событие закрытия тултипа по кнопке Esc.
     */
    onDismiss?: () => void;
    /**
     * Слот для контента слева, например `Icon`.
     */
    contentLeft?: ReactNode;
    /**
     * Значение z-index для Tooltip.
     * @default
     * 9200
     */
    zIndex?: string;

    /**
     * Размер тултипа.
     */
    size?: string;
    /**
     * Вид тултипа.
     */
    view?: string;
}
