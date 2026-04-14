/**
 * Компонент Toolbar.
 */
export declare const Toolbar: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        import('react').HTMLAttributes<HTMLDivElement> & {
            children: React.ReactNode;
            orientation?: 'vertical' | 'horizontal';
            hasShadow?: boolean;
            size?: string;
            view?: string;
        } & import('react').RefAttributes<HTMLDivElement>
>;
export declare const ToolbarDivider: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<
        import('@salutejs/plasma-new-hope/types/engines/types.js').Variants
    > &
        import('@salutejs/plasma-new-hope/styled-components').DividerProps &
        import('react').RefAttributes<HTMLDivElement>
>;
