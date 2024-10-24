/// <reference types="react" />
/**
 * Компонент Badge.
 */
export declare const Badge: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        accent: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        dark: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        light: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    pilled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    transparent: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & ((import("react").HTMLAttributes<HTMLDivElement> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    size?: string | undefined;
    view?: string | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    clear?: true | undefined;
    pilled?: false | undefined;
    transparent?: false | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    size?: string | undefined;
    view?: string | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    pilled?: true | undefined;
    transparent?: boolean | undefined;
    clear?: false | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & {
    text?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    size?: string | undefined;
    view?: string | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    pilled?: boolean | undefined;
    transparent?: true | undefined;
    clear?: false | undefined;
} & import("react").RefAttributes<HTMLDivElement>))>;
