/// <reference types="react" />
/**
 * Компонент, позволяющий прикрепить локальный файл
 */
export declare const Attach: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        accent: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        secondary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        clear: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        success: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        critical: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        dark: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        black: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        white: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & ((import("react").HTMLAttributes<HTMLDivElement> & Omit<import("react").ButtonHTMLAttributes<HTMLElement>, "value"> & Omit<import("react").AnchorHTMLAttributes<HTMLElement>, "type"> & import("@salutejs/plasma-new-hope/types/types").AsProps<any> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentPlacing?: ("default" | "relaxed") | undefined;
    isLoading?: boolean | undefined;
    loader?: import("react").ReactNode;
    stretch?: boolean | undefined;
    stretching?: ("auto" | "filled" | "fixed") | undefined;
    square?: boolean | undefined;
    focused?: boolean | undefined;
    disabled?: boolean | undefined;
    pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
    view?: string | undefined;
    size?: string | undefined;
    outlined?: boolean | undefined;
    shiftLeft?: boolean | undefined;
    shiftRight?: boolean | undefined;
    blur?: "small" | "medium" | "large" | undefined;
} & {
    value?: string | number | undefined;
    contentRight?: undefined;
} & import("@salutejs/plasma-new-hope/types/components/Attach/Attach.types").BaseAttachProps & {
    buttonType?: "button" | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & Omit<import("react").ButtonHTMLAttributes<HTMLElement>, "value"> & Omit<import("react").AnchorHTMLAttributes<HTMLElement>, "type"> & import("@salutejs/plasma-new-hope/types/types").AsProps<any> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentPlacing?: ("default" | "relaxed") | undefined;
    isLoading?: boolean | undefined;
    loader?: import("react").ReactNode;
    stretch?: boolean | undefined;
    stretching?: ("auto" | "filled" | "fixed") | undefined;
    square?: boolean | undefined;
    focused?: boolean | undefined;
    disabled?: boolean | undefined;
    pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
    view?: string | undefined;
    size?: string | undefined;
    outlined?: boolean | undefined;
    shiftLeft?: boolean | undefined;
    shiftRight?: boolean | undefined;
    blur?: "small" | "medium" | "large" | undefined;
} & {
    value?: string | number | undefined;
    contentRight?: undefined;
} & import("@salutejs/plasma-new-hope/types/components/Attach/Attach.types").BaseAttachProps & {
    buttonType?: "button" | undefined;
} & {
    value?: undefined;
    contentRight?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & Omit<import("react").ButtonHTMLAttributes<HTMLElement>, "value"> & Omit<import("react").AnchorHTMLAttributes<HTMLElement>, "type"> & import("@salutejs/plasma-new-hope/types/types").AsProps<any> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentPlacing?: ("default" | "relaxed") | undefined;
    isLoading?: boolean | undefined;
    loader?: import("react").ReactNode;
    stretch?: boolean | undefined;
    stretching?: ("auto" | "filled" | "fixed") | undefined;
    square?: boolean | undefined;
    focused?: boolean | undefined;
    disabled?: boolean | undefined;
    pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
    view?: string | undefined;
    size?: string | undefined;
    outlined?: boolean | undefined;
    shiftLeft?: boolean | undefined;
    shiftRight?: boolean | undefined;
    blur?: "small" | "medium" | "large" | undefined;
} & {
    value?: string | number | undefined;
    contentRight?: undefined;
} & import("@salutejs/plasma-new-hope/types/components/Attach/Attach.types").BaseAttachProps & {
    buttonType?: "iconButton" | undefined;
    icon?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & Omit<import("react").ButtonHTMLAttributes<HTMLElement>, "value"> & Omit<import("react").AnchorHTMLAttributes<HTMLElement>, "type"> & import("@salutejs/plasma-new-hope/types/types").AsProps<any> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentPlacing?: ("default" | "relaxed") | undefined;
    isLoading?: boolean | undefined;
    loader?: import("react").ReactNode;
    stretch?: boolean | undefined;
    stretching?: ("auto" | "filled" | "fixed") | undefined;
    square?: boolean | undefined;
    focused?: boolean | undefined;
    disabled?: boolean | undefined;
    pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
    view?: string | undefined;
    size?: string | undefined;
    outlined?: boolean | undefined;
    shiftLeft?: boolean | undefined;
    shiftRight?: boolean | undefined;
    blur?: "small" | "medium" | "large" | undefined;
} & {
    value?: string | number | undefined;
    contentRight?: undefined;
} & import("@salutejs/plasma-new-hope/types/components/Attach/Attach.types").BaseAttachProps & {
    buttonType?: "iconButton" | undefined;
    icon?: import("react").ReactNode;
} & {
    value?: undefined;
    contentRight?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & Omit<import("react").ButtonHTMLAttributes<HTMLElement>, "value"> & Omit<import("react").AnchorHTMLAttributes<HTMLElement>, "type"> & import("@salutejs/plasma-new-hope/types/types").AsProps<any> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentPlacing?: ("default" | "relaxed") | undefined;
    isLoading?: boolean | undefined;
    loader?: import("react").ReactNode;
    stretch?: boolean | undefined;
    stretching?: ("auto" | "filled" | "fixed") | undefined;
    square?: boolean | undefined;
    focused?: boolean | undefined;
    disabled?: boolean | undefined;
    pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
    view?: string | undefined;
    size?: string | undefined;
    outlined?: boolean | undefined;
    shiftLeft?: boolean | undefined;
    shiftRight?: boolean | undefined;
    blur?: "small" | "medium" | "large" | undefined;
} & {
    value?: undefined;
    contentRight?: import("react").ReactNode;
} & import("@salutejs/plasma-new-hope/types/components/Attach/Attach.types").BaseAttachProps & {
    buttonType?: "button" | undefined;
} & {
    value?: string | number | undefined;
    contentRight?: undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & Omit<import("react").ButtonHTMLAttributes<HTMLElement>, "value"> & Omit<import("react").AnchorHTMLAttributes<HTMLElement>, "type"> & import("@salutejs/plasma-new-hope/types/types").AsProps<any> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentPlacing?: ("default" | "relaxed") | undefined;
    isLoading?: boolean | undefined;
    loader?: import("react").ReactNode;
    stretch?: boolean | undefined;
    stretching?: ("auto" | "filled" | "fixed") | undefined;
    square?: boolean | undefined;
    focused?: boolean | undefined;
    disabled?: boolean | undefined;
    pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
    view?: string | undefined;
    size?: string | undefined;
    outlined?: boolean | undefined;
    shiftLeft?: boolean | undefined;
    shiftRight?: boolean | undefined;
    blur?: "small" | "medium" | "large" | undefined;
} & {
    value?: undefined;
    contentRight?: import("react").ReactNode;
} & import("@salutejs/plasma-new-hope/types/components/Attach/Attach.types").BaseAttachProps & {
    buttonType?: "button" | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & Omit<import("react").ButtonHTMLAttributes<HTMLElement>, "value"> & Omit<import("react").AnchorHTMLAttributes<HTMLElement>, "type"> & import("@salutejs/plasma-new-hope/types/types").AsProps<any> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentPlacing?: ("default" | "relaxed") | undefined;
    isLoading?: boolean | undefined;
    loader?: import("react").ReactNode;
    stretch?: boolean | undefined;
    stretching?: ("auto" | "filled" | "fixed") | undefined;
    square?: boolean | undefined;
    focused?: boolean | undefined;
    disabled?: boolean | undefined;
    pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
    view?: string | undefined;
    size?: string | undefined;
    outlined?: boolean | undefined;
    shiftLeft?: boolean | undefined;
    shiftRight?: boolean | undefined;
    blur?: "small" | "medium" | "large" | undefined;
} & {
    value?: undefined;
    contentRight?: import("react").ReactNode;
} & import("@salutejs/plasma-new-hope/types/components/Attach/Attach.types").BaseAttachProps & {
    buttonType?: "iconButton" | undefined;
    icon?: import("react").ReactNode;
} & {
    value?: string | number | undefined;
    contentRight?: undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & Omit<import("react").ButtonHTMLAttributes<HTMLElement>, "value"> & Omit<import("react").AnchorHTMLAttributes<HTMLElement>, "type"> & import("@salutejs/plasma-new-hope/types/types").AsProps<any> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentPlacing?: ("default" | "relaxed") | undefined;
    isLoading?: boolean | undefined;
    loader?: import("react").ReactNode;
    stretch?: boolean | undefined;
    stretching?: ("auto" | "filled" | "fixed") | undefined;
    square?: boolean | undefined;
    focused?: boolean | undefined;
    disabled?: boolean | undefined;
    pin?: "square-square" | "square-clear" | "clear-square" | "clear-clear" | "clear-circle" | "circle-clear" | "circle-circle" | undefined;
    view?: string | undefined;
    size?: string | undefined;
    outlined?: boolean | undefined;
    shiftLeft?: boolean | undefined;
    shiftRight?: boolean | undefined;
    blur?: "small" | "medium" | "large" | undefined;
} & {
    value?: undefined;
    contentRight?: import("react").ReactNode;
} & import("@salutejs/plasma-new-hope/types/components/Attach/Attach.types").BaseAttachProps & {
    buttonType?: "iconButton" | undefined;
    icon?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>))>;
