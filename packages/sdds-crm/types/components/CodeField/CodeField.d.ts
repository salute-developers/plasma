export declare const CodeField: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        shape: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            segmented: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> & {
        value?: string;
        placeholder?: string;
        autoFocus?: boolean;
        codeLength?: 4 | 5 | 6;
        caption?: React.ReactNode;
        captionAlign?: 'left' | 'center';
        width?: string | number;
        shape?: 'default' | 'segmented';
        view?: string;
        size?: string;
        disabled?: boolean;
        isError?: boolean;
        setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
        allowedSymbols?: string | RegExp;
        itemErrorBehavior?: import('@salutejs/plasma-new-hope/types/components/CodeField/CodeField.types.js').ItemErrorBehavior;
        codeErrorBehavior?: import('@salutejs/plasma-new-hope/types/components/CodeField/CodeField.types.js').CodeErrorBehavior;
        onChange?: (value: string) => void;
        onFullCodeEnter?: (code: string) => void;
    } & Pick<import('react').InputHTMLAttributes<HTMLInputElement>, 'aria-label' | 'autoComplete'> &
        Omit<import('react').HTMLAttributes<HTMLDivElement>, 'onChange'> &
        import('react').RefAttributes<HTMLInputElement>
>;
