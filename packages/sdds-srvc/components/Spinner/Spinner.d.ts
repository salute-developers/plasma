import type { HTMLAttributes } from 'react';
export declare type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * Размер спиннера
     */
    size?: string | number;
    /**
     * Цвет спиннера
     */
    view?: string;
    /**
     * Цвет спиннера
     * @deprecated
     */
    color?: string;
    /**
     * @deprecated
     */
    deviceScale?: number;
};
/**
 * Компонент для отображения индикатора загрузки.
 */
export declare const Spinner: import("styled-components").StyledComponent<import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        primary: string;
        secondary: string;
        tertiary: string;
        paragraph: string;
        accent: string;
        positive: string;
        warning: string;
        negative: string;
    };
}> & ((HTMLAttributes<HTMLDivElement> & {
    width?: undefined;
    height?: undefined;
    size?: string | undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (HTMLAttributes<HTMLDivElement> & {
    width: number;
    height: number;
    size?: undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (HTMLAttributes<HTMLDivElement> & {
    width: string;
    height: string;
    /**
     * Компонент для отображения индикатора загрузки.
     */
    size?: undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>))>, any, {}, never>;
