/// <reference types="react" />
export declare const Combobox: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
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
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    readOnly: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & (({
    items: import("@salutejs/plasma-new-hope/styled-components").ItemOption[];
    placement?: ("top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end") | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    helperText?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    variant?: "normal" | "tight" | undefined;
    listOverflow?: import("csstype").Property.Overflow | undefined;
    listHeight?: import("csstype").Property.Height<string | number> | undefined;
    listWidth?: import("csstype").Property.Width<string | number> | undefined;
    portal?: import("react").MutableRefObject<HTMLElement | null> | undefined;
    renderItem?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption) => import("react").ReactNode) | undefined;
    filter?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption, textValue: string) => boolean) | undefined;
    closeAfterSelect?: boolean | undefined;
    size?: string | undefined;
    view?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
} & {
    readOnly?: boolean | undefined;
    disabled?: true | undefined;
    alwaysOpened?: false | undefined;
} & {
    multiple?: false | undefined;
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    isTargetAmount?: false | undefined;
    targetAmount?: undefined;
    renderValue?: undefined;
} & Omit<import("react").ButtonHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & import("react").RefAttributes<HTMLInputElement>) | ({
    items: import("@salutejs/plasma-new-hope/styled-components").ItemOption[];
    placement?: ("top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end") | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    helperText?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    variant?: "normal" | "tight" | undefined;
    listOverflow?: import("csstype").Property.Overflow | undefined;
    listHeight?: import("csstype").Property.Height<string | number> | undefined;
    listWidth?: import("csstype").Property.Width<string | number> | undefined;
    portal?: import("react").MutableRefObject<HTMLElement | null> | undefined;
    renderItem?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption) => import("react").ReactNode) | undefined;
    filter?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption, textValue: string) => boolean) | undefined;
    closeAfterSelect?: boolean | undefined;
    size?: string | undefined;
    view?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
} & {
    readOnly?: boolean | undefined;
    disabled?: true | undefined;
    alwaysOpened?: false | undefined;
} & {
    multiple: true;
    value?: string[] | undefined;
    onChange?: ((value: string[]) => void) | undefined;
    isTargetAmount?: true | undefined;
    targetAmount?: number | undefined;
    renderValue?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption) => string) | undefined;
} & Omit<import("react").ButtonHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & import("react").RefAttributes<HTMLInputElement>) | ({
    items: import("@salutejs/plasma-new-hope/styled-components").ItemOption[];
    placement?: ("top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end") | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    helperText?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    variant?: "normal" | "tight" | undefined;
    listOverflow?: import("csstype").Property.Overflow | undefined;
    listHeight?: import("csstype").Property.Height<string | number> | undefined;
    listWidth?: import("csstype").Property.Width<string | number> | undefined;
    portal?: import("react").MutableRefObject<HTMLElement | null> | undefined;
    renderItem?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption) => import("react").ReactNode) | undefined;
    filter?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption, textValue: string) => boolean) | undefined;
    closeAfterSelect?: boolean | undefined;
    size?: string | undefined;
    view?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
} & {
    readOnly?: true | undefined;
    disabled?: boolean | undefined;
    alwaysOpened?: false | undefined;
} & {
    multiple?: false | undefined;
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    isTargetAmount?: false | undefined;
    targetAmount?: undefined;
    renderValue?: undefined;
} & Omit<import("react").ButtonHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & import("react").RefAttributes<HTMLInputElement>) | ({
    items: import("@salutejs/plasma-new-hope/styled-components").ItemOption[];
    placement?: ("top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end") | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    helperText?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    variant?: "normal" | "tight" | undefined;
    listOverflow?: import("csstype").Property.Overflow | undefined;
    listHeight?: import("csstype").Property.Height<string | number> | undefined;
    listWidth?: import("csstype").Property.Width<string | number> | undefined;
    portal?: import("react").MutableRefObject<HTMLElement | null> | undefined;
    renderItem?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption) => import("react").ReactNode) | undefined;
    filter?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption, textValue: string) => boolean) | undefined;
    closeAfterSelect?: boolean | undefined;
    size?: string | undefined;
    view?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
} & {
    readOnly?: true | undefined;
    disabled?: boolean | undefined;
    alwaysOpened?: false | undefined;
} & {
    multiple: true;
    value?: string[] | undefined;
    onChange?: ((value: string[]) => void) | undefined;
    isTargetAmount?: true | undefined;
    targetAmount?: number | undefined;
    renderValue?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption) => string) | undefined;
} & Omit<import("react").ButtonHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & import("react").RefAttributes<HTMLInputElement>) | ({
    items: import("@salutejs/plasma-new-hope/styled-components").ItemOption[];
    placement?: ("top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end") | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    helperText?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    variant?: "normal" | "tight" | undefined;
    listOverflow?: import("csstype").Property.Overflow | undefined;
    listHeight?: import("csstype").Property.Height<string | number> | undefined;
    listWidth?: import("csstype").Property.Width<string | number> | undefined;
    portal?: import("react").MutableRefObject<HTMLElement | null> | undefined;
    renderItem?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption) => import("react").ReactNode) | undefined;
    filter?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption, textValue: string) => boolean) | undefined;
    closeAfterSelect?: boolean | undefined;
    size?: string | undefined;
    view?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
} & {
    readOnly?: false | undefined;
    disabled?: false | undefined;
    alwaysOpened?: true | undefined;
} & {
    multiple?: false | undefined;
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    isTargetAmount?: false | undefined;
    targetAmount?: undefined;
    renderValue?: undefined;
} & Omit<import("react").ButtonHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & import("react").RefAttributes<HTMLInputElement>) | ({
    items: import("@salutejs/plasma-new-hope/styled-components").ItemOption[];
    placement?: ("top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end") | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    helperText?: string | undefined;
    contentLeft?: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    textBefore?: string | undefined;
    textAfter?: string | undefined;
    variant?: "normal" | "tight" | undefined;
    listOverflow?: import("csstype").Property.Overflow | undefined;
    listHeight?: import("csstype").Property.Height<string | number> | undefined;
    listWidth?: import("csstype").Property.Width<string | number> | undefined;
    portal?: import("react").MutableRefObject<HTMLElement | null> | undefined;
    renderItem?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption) => import("react").ReactNode) | undefined;
    filter?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption, textValue: string) => boolean) | undefined;
    closeAfterSelect?: boolean | undefined;
    size?: string | undefined;
    view?: string | undefined;
    labelPlacement?: "outer" | "inner" | undefined;
} & {
    readOnly?: false | undefined;
    disabled?: false | undefined;
    alwaysOpened?: true | undefined;
} & {
    multiple: true;
    value?: string[] | undefined;
    onChange?: ((value: string[]) => void) | undefined;
    isTargetAmount?: true | undefined;
    targetAmount?: number | undefined;
    renderValue?: ((item: import("@salutejs/plasma-new-hope/styled-components").ItemOption) => string) | undefined;
} & Omit<import("react").ButtonHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & import("react").RefAttributes<HTMLInputElement>))>;
