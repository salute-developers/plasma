/// <reference types="react" />
/**
 * Компонент элемента Dropdown.
 */
export declare const DropdownItem: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<import("@salutejs/plasma-new-hope/types/engines/types").Variants> & import("react").HTMLAttributes<HTMLDivElement> & {
    id?: string | undefined;
    disabled?: boolean | undefined;
    label?: import("react").ReactNode;
    role?: string | undefined;
    contentLeft?: import("react").ElementType<any> | undefined;
    contentRight?: import("react").ElementType<any> | undefined;
    name?: string | undefined;
    checked?: boolean | undefined;
    text?: string | undefined;
    value?: string | number | boolean | undefined;
    isSelected?: boolean | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onSelect?: (() => void) | undefined;
    size?: string | undefined;
    view?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * Компонент Dropdown.
 */
export declare const Dropdown: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    size: {
        xs: string;
        s: string;
        m: string;
        l: string;
    };
    view: {
        primary: string;
    };
}> & import("react").HTMLAttributes<HTMLDivElement> & import("@salutejs/plasma-new-hope/types/components/Dropdown/Dropdown.types").CustomDropdownProps & import("react").RefAttributes<HTMLDivElement>>;
