import type { CSSProperties, KeyboardEvent } from 'react';

export type TimeColumnType = 'hours' | 'minutes' | 'seconds';

interface ActiveTime {
    hours: number | null;
    minutes: number | null;
    seconds: number | null;
    currentColumn: TimeColumnType | null;
}

interface ScrollbarState {
    isVisible: boolean;
    thumbHeight: number;
    thumbPosition: number;
    isDragging: boolean;
}

type ScrollbarDragHandler = (
    columnRef: React.RefObject<HTMLDivElement>,
    setScrollbar: React.Dispatch<React.SetStateAction<ScrollbarState>>,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
) => (e: React.MouseEvent<HTMLDivElement>) => void;

export type TimeItemKeyDownHandler = (
    event: KeyboardEvent<HTMLDivElement>,
    column: TimeColumnType,
    value: string,
) => void;

type TimeItemClickHandler = (value: string, column: TimeColumnType) => void;

export interface TimeColumnProps {
    values: string[];
    dropdownHeight: CSSProperties['height'];
    column: TimeColumnType;
    timeItemRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
    activeTime: ActiveTime;
    handleTimeItemClick: TimeItemClickHandler;
    handleTimeItemKeyDown: TimeItemKeyDownHandler;
    createScrollbarDragHandler: ScrollbarDragHandler;
    setScrollbar?: React.Dispatch<React.SetStateAction<ScrollbarState>>;

    columnRef?: React.RefObject<HTMLDivElement>;
    scrollbarState?: ScrollbarState;
    scrollbarRef?: React.RefObject<HTMLDivElement>;
    thumbRef?: React.RefObject<HTMLDivElement>;
    timeoutRef?: React.MutableRefObject<NodeJS.Timeout | null>;
    disabledValues?: (string | number)[];
}
