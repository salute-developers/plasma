export declare const TextAreaDefault: import('react').FunctionComponent<
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
        hintView: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        hintSize: {
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        readOnly: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  autoResize?: boolean | undefined;
                  maxAuto?: number | undefined;
                  minAuto?: number | undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  height?: (number | string) | undefined;
                  width?: (number | string) | undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  rows?: number | undefined;
                  cols?: number | undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  clear?: true | undefined;
                  hasDivider?: boolean | undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  autoResize?: boolean | undefined;
                  maxAuto?: number | undefined;
                  minAuto?: number | undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  height?: (number | string) | undefined;
                  width?: (number | string) | undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  rows?: number | undefined;
                  cols?: number | undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  clear?: true | undefined;
                  hasDivider?: boolean | undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
        )
>;
export declare const TextAreaClear: import('react').FunctionComponent<
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
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  autoResize?: boolean | undefined;
                  maxAuto?: number | undefined;
                  minAuto?: number | undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  height?: (number | string) | undefined;
                  width?: (number | string) | undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  rows?: number | undefined;
                  cols?: number | undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  clear?: true | undefined;
                  hasDivider?: boolean | undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  autoResize?: boolean | undefined;
                  maxAuto?: number | undefined;
                  minAuto?: number | undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  height?: (number | string) | undefined;
                  width?: (number | string) | undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  rows?: number | undefined;
                  cols?: number | undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  clear?: undefined;
                  hasDivider?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                  'required' | 'cols' | 'rows'
              > & {
                  status?: '' | 'success' | 'warning' | 'error';
                  label?: string;
                  labelPlacement?: 'inner' | 'outer';
                  titleCaption?: import('react').ReactNode;
                  headerSlot?: import('react').ReactNode;
                  contentRight?: React.ReactElement;
                  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                  helperText?: string;
                  leftHelper?: import('react').ReactNode;
                  rightHelper?: import('react').ReactNode;
                  leftHelperPlacement?: 'inner' | 'outer';
              } & {
                  required?: boolean;
                  requiredPlacement?: 'left' | 'right';
                  optional?: boolean;
                  optionalText?: string;
                  hasRequiredIndicator?: boolean;
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
              } & {
                  appearance?: 'default' | 'clear';
                  size?: string;
                  view?: string;
              } & {
                  clear?: true | undefined;
                  hasDivider?: boolean | undefined;
              } & {
                  rows?: undefined;
                  cols?: undefined;
              } & {
                  autoResize?: undefined;
                  maxAuto?: undefined;
                  minAuto?: undefined;
              } & {
                  height?: undefined;
                  width?: undefined;
              } & {
                  labelAriaHidden?: boolean;
              } & import('react').RefAttributes<HTMLTextAreaElement>)
        )
