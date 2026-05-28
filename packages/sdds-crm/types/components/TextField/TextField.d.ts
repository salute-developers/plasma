export declare const TextFieldDefault: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        labelPlacement: {
            inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        chipView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
        )
>;
export declare const TextFieldClear: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        labelPlacement: {
            inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        chipView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>)
        )
>;
export declare const TextField: import('react').ForwardRefExoticComponent<
    (
        | Omit<
              import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
                  view: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  size: {
                      xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  labelPlacement: {
                      inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  chipView: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
              }> & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>,
              'ref'
          >
        | Omit<
              import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
                  view: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  size: {
                      xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  labelPlacement: {
                      inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  chipView: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
              }> & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>,
              'ref'
          >
        | Omit<
              import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
                  view: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  size: {
                      xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  labelPlacement: {
                      inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  chipView: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
              }> & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>,
              'ref'
          >
        | Omit<
              import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
                  view: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  size: {
                      xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  labelPlacement: {
                      inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  chipView: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
              }> & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: boolean;
                      hasDivider?: boolean;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>,
              'ref'
          >
        | Omit<
              import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
                  view: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  size: {
                      xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  labelPlacement: {
                      inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  chipView: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
              }> & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>,
              'ref'
          >
        | Omit<
              import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
                  view: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  size: {
                      xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  labelPlacement: {
                      inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  chipView: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
              }> & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>,
              'ref'
          >
        | Omit<
              import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
                  view: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  size: {
                      xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  labelPlacement: {
                      inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  chipView: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
              }> & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      chips?: never;
                      onChangeChips?: never;
                      enumerationType?: 'plain';
                      onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
                      chipType?: never;
                      chipView?: never;
                      chipValidator?: never;
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>,
              'ref'
          >
        | Omit<
              import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
                  view: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  size: {
                      xl: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  labelPlacement: {
                      inner: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      outer: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                  };
                  chipView: {
                      default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      positive: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      warning: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
                      negative: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
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
              }> & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
              } & {
                  titleCaption?: import('react').ReactNode;
                  leftHelper?: import('react').ReactNode;
                  contentLeft?: React.ReactElement;
                  contentRight?: React.ReactElement;
                  textBefore?: string;
                  textAfter?: string;
                  onSearch?: (value: string, event?: import('react').KeyboardEvent<HTMLInputElement>) => void;
              } & import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').LabelProps &
                  import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').RequiredProps & {
                      clear?: false;
                      hasDivider?: never;
                  } & {
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
                  } & {
                      enumerationType: 'chip';
                      onSearch?: never;
                      chips?: Array<
                          import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                      >;
                      onChangeChips?: (
                          value: Array<
                              import('@salutejs/plasma-new-hope/types/components/TextField/TextField.types.js').TextFieldPrimitiveValue
                          >,
                      ) => void;
                      chipType?: 'default' | 'text';
                      chipView?: string;
                      chipValidator?: (
                          value: string,
                      ) => {
                          view?: string;
                      };
                  } & Omit<
                      import('@salutejs/plasma-new-hope/styled-components').InputHTMLAttributes<HTMLInputElement>,
                      'size' | 'required'
                  > &
                  import('react').RefAttributes<HTMLInputElement>,
              'ref'
          >
    ) &
        import('react').RefAttributes<HTMLElement>
>;
