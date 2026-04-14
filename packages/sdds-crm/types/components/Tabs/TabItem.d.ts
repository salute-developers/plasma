import React, { ComponentProps } from 'react';

declare const HorizontalTabItem: React.FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            clear: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            divider: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h6: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h5: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h4: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h3: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h2: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h1: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        pilled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        truncate: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (import('@salutejs/plasma-new-hope/styled-components').BaseTabItemProps & {
                  orientation?: 'horizontal';
                  contentLeft?: React.ReactNode;
                  pilled?: boolean;
                  animated?: boolean;
                  view?: string;
                  size?: 'xs' | 's' | 'm' | 'l';
                  isActive?: boolean;
              } & {
                  value?: string | number;
                  contentRight?: never;
              } & React.RefAttributes<HTMLButtonElement>)
            | (import('@salutejs/plasma-new-hope/styled-components').BaseTabItemProps & {
                  orientation?: 'horizontal';
                  contentLeft?: React.ReactNode;
                  pilled?: boolean;
                  animated?: boolean;
                  view?: string;
                  size?: 'xs' | 's' | 'm' | 'l';
                  isActive?: boolean;
              } & {
                  value?: never;
                  contentRight?: React.ReactNode;
              } & React.RefAttributes<HTMLButtonElement>)
            | (import('@salutejs/plasma-new-hope/styled-components').BaseTabItemProps & {
                  orientation?: 'horizontal';
                  contentLeft?: never;
                  pilled?: never;
                  animated?: never;
                  view?: string;
                  size: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
                  isActive?: never;
              } & {
                  value?: string | number;
                  contentRight?: never;
              } & React.RefAttributes<HTMLButtonElement>)
        )
>;
declare const HorizontalIconTabItem: React.FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            clear: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            divider: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h6: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h5: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h4: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h3: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h2: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h1: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        Omit<
            import('@salutejs/plasma-new-hope/styled-components').BaseTabItemProps,
            'contentRight' | 'value' | 'maxItemWidth'
        > &
        import('@salutejs/plasma-new-hope/types/components/Tabs/TabItem.types.js').CustomHorizontalIconTabItemProps &
        React.RefAttributes<HTMLButtonElement>
>;
declare const VerticalTabItem: React.FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            divider: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        truncate: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (import('@salutejs/plasma-new-hope/styled-components').BaseTabItemProps & {
                  orientation: 'vertical';
                  contentLeft?: React.ReactNode;
                  view?: string;
                  size?: string;
              } & {
                  value?: string | number;
                  contentRight?: never;
              } & React.RefAttributes<HTMLButtonElement>)
            | (import('@salutejs/plasma-new-hope/styled-components').BaseTabItemProps & {
                  orientation: 'vertical';
                  contentLeft?: React.ReactNode;
                  view?: string;
                  size?: string;
              } & {
                  value?: never;
                  contentRight?: React.ReactNode;
              } & React.RefAttributes<HTMLButtonElement>)
        )
>;
declare const VerticalIconTabItem: React.FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            divider: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        Omit<
            import('@salutejs/plasma-new-hope/styled-components').BaseTabItemProps,
            'contentRight' | 'value' | 'maxItemWidth'
        > &
        import('@salutejs/plasma-new-hope/types/components/Tabs/TabItem.types.js').CustomVerticalIconTabItemProps &
        React.RefAttributes<HTMLButtonElement>
>;
export type HorizontalTabItemProps = ComponentProps<typeof HorizontalTabItem>;
export type VerticalTabItemProps = ComponentProps<typeof VerticalTabItem>;
export type TabItemProps = HorizontalTabItemProps | VerticalTabItemProps;
/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export declare const TabItem: (
    props: TabItemProps & React.RefAttributes<HTMLButtonElement>,
) => React.ReactElement | null;
export type HorizontalIconTabItemProps = ComponentProps<typeof HorizontalIconTabItem>;
export type VerticalIconTabItemProps = ComponentProps<typeof VerticalIconTabItem>;
export type IconTabItemProps = HorizontalIconTabItemProps | VerticalIconTabItemProps;
export declare const IconTabItem: (
    props: IconTabItemProps & React.RefAttributes<HTMLButtonElement>,
) => React.ReactElement | null;
export {};
