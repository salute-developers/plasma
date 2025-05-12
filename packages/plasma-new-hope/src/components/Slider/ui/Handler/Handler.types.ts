import type { DraggableData } from 'react-draggable';

export interface HandlerProps {
    stepSize: number;
    min: number;
    max: number;
    multipleStepSize: number;
    onChangeCommitted?(value: number, data: DraggableData): void;
    side?: 'left' | 'right';
    size?: 'small' | 'large' | 'none';
    visibility?: 'always' | 'hover';
    isHovered?: boolean;
    orientation: 'horizontal' | 'vertical';
    bounds?: number[];
    position?: number;
    zIndex?: number;
    disabled?: boolean;
    value?: number;
    ariaLabel?: string;
    ariaValueMin?: number;
    hasHoverAnimation?: boolean;
    showCurrentValue?: boolean;
    valuePlacement?: 'left' | 'right';
    startOffset?: number;
    endOffset?: number;
    onChange?(value: number, data: DraggableData): void;
    onTouchStart?(): void;
    onTouchEnd?(): void;
    onMouseDown?(): void;
    onFocus?(): void;
    onBlur?(): void;
    onMouseEnter?(): void;
    onMouseLeave?(): void;
}
