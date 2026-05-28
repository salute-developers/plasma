export declare const NumberInput: import('react').FunctionComponent<
    import('@salutejs/plasma-new-hope/types/engines/types.js').PropsType<{
        view: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            secondary: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            accent: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            clear: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        size: {
            l: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            m: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            s: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            xs: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        shape: {
            cornered: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            pilled: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        inputBackgroundType: {
            fill: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            clear: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        segmentation: {
            default: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            segmented: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
            solid: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
        disabled: {
            true: import('@salutejs/plasma-new-hope/types/engines/types.js').PolymorphicClassName;
        };
    }> &
        (
            | ({
                  value?: string | number;
                  min?: number;
                  max?: number;
                  step?: number;
                  precision?: number;
                  isLoading?: boolean;
                  loader?: import('react').ReactNode;
                  size?: string;
                  view?: string;
                  clear?: boolean;
                  shape?: string;
                  disabled?: boolean;
                  textBefore?: string;
                  textAfter?: string;
                  customIncrementButton?: import('react').ReactNode;
                  incrementIcon?: import('react').ReactNode;
                  customDecrementButton?: import('react').ReactNode;
                  decrementIcon?: import('react').ReactNode;
                  isManualInput?: boolean;
                  displayWithoutValue?: 'input' | 'increment' | 'decrement';
                  limitBehavior?: 'disabled' | 'hidden';
                  onChange?: (
                      event: import('react').SyntheticEvent<HTMLInputElement> | null,
                      value: number | string | undefined,
                  ) => void;
                  onIncrement?: (value: number) => void;
                  onDecrement?: (value: number) => void;
              } & {
                  segmentation?: 'clear';
                  inputBackgroundType?: never;
              } & Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'> &
                  import('react').RefAttributes<HTMLInputElement>)
            | ({
                  value?: string | number;
                  min?: number;
                  max?: number;
                  step?: number;
                  precision?: number;
                  isLoading?: boolean;
                  loader?: import('react').ReactNode;
                  size?: string;
                  view?: string;
                  clear?: boolean;
                  shape?: string;
                  disabled?: boolean;
                  textBefore?: string;
                  textAfter?: string;
                  customIncrementButton?: import('react').ReactNode;
                  incrementIcon?: import('react').ReactNode;
                  customDecrementButton?: import('react').ReactNode;
                  decrementIcon?: import('react').ReactNode;
                  isManualInput?: boolean;
                  displayWithoutValue?: 'input' | 'increment' | 'decrement';
                  limitBehavior?: 'disabled' | 'hidden';
                  onChange?: (
                      event: import('react').SyntheticEvent<HTMLInputElement> | null,
                      value: number | string | undefined,
                  ) => void;
                  onIncrement?: (value: number) => void;
                  onDecrement?: (value: number) => void;
              } & {
                  segmentation?: string;
                  inputBackgroundType?: string;
              } & Omit<import('react').InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'> &
                  import('react').RefAttributes<HTMLInputElement>)
        )
>;
