import { ComponentProps } from 'react';
declare const RadioboxComponent: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    size: {
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        secondary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        tertiary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        paragraph: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        accent: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    focused: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("@salutejs/plasma-new-hope/types/engines/types").Filter<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size"> & Omit<import("@salutejs/plasma-new-hope/styled-components").BaseboxProps, "indeterminate"> & import("react").RefAttributes<HTMLInputElement>>;
export declare type RadioboxProps = ComponentProps<typeof RadioboxComponent>;
/**
 * Переключатель, или *радиокнопка*.
 */
export declare const Radiobox: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    size: {
        s: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        secondary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        tertiary: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        paragraph: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        accent: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        positive: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        warning: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        negative: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    disabled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    focused: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("@salutejs/plasma-new-hope/types/engines/types").Filter<import("@salutejs/plasma-new-hope/types/types").InputHTMLAttributes<HTMLInputElement>, "size"> & Omit<import("@salutejs/plasma-new-hope/styled-components").BaseboxProps, "indeterminate"> & import("react").RefAttributes<HTMLInputElement>>;
export { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';
