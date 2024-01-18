/// <reference types="react" />
declare const RadioboxComponent: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
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
}> & import("@salutejs/plasma-new-hope/types/engines/types").Filter<import("@salutejs/plasma-core").InputHTMLAttributes<HTMLInputElement>, "size"> & Omit<import("@salutejs/plasma-new-hope/styled-components").BaseboxProps, "indeterminate"> & import("react").RefAttributes<HTMLInputElement>>;
export declare type RadioboxProps = typeof RadioboxComponent;
/**
 * Переключатель, или *радиокнопка*.
 */
export declare const Radiobox: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
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
}> & import("@salutejs/plasma-new-hope/types/engines/types").Filter<import("@salutejs/plasma-core").InputHTMLAttributes<HTMLInputElement>, "size"> & Omit<import("@salutejs/plasma-new-hope/styled-components").BaseboxProps, "indeterminate"> & import("react").RefAttributes<HTMLInputElement>>;
export { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';
