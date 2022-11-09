import { DraggableData } from 'react-draggable';

export interface HandleProps {
    stepSize: number;
    min: number;
    max: number;
    side?: 'left' | 'right';
    bounds?: number[];
    xPosition?: number;
    zIndex?: number;
    disabled?: boolean;
    value?: number;
    ariaLabel?: string;
    ariaValueMin?: number;
    multipleStepSize: number;
    onChangeCommitted(value: number, data: DraggableData): void;
    onChange?(value: number, data: DraggableData): void;
}

export interface ThumbProps extends Omit<HandleProps, 'side' | 'bounds' | 'zIndex' | 'onChange'> {
    tabIndex: number;
    bounds: Record<'left' | 'right', number>;
}
