import type { ReactNode, RefObject } from 'react';
import type { Resizable } from 're-resizable';

export type ResizableType = Resizable;

export type PlacementBasic = 'auto' | 'center' | 'top' | 'bottom' | 'right' | 'left';
export type PlacementMixed = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type Placement = PlacementBasic | PlacementMixed;
export type ResizeDirections = Omit<Placement, 'center' | 'auto'>[];

export type ResizableProps = {
    placement?: Placement;
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
              hiddenIcons?: PlacementMixed[];
          };
    /**
     * Обработчик начала ресайза.
     */
    onResizeStart?: (resizableContainer?: RefObject<ResizableType>) => void;
    /**
     * Обработчик остановки ресайза.
     */
    onResizeEnd?: (resizableContainer?: RefObject<ResizableType>) => void;
};