>;
export declare const TextArea: import('react').ForwardRefExoticComponent<
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
                  Omit<
                      import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                      'required' | 'cols' | 'rows'
                  > & {
                      status?: '' | 'success' | 'warning' | 'error';
                      label?: string;
                      labelPlacement?: 'inner' | 'outer';
                      titleCaption?: import('react').ReactNode;
                      headerSlot?: import('react').ReactNode;
                      contentRight?: React.ReactElement;
                      resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                      helperText?: string;
                      leftHelper?: import('react').ReactNode;
                      rightHelper?: import('react').ReactNode;
                      leftHelperPlacement?: 'inner' | 'outer';
                  } & {
                      required?: boolean;
                      requiredPlacement?: 'left' | 'right';
                      optional?: boolean;
                      optionalText?: string;
                      hasRequiredIndicator?: boolean;
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
                  } & {
                      appearance?: 'default' | 'clear';
                      size?: string;
                      view?: string;
                  } & {
                      autoResize?: boolean | undefined;
                      maxAuto?: number | undefined;
                      minAuto?: number | undefined;
                  } & {
                      height?: undefined;
                      width?: undefined;
                  } & {
                      rows?: undefined;
                      cols?: undefined;
                  } & {
                      clear?: undefined;
                      hasDivider?: undefined;
                  } & {
                      labelAriaHidden?: boolean;
                  } & import('react').RefAttributes<HTMLTextAreaElement>,
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
                  Omit<
                      import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                      'required' | 'cols' | 'rows'
                  > & {
                      status?: '' | 'success' | 'warning' | 'error';
                      label?: string;
                      labelPlacement?: 'inner' | 'outer';
                      titleCaption?: import('react').ReactNode;
                      headerSlot?: import('react').ReactNode;
                      contentRight?: React.ReactElement;
                      resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                      helperText?: string;
                      leftHelper?: import('react').ReactNode;
                      rightHelper?: import('react').ReactNode;
                      leftHelperPlacement?: 'inner' | 'outer';
                  } & {
                      required?: boolean;
                      requiredPlacement?: 'left' | 'right';
                      optional?: boolean;
                      optionalText?: string;
                      hasRequiredIndicator?: boolean;
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
                  } & {
                      appearance?: 'default' | 'clear';
                      size?: string;
                      view?: string;
                  } & {
                      height?: (number | string) | undefined;
                      width?: (number | string) | undefined;
                  } & {
                      autoResize?: undefined;
                      maxAuto?: undefined;
                      minAuto?: undefined;
                  } & {
                      rows?: undefined;
                      cols?: undefined;
                  } & {
                      clear?: undefined;
                      hasDivider?: undefined;
                  } & {
                      labelAriaHidden?: boolean;
                  } & import('react').RefAttributes<HTMLTextAreaElement>,
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
                  Omit<
                      import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                      'required' | 'cols' | 'rows'
                  > & {
                      status?: '' | 'success' | 'warning' | 'error';
                      label?: string;
                      labelPlacement?: 'inner' | 'outer';
                      titleCaption?: import('react').ReactNode;
                      headerSlot?: import('react').ReactNode;
                      contentRight?: React.ReactElement;
                      resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                      helperText?: string;
                      leftHelper?: import('react').ReactNode;
                      rightHelper?: import('react').ReactNode;
                      leftHelperPlacement?: 'inner' | 'outer';
                  } & {
                      required?: boolean;
                      requiredPlacement?: 'left' | 'right';
                      optional?: boolean;
                      optionalText?: string;
                      hasRequiredIndicator?: boolean;
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
                  } & {
                      appearance?: 'default' | 'clear';
                      size?: string;
                      view?: string;
                  } & {
                      rows?: number | undefined;
                      cols?: number | undefined;
                  } & {
                      autoResize?: undefined;
                      maxAuto?: undefined;
                      minAuto?: undefined;
                  } & {
                      height?: undefined;
                      width?: undefined;
                  } & {
                      clear?: undefined;
                      hasDivider?: undefined;
                  } & {
                      labelAriaHidden?: boolean;
                  } & import('react').RefAttributes<HTMLTextAreaElement>,
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
                  Omit<
                      import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                      'required' | 'cols' | 'rows'
                  > & {
                      status?: '' | 'success' | 'warning' | 'error';
                      label?: string;
                      labelPlacement?: 'inner' | 'outer';
                      titleCaption?: import('react').ReactNode;
                      headerSlot?: import('react').ReactNode;
                      contentRight?: React.ReactElement;
                      resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                      helperText?: string;
                      leftHelper?: import('react').ReactNode;
                      rightHelper?: import('react').ReactNode;
                      leftHelperPlacement?: 'inner' | 'outer';
                  } & {
                      required?: boolean;
                      requiredPlacement?: 'left' | 'right';
                      optional?: boolean;
                      optionalText?: string;
                      hasRequiredIndicator?: boolean;
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
                  } & {
                      appearance?: 'default' | 'clear';
                      size?: string;
                      view?: string;
                  } & {
                      clear?: true | undefined;
                      hasDivider?: boolean | undefined;
                  } & {
                      rows?: undefined;
                      cols?: undefined;
                  } & {
                      autoResize?: undefined;
                      maxAuto?: undefined;
                      minAuto?: undefined;
                  } & {
                      height?: undefined;
                      width?: undefined;
                  } & {
                      labelAriaHidden?: boolean;
                  } & import('react').RefAttributes<HTMLTextAreaElement>,
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
                  Omit<
                      import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                      'required' | 'cols' | 'rows'
                  > & {
                      status?: '' | 'success' | 'warning' | 'error';
                      label?: string;
                      labelPlacement?: 'inner' | 'outer';
                      titleCaption?: import('react').ReactNode;
                      headerSlot?: import('react').ReactNode;
                      contentRight?: React.ReactElement;
                      resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                      helperText?: string;
                      leftHelper?: import('react').ReactNode;
                      rightHelper?: import('react').ReactNode;
                      leftHelperPlacement?: 'inner' | 'outer';
                  } & {
                      required?: boolean;
                      requiredPlacement?: 'left' | 'right';
                      optional?: boolean;
                      optionalText?: string;
                      hasRequiredIndicator?: boolean;
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
                  } & {
                      appearance?: 'default' | 'clear';
                      size?: string;
                      view?: string;
                  } & {
                      autoResize?: boolean | undefined;
                      maxAuto?: number | undefined;
                      minAuto?: number | undefined;
                  } & {
                      height?: undefined;
                      width?: undefined;
                  } & {
                      rows?: undefined;
                      cols?: undefined;
                  } & {
                      clear?: undefined;
                      hasDivider?: undefined;
                  } & {
                      labelAriaHidden?: boolean;
                  } & import('react').RefAttributes<HTMLTextAreaElement>,
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
                  Omit<
                      import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                      'required' | 'cols' | 'rows'
                  > & {
                      status?: '' | 'success' | 'warning' | 'error';
                      label?: string;
                      labelPlacement?: 'inner' | 'outer';
                      titleCaption?: import('react').ReactNode;
                      headerSlot?: import('react').ReactNode;
                      contentRight?: React.ReactElement;
                      resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                      helperText?: string;
                      leftHelper?: import('react').ReactNode;
                      rightHelper?: import('react').ReactNode;
                      leftHelperPlacement?: 'inner' | 'outer';
                  } & {
                      required?: boolean;
                      requiredPlacement?: 'left' | 'right';
                      optional?: boolean;
                      optionalText?: string;
                      hasRequiredIndicator?: boolean;
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
                  } & {
                      appearance?: 'default' | 'clear';
                      size?: string;
                      view?: string;
                  } & {
                      height?: (number | string) | undefined;
                      width?: (number | string) | undefined;
                  } & {
                      autoResize?: undefined;
                      maxAuto?: undefined;
                      minAuto?: undefined;
                  } & {
                      rows?: undefined;
                      cols?: undefined;
                  } & {
                      clear?: undefined;
                      hasDivider?: undefined;
                  } & {
                      labelAriaHidden?: boolean;
                  } & import('react').RefAttributes<HTMLTextAreaElement>,
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
                  Omit<
                      import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                      'required' | 'cols' | 'rows'
                  > & {
                      status?: '' | 'success' | 'warning' | 'error';
                      label?: string;
                      labelPlacement?: 'inner' | 'outer';
                      titleCaption?: import('react').ReactNode;
                      headerSlot?: import('react').ReactNode;
                      contentRight?: React.ReactElement;
                      resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                      helperText?: string;
                      leftHelper?: import('react').ReactNode;
                      rightHelper?: import('react').ReactNode;
                      leftHelperPlacement?: 'inner' | 'outer';
                  } & {
                      required?: boolean;
                      requiredPlacement?: 'left' | 'right';
                      optional?: boolean;
                      optionalText?: string;
                      hasRequiredIndicator?: boolean;
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
                  } & {
                      appearance?: 'default' | 'clear';
                      size?: string;
                      view?: string;
                  } & {
                      rows?: number | undefined;
                      cols?: number | undefined;
                  } & {
                      autoResize?: undefined;
                      maxAuto?: undefined;
                      minAuto?: undefined;
                  } & {
                      height?: undefined;
                      width?: undefined;
                  } & {
                      clear?: undefined;
                      hasDivider?: undefined;
                  } & {
                      labelAriaHidden?: boolean;
                  } & import('react').RefAttributes<HTMLTextAreaElement>,
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
                  Omit<
                      import('@salutejs/plasma-new-hope/styled-components').TextareaHTMLAttributes<HTMLTextAreaElement>,
                      'required' | 'cols' | 'rows'
                  > & {
                      status?: '' | 'success' | 'warning' | 'error';
                      label?: string;
                      labelPlacement?: 'inner' | 'outer';
                      titleCaption?: import('react').ReactNode;
                      headerSlot?: import('react').ReactNode;
                      contentRight?: React.ReactElement;
                      resize?: 'none' | 'both' | 'horizontal' | 'vertical';
                      helperText?: string;
                      leftHelper?: import('react').ReactNode;
                      rightHelper?: import('react').ReactNode;
                      leftHelperPlacement?: 'inner' | 'outer';
                  } & {
                      required?: boolean;
                      requiredPlacement?: 'left' | 'right';
                      optional?: boolean;
                      optionalText?: string;
                      hasRequiredIndicator?: boolean;
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
                  } & {
                      appearance?: 'default' | 'clear';
                      size?: string;
                      view?: string;
                  } & {
                      clear?: true | undefined;
                      hasDivider?: boolean | undefined;
                  } & {
                      rows?: undefined;
                      cols?: undefined;
                  } & {
                      autoResize?: undefined;
                      maxAuto?: undefined;
                      minAuto?: undefined;
                  } & {
                      height?: undefined;
                      width?: undefined;
                  } & {
                      labelAriaHidden?: boolean;
                  } & import('react').RefAttributes<HTMLTextAreaElement>,
              'ref'
          >
    ) &
        import('react').RefAttributes<HTMLElement>
>;
