/// <reference types="react" />
/**
 * Группа TextField.
 */
export declare const TextFieldGroup: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    orientation: {
        horizontal: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        vertical: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    gap: {
        none: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        dense: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        wide: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    shape: {
        segmented: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    stretching: {
        auto: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        filled: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & ((import("react").HTMLAttributes<HTMLDivElement> & {
    orientation?: import("@salutejs/plasma-new-hope/types/components/TextFieldGroup/TextFieldGroup.types").Orientation | undefined;
    stretching?: ("auto" | "filled") | undefined;
    size?: string | undefined;
    isCommonTextFieldStyles?: boolean | undefined;
} & {
    gap?: "none" | "dense" | undefined;
    shape?: "segmented" | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("react").HTMLAttributes<HTMLDivElement> & {
    orientation?: import("@salutejs/plasma-new-hope/types/components/TextFieldGroup/TextFieldGroup.types").Orientation | undefined;
    stretching?: ("auto" | "filled") | undefined;
    size?: string | undefined;
    isCommonTextFieldStyles?: boolean | undefined;
} & {
    gap?: "dense" | "wide" | undefined;
    shape?: "default" | undefined;
} & import("react").RefAttributes<HTMLDivElement>))>;
