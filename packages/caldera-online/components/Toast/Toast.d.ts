/// <reference types="react" />
export { useToast } from '@salutejs/plasma-new-hope/styled-components';
export declare const Toast: import("react").FunctionComponent<import("@salutejs/plasma-new-hope/types/engines/types").PropsType<{
    view: {
        primary: string;
        dark: string;
        light: string;
    };
    size: {
        m: string;
    };
    pilled: {
        true: string;
    };
}> & import("react").HTMLAttributes<HTMLButtonElement> & import("@salutejs/plasma-new-hope/types/components/Toast/Toast.types").CustomToastProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ToastController: (props: import("@salutejs/plasma-new-hope/types/components/Toast/Toast.types").ToastControllerProps) => JSX.Element | null;
export declare const ToastProvider: ({ children }: {
    children: import("react").ReactNode;
}) => JSX.Element;
