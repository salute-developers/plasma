/// <reference types="react" />
/**
 * Компонент элемента Dropdown.
 */
export declare const DropdownItem: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<import("@salutejs/plasma-new-hope/types/engines/types").Variants> & Omit<import("react").HTMLAttributes<HTMLDivElement>, "onSelect"> & {
    id?: string | undefined;
    disabled?: boolean | undefined;
    label?: import("react").ReactNode;
    role?: string | undefined;
    contentLeft?: string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponent<any> | import("react").ReactFragment | import("react").ReactPortal | import("react").ComponentClass<any, any> | null | undefined;
    contentRight?: string | number | boolean | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponent<any> | import("react").ReactFragment | import("react").ReactPortal | import("react").ComponentClass<any, any> | null | undefined;
    name?: string | undefined;
    checked?: boolean | undefined;
    text?: string | undefined;
    value?: string | number | boolean | undefined;
    isSelected?: boolean | undefined;
    onClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    onSelect?: ((value?: any, text?: any) => void) | undefined;
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
