export declare const DatePickerDefault: import('react').FunctionComponent<
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
        eventTooltipSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
        readOnly: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerVariationProps & {
                  titleCaption?: import('react').ReactNode;
                  requiredPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  value?: Date | string;
                  preserveInvalidOnBlur?: boolean;
                  defaultDate?: Date;
                  placeholder?: string;
                  name?: string;
                  valueError?: boolean;
                  valueSuccess?: boolean;
                  leftHelper?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  autoComplete?: string;
                  onCommitDate?: import('@salutejs/plasma-new-hope/styled-components').OnCommitDateCallback;
                  onChangeValue?: (
                      event: import('react').SyntheticEvent<HTMLInputElement> | null,
                      value?: string,
                      originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType,
                      isoDate?: string,
                  ) => void;
                  onChange?: (event: {
                      target: {
                          value?: string;
                          name?: string;
                          originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType;
                          isoDate?: string;
                      };
                  }) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps & {
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
                  } & Omit<import('react').HTMLAttributes<HTMLDivElement>, 'defaultValue'> &
                  import('react').RefAttributes<HTMLInputElement>)
            | (import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerVariationProps & {
                  titleCaption?: import('react').ReactNode;
                  requiredPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  value?: Date | string;
                  preserveInvalidOnBlur?: boolean;
                  defaultDate?: Date;
                  placeholder?: string;
                  name?: string;
                  valueError?: boolean;
                  valueSuccess?: boolean;
                  leftHelper?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  autoComplete?: string;
                  onCommitDate?: import('@salutejs/plasma-new-hope/styled-components').OnCommitDateCallback;
                  onChangeValue?: (
                      event: import('react').SyntheticEvent<HTMLInputElement> | null,
                      value?: string,
                      originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType,
                      isoDate?: string,
                  ) => void;
                  onChange?: (event: {
                      target: {
                          value?: string;
                          name?: string;
                          originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType;
                          isoDate?: string;
                      };
                  }) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps & {
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
                  } & Omit<import('react').HTMLAttributes<HTMLDivElement>, 'defaultValue'> &
                  import('react').RefAttributes<HTMLInputElement>)
        )
>;
export declare const DatePickerClear: import('react').FunctionComponent<
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
        eventTooltipSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
        readOnly: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerVariationProps & {
                  titleCaption?: import('react').ReactNode;
                  requiredPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  value?: Date | string;
                  preserveInvalidOnBlur?: boolean;
                  defaultDate?: Date;
                  placeholder?: string;
                  name?: string;
                  valueError?: boolean;
                  valueSuccess?: boolean;
                  leftHelper?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  autoComplete?: string;
                  onCommitDate?: import('@salutejs/plasma-new-hope/styled-components').OnCommitDateCallback;
                  onChangeValue?: (
                      event: import('react').SyntheticEvent<HTMLInputElement> | null,
                      value?: string,
                      originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType,
                      isoDate?: string,
                  ) => void;
                  onChange?: (event: {
                      target: {
                          value?: string;
                          name?: string;
                          originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType;
                          isoDate?: string;
                      };
                  }) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps & {
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
                  } & Omit<import('react').HTMLAttributes<HTMLDivElement>, 'defaultValue'> &
                  import('react').RefAttributes<HTMLInputElement>)
            | (import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerVariationProps & {
                  titleCaption?: import('react').ReactNode;
                  requiredPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  value?: Date | string;
                  preserveInvalidOnBlur?: boolean;
                  defaultDate?: Date;
                  placeholder?: string;
                  name?: string;
                  valueError?: boolean;
                  valueSuccess?: boolean;
                  leftHelper?: string;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  autoComplete?: string;
                  onCommitDate?: import('@salutejs/plasma-new-hope/styled-components').OnCommitDateCallback;
                  onChangeValue?: (
                      event: import('react').SyntheticEvent<HTMLInputElement> | null,
                      value?: string,
                      originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType,
                      isoDate?: string,
                  ) => void;
                  onChange?: (event: {
                      target: {
                          value?: string;
                          name?: string;
                          originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType;
                          isoDate?: string;
                      };
                  }) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps & {
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
                  } & Omit<import('react').HTMLAttributes<HTMLDivElement>, 'defaultValue'> &
                  import('react').RefAttributes<HTMLInputElement>)
        )
