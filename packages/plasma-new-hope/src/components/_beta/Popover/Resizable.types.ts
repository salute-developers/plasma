import type { ReactNode, RefObject } from 'react';
import type { Resizable as ResizableInstance } from 're-resizable';

export type ResizablePlacement =
    | 'auto'
    | 'center'
    | 'top'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left';

export type ResizeDirections = Exclude<ResizablePlacement, 'center' | 'auto'>[];

export type ResizableOptions = {
    disabled?: boolean;
    directions?: ResizeDirections;
    defaultSize?: { width?: number; height?: number };
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    icons?: {
        topRight?: ReactNode;
        bottomRight?: ReactNode;
        bottomLeft?: ReactNode;
        topLeft?: ReactNode;
    };
    iconSize?: 'xs' | 's' | 'm';
    hiddenIcons?: Array<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>;
};

export type ResizableProps = {
    placement?: ResizablePlacement;
    resizable?: boolean | ResizableOptions;
    onResizeStart?: (resizableContainer?: RefObject<ResizableInstance>) => void;
    onResizeEnd?: (resizableContainer?: RefObject<ResizableInstance>) => void;
};
