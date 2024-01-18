/// <reference types="react" />
declare const ButtonComponent: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: string;
        primary: string;
        secondary: string;
        clear: string;
        success: string;
        warning: string;
        critical: string;
    };
    size: {
        l: string;
        lr: string;
        m: string;
        mr: string;
        s: string;
        sr: string;
        xs: string;
        xsr: string;
        xxs: string;
    };
    disabled: {
        true: string;
    };
    focused: {
        true: string;
    };
}> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    isLoading?: boolean | undefined;
    loader?: import("react").ReactNode;
    stretch?: boolean | undefined;
    square?: boolean | undefined;
    focused?: boolean | undefined;
    pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
    view?: string | undefined;
    size?: string | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export declare type ButtonProps = typeof ButtonComponent;
/**
 * Кнопка.
 */
export declare const Button: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: string;
        primary: string;
        secondary: string;
        clear: string;
        success: string;
        warning: string;
        critical: string;
    };
    size: {
        l: string;
        lr: string;
        m: string;
        mr: string;
        s: string;
        sr: string;
        xs: string;
        xsr: string;
        xxs: string;
    };
    disabled: {
        true: string;
    };
    focused: {
        true: string;
    };
}> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    isLoading?: boolean | undefined;
    loader?: import("react").ReactNode;
    stretch?: boolean | undefined;
    square?: boolean | undefined;
    focused?: boolean | undefined;
    pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
    view?: string | undefined;
    size?: string | undefined;
} & import("react").RefAttributes<HTMLButtonElement>>;
export {};
