/// <reference types="react" />
/**
 * Компонент Drawer.
 */
export declare const Drawer: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    borderRadius: {
        none: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("@salutejs/plasma-new-hope/styled-components").PopupProps & import("@salutejs/plasma-new-hope/types/components/Panel").PanelProps & {
    placement?: "top" | "bottom" | "right" | "left" | undefined;
    asModal?: boolean | undefined;
    withBlur?: boolean | undefined;
    closeOnEsc?: boolean | undefined;
    closeOnOverlayClick?: boolean | undefined;
    onEscKeyDown?: ((event: KeyboardEvent) => void) | undefined;
    onOverlayClick?: ((event: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    initialFocusRef?: import("react").RefObject<HTMLElement> | undefined;
    focusAfterRef?: import("react").RefObject<HTMLElement> | undefined;
    onClose?: (() => void) | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * Компонент части контента Drawer.
 */
export declare const DrawerContent: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<import("@salutejs/plasma-new-hope/types/engines/types").Variants> & {
    view?: string | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
/**
 * Компонент верхней части Drawer.
 */
export declare const DrawerHeader: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<import("@salutejs/plasma-new-hope/types/engines/types").Variants> & {
    hasClose?: boolean | undefined;
    closePlacement?: "right" | "left" | undefined;
    actions?: import("react").ReactNode;
    onClose?: (() => void) | undefined;
    view?: string | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
/**
 * Компонент нижней контента Drawer.
 */
export declare const DrawerFooter: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<import("@salutejs/plasma-new-hope/types/engines/types").Variants> & {
    view?: string | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
