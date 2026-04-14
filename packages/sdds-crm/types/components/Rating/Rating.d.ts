export declare const Rating: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xxs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h1: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h2: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h3: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h4: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h5: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            h6: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            displayL: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            displayM: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            displayS: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> & {
        value?: number | null;
        hasValue?: boolean;
        precision?: number;
        valuePlacement?: 'before' | 'after';
        iconSlot?: React.ReactNode;
        iconSlotOutline?: React.ReactNode;
        iconSlotHalf?: React.ReactNode;
        hasIcons?: boolean;
        iconQuantity?: 1 | 5 | 10;
        helperText?: string;
        helperTextStretching?: 'fixed' | 'filled';
        size?: string;
        view?: string;
    } & import('react').HTMLAttributes<HTMLDivElement> &
        import('react').RefAttributes<HTMLInputElement>
>;
