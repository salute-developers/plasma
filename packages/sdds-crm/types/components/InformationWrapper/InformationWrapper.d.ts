export declare const InformationWrapper: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        hintView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        hintSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | ({
                  hasRequiredIndicator?: boolean;
                  requiredIndicatorPlacement?: 'right' | 'left';
                  optional?: boolean;
                  optionalText?: string;
                  label?: string;
                  labelPlacement?: 'top' | 'left';
                  labelHtmlFor?: string | undefined;
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  size?: string;
                  view?: string;
                  disabled?: boolean;
                  readOnly?: boolean;
              } & {
                  hintText: string;
                  hintTrigger?: 'hover' | 'click';
                  hintOpened?: boolean;
                  hintView?: string;
                  hintSize?: string;
                  hintTargetIcon?: import('react').ReactNode;
                  hintPlacement?:
                      | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                      | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                  hintHasArrow?: boolean;
                  hintOffset?: [number, number];
                  hintWidth?: string;
                  hintContentLeft?: import('react').ReactNode;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<HTMLDivElement>)
            | ({
                  hasRequiredIndicator?: boolean;
                  requiredIndicatorPlacement?: 'right' | 'left';
                  optional?: boolean;
                  optionalText?: string;
                  label?: string;
                  labelPlacement?: 'top' | 'left';
                  labelHtmlFor?: string | undefined;
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  size?: string;
                  view?: string;
                  disabled?: boolean;
                  readOnly?: boolean;
              } & {
                  hintText?: never;
                  hintOpened?: never;
                  hintTrigger?: never;
                  hintView?: never;
                  hintSize?: never;
                  hintTargetIcon?: never;
                  hintPlacement?: never;
                  hintHasArrow?: never;
                  hintOffset?: never;
                  hintWidth?: never;
                  hintContentLeft?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<HTMLDivElement>)
        )
>;
