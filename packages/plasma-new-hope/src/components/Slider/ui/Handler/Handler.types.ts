import type { DraggableData } from 'react-draggable';

export interface HandlerProps {
    stepSize: number;
    min: number;
    max: number;
    multipleStepSize: number;
    onChangeCommitted?(value: number, data: DraggableData): void;
    side?: 'left' | 'right';
    bounds?: number[];
    xPosition?: number;
    zIndex?: number;
    disabled?: boolean;
    value?: number;
    ariaLabel?: string;
    ariaValueMin?: number;
    hasHoverAnimation?: boolean;
    showCurrentValue?: boolean;
    startOffset?: number;
    endOffset?: number;
    onChange?(value: number, data: DraggableData): void;
    onMouseEnter?(): void;
    onMouseLeave?(): void;
}
