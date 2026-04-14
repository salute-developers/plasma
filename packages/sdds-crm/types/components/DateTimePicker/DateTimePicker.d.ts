export declare const DateTimePicker: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
        eventTooltipSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        readOnly: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | ({
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  dateFormat?: string;
                  timeFormat?: string;
                  dateTimeSeparator?: string;
                  maskWithFormat?: boolean;
                  isDouble?: boolean;
                  dateOnTimeSelectOnly?: Date;
                  dateShortcuts?: import('@salutejs/plasma-new-hope/types/components/DateTimePicker/DateTimePicker.types.js').DateShortcutItem[];
                  dateShortcutsWidth?: import('react').CSSProperties['width'];
                  dateShortcutsPlacement?: 'right' | 'left';
              } & Omit<
                      import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps,
                      'format' | 'maskWithFormat' | 'calendarContainerWidth' | 'calendarContainerHeight'
                  > &
                  Omit<
                      import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps,
                      'isOpen' | 'closeAfterDateSelect'
                  > &
                  Pick<
                      import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps,
                      'calendarContainerWidth' | 'calendarContainerHeight'
                  > & {
                      onCommitDate?: (
                          value: string,
                          formattedValues: import('@salutejs/plasma-new-hope/types/components/DateTimePicker/DateTimePicker.types.js').FormattedValues,
                      ) => void;
                      onChangeValue?: (
                          event: import('react').SyntheticEvent<HTMLInputElement> | null,
                          value?: string,
                          formattedValues?: Omit<
                              import('@salutejs/plasma-new-hope/types/components/DateTimePicker/DateTimePicker.types.js').FormattedValues,
                              'quarterInfo'
                          >,
                      ) => void;
                      onSearch?: (event?: import('react').KeyboardEvent<HTMLInputElement>, value?: string) => void;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerTextFieldProps,
                      'onChange' | 'onChangeValue' | 'onCommitDate'
                  > &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size' | 'defaultValue' | 'value'> & {
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
                  } & import('react').RefAttributes<HTMLInputElement>)
            | ({
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  dateFormat?: string;
                  timeFormat?: string;
                  dateTimeSeparator?: string;
                  maskWithFormat?: boolean;
                  isDouble?: boolean;
                  dateOnTimeSelectOnly?: Date;
                  dateShortcuts?: import('@salutejs/plasma-new-hope/types/components/DateTimePicker/DateTimePicker.types.js').DateShortcutItem[];
                  dateShortcutsWidth?: import('react').CSSProperties['width'];
                  dateShortcutsPlacement?: 'right' | 'left';
              } & Omit<
                      import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps,
                      'format' | 'maskWithFormat' | 'calendarContainerWidth' | 'calendarContainerHeight'
                  > &
                  Omit<
                      import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps,
                      'isOpen' | 'closeAfterDateSelect'
                  > &
                  Pick<
                      import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps,
                      'calendarContainerWidth' | 'calendarContainerHeight'
                  > & {
                      onCommitDate?: (
                          value: string,
                          formattedValues: import('@salutejs/plasma-new-hope/types/components/DateTimePicker/DateTimePicker.types.js').FormattedValues,
                      ) => void;
                      onChangeValue?: (
                          event: import('react').SyntheticEvent<HTMLInputElement> | null,
                          value?: string,
                          formattedValues?: Omit<
                              import('@salutejs/plasma-new-hope/types/components/DateTimePicker/DateTimePicker.types.js').FormattedValues,
                              'quarterInfo'
                          >,
                      ) => void;
                      onSearch?: (event?: import('react').KeyboardEvent<HTMLInputElement>, value?: string) => void;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerTextFieldProps,
                      'onChange' | 'onChangeValue' | 'onCommitDate'
                  > &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size' | 'defaultValue' | 'value'> & {
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
                  } & import('react').RefAttributes<HTMLInputElement>)
        )
>;
