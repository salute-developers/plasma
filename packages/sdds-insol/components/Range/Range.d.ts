/// <reference types="react" />
/**
 * Компонент Range.
 */
export declare const Range: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & (({
    label?: string | undefined;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    firstValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").TextfieldPrimitiveValue | undefined;
    secondValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").TextfieldPrimitiveValue | undefined;
    firstValueError?: boolean | undefined;
    secondValueError?: boolean | undefined;
    firstValueSuccess?: boolean | undefined;
    secondValueSuccess?: boolean | undefined;
    firstPlaceholder?: string | undefined;
    secondPlaceholder?: string | undefined;
    firstTextfieldContentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    firstTextfieldContentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    secondTextfieldContentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    secondTextfieldContentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    firstTextfieldTextAfter?: string | undefined;
    secondTextfieldTextAfter?: string | undefined;
    view?: string | undefined;
    size?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
    onChangeFirstValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackChangeInstance | undefined;
    onChangeSecondValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackChangeInstance | undefined;
    onSearchFirstValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackKeyboardInstance | undefined;
    onSearchSecondValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackKeyboardInstance | undefined;
    onFocusFirstTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onFocusSecondTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onBlurFirstTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onBlurSecondTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
} & {
    firstTextfieldTextBefore: string;
    secondTextfieldTextBefore: string;
    dividerVariant?: "none" | undefined;
    dividerIcon?: undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<import("@salutejs/plasma-new-hope/styled-components").RangeInputRefs>) | ({
    label?: string | undefined;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    firstValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").TextfieldPrimitiveValue | undefined;
    secondValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").TextfieldPrimitiveValue | undefined;
    firstValueError?: boolean | undefined;
    secondValueError?: boolean | undefined;
    firstValueSuccess?: boolean | undefined;
    secondValueSuccess?: boolean | undefined;
    firstPlaceholder?: string | undefined;
    secondPlaceholder?: string | undefined;
    firstTextfieldContentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    firstTextfieldContentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    secondTextfieldContentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    secondTextfieldContentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    firstTextfieldTextAfter?: string | undefined;
    secondTextfieldTextAfter?: string | undefined;
    view?: string | undefined;
    size?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
    onChangeFirstValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackChangeInstance | undefined;
    onChangeSecondValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackChangeInstance | undefined;
    onSearchFirstValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackKeyboardInstance | undefined;
    onSearchSecondValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackKeyboardInstance | undefined;
    onFocusFirstTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onFocusSecondTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onBlurFirstTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onBlurSecondTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
} & {
    dividerVariant?: "dash" | undefined;
    dividerIcon?: undefined;
    firstTextfieldTextBefore?: string | undefined;
    secondTextfieldTextBefore?: string | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<import("@salutejs/plasma-new-hope/styled-components").RangeInputRefs>) | ({
    label?: string | undefined;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    firstValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").TextfieldPrimitiveValue | undefined;
    secondValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").TextfieldPrimitiveValue | undefined;
    firstValueError?: boolean | undefined;
    secondValueError?: boolean | undefined;
    firstValueSuccess?: boolean | undefined;
    secondValueSuccess?: boolean | undefined;
    firstPlaceholder?: string | undefined;
    secondPlaceholder?: string | undefined;
    firstTextfieldContentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    firstTextfieldContentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    secondTextfieldContentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    secondTextfieldContentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    firstTextfieldTextAfter?: string | undefined;
    secondTextfieldTextAfter?: string | undefined;
    view?: string | undefined;
    size?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
    onChangeFirstValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackChangeInstance | undefined;
    onChangeSecondValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackChangeInstance | undefined;
    onSearchFirstValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackKeyboardInstance | undefined;
    onSearchSecondValue?: import("@salutejs/plasma-new-hope/types/components/Range/Range.types").BaseCallbackKeyboardInstance | undefined;
    onFocusFirstTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onFocusSecondTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onBlurFirstTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onBlurSecondTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
} & {
    dividerIcon?: import("react").ReactNode;
    dividerVariant?: "icon" | undefined;
    firstTextfieldTextBefore?: string | undefined;
    secondTextfieldTextBefore?: string | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<import("@salutejs/plasma-new-hope/styled-components").RangeInputRefs>))>;
