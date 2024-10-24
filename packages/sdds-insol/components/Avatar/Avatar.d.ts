/// <reference types="react" />
declare const mergedConfig: import("@salutejs/plasma-new-hope/styled-components").ComponentConfig<string, {
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        xxl: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        fit: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    focused: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}, import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        xxl: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        fit: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    focused: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}>, import("react").HTMLAttributes<HTMLDivElement> & {
    size: "xxl" | "s" | "m" | "l" | "fit";
    name?: string | undefined;
    url?: string | undefined;
    customText?: string | undefined;
    status?: "active" | "inactive" | undefined;
    isScalable?: boolean | undefined;
    focused?: boolean | undefined;
    statusLabels?: import("@salutejs/plasma-new-hope/types/components/Avatar/Avatar.types").StatusLabels | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
declare const Avatar: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        xxl: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        fit: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    focused: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("react").HTMLAttributes<HTMLDivElement> & {
    size: "xxl" | "s" | "m" | "l" | "fit";
    name?: string | undefined;
    url?: string | undefined;
    customText?: string | undefined;
    status?: "active" | "inactive" | undefined;
    isScalable?: boolean | undefined;
    focused?: boolean | undefined;
    statusLabels?: import("@salutejs/plasma-new-hope/types/components/Avatar/Avatar.types").StatusLabels | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export { Avatar, mergedConfig };
