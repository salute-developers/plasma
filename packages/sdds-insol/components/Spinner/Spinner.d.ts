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
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        secondary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        tertiary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        paragraph: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        accent: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & ((HTMLAttributes<HTMLDivElement> & {
    width?: undefined;
    height?: undefined;
    size?: string | undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (HTMLAttributes<HTMLDivElement> & {
    width: number;
    height: number;
    size?: undefined; /**
     * @deprecated
     */
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (HTMLAttributes<HTMLDivElement> & {
    /**
     * Компонент для отображения индикатора загрузки.
     */
    width: string;
    height: string;
    size?: undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>))>, any, {}, never>;
