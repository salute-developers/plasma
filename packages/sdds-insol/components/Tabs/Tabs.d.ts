import React, { ComponentProps } from 'react';
declare const HorizontalTabs: React.FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        clear: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        filled: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        divider: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
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
    stretch: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    pilled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & ((import("@salutejs/plasma-new-hope/styled-components").BaseTabsProps & import("@salutejs/plasma-new-hope/types/components/Tabs/Tabs.types").CustomHorizontalTabsProps & React.RefAttributes<HTMLDivElement>) | (import("@salutejs/plasma-new-hope/styled-components").BaseTabsProps & import("@salutejs/plasma-new-hope/types/components/Tabs/Tabs.types").CustomHeaderTabsProps & React.RefAttributes<HTMLDivElement>))>;
declare const VerticalTabs: React.FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        divider: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    stretch: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("@salutejs/plasma-new-hope/styled-components").BaseTabsProps & import("@salutejs/plasma-new-hope/types/components/Tabs/Tabs.types").CustomVerticalTabsProps & React.RefAttributes<HTMLDivElement>>;
declare type TabsProps = ComponentProps<typeof HorizontalTabs> | ComponentProps<typeof VerticalTabs>;
/**
 * Контейнер вкладок, основной компонент для пользовательской сборки вкладок.
 */
export declare const Tabs: (props: TabsProps) => JSX.Element;
export {};
