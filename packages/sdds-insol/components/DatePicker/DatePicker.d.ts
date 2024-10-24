/// <reference types="react" />
export declare const DatePicker: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
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
}> & import("@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types").DatePickerVariationProps & import("@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types").DatePickerTextFieldProps & import("@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types").DatePickerCalendarProps & import("@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types").DatePickerPopoverProps & Omit<import("react").HTMLAttributes<HTMLDivElement>, "defaultValue"> & import("react").RefAttributes<HTMLInputElement>>;
export declare const DatePickerRange: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
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
}> & import("@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types").DatePickerVariationProps & {
    defaultFirstDate?: Date | undefined;
    defaultSecondDate?: Date | undefined;
    name?: string | undefined;
    onChangeFirstValue?: import("@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types").ChangeInstanceCallback | undefined;
    onChangeSecondValue?: import("@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types").ChangeInstanceCallback | undefined;
    onCommitFirstDate?: import("@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types").CommitInstanceCallback | undefined;
    onCommitSecondDate?: import("@salutejs/plasma-new-hope/types/components/DatePicker/RangeDate/RangeDate.types").CommitInstanceCallback | undefined;
    onChange?: ((event: {
        target: {
            value?: string | undefined;
            name?: string | undefined;
        };
    }) => void) | undefined;
} & {
    label?: string | undefined;
    view?: string | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    size?: string | undefined;
    contentLeft?: import("react").ReactNode;
    contentRight?: import("react").ReactNode;
    leftHelper?: string | undefined;
    dividerVariant?: "none" | "dash" | "icon" | undefined;
    dividerIcon?: import("react").ReactNode;
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
    firstTextfieldTextBefore?: string | undefined;
    secondTextfieldTextBefore?: string | undefined;
    firstTextfieldTextAfter?: string | undefined;
    secondTextfieldTextAfter?: string | undefined;
    onFocusFirstTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onFocusSecondTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onBlurFirstTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
    onBlurSecondTextfield?: ((event: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
} & import("@salutejs/plasma-new-hope/types/components/DatePicker/DatePickerBase.types").DatePickerCalendarProps & Omit<import("@salutejs/plasma-new-hope/types/components/DatePicker/SingleDate/SingleDate.types").DatePickerPopoverProps, "placement"> & {
    placement?: import("@salutejs/plasma-new-hope/styled-components").DatePickerRangePlacement | import("@salutejs/plasma-new-hope/styled-components").DatePickerRangePlacement[] | undefined;
    isDoubleCalendar?: boolean | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<import("@salutejs/plasma-new-hope/styled-components").RangeInputRefs>>;
