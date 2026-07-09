/**
 * Кнопка с иконкой.
 */
export declare const IconButton: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            clear: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            success: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            critical: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            black: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            white: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        focused: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: string | number;
                      contentRight?: never;
                  } & import('react').RefAttributes<HTMLButtonElement>)
            | (Omit<import('react').ButtonHTMLAttributes<HTMLElement>, 'value'> &
                  import('@salutejs/plasma-new-hope/styled-components').AsProps & {
                      text?: string;
                      contentLeft?: import('react').ReactNode;
                      contentPlacing?: 'default' | 'relaxed';
                      additionalContent?: import('react').ReactNode;
                      isLoading?: boolean;
                      loader?: import('react').ReactNode;
                      stretch?: boolean;
                      stretching?: 'auto' | 'filled' | 'fixed';
                      square?: boolean;
                      focused?: boolean;
                      disabled?: boolean;
                      pin?: import('@salutejs/plasma-new-hope/types/utils/roundness.js').Pin;
                      appearance?: 'default' | 'outline';
                      view?: string;
                      size?: string;
                      outlined?: boolean;
                      shiftLeft?: boolean;
                      shiftRight?: boolean;
                      blur?: import('@salutejs/plasma-new-hope/styled-components').Blur;
                  } & {
                      value?: never;
                      contentRight?: import('react').ReactNode;
                  } & import('react').RefAttributes<HTMLButtonElement>)
        )
>;
