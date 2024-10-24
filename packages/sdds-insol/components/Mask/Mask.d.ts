/// <reference types="react" />
export declare const Mask: import("react").ForwardRefExoticComponent<(Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    clear?: boolean | undefined;
    hasDivider?: boolean | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    chips?: undefined;
    onChangeChips?: undefined;
    enumerationType?: "plain" | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    clear?: boolean | undefined;
    hasDivider?: boolean | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    enumerationType: "chip";
    onSearch?: undefined;
    chips?: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[] | undefined;
    onChangeChips?: ((value: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[]) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    clear?: boolean | undefined;
    hasDivider?: boolean | undefined;
} & {
    hintTrigger?: undefined;
    hintText?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    chips?: undefined;
    onChangeChips?: undefined;
    enumerationType?: "plain" | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    clear?: boolean | undefined;
    hasDivider?: boolean | undefined;
} & {
    hintTrigger?: undefined;
    hintText?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    enumerationType: "chip";
    onSearch?: undefined;
    chips?: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[] | undefined;
    onChangeChips?: ((value: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[]) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    clear?: false | undefined;
    hasDivider?: undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    chips?: undefined;
    onChangeChips?: undefined;
    enumerationType?: "plain" | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    clear?: false | undefined;
    hasDivider?: undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    enumerationType: "chip";
    onSearch?: undefined;
    chips?: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[] | undefined;
    onChangeChips?: ((value: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[]) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    clear?: false | undefined;
    hasDivider?: undefined;
} & {
    hintTrigger?: undefined;
    hintText?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    chips?: undefined;
    onChangeChips?: undefined;
    enumerationType?: "plain" | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    required: true;
    optional?: false | undefined;
} & {
    clear?: false | undefined;
    hasDivider?: undefined;
} & {
    hintTrigger?: undefined;
    hintText?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    enumerationType: "chip";
    onSearch?: undefined;
    chips?: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[] | undefined;
    onChangeChips?: ((value: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[]) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    clear?: boolean | undefined;
    hasDivider?: boolean | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    chips?: undefined;
    onChangeChips?: undefined;
    enumerationType?: "plain" | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    clear?: boolean | undefined;
    hasDivider?: boolean | undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    enumerationType: "chip";
    onSearch?: undefined;
    chips?: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[] | undefined;
    onChangeChips?: ((value: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[]) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    clear?: boolean | undefined;
    hasDivider?: boolean | undefined;
} & {
    hintTrigger?: undefined;
    hintText?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    chips?: undefined;
    onChangeChips?: undefined;
    enumerationType?: "plain" | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    clear?: boolean | undefined;
    hasDivider?: boolean | undefined;
} & {
    hintTrigger?: undefined;
    hintText?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    enumerationType: "chip";
    onSearch?: undefined;
    chips?: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[] | undefined;
    onChangeChips?: ((value: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[]) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    clear?: false | undefined;
    hasDivider?: undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    chips?: undefined;
    onChangeChips?: undefined;
    enumerationType?: "plain" | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    clear?: false | undefined;
    hasDivider?: undefined;
} & {
    hintText: string;
    hintTrigger?: "hover" | "click" | undefined;
    hintView?: string | undefined;
    hintSize?: string | undefined;
    hintTargetIcon?: import("react").ReactNode;
    hintPlacement?: import("@salutejs/plasma-new-hope/styled-components").PopoverPlacement | import("@salutejs/plasma-new-hope/styled-components").PopoverPlacementBasic[] | undefined;
    hintHasArrow?: boolean | undefined;
    hintOffset?: [number, number] | undefined;
    hintWidth?: string | undefined;
    hintContentLeft?: import("react").ReactNode;
} & {
    enumerationType: "chip";
    onSearch?: undefined;
    chips?: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[] | undefined;
    onChangeChips?: ((value: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[]) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    clear?: false | undefined;
    hasDivider?: undefined;
} & {
    hintTrigger?: undefined;
    hintText?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    chips?: undefined;
    onChangeChips?: undefined;
    enumerationType?: "plain" | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref"> | Omit<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        l: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        xs: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    labelPlacement: {
        inner: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        outer: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    clear: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintView: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    hintSize: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & {
    size?: string | undefined;
    view?: string | undefined;
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
} & {
    label?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
    titleCaption?: import("react").ReactNode;
    leftHelper?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    contentRight?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    onSearch?: ((value: string, event?: import("react").KeyboardEvent<HTMLInputElement> | undefined) => void) | undefined;
} & {
    requiredPlacement?: "right" | "left" | undefined;
} & {
    optional?: true | undefined;
    required?: false | undefined;
} & {
    clear?: false | undefined;
    hasDivider?: undefined;
} & {
    hintTrigger?: undefined;
    hintText?: undefined;
    hintView?: undefined;
    hintSize?: undefined;
    hintTargetIcon?: undefined;
    hintPlacement?: undefined;
    hintHasArrow?: undefined;
    hintOffset?: undefined;
    hintWidth?: undefined;
    hintContentLeft?: undefined;
} & {
    enumerationType: "chip";
    onSearch?: undefined;
    chips?: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[] | undefined;
    onChangeChips?: ((value: import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPrimitiveValue[]) => void) | undefined;
} & Omit<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement> & import("@salutejs/plasma-new-hope/types/components/Mask/Mask.types").MaskProps, "ref">) & import("react").RefAttributes<HTMLInputElement>>;
