export declare const RangeDefault: import('react').FunctionComponent<
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
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        readOnly: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
        )
>;
export declare const RangeClear: import('react').FunctionComponent<
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
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        readOnly: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
            | ({
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>)
        )
>;
export declare const Range: import('react').ForwardRefExoticComponent<
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  firstTextfieldTextBefore: string;
                  secondTextfieldTextBefore: string;
                  dividerVariant?: 'none';
                  dividerIcon?: never;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerVariant?: 'dash';
                  dividerIcon?: never;
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'default';
                  hasClearDivider?: never;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
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
                  label?: string;
                  leftHelper?: string;
                  titleCaption?: import('react').ReactNode;
                  contentLeft?: import('react').ReactNode;
                  contentRight?: import('react').ReactNode;
                  firstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  secondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').TextfieldPrimitiveValue;
                  firstValueError?: boolean;
                  secondValueError?: boolean;
                  firstValueSuccess?: boolean;
                  secondValueSuccess?: boolean;
                  firstPlaceholder?: string;
                  secondPlaceholder?: string;
                  firstTextfieldContentLeft?: import('react').ReactElement;
                  firstTextfieldContentRight?: import('react').ReactElement;
                  secondTextfieldContentLeft?: import('react').ReactElement;
                  secondTextfieldContentRight?: import('react').ReactElement;
                  firstTextfieldTextAfter?: string;
                  secondTextfieldTextAfter?: string;
                  autoComplete?: string;
                  view?: string;
                  size?: string;
                  readOnly?: boolean;
                  disabled?: boolean;
                  requiredIndicatorPlacement?: 'left' | 'right';
                  required?: boolean;
                  hasRequiredIndicator?: boolean;
                  onChangeFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onChangeSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackChangeInstance;
                  onSearchFirstValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onSearchSecondValue?: import('@salutejs/plasma-new-hope/types/components/Range/Range.types.js').BaseCallbackKeyboardInstance;
                  onFocusFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onFocusSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurFirstTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
                  onBlurSecondTextfield?: (event: import('react').FocusEvent<HTMLInputElement>) => void;
              } & {
                  dividerIcon?: import('react').ReactNode;
                  dividerVariant?: 'icon';
                  firstTextfieldTextBefore?: string;
                  secondTextfieldTextBefore?: string;
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
                  appearance?: 'clear';
                  hasClearDivider?: boolean;
              } & import('react').HTMLAttributes<HTMLDivElement> &
                  import('react').RefAttributes<import('@salutejs/plasma-new-hope/styled-components').RangeInputRefs>,
              'ref'
          >
    ) &
        import('react').RefAttributes<HTMLElement>
>;
