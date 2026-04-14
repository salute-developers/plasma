/**
 * Группа TextField.
 */
export declare const TextFieldGroup: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        orientation: {
            horizontal: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            vertical: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        gap: {
            none: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            dense: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            wide: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        shape: {
            segmented: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        stretching: {
            auto: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            filled: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (import('react').HTMLAttributes<HTMLDivElement> & {
                  orientation?: import('@salutejs/plasma-new-hope/types/components/TextFieldGroup/TextFieldGroup.types.js').Orientation;
                  stretching?: 'auto' | 'filled';
                  size?: string;
                  isCommonTextFieldStyles?: boolean;
              } & {
                  gap?: 'none' | 'dense';
                  shape?: 'segmented';
              } & import('react').RefAttributes<HTMLDivElement>)
            | (import('react').HTMLAttributes<HTMLDivElement> & {
                  orientation?: import('@salutejs/plasma-new-hope/types/components/TextFieldGroup/TextFieldGroup.types.js').Orientation;
                  stretching?: 'auto' | 'filled';
                  size?: string;
                  isCommonTextFieldStyles?: boolean;
              } & {
                  gap?: 'dense' | 'wide';
                  shape?: 'default';
              } & import('react').RefAttributes<HTMLDivElement>)
        )
>;
