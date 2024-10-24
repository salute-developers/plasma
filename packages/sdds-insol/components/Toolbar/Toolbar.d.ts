/// <reference types="react" />
/**
 * Компонент Toolbar.
 */
export declare const Toolbar: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("react").HTMLAttributes<HTMLDivElement> & {
    children: import("react").ReactNode;
    orientation?: "horizontal" | "vertical" | undefined;
    hasShadow?: boolean | undefined;
    size?: string | undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export declare const ToolbarDivider: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<import("@salutejs/plasma-new-hope/types/engines/types").Variants> & import("@salutejs/plasma-new-hope/styled-components").DividerProps & import("react").RefAttributes<HTMLDivElement>>;
