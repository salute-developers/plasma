import type { ReactNode } from 'react';

export type PopupPlacementBasic = 'center' | 'top' | 'bottom' | 'right' | 'left';
export type PopupPlacementMixed = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type PopupPlacement = PopupPlacementBasic | PopupPlacementMixed;
export type ResizeDirections = Omit<PopupPlacement, 'center'>[];

export interface PopupInfo {
    id: string;
    info?: Record<string, any>;
}

export interface PopupContextType {
    items: Map<string, PopupInfo>;
    rootId: string;
    register: (info: PopupInfo) => void;
    unregister: (id: string) => void;
}

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @deprecated Отображение Popup.
     */
    isOpen?: boolean;
    /**
     * Отображение Popup.
     */
    opened?: boolean;
    /** Позиция на экране
     * center - по умолчанию
     * left, right, top, bottom и их комбинации
     */
    placement?: PopupPlacement;
    /** Смещение относительно текущей позиции.
     * (x, y) - [number, number], [string, string].
     * При передаче number расчёт в rem.
     */
    offset?: [number, number] | [string, string];
    /**
     * В каком контейнере позиционируется (по умолчанию document), можно также указать id элемента или ref для него.
     */
    frame?: 'document' | string | React.RefObject<HTMLElement>;
    /**
     * Если `frame` отличается от `document` применяет `position='fixed'`
     *  @description Может быть полезно, когда во frame происходит дополнительная стилизация содержимого компонента,
     * но при этом необходимо отобразить компонент как будто бы в document
     * @default false
     */
    positionFixed?: boolean;
    /**
     * Содержимое Popup.
     */
    children?: ReactNode;
    /**
     * Соседний элемент для окна в портале.
     */
    overlay?: ReactNode;
    /**
     * Значение z-index для Popup.
     */
    zIndex?: string;
    /**
     * Дополнительная информация для программного взаимодействия с окном через контекст.
     */
    popupInfo?: PopupInfo;
    /**
     * Использовать ли анимацию.
     */
    withAnimation?: boolean;
    /**
     * Настройка draggable-режима.
     */
    draggable?: boolean;
    /**
     * Настройка resizable-режима.
     */
    resizable?:
        | boolean
        | {
              /**
               * Включение/выключение ресайза.
               * @default false
               */
              disabled?: boolean;
              /**
               * Направления для ресайза.
               */
              directions?: ResizeDirections;
              /**
               * Начальный размер окна ресайза.
               */
              defaultSize?: { width?: number; height?: number };
              /**
               * Минимальная ширина ресайза в px.
               */
              minWidth?: number;
              /**
               * Минимальная высота ресайза в px.
               */
              minHeight?: number;
              /**
               * Максимальная ширина ресайза в px.
               */
              maxWidth?: number;
              /**
               * Максимальная высота ресайза в px.
               */
              maxHeight?: number;
              /**
               * Кастомные иконки ресайза.
               */
              icons?: {
                  topRight?: ReactNode;
                  bottomRight?: ReactNode;
                  bottomLeft?: ReactNode;
                  topLeft?: ReactNode;
              };
              /**
               * Размер иконки ресайза.
               * @default s
               */
              iconSize?: 'xs' | 's' | 'm';
              /**
               * Скрывать ли иконку для ресайза.
               * @default false
               */
              hiddenIcons?: PopupPlacementMixed[];
          };
}
export interface PopupAnimationInfo {
    endAnimation: boolean;
    setEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    endTransition: boolean;
    setEndTransition: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PopupPositionType {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    transform?: string;
}

export interface PopupRootProps extends Omit<PopupProps, 'opened' | 'isOpen' | 'overlay'> {
    id: string;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    position: PopupPositionType;
    /**
     * Данные из хука usePopupAnimation.
     */
    animationInfo: PopupAnimationInfo;
}

export interface PopupHookArgs extends Pick<PopupProps, 'popupInfo' | 'withAnimation'> {
    id: string;
    isOpen: boolean;
}

export interface PopupRootContainerProps extends Omit<PopupProps, 'opened' | 'isOpen' | 'overlay'> {
    endTransition?: boolean;
    endAnimation?: boolean;
    position: PopupPositionType;
}
