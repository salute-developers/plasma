/**
 * CodeInput
 */
export declare const CodeInput: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> & {
        view?: string;
        size?: string;
        placeholder?: string;
        autoFocus?: boolean;
        codeLength?: 4 | 5 | 6;
        caption?: React.ReactNode;
        captionAlign?: 'left' | 'center';
        hidden?: boolean;
        disabled?: boolean;
        width?: React.CSSProperties['width'];
        allowedSymbols?: string | RegExp;
        itemErrorBehavior?: import('@salutejs/plasma-new-hope/types/components/CodeInput/CodeInput.types.js').ItemErrorBehavior;
        codeErrorBehavior?: import('@salutejs/plasma-new-hope/types/components/CodeInput/CodeInput.types.js').CodeErrorBehavior;
        isError?: boolean;
        setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
        onChange?: (value: string) => void;
        onFullCodeEnter?: (code: string) => void;
    } & Pick<import('react').InputHTMLAttributes<HTMLInputElement>, 'aria-label' | 'autoComplete'> &
        Omit<import('react').HTMLAttributes<HTMLDivElement>, 'onChange'> &
        import('react').RefAttributes<HTMLInputElement>
>;
