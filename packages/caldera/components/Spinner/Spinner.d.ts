/// <reference types="react" />
declare const SpinnerComponent: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
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
}> & ((import("react").HTMLAttributes<HTMLDivElement> & {
    width?: undefined;
    height?: undefined;
    size?: string | undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & {
    width: number;
    height: number;
    size?: undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & {
    width: string;
    height: string;
    size?: undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>))>;
export declare type SpinnerProps = typeof SpinnerComponent;
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
}> & ((import("react").HTMLAttributes<HTMLDivElement> & {
    width?: undefined;
    height?: undefined;
    size?: string | undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & {
    width: number;
    height: number;
    size?: undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & {
    width: string;
    height: string;
    size?: undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>))>, any, {}, never>;
export {};