>;
export declare const DatePicker: import('react').ForwardRefExoticComponent<
    (
        | Omit<
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
                  eventTooltipSize: {
                      m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
                  readOnly: {
                      true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
              }> &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerVariationProps & {
                      titleCaption?: import('react').ReactNode;
                      requiredPlacement?: 'left' | 'right';
                      required?: boolean;
                      hasRequiredIndicator?: boolean;
                      value?: Date | string;
                      preserveInvalidOnBlur?: boolean;
                      defaultDate?: Date;
                      placeholder?: string;
                      name?: string;
                      valueError?: boolean;
                      valueSuccess?: boolean;
                      leftHelper?: string;
                      contentLeft?: React.ReactElement;
                      contentRight?: React.ReactElement;
                      textBefore?: string;
                      textAfter?: string;
                      autoComplete?: string;
                      onCommitDate?: import('@salutejs/plasma-new-hope/styled-components').OnCommitDateCallback;
                      onChangeValue?: (
                          event: import('react').SyntheticEvent<HTMLInputElement> | null,
                          value?: string,
                          originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType,
                          isoDate?: string,
                      ) => void;
                      onChange?: (event: {
                          target: {
                              value?: string;
                              name?: string;
                              originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType;
                              isoDate?: string;
                          };
                      }) => void;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps & {
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
                  } & Omit<import('react').HTMLAttributes<HTMLDivElement>, 'defaultValue'> &
                  import('react').RefAttributes<HTMLInputElement>,
              'ref'
          >
        | Omit<
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
                  eventTooltipSize: {
                      m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
                  readOnly: {
                      true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
              }> &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerVariationProps & {
                      titleCaption?: import('react').ReactNode;
                      requiredPlacement?: 'left' | 'right';
                      required?: boolean;
                      hasRequiredIndicator?: boolean;
                      value?: Date | string;
                      preserveInvalidOnBlur?: boolean;
                      defaultDate?: Date;
                      placeholder?: string;
                      name?: string;
                      valueError?: boolean;
                      valueSuccess?: boolean;
                      leftHelper?: string;
                      contentLeft?: React.ReactElement;
                      contentRight?: React.ReactElement;
                      textBefore?: string;
                      textAfter?: string;
                      autoComplete?: string;
                      onCommitDate?: import('@salutejs/plasma-new-hope/styled-components').OnCommitDateCallback;
                      onChangeValue?: (
                          event: import('react').SyntheticEvent<HTMLInputElement> | null,
                          value?: string,
                          originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType,
                          isoDate?: string,
                      ) => void;
                      onChange?: (event: {
                          target: {
                              value?: string;
                              name?: string;
                              originalDate?: import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType;
                              isoDate?: string;
                          };
                      }) => void;
                  } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps &
                  import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps & {
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
                  } & Omit<import('react').HTMLAttributes<HTMLDivElement>, 'defaultValue'> &
                  import('react').RefAttributes<HTMLInputElement>,
              'ref'
          >
    ) &
        import('react').RefAttributes<HTMLElement>
>;
export declare const DatePickerRangeDefault: import('react').FunctionComponent<
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
        eventTooltipSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
        readOnly: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerVariationProps & {
            requiredPlacement?: 'left' | 'right';
            required?: boolean;
            hasRequiredIndicator?: boolean;
            value?: [
                import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType | string,
                import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType | string,
            ];
            preserveInvalidOnBlur?: boolean;
            defaultFirstDate?: Date;
            defaultSecondDate?: Date;
            name?: string;
            onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').ChangeInstanceCallback;
            onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').ChangeInstanceCallback;
            onCommitFirstDate?: import('@salutejs/plasma-new-hope/styled-components').CommitInstanceCallback;
            onCommitSecondDate?: import('@salutejs/plasma-new-hope/styled-components').CommitInstanceCallback;
            onChange?: (event: {
                target: {
                    value?: string;
                    name?: string;
                };
            }) => void;
        } & {
            size?: string | undefined;
            disabled?: boolean | undefined;
            autoComplete?: string | undefined;
            readOnly?: boolean | undefined;
            required?: boolean | undefined;
            label?: string | undefined;
            view?: string | undefined;
            contentLeft?: React.ReactNode;
            appearance?: 'default' | 'clear' | undefined;
            contentRight?: React.ReactNode;
            hintText?: string | undefined;
            hintTrigger?: ('hover' | 'click') | undefined;
            hintTargetIcon?: React.ReactNode;
            hintPlacement?:
                | (
                      | import('@salutejs/plasma-new-hope/styled-components').Placement
                      | Array<import('@salutejs/plasma-new-hope/styled-components').ComputedPlacement>
                  )
                | undefined;
            hintHasArrow?: boolean | undefined;
            hintOffset?: [number, number] | undefined;
            hintWidth?: string | undefined;
            hintContentLeft?: React.ReactNode;
            hintView?: string | undefined;
            hintSize?: string | undefined;
            titleCaption?: React.ReactNode;
            leftHelper?: string | undefined;
            hasRequiredIndicator?: boolean | undefined;
            hintTargetPlacement?: ('inner' | 'outer') | undefined;
            requiredIndicatorPlacement?: ('left' | 'right') | undefined;
            firstValueError?: boolean | undefined;
            secondValueError?: boolean | undefined;
            firstValueSuccess?: boolean | undefined;
            secondValueSuccess?: boolean | undefined;
            firstPlaceholder?: string | undefined;
            secondPlaceholder?: string | undefined;
            hasClearDivider?: boolean | undefined;
            firstTextfieldContentLeft?: React.ReactElement | undefined;
            firstTextfieldContentRight?: React.ReactElement | undefined;
            secondTextfieldContentLeft?: React.ReactElement | undefined;
            secondTextfieldContentRight?: React.ReactElement | undefined;
            firstTextfieldTextBefore?: string | undefined;
            secondTextfieldTextBefore?: string | undefined;
            firstTextfieldTextAfter?: string | undefined;
            secondTextfieldTextAfter?: string | undefined;
            dividerVariant?: 'none' | 'icon' | 'dash' | undefined;
            dividerIcon?: React.ReactNode;
            onFocusFirstTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
            onFocusSecondTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
            onBlurFirstTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
            onBlurSecondTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
        } & import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps &
        Omit<
            import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps,
            'placement' | 'dateShortcuts'
        > & {
            placement?:
                | import('@salutejs/plasma-new-hope/styled-components').DatePickerRangePlacement
                | Array<
                      import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').DatePickerRangePlacementBasic
                  >;
            isDoubleCalendar?: boolean;
            dateShortcuts?: import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').DateShortcutItem[];
        } & import('react').HTMLAttributes<HTMLDivElement> & {
            appearance?: 'default' | 'clear';
            hasClearDivider?: boolean;
        } & import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>
>;
export declare const DatePickerRangeClear: import('react').FunctionComponent<
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
        eventTooltipSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
        readOnly: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerVariationProps & {
            requiredPlacement?: 'left' | 'right';
            required?: boolean;
            hasRequiredIndicator?: boolean;
            value?: [
                import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType | string,
                import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType | string,
            ];
            preserveInvalidOnBlur?: boolean;
            defaultFirstDate?: Date;
            defaultSecondDate?: Date;
            name?: string;
            onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').ChangeInstanceCallback;
            onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').ChangeInstanceCallback;
            onCommitFirstDate?: import('@salutejs/plasma-new-hope/styled-components').CommitInstanceCallback;
            onCommitSecondDate?: import('@salutejs/plasma-new-hope/styled-components').CommitInstanceCallback;
            onChange?: (event: {
                target: {
                    value?: string;
                    name?: string;
                };
            }) => void;
        } & {
            size?: string | undefined;
            disabled?: boolean | undefined;
            autoComplete?: string | undefined;
            readOnly?: boolean | undefined;
            required?: boolean | undefined;
            label?: string | undefined;
            view?: string | undefined;
            contentLeft?: React.ReactNode;
            appearance?: 'default' | 'clear' | undefined;
            contentRight?: React.ReactNode;
            hintText?: string | undefined;
            hintTrigger?: ('hover' | 'click') | undefined;
            hintTargetIcon?: React.ReactNode;
            hintPlacement?:
                | (
                      | import('@salutejs/plasma-new-hope/styled-components').Placement
                      | Array<import('@salutejs/plasma-new-hope/styled-components').ComputedPlacement>
                  )
                | undefined;
            hintHasArrow?: boolean | undefined;
            hintOffset?: [number, number] | undefined;
            hintWidth?: string | undefined;
            hintContentLeft?: React.ReactNode;
            hintView?: string | undefined;
            hintSize?: string | undefined;
            titleCaption?: React.ReactNode;
            leftHelper?: string | undefined;
            hasRequiredIndicator?: boolean | undefined;
            hintTargetPlacement?: ('inner' | 'outer') | undefined;
            requiredIndicatorPlacement?: ('left' | 'right') | undefined;
            firstValueError?: boolean | undefined;
            secondValueError?: boolean | undefined;
            firstValueSuccess?: boolean | undefined;
            secondValueSuccess?: boolean | undefined;
            firstPlaceholder?: string | undefined;
            secondPlaceholder?: string | undefined;
            hasClearDivider?: boolean | undefined;
            firstTextfieldContentLeft?: React.ReactElement | undefined;
            firstTextfieldContentRight?: React.ReactElement | undefined;
            secondTextfieldContentLeft?: React.ReactElement | undefined;
            secondTextfieldContentRight?: React.ReactElement | undefined;
            firstTextfieldTextBefore?: string | undefined;
            secondTextfieldTextBefore?: string | undefined;
            firstTextfieldTextAfter?: string | undefined;
            secondTextfieldTextAfter?: string | undefined;
            dividerVariant?: 'none' | 'icon' | 'dash' | undefined;
            dividerIcon?: React.ReactNode;
            onFocusFirstTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
            onFocusSecondTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
            onBlurFirstTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
            onBlurSecondTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
        } & import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps &
        Omit<
            import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps,
            'placement' | 'dateShortcuts'
        > & {
            placement?:
                | import('@salutejs/plasma-new-hope/styled-components').DatePickerRangePlacement
                | Array<
                      import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').DatePickerRangePlacementBasic
                  >;
            isDoubleCalendar?: boolean;
            dateShortcuts?: import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').DateShortcutItem[];
        } & import('react').HTMLAttributes<HTMLDivElement> & {
            appearance?: 'default' | 'clear';
            hasClearDivider?: boolean;
        } & import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>
>;
export declare const DatePickerRange: import('react').ForwardRefExoticComponent<
    Omit<
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
            eventTooltipSize: {
                m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
            readOnly: {
                true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            };
        }> &
            import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerVariationProps & {
                requiredPlacement?: 'left' | 'right';
                required?: boolean;
                hasRequiredIndicator?: boolean;
                value?: [
                    import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType | string,
                    import('@salutejs/plasma-new-hope/types/components/Calendar/Calendar.types.js').DateType | string,
                ];
                preserveInvalidOnBlur?: boolean;
                defaultFirstDate?: Date;
                defaultSecondDate?: Date;
                name?: string;
                onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').ChangeInstanceCallback;
                onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').ChangeInstanceCallback;
                onCommitFirstDate?: import('@salutejs/plasma-new-hope/styled-components').CommitInstanceCallback;
                onCommitSecondDate?: import('@salutejs/plasma-new-hope/styled-components').CommitInstanceCallback;
                onChange?: (event: {
                    target: {
                        value?: string;
                        name?: string;
                    };
                }) => void;
            } & {
                size?: string | undefined;
                disabled?: boolean | undefined;
                autoComplete?: string | undefined;
                readOnly?: boolean | undefined;
                required?: boolean | undefined;
                label?: string | undefined;
                view?: string | undefined;
                contentLeft?: React.ReactNode;
                appearance?: 'default' | 'clear' | undefined;
                contentRight?: React.ReactNode;
                hintText?: string | undefined;
                hintTrigger?: ('hover' | 'click') | undefined;
                hintTargetIcon?: React.ReactNode;
                hintPlacement?:
                    | (
                          | import('@salutejs/plasma-new-hope/styled-components').Placement
                          | Array<import('@salutejs/plasma-new-hope/styled-components').ComputedPlacement>
                      )
                    | undefined;
                hintHasArrow?: boolean | undefined;
                hintOffset?: [number, number] | undefined;
                hintWidth?: string | undefined;
                hintContentLeft?: React.ReactNode;
                hintView?: string | undefined;
                hintSize?: string | undefined;
                titleCaption?: React.ReactNode;
                leftHelper?: string | undefined;
                hasRequiredIndicator?: boolean | undefined;
                hintTargetPlacement?: ('inner' | 'outer') | undefined;
                requiredIndicatorPlacement?: ('left' | 'right') | undefined;
                firstValueError?: boolean | undefined;
                secondValueError?: boolean | undefined;
                firstValueSuccess?: boolean | undefined;
                secondValueSuccess?: boolean | undefined;
                firstPlaceholder?: string | undefined;
                secondPlaceholder?: string | undefined;
                hasClearDivider?: boolean | undefined;
                firstTextfieldContentLeft?: React.ReactElement | undefined;
                firstTextfieldContentRight?: React.ReactElement | undefined;
                secondTextfieldContentLeft?: React.ReactElement | undefined;
                secondTextfieldContentRight?: React.ReactElement | undefined;
                firstTextfieldTextBefore?: string | undefined;
                secondTextfieldTextBefore?: string | undefined;
                firstTextfieldTextAfter?: string | undefined;
                secondTextfieldTextAfter?: string | undefined;
                dividerVariant?: 'none' | 'icon' | 'dash' | undefined;
                dividerIcon?: React.ReactNode;
                onFocusFirstTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
                onFocusSecondTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
                onBlurFirstTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
                onBlurSecondTextfield?: ((event: import('react').FocusEvent<HTMLInputElement>) => void) | undefined;
            } & import('@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types.js').DatePickerCalendarProps &
            Omit<
                import('@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types.js').DatePickerPopoverProps,
                'placement' | 'dateShortcuts'
            > & {
                placement?:
                    | import('@salutejs/plasma-new-hope/styled-components').DatePickerRangePlacement
                    | Array<
                          import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').DatePickerRangePlacementBasic
                      >;
                isDoubleCalendar?: boolean;
                dateShortcuts?: import('@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types.js').DateShortcutItem[];
            } & import('react').HTMLAttributes<HTMLDivElement> & {
                appearance?: 'default' | 'clear';
                hasClearDivider?: boolean;
            } & import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
        'ref'
    > &
        import('react').RefAttributes<HTMLElement>
>;
