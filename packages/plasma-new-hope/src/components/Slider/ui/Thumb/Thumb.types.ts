export interface ThumbProps {
    min: number;
    max: number;
    multipleStepSize: number;
    tabIndex: number;
    value?: number;
    ariaLabel?: string;
    ariaValueMin?: number;
    hasHoverAnimation?: boolean;
    disabled?: boolean;
}
