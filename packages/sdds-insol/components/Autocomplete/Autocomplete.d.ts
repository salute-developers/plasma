/// <reference types="react" />
export declare const Autocomplete: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
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
}> & import("@salutejs/plasma-new-hope/types/components/Autocomplete/Autocomplete.types").BaseProps & Omit<import("@salutejs/plasma-new-hope/types/components/TextField/TextField.types").TextFieldPropsBase, "required" | "requiredPlacement" | "optional" | "chips" | "onChangeChips" | "enumerationType"> & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "size" | "required"> & import("react").RefAttributes<HTMLInputElement>>;
