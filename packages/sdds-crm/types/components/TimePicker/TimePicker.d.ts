export declare const TimePicker: import('react').FunctionComponent<
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
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        hintView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        hintSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        readonly: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | ({
                  dropdownAlign?: 'left' | 'right';
                  dropdownWidth?: 'auto' | 'fullWidth' | import('react').CSSProperties['width'];
                  dropdownHeight?: import('react').CSSProperties['height'];
                  columnsQuantity?: 2 | 3;
                  size?: string;
                  view?: string;
                  disabled?: boolean;
                  readonly?: boolean;
                  stretched?: boolean;
              } & {
                  requiredPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  value?: string;
                  defaultValue?: Date;
                  placeholder?: string;
                  valueError?: boolean;
                  valueSuccess?: boolean;
                  leftHelper?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  autoComplete?: string;
                  onChange?: (
                      event: import('@salutejs/plasma-new-hope/types/components/TimePicker/TimePicker.types.js').TimePickerChangeEvent,
                  ) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      hintText: string;
                      hintTrigger?: 'hover' | 'click';
                      hintView?: string;
                      hintSize?: string;
                      hintTargetIcon?: import('react').ReactNode;
                      hintTargetPlacement?: 'inner' | 'outer';
                      hintPlacement?:
                          | import('@salutejs/plasma-new-hope/styled-components').PopoverPlacement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').PopoverPlacementBasic>;
                      hintHasArrow?: boolean;
                      hintOffset?: [number, number];
                      hintWidth?: string;
                      hintContentLeft?: import('react').ReactNode;
                  } & import('@salutejs/plasma-new-hope/types/components/TimePicker/TimePicker.types.js').TimePickerPopoverProps &
                  Omit<import('react').HTMLAttributes<HTMLDivElement>, 'defaultValue'> &
                  import('react').RefAttributes<HTMLDivElement>)
            | ({
                  dropdownAlign?: 'left' | 'right';
                  dropdownWidth?: 'auto' | 'fullWidth' | import('react').CSSProperties['width'];
                  dropdownHeight?: import('react').CSSProperties['height'];
                  columnsQuantity?: 2 | 3;
                  size?: string;
                  view?: string;
                  disabled?: boolean;
                  readonly?: boolean;
                  stretched?: boolean;
              } & {
                  requiredPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  value?: string;
                  defaultValue?: Date;
                  placeholder?: string;
                  valueError?: boolean;
                  valueSuccess?: boolean;
                  leftHelper?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  autoComplete?: string;
                  onChange?: (
                      event: import('@salutejs/plasma-new-hope/types/components/TimePicker/TimePicker.types.js').TimePickerChangeEvent,
                  ) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps & {
                      hintTrigger?: never;
                      hintText?: never;
                      hintView?: never;
                      hintSize?: never;
                      hintTargetIcon?: never;
                      hintTargetPlacement?: never;
                      hintPlacement?: never;
                      hintHasArrow?: never;
                      hintOffset?: never;
                      hintWidth?: never;
                      hintContentLeft?: never;
                  } & import('@salutejs/plasma-new-hope/types/components/TimePicker/TimePicker.types.js').TimePickerPopoverProps &
                  Omit<import('react').HTMLAttributes<HTMLDivElement>, 'defaultValue'> &
                  import('react').RefAttributes<HTMLDivElement>)
        )
>;
