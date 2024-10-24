/// <reference types="react" />
export { useToast } from '@salutejs/plasma-new-hope/styled-components';
export declare const Toast: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        default: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        dark: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
        light: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    size: {
        m: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
    pilled: {
        true: import("@salutejs/plasma-new-hope/types/engines/types").PolymorphicClassName;
    };
}> & import("react").HTMLAttributes<HTMLButtonElement> & import("@salutejs/plasma-new-hope/types/components/Toast/Toast.types").CustomToastProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ToastController: (props: import("@salutejs/plasma-new-hope/types/components/Toast/Toast.types").ToastControllerProps) => JSX.Element | null;
export declare const ToastProvider: ({ children }: {
    children: import("react").ReactNode;
}) => JSX.Element;
