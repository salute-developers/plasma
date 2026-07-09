import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type ColorSwatchProps = {
    /** Отображаемый цвет (любое валидное CSS-значение цвета). */
    color: string;

    /** Ширина и высота образца (любое валидное CSS-значение). */
    size?: CSSProperties['width'];

    /** Любое валидное CSS-значение для `border-radius`. */
    radius?: string | number;

    /** Добавляет внутреннюю тень `box-shadow`. @default true */
    withShadow?: boolean;

    /** Контент внутри образца. */
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
