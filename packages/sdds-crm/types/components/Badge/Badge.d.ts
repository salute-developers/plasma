/**
 * Компонент Badge.
 */
export declare const Badge: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dark: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            light: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        pilled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        transparent: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        clear: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (import('react').HTMLAttributes<HTMLDivElement> & {
                  text?: string;
                  customColor?: string;
                  customBackgroundColor?: string;
                  maxWidth?: import('react').CSSProperties['width'];
                  size?: string;
                  view?: string;
              } & {
                  contentLeft?: import('react').ReactNode;
                  contentRight?: never;
              } & {
                  clear?: true;
                  pilled?: never;
                  transparent?: never;
              } & import('react').RefAttributes<HTMLDivElement>)
            | (import('react').HTMLAttributes<HTMLDivElement> & {
                  text?: string;
                  customColor?: string;
                  customBackgroundColor?: string;
                  maxWidth?: import('react').CSSProperties['width'];
                  size?: string;
                  view?: string;
              } & {
                  contentLeft?: import('react').ReactNode;
                  contentRight?: never;
              } & {
                  pilled?: boolean;
                  transparent?: boolean;
                  clear?: never;
              } & import('react').RefAttributes<HTMLDivElement>)
            | (import('react').HTMLAttributes<HTMLDivElement> & {
                  text?: string;
                  customColor?: string;
                  customBackgroundColor?: string;
                  maxWidth?: import('react').CSSProperties['width'];
                  size?: string;
                  view?: string;
              } & {
                  contentLeft?: never;
                  contentRight?: import('react').ReactNode;
              } & {
                  clear?: true;
                  pilled?: never;
                  transparent?: never;
              } & import('react').RefAttributes<HTMLDivElement>)
            | (import('react').HTMLAttributes<HTMLDivElement> & {
                  text?: string;
                  customColor?: string;
                  customBackgroundColor?: string;
                  maxWidth?: import('react').CSSProperties['width'];
                  size?: string;
                  view?: string;
              } & {
                  contentLeft?: never;
                  contentRight?: import('react').ReactNode;
              } & {
                  pilled?: boolean;
                  transparent?: boolean;
                  clear?: never;
              } & import('react').RefAttributes<HTMLDivElement>)
        )
>;
