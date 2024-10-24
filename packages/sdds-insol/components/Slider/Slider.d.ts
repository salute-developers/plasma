/// <reference types="react" />
/**
 * Слайдер позволяет определить числовое значение в пределах указанного промежутка.
 * Можно указать два значения.
 */
export declare const Slider: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        accent: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        gradient: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & ((import("@salutejs/plasma-new-hope/types/components/Slider/components/SliderBase/SliderBase.types").SliderBaseProps & import("@salutejs/plasma-new-hope/types/components/Slider/components").SliderInternalProps & {
    /**
     * Слайдер позволяет определить числовое значение в пределах указанного промежутка.
     * Можно указать два значения.
     */
    onChange?: ((event: import("@salutejs/plasma-new-hope/types/types/FormType").FormTypeNumber) => void) | undefined;
    name: string;
    value?: undefined;
    defaultValue?: number | undefined;
} & {
    orientation?: "horizontal" | undefined;
    labelPlacement?: "none" | "top" | "left" | undefined;
    scaleAlign?: "none" | "bottom" | "side" | undefined;
    sliderAlign?: "none" | undefined;
    reversed?: undefined;
    labelReversed?: undefined;
} & Omit<import("react").HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> & {
    onChangeCommitted?: ((value: number) => void) | undefined;
    ariaLabel?: string | undefined;
    showCurrentValue?: boolean | undefined;
    showRangeValues?: boolean | undefined;
    rangeValuesPlacement?: string | undefined;
    showScale?: boolean | undefined;
    hideMinValueDiff?: number | undefined;
    hideMaxValueDiff?: number | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    labelContentLeft?: import("react").ReactNode;
    labelContent?: import("react").ReactNode;
    multipleStepSize?: number | undefined;
    view?: string | undefined;
    size?: "s" | "m" | "l" | undefined;
    type?: "single" | undefined;
    pointerSize?: "none" | "small" | "large" | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("@salutejs/plasma-new-hope/types/components/Slider/components/SliderBase/SliderBase.types").SliderBaseProps & import("@salutejs/plasma-new-hope/types/components/Slider/components").SliderInternalProps & {
    /**
     * Слайдер позволяет определить числовое значение в пределах указанного промежутка.
     * Можно указать два значения.
     */
    onChange?: ((event: import("@salutejs/plasma-new-hope/types/types/FormType").FormTypeNumber) => void) | undefined;
    name: string;
    value?: undefined;
    defaultValue?: number | undefined;
} & {
    orientation: "vertical";
    sliderAlign?: "none" | "center" | "right" | "left" | undefined;
    scaleAlign?: undefined;
    reversed?: boolean | undefined;
    labelReversed?: boolean | undefined;
} & Omit<import("react").HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> & {
    onChangeCommitted?: ((value: number) => void) | undefined;
    ariaLabel?: string | undefined;
    showCurrentValue?: boolean | undefined;
    showRangeValues?: boolean | undefined;
    rangeValuesPlacement?: string | undefined;
    showScale?: boolean | undefined;
    hideMinValueDiff?: number | undefined;
    hideMaxValueDiff?: number | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    labelContentLeft?: import("react").ReactNode;
    labelContent?: import("react").ReactNode;
    multipleStepSize?: number | undefined;
    view?: string | undefined;
    size?: "s" | "m" | "l" | undefined;
    type?: "single" | undefined;
    pointerSize?: "none" | "small" | "large" | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("@salutejs/plasma-new-hope/types/components/Slider/components/SliderBase/SliderBase.types").SliderBaseProps & import("@salutejs/plasma-new-hope/types/components/Slider/components").SliderInternalProps & {
    onChange?: ((value: number) => void) | undefined;
    value: number;
    name?: undefined;
    defaultValue?: undefined;
} & {
    orientation?: "horizontal" | undefined;
    labelPlacement?: "none" | "top" | "left" | undefined;
    scaleAlign?: "none" | "bottom" | "side" | undefined;
    sliderAlign?: "none" | undefined;
    reversed?: undefined;
    labelReversed?: undefined;
} & Omit<import("react").HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> & {
    onChangeCommitted?: ((value: number) => void) | undefined;
    ariaLabel?: string | undefined;
    showCurrentValue?: boolean | undefined;
    showRangeValues?: boolean | undefined;
    rangeValuesPlacement?: string | undefined;
    showScale?: boolean | undefined;
    hideMinValueDiff?: number | undefined;
    hideMaxValueDiff?: number | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    labelContentLeft?: import("react").ReactNode;
    labelContent?: import("react").ReactNode;
    multipleStepSize?: number | undefined;
    view?: string | undefined;
    size?: "s" | "m" | "l" | undefined;
    type?: "single" | undefined;
    pointerSize?: "none" | "small" | "large" | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (import("@salutejs/plasma-new-hope/types/components/Slider/components/SliderBase/SliderBase.types").SliderBaseProps & import("@salutejs/plasma-new-hope/types/components/Slider/components").SliderInternalProps & {
    onChange?: ((value: number) => void) | undefined;
    value: number;
    name?: undefined;
    defaultValue?: undefined;
} & {
    orientation: "vertical";
    sliderAlign?: "none" | "center" | "right" | "left" | undefined;
    scaleAlign?: undefined;
    reversed?: boolean | undefined;
    labelReversed?: boolean | undefined;
} & Omit<import("react").HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> & {
    onChangeCommitted?: ((value: number) => void) | undefined;
    ariaLabel?: string | undefined;
    showCurrentValue?: boolean | undefined;
    showRangeValues?: boolean | undefined;
    rangeValuesPlacement?: string | undefined;
    showScale?: boolean | undefined;
    hideMinValueDiff?: number | undefined;
    hideMaxValueDiff?: number | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    labelContentLeft?: import("react").ReactNode;
    labelContent?: import("react").ReactNode;
    multipleStepSize?: number | undefined;
    view?: string | undefined;
    size?: "s" | "m" | "l" | undefined;
    type?: "single" | undefined;
    pointerSize?: "none" | "small" | "large" | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (Omit<import("@salutejs/plasma-new-hope/styled-components").DoubleSliderProps, "onChange" | "defaultValue" | "value"> & {
    onChange?: ((event: import("@salutejs/plasma-new-hope/types/types/FormType").FormTypeString) => void) | undefined;
    name?: string | undefined;
    value?: undefined;
    defaultValue?: number[] | undefined;
} & import("react").RefAttributes<HTMLDivElement>) | (Omit<import("@salutejs/plasma-new-hope/styled-components").DoubleSliderProps, "onChange" | "defaultValue" | "value"> & {
    onChange?: ((values: number[]) => void) | undefined;
    name?: undefined;
    value?: number[] | undefined;
    defaultValue?: undefined;
} & import("react").RefAttributes<HTMLDivElement>))>;
