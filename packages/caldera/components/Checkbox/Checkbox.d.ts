/// <reference types="react" />
declare const CheckboxComponent: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    size: {
        s: string;
        m: string;
    };
    view: {
        primary: string;
        secondary: string;
        tertiary: string;
        paragraph: string;
        accent: string;
        positive: string;
        warning: string;
        negative: string;
    };
    disabled: {
        true: string;
    };
    focused: {
        true: string;
    };
}> & import("@salutejs/plasma-new-hope/types/engines/types").Filter<import("@salutejs/plasma-core").InputHTMLAttributes<HTMLInputElement>, "size"> & import("@salutejs/plasma-new-hope/styled-components").BaseboxProps & import("react").RefAttributes<HTMLInputElement>>;
export declare type CheckboxProps = typeof CheckboxComponent;
/**
 * Флажок или чекбокс. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
export declare const Checkbox: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    size: {
        s: string;
        m: string;
    };
    view: {
        primary: string;
        secondary: string;
        tertiary: string;
        paragraph: string;
        accent: string;
        positive: string;
        warning: string;
        negative: string;
    };
    disabled: {
        true: string;
    };
    focused: {
        true: string;
    };
}> & import("@salutejs/plasma-new-hope/types/engines/types").Filter<import("@salutejs/plasma-core").InputHTMLAttributes<HTMLInputElement>, "size"> & import("@salutejs/plasma-new-hope/styled-components").BaseboxProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
