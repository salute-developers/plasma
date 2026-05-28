export declare const Note: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            info: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> & {
        title?: React.ReactNode;
        text?: React.ReactNode;
        contentBefore?: React.ReactNode;
        contentBeforeSizing?: 'fixed' | 'scalable';
        stretch?: boolean;
        width?: string | number;
        height?: string | number;
        view?: string;
        size?: string;
        hasClose?: boolean;
        onCloseButtonClick?: () => void;
    } & import('react').HTMLAttributes<HTMLDivElement> &
        import('react').RefAttributes<HTMLDivElement>
>;
