import React, { ComponentProps } from 'react';
declare const HorizontalTabItem: React.FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        clear: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        secondary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        divider: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        h5: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        h4: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        h3: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        h2: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        h1: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    pilled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & ((import("@salutejs/plasma-new-hope/styled-components").BaseTabItemProps & {
    orientation?: "horizontal" | undefined;
    contentLeft?: React.ReactNode;
    pilled?: boolean | undefined;
    animated?: boolean | undefined;
    view?: string | undefined;
    size?: "s" | "m" | "l" | "xs" | undefined;
    isActive?: boolean | undefined;
} & {
    value?: string | number | undefined;
    contentRight?: undefined;
} & React.RefAttributes<HTMLDivElement>) | (import("@salutejs/plasma-new-hope/styled-components").BaseTabItemProps & {
    orientation?: "horizontal" | undefined;
    contentLeft?: React.ReactNode;
    pilled?: boolean | undefined;
    animated?: boolean | undefined;
    view?: string | undefined;
    size?: "s" | "m" | "l" | "xs" | undefined;
    isActive?: boolean | undefined;
} & {
    value?: undefined;
    contentRight?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>) | (import("@salutejs/plasma-new-hope/styled-components").BaseTabItemProps & {
    orientation?: "horizontal" | undefined;
    contentLeft?: undefined;
    pilled?: undefined;
    animated?: undefined;
    view?: string | undefined;
    size: "h1" | "h2" | "h3" | "h4" | "h5";
    isActive?: undefined;
} & {
    value?: string | number | undefined;
    contentRight?: undefined;
} & React.RefAttributes<HTMLDivElement>))>;
declare const VerticalTabItem: React.FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        divider: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & ((import("@salutejs/plasma-new-hope/styled-components").BaseTabItemProps & {
    orientation: "vertical";
    contentLeft?: React.ReactNode;
    view?: string | undefined;
    size?: string | undefined;
} & {
    value?: string | number | undefined;
    contentRight?: undefined;
} & React.RefAttributes<HTMLButtonElement>) | (import("@salutejs/plasma-new-hope/styled-components").BaseTabItemProps & {
    orientation: "vertical";
    contentLeft?: React.ReactNode;
    view?: string | undefined;
    size?: string | undefined;
} & {
    value?: undefined;
    contentRight?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>))>;
declare type TabItemProps = ComponentProps<typeof HorizontalTabItem> | ComponentProps<typeof VerticalTabItem>;
/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export declare const TabItem: (props: TabItemProps) => JSX.Element;
export {};
