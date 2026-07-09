/**
 * Кнопка.
 */
export declare const Cell: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | ({
                  size?: string;
                  view?: string;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  alignContentLeft?: import('@salutejs/plasma-new-hope/types/components/Cell/Cell.types.js').AlignProp;
                  alignContentRight?: import('@salutejs/plasma-new-hope/types/components/Cell/Cell.types.js').AlignProp;
                  stretching?: 'fixed' | 'filled' | 'auto';
                  content?: import('react').ReactNode;
                  description?: string;
              } & {
                  title?: string;
                  subtitle?: string;
                  label?: string;
                  children?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<HTMLDivElement>)
            | ({
                  size?: string;
                  view?: string;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  alignContentLeft?: import('@salutejs/plasma-new-hope/types/components/Cell/Cell.types.js').AlignProp;
                  alignContentRight?: import('@salutejs/plasma-new-hope/types/components/Cell/Cell.types.js').AlignProp;
                  stretching?: 'fixed' | 'filled' | 'auto';
                  content?: import('react').ReactNode;
                  description?: string;
              } & {
                  title?: never;
                  subtitle?: never;
                  label?: never;
                  children?: import('react').ReactNode;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<HTMLDivElement>)
        )
>;
