/**
 * Слайдер позволяет определить числовое значение в пределах указанного промежутка.
 * Можно указать два значения.
 */
export declare const Slider: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            gradient: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | (import('@salutejs/plasma-new-hope/types/components/Slider/components/SliderBase/SliderBase.types.js').SliderBaseProps &
                  import('@salutejs/plasma-new-hope/types/components/Slider/components/index.js').SliderInternalProps & {
                      onChange?: (
                          event: import('@salutejs/plasma-new-hope/types/types/FormType.js').FormTypeNumber,
                      ) => void;
                      name: string;
                      value?: never;
                      defaultValue?: number;
                  } & {
                      orientation?: 'horizontal';
                      labelPlacement?: 'top' | 'left' | 'none';
                      scaleAlign?: 'side' | 'bottom' | 'none';
                      sliderAlign?: never | 'none';
                      reversed?: never;
                      labelReversed?: never;
                  } & Omit<import('react').HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
                      onChangeCommitted?: (value: number) => void;
                      ariaLabel?: string;
                      showCurrentValue?: boolean;
                      showRangeValues?: boolean;
                      rangeValuesPlacement?: string;
                      showScale?: boolean;
                      hideMinValueDiff?: number;
                      hideMaxValueDiff?: number;
                      labelPlacement?: 'inner' | 'outer';
                      labelContentLeft?: import('react').ReactNode;
                      labelContent?: import('react').ReactNode;
                      multipleStepSize?: number;
                      view?: string;
                      size?: 's' | 'm' | 'l';
                      type?: 'single';
                      pointerSize?: 'small' | 'large' | 'none';
                      pointerVisibility: 'always' | 'hover';
                      currentValueVisibility: 'always' | 'hover';
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (import('@salutejs/plasma-new-hope/types/components/Slider/components/SliderBase/SliderBase.types.js').SliderBaseProps &
                  import('@salutejs/plasma-new-hope/types/components/Slider/components/index.js').SliderInternalProps & {
                      onChange?: (
                          event: import('@salutejs/plasma-new-hope/types/types/FormType.js').FormTypeNumber,
                      ) => void;
                      name: string;
                      value?: never;
                      defaultValue?: number;
                  } & {
                      orientation: 'vertical';
                      sliderAlign?: 'center' | 'left' | 'right' | 'none';
                      scaleAlign?: never;
                      reversed?: boolean;
                      labelReversed?: boolean;
                  } & Omit<import('react').HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
                      onChangeCommitted?: (value: number) => void;
                      ariaLabel?: string;
                      showCurrentValue?: boolean;
                      showRangeValues?: boolean;
                      rangeValuesPlacement?: string;
                      showScale?: boolean;
                      hideMinValueDiff?: number;
                      hideMaxValueDiff?: number;
                      labelPlacement?: 'inner' | 'outer';
                      labelContentLeft?: import('react').ReactNode;
                      labelContent?: import('react').ReactNode;
                      multipleStepSize?: number;
                      view?: string;
                      size?: 's' | 'm' | 'l';
                      type?: 'single';
                      pointerSize?: 'small' | 'large' | 'none';
                      pointerVisibility: 'always' | 'hover';
                      currentValueVisibility: 'always' | 'hover';
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (import('@salutejs/plasma-new-hope/types/components/Slider/components/SliderBase/SliderBase.types.js').SliderBaseProps &
                  import('@salutejs/plasma-new-hope/types/components/Slider/components/index.js').SliderInternalProps & {
                      onChange?: (value: number) => void;
                      value: number;
                      name?: never;
                      defaultValue?: never;
                  } & {
                      orientation?: 'horizontal';
                      labelPlacement?: 'top' | 'left' | 'none';
                      scaleAlign?: 'side' | 'bottom' | 'none';
                      sliderAlign?: never | 'none';
                      reversed?: never;
                      labelReversed?: never;
                  } & Omit<import('react').HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
                      onChangeCommitted?: (value: number) => void;
                      ariaLabel?: string;
                      showCurrentValue?: boolean;
                      showRangeValues?: boolean;
                      rangeValuesPlacement?: string;
                      showScale?: boolean;
                      hideMinValueDiff?: number;
                      hideMaxValueDiff?: number;
                      labelPlacement?: 'inner' | 'outer';
                      labelContentLeft?: import('react').ReactNode;
                      labelContent?: import('react').ReactNode;
                      multipleStepSize?: number;
                      view?: string;
                      size?: 's' | 'm' | 'l';
                      type?: 'single';
                      pointerSize?: 'small' | 'large' | 'none';
                      pointerVisibility: 'always' | 'hover';
                      currentValueVisibility: 'always' | 'hover';
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (import('@salutejs/plasma-new-hope/types/components/Slider/components/SliderBase/SliderBase.types.js').SliderBaseProps &
                  import('@salutejs/plasma-new-hope/types/components/Slider/components/index.js').SliderInternalProps & {
                      onChange?: (value: number) => void;
                      value: number;
                      name?: never;
                      defaultValue?: never;
                  } & {
                      orientation: 'vertical';
                      sliderAlign?: 'center' | 'left' | 'right' | 'none';
                      scaleAlign?: never;
                      reversed?: boolean;
                      labelReversed?: boolean;
                  } & Omit<import('react').HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
                      onChangeCommitted?: (value: number) => void;
                      ariaLabel?: string;
                      showCurrentValue?: boolean;
                      showRangeValues?: boolean;
                      rangeValuesPlacement?: string;
                      showScale?: boolean;
                      hideMinValueDiff?: number;
                      hideMaxValueDiff?: number;
                      labelPlacement?: 'inner' | 'outer';
                      labelContentLeft?: import('react').ReactNode;
                      labelContent?: import('react').ReactNode;
                      multipleStepSize?: number;
                      view?: string;
                      size?: 's' | 'm' | 'l';
                      type?: 'single';
                      pointerSize?: 'small' | 'large' | 'none';
                      pointerVisibility: 'always' | 'hover';
                      currentValueVisibility: 'always' | 'hover';
                  } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').DoubleSliderProps,
                  'onChange' | 'defaultValue' | 'value'
              > & {
                  onChange?: (
                      event: import('@salutejs/plasma-new-hope/types/types/FormType.js').FormTypeString,
                  ) => void;
                  name?: string;
                  value?: never;
                  defaultValue?: number[];
              } & import('react').RefAttributes<HTMLDivElement>)
            | (Omit<
                  import('@salutejs/plasma-new-hope/styled-components').DoubleSliderProps,
                  'onChange' | 'defaultValue' | 'value'
              > & {
                  onChange?: (values: number[]) => void;
                  name?: never;
                  value?: number[];
                  defaultValue?: never;
              } & import('react').RefAttributes<HTMLDivElement>)
        )
>;
