import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type ColorSwatchProps = {
    /** Valid CSS color to display */
    color: string;

    /** Swatch `width` and `height`, any valid CSS value. */
    size?: CSSProperties['width'];

    /** Key of any valid CSS value to set `border-radius` */
    radius?: string | number;

    /** If set, the swatch has inner `box-shadow` @default true */
    withShadow?: boolean;

    /** Children inside the swatch */
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
