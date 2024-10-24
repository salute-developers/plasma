/// <reference types="react" />
/**
 * Кнопка.
 */
export declare const Cell: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & (({
    size?: string | undefined;
    view?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    alignContentLeft?: import("@salutejs/plasma-new-hope/types/components/Cell/Cell.types").AlignProp | undefined;
    alignContentRight?: import("@salutejs/plasma-new-hope/types/components/Cell/Cell.types").AlignProp | undefined;
    stretching?: "auto" | "filled" | "fixed" | undefined;
    content?: import("react").ReactNode;
    description?: string | undefined;
} & {
    title?: string | undefined;
    subtitle?: string | undefined;
    label?: string | undefined;
    children?: undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>) | ({
    size?: string | undefined;
    view?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    alignContentLeft?: import("@salutejs/plasma-new-hope/types/components/Cell/Cell.types").AlignProp | undefined;
    alignContentRight?: import("@salutejs/plasma-new-hope/types/components/Cell/Cell.types").AlignProp | undefined;
    stretching?: "auto" | "filled" | "fixed" | undefined;
    content?: import("react").ReactNode;
    description?: string | undefined;
} & {
    title?: undefined;
    subtitle?: undefined;
    label?: undefined;
    children?: import("react").ReactNode;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>))>;
